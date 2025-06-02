# Inventory App
### Dependencies
Postgres | Express.js | express-validator | Embedded JS

### Goals
Build a CRUD/ Inventory app implementing backend concepts learned so far Using Express and PostgreSQL.
It will contain categories, items, users and orders.
Categories will be viewed from the home page
Selected categories will list every item in that category and other relevant info (price, quantity perhaps nutritional info)
Both items and categories will have CRUD methods.

### Database Tables
Since this will be for groceries the tables will be: 
##### products:  
  - product id (primary key)
  - product name 
  - quantity
  - description
  - price
  - category id (foreign key) 
##### categories:
  - category id (primary key)
  - category name (varchar, unique)
  - description (text,  nullable)
  - image_url
##### orders:
  - order_id (primary key)
  - order date
  - order type (purchase, sales)
  - user_id (foreign key)
  - order status (pending , complete, processing, cancelled (optional) )
  - total amount
  - notes
##### order_items
  - order_item_id (primary key)
  - order_id (foreign key)
  - product_id (foreign key)
  - quantity
  - price
  - subtotal
##### users:
  - user_id (primary key)
  - username
  - email
  - password_hash
  - role
  - date_registered

### API endpoints

  #### '/' Homepage
    display generic login
    create new user from homepage.
    if not logged in able to view but not update or delete.

  #### '/categories'
    GET display all categories --> potentially generic photo of each one.
    POST create new category
      - name
      - description
    GET '/categories/:id' 
    - individual category page
    POST '/categories/:id' update category
    DELETE  delete category

  #### '/products'
    GET display all products and relevant info
    POST '/products/' adds a product
      - name
      - description
      - price
      - category
      - quantity-in-order
      - SKU
    GET '/products/:id' displays a specific product
    POST '/products/:id updates individual product
    DELETE removes product.

  #### '/orders'
   GET displays all orders
   POST creates a new order
    - items in the order (with price)
    - subtotal of order
    - user who placed the order(name, address)
    - order number,  
   GET '/order/:id' displays specific order
   POST '/order/:id' updates order
   DELETE removes order
  
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
    _____________|______________________  
    |            |          |          |  
Categories -- Products -- Orders -- UserInfo  


- #### login page with login form and create user button 
  - create user button redirects to '/' Homepage
    - basic form to create user containing:
      - Name, password, username ,email, dob, address, phone
  - login section : username or email , password login button.
    - successful login redirects to homepage
- #### Home page 
  - displays clickable sections for Products, Orders, Categories and Update User
- #### Categories redirects to '/categories' page
  - displays all individual categories
    - add new category button
    - selecting a category:
      - displays products *in* that category
        - each product can be clicked to be redirected to that product page. 
      - __if logged in__, settings to update category
- #### Products redirects to '/products'
  - displays all products regardless of category ( make filterable?)
  - selecting product:
    - displays product info
    - __if logged in__, settings to update product info.
- #### Orders redirects to '/orders'
    - displays all orders
  - if admin : 
    - able to edit orders (order status,set/remove order-items, delete order)
- #### Users redirects to '/users'
  - if admin:
    - CRUD capabilities on all users
  - if user:
    - CRUD capabilities on only their own info

### Don't Forget to use:
- validation
- middleware