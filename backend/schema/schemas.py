def individual_user(user) -> dict:
    return {
        "id": str(user["_id"]),
        "name": str(user["name"]),
        "age": str(user["age"]),
        "gender": str(user["gender"]),
        "interest": list(user["interest"]),
        "skill": list(user["skill"]),
        "password": str(user["password"])
    }

def list_users(users) -> list:
    return [individual_user(user) for user in users]