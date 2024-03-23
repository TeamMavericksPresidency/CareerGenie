from fastapi import APIRouter

from models.user import User, Login
from config.database import collection_name
from schema.schemas import list_users
from bson import ObjectId

router = APIRouter()

UserName=""

#get request method
@router.get("/")
async def get_users():
    users = list_users(collection_name.find())
    return users

@router.post("/")
async def post_user(user: User):
    collection_name.insert_one(dict(user))

@router.post("/signup")
async def signup(user: User):
    collection_name.insert_one(dict(user))
    return "registered successfully"

@router.get("/login")
async def login(user: Login):
    return collection_name.find(user)


