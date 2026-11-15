from fastapi import APIRouter, Depends

from app.utils.auth import get_current_user

router = APIRouter(
    prefix="/api/v1/auth",
    tags=["Authentication"],
)


@router.get("/me")
async def get_my_profile(
    user: dict = Depends(get_current_user),
):
    return {
        "message": "Authentication successful!",
        "user": {
            "id": user["id"],
            "email": user.get("email"),
        },
    }