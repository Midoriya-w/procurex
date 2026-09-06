from enum import Enum

from pydantic import BaseModel


class UserRole(str, Enum):
    GOVERNMENT_OFFICER = "government_officer"
    STARTUP = "startup"
    EXPERT_VALIDATOR = "expert_validator"


class Token(BaseModel):
    access_token: str
    token_type: str


class UserResponse(BaseModel):
    username: str
    role: UserRole