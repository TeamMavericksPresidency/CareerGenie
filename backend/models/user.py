from pydantic import BaseModel

class User(BaseModel):
    name: str
    age: int
    gender: str
    interest: list
    skill: list
    password: str

class Login(BaseModel):
    name: str
    password: str