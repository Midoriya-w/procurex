from fastapi import APIRouter, Depends

from app.core.security import require_role
from app.schemas.auth import UserRole

router = APIRouter(
    prefix="/dashboard",
    tags=["Role Access"],
)


@router.get("/government")
def government_dashboard(
    current_user: dict = Depends(
        require_role(UserRole.GOVERNMENT_OFFICER)
    ),
):
    return {
        "message": "Government dashboard access granted",
        "user": current_user["username"],
        "role": current_user["role"],
    }


@router.get("/startup")
def startup_dashboard(
    current_user: dict = Depends(
        require_role(UserRole.STARTUP)
    ),
):
    return {
        "message": "Startup dashboard access granted",
        "user": current_user["username"],
        "role": current_user["role"],
    }


@router.get("/expert")
def expert_dashboard(
    current_user: dict = Depends(
        require_role(UserRole.EXPERT_VALIDATOR)
    ),
):
    return {
        "message": "Expert dashboard access granted",
        "user": current_user["username"],
        "role": current_user["role"],
    }