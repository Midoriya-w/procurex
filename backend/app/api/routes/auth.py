from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm

from app.core.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.schemas.auth import Token, UserRole

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


# Temporary demo users.
# These will be replaced by database users in Task 4.
users = {
    "government_demo": {
        "username": "government_demo",
        "password": hash_password("password123"),
        "role": UserRole.GOVERNMENT_OFFICER,
    },
    "startup_demo": {
        "username": "startup_demo",
        "password": hash_password("password123"),
        "role": UserRole.STARTUP,
    },
    "expert_demo": {
        "username": "expert_demo",
        "password": hash_password("password123"),
        "role": UserRole.EXPERT_VALIDATOR,
    },
}


@router.post("/login", response_model=Token)
def login(
    form_data: OAuth2PasswordRequestForm = Depends(),
):
    user = users.get(form_data.username)

    if not user or not verify_password(
        form_data.password,
        user["password"],
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid username or password",
        )

    token = create_access_token(
        {
            "sub": user["username"],
            "role": user["role"].value,
        }
    )

    return {
        "access_token": token,
        "token_type": "bearer",
    }