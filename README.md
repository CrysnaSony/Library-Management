# Library-Management

A MERN stack application for reading books/magazines from csv file



### API Endpoints

List of available routes:

**Books routes**:\
`POST /books` - create a book\

```json
{
    "title": "New Book",
    "isbn": "5554-5545-4000",
    "authors": "null-walter@echocat.org",
    "description": "Auf der Suche nach einem Basiskochbuch steht man heutzutage vor einer Fülle von Alternativen. Es fällt schwer, daraus die für sich passende Mixtur aus Grundlagenwerk und Rezeptesammlung zu finden. Man sollte sich darüber im Klaren sein, welchen Schwerpunkt man setzen möchte oder von welchen Koch- und Backkenntnissen man bereits ausgehen kann."
}
```

`GET /books` - get all books\
`GET /books/:isbn` - get book by ISBN\
`GET /books/author/:mailId` - get books by Author's mail\

**Magazines routes**:\
`POST /magazines` - create a magazine\

```json
{
    "title": "New Magazine",
    "isbn": "5454-5587-5000",
    "authors": "null-walter@echocat.org",
    "publishedAt": "21.05.2011"
}
```

`GET /magazines` - get all magazines\
`GET /magazines/:isbn` - get magazine by ISBN\
`GET /magazines/author/:mailId` - get magazines by Author's mail\


**Both Books & Magazine routes**:\

`GET /common` - get all magazines & books\
`GET /common/sortbyTitle` - get all magazines & books with sort by Title\
