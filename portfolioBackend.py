from fastapi import FastAPI

app = FastAPI()

from pydantic import BaseModel  #Base class for any class whose objects are used as input to a http request

from fastapi.middleware.cors import CORSMiddleware

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

messages = {}

@app.get('/messages')
async def root():
    return messages

class Item(BaseModel):
    name: str
    message: str

class Name(BaseModel):
    name: str

@app.post('/add')
async def add_item(item: Item):
    messages[item.name] = item.message
    return {'message': 'success'}

@app.delete('/remove')
async def remove_item(name: Name):
    messages.pop(name.name)
    return {'message': 'success'}