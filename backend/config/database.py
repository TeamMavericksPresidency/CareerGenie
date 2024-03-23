from pymongo import MongoClient

client = MongoClient("mongodb+srv://admin:saki7satvik@cluster0.pqtzyit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

db = client.career_db

collection_name = db["user_collection"]