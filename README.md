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
users -> for the purpose of this app, only users can make create, update or delete.

### Database Tables
Since this will be for bookss the tables will be: 
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

##### users:
  - user_id (primary key)
  - username
  - email

### API endpoints

  #### '/' Homepage
    display generic login
    create new user from homepage.
    if not logged in able to view but not update or delete.

  #### '/genres'
    GET display all genres --> potentially generic photo of each one.
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
      - name
      - description
      - price
      - genre
      - quantity-in-order
      - SKU
    GET '/books/:id' displays a specific book
    POST '/books/:id updates individual book
    DELETE removes book.
  
  #### '/users'
    GET displays all users
      default : admin
    POST creates new user
      name, email, username, user-privileges, account-creation-date, order-history
    POST '/users/:id' updates user
    GET '/users/:id' gets user info
    DELETE removes user

### UI/UX Flow
 
  Login --- CreateUser   
    |____________|  
                 |  
              Homepage  
                 |  
    _____________|______
    |       |          |  
genres -- books -- UserInfo  

- #### login page with login form and create user button 
  - create user button redirects to '/' Homepage
    - basic form to create user containing:
      - Name, password, username ,email, dob, address, phone
  - login section : username or email , password login button.
    - successful login redirects to homepage
- #### Home page 
  - displays clickable sections for books, Orders, genres and Update User
- #### genres redirects to '/genres' page
  - displays all individual genres
    - add new genre button
    - selecting a genre:
      - displays books *in* that genre
        - each book can be clicked to be redirected to that book page. 
      - __if logged in__, settings to update genre
- #### books redirects to '/books'
  - displays all books regardless of genre ( make filterable?)
  - selecting book:
    - displays book info
    - __if logged in__, settings to update book info.
- #### Users redirects to '/users'
  - if admin:
    - CRUD capabilities on all users
  - if user:
    - CRUD capabilities on only their own info

### Don't Forget to use:
- validation
- middleware