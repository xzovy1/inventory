# Inventory App
### Dependencies
Postgres | Express.js | express-validator | Embedded JS

### Goals
Build a CRUD/ Inventory app implementing backend concepts learned so far Using Express and PostgreSQL.
It will contain genres, items and users 
genres will be viewed from the home page
Selected genres will list every item in that genre and other relevant info (price, quantity)
Both items and genres will have CRUD methods.

genres -> many-to-one relationship. 
  - one genre can have many items.
books -> one-to-one
  - one book can be in one genre.

### Database Tables
Since this will be for books the tables will be: 
##### books:  
  - book id (primary key)
  - title 
  - author
  - quantity
  - description
  - price
  - genre id (foreign key) 

##### genres:  
  - genre id (primary key)
  - name
  - description

### API endpoints

  #### '/' Homepage
    display generic login
    create new user from homepage.
    if not logged in able to view but not update or delete.

  #### '/genres'
    GET display all genres
    POST create new genre
      - name
      - description
    GET '/genres/:id' 
    - individual genre page
    POST '/genres/:id' update genre
    DELETE  delete genre

  #### '/books'
    GET display all books and relevant info
    POST '/books' adds a book
    GET '/books/:id' displays a specific book
    POST '/books/:id updates individual book
    DELETE removes book.
  

### UI/UX Flow
 
  Login --- CreateUser   
    |____________|  
                 |  
              Homepage  
                 |  
    _____________|______
    |       |          |  
genres -- books -- UserInfo  

- #### Home page 
  - displays clickable sections for books, Orders, genres and Update User
- #### genres redirects to '/genres' page
  - displays all individual genres
    - add new genre button
    - selecting a genre:
      - displays books *in* that genre
        - each book can be clicked to be redirected to that book page. 
- #### books redirects to '/books'
  - displays all books regardless of genre ( make filterable?)
  - selecting book:
    - displays book info

### Don't Forget to use:
- validation
- middleware