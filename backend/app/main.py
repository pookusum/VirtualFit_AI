
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router


# Create FastAPI application FIRST
app = FastAPI(
    title="VirtualFit AI API",
    description="Backend API for the VirtualFit AI virtual try-on platform.",
    version="1.0.0",
)


# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register API routes AFTER creating app
app.include_router(auth_router)


# Public welcome endpoint
@app.get("/")
async def root():
    return {
        "message": "Welcome to VirtualFit AI Backend"
    }


# Public health endpoint
@app.get("/health")
async def health_check():
    return {
        "status": "healthy",
        "service": "VirtualFit AI Backend"
    }
