import json
from fastapi import FastAPI
from mangum import Mangum

app = FastAPI()
handler = Mangum(app)

@app.get("/tfy/")
def get_root():
    return {"message": "Hello World!"}


@app.get("/tfy/query")
def get_root():
    return {"message": "A simple message"}
