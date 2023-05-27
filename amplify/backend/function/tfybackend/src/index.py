import json
from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)

@app.get("/")
def get_root():
    return {"message": "Hello World!"}


@app.get("/query")
def get_root():
    return {"message": "A simple message"}
