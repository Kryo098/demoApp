from fastapi import FastAPI
from datetime import datetime

app = FastAPI()


@app.get("/day")
async def get_day():
    return {"day": datetime.now().day}
