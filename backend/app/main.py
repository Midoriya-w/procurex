from fastapi import FastAPI

from app.api.routes.auth import router as auth_router
from app.api.routes.roles import router as roles_router

app = FastAPI(
    title="ProcureX API",
    description="Backend API for the ProcureX public procurement platform",
    version="0.2.0",
)

app.include_router(auth_router)
app.include_router(roles_router)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "procurex-backend",
        "version": "0.2.0",
    }