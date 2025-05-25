# Inventory App
### Dependencies
Postgres | Express.js | express-validator | Embedded JS
``npm install pg express express-validator ejs``

### Goals
Build a CRUD/ Inventory app implementing backend concepts learned so far Using Express and PostgreSQL.
It will contain categories.
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
  - product id (foreign key)
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
    if not logged in able to view but not update or delete.

  #### '/categories'
    GET display all categories --> potentially generic photo of each one.
    POST create new category
    GET '/categories/:id 
    - individual category page
    PUT update category
    DELETE  delete category

  #### '/products'
    GET display all products and relevant info
    GET '/products/:id' displays a specific product
    POST '/products/:id' adds a specific product
    PUT updates individual product
    DELETE removes product.

  #### '/orders'
   GET displays all orders
   POST creates a new order
   GET '/order/:id' displays specific order
   PUT '/order/:id' updates order
   DELETE removes order