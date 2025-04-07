# OnlyDevs

A web application built with Node.js, Express, and MongoDB.

## Features

- User authentication using JWT
- MongoDB integration via Mongoose
- RESTful API structure
- Environment-based configuration

## Getting Started

### Prerequisites

- Node.js
- MongoDB Atlas account

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Drashtam/onlydevs.git
cd onlydevs

2. Install dependencies
npm install

3.Create a .env file in the root directory and add the following:
PORT=5000
MONGO_URI="mongodb+srv://admin:admin123@cluster0.3dyok.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
JWT_SECRET="fbf83330c6bc84d96b41af2764eb342cadd2563e60749384ae2a8cba01fc529892b2814c0ccf8c801623768702cd704923bab62eb4337c964b5fc1603b376d16"

4. Start the server
 npm start
    or
 npm run dev

5.Project Structure
onlydevs/
├── models/
├── routes/
├── controllers/
├── .env
├── .gitignore
├── package.json
└── server.js

License

MIT

---

You can copy this directly into your `README.md` file.

Need me to generate the actual file for download or commit it directly into your local/project folder?


![Image](https://github.com/user-attachments/assets/78cc43f6-d872-42d2-af5f-f031782270e7)

#-Landing Page:
This Landing Page serves as the central hub for the IMS, providing access to all major
features for users, including authentication and inventory management tasks. It prominently
displays the Team OnlyDevs logo at the top, establishing our brand identity, and offers an
intuitive layout for users to log in, sign up, and interact with inventory data. The page is
designed to guide users seamlessly into the system’s core functionalities.

![Login](https://github.com/user-attachments/assets/1c7dd2ba-df6a-4da3-9fcd-e6c73087123f)

#- Login Section:
This page allows users to securely access the IMS by entering their credentials. It is the entry
point for all users, including admins and warehouse staff, ensuring that only authorized
individuals can manage inventory data.
Key UI Elements: -
- Username field: For entering the user’s email or username.
- Password field: For entering the user’s password.
- Login button: Submits the credentials for authentication.
- Sign Up link: Redirects to the registration page for new users.

![Sign Up](https://github.com/user-attachments/assets/4a47fb0c-7588-4740-a795-849fecb895ca)

#- Sign Up Section:
This page enables new users to register for the IMS by providing their details, creating an
account for secure access. It supports the authentication functionality by allowing admins and
warehouse staff to sign up before accessing inventory management features. The sign-up
page complements the Login Page, ensuring all users can securely enter the system.
Key UI Elements:
- Full Name field: For entering the user’s full name.
- Email field: For entering the user’s email address, which will be used as their username.
- Password field: For setting the user’s password.
- Sign Up button: Submits the registration details to create a new account.
- Login link: Redirects to the Login Page for existing users.

![Dashboard](https://github.com/user-attachments/assets/0f1fcb43-c1e0-4a18-a3b9-08dfd7dacaa4)

#- Dashboard Overview:
The Dashboard provides an overview of the inventory status for logged-in users. It displays
key metrics and quick access to inventory management features, serving as the central hub
for navigation.
Key UI Elements:
- Navigation bar: Links to Products, Orders, and Reports sections.
- Summary cards: Display metrics like total products or low-stock items.
- Graph: Visualizes inventory trends (e.g., stock levels over time).
- Quick action buttons: Links to add or view products.

![Product-Info](https://github.com/user-attachments/assets/43a66fae-7503-4a48-8f81-d94bc91dc934)

![Product](https://github.com/user-attachments/assets/e957a346-3b68-477e-b580-3bd46f66e040)

#- Product Info Section:
This page displays detailed information about a selected product in the IMS, supporting the
Read operation in CRUD. It allows users, such as admins and warehouse staff, to view
specific product details like price, SKU, and quantity, facilitating inventory oversight and
decision-making. The Product Info Page is accessible from the Product List Page, providing a
deeper look into individual inventory items.
Key UI Elements:
- Product Name: Displays the name of the selected product.
- SKU Field: Shows the product’s unique Stock Keeping Unit (SKU) identifier.
- Price Field: Indicates the product’s price.
- Quantity Field: Shows the current stock quantity.
- Back Button: Redirects the user to the Product List Page.

![AddProduct](https://github.com/user-attachments/assets/c17a5ead-cdc3-4250-a955-59dc756a7db3)

#- Add Product Form:
This page enables users to add new products to the inventory, supporting the Create operation
in CRUD. Users can input product details, which are then saved to the MongoDB database.
Key UI Elements:
- Product name field: For entering the product’s name.
- Quantity field: For specifying the stock quantity.
- Category dropdown: For selecting the product category.
- Submit button: Adds the product to the inventory.




