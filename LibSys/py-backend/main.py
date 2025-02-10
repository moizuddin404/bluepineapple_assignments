from fastapi import FastAPI, HTTPException, Request, Response, status
from fastapi.middleware.cors import CORSMiddleware 
from fastapi.responses import JSONResponse
from pydantic import BaseModel
import json

app = FastAPI()
libraryPath = "F:/LibSys/backend/library.json"

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Book(BaseModel):
    bookName: str
    bookAuthor: str
    url: str

class BookDelete(BaseModel):
    bookName: str

def loadBooks():
   try:
       with open(libraryPath, "r", encoding="utf-8") as file:
             content = json.load(file)
             return content
   except FileNotFoundError:
       return "File not found"

@app.get("/books")
def read_root():
    content = loadBooks()
    return JSONResponse(content=content)


@app.post("/add-book")
def addBook(book: Book):
    books = loadBooks()
    bookId = books[-1]["bookId"]+1 if books else 1

    newBook = {"bookId": bookId, "bookName": book.bookName, "bookAuthor": book.bookAuthor, "url": book.url}
    books.append(newBook)

    with open(libraryPath, "w", encoding="utf-8") as file:
        json.dump(books, file, indent=2)

    return {"message":"Book Added successfully"}

@app.delete("/deletebook")
def deleteBook(book: BookDelete):
    books = loadBooks()

    updatedBooks = [b for b in books if b["bookName"]!= book.bookName]

    if len(updatedBooks) == len(books):
        raise HTTPException(status_code=404, detail="Book Not found")
    
    with open(libraryPath, "w", encoding="utf-8") as file:
        json.dump(updatedBooks, file, indent=2)

    return {"message":"Book Deleted!"}