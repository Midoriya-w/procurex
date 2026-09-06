from fastapi import FastAPI

app = FastAPI(
    title="ProcureX API",
    description="Backend API for the ProcureX public procurement platform",
    version="0.1.0",
)


@app.get("/health")
def health_check():
    return {
        "status": "healthy",
        "service": "procurex-backend",
        "version": "0.1.0",
    }