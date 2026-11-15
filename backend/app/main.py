from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.auth import router as auth_router

app.include_router(auth_router)
app = FastAPI(
    title="VirtualFit AI API",
    description="Backend API for the VirtualFit AI virtual try-on platform.",
    version="1.0.0",
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "Welcome to VirtualFit AI Backend"
    }


@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "VirtualFit AI Backend"
    }