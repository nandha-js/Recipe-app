                                           🍽️ Recipes CRUD API

A complete **CRUD (Create, Read, Update, Delete) API** for managing recipes, built with **Node.js, Express.js, and Mongoose** following the MVC pattern.

---

## 🚀 **Features**

- Create a new recipe
- Retrieve all recipes
- Retrieve a recipe by ID
- Update a recipe by ID
- Delete a recipe by ID
- Proper error handling and validation
- MongoDB integration with Mongoose
- Structured MVC folder architecture

---

## 🛠️ **Tech Stack**

- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Testing & Documentation:** Postman

---

## 📁 **Project Structure**

Recipe-app/
├── config/
│ └── db.js
├── controllers/
│ └── recipeController.js
├── middleware/
│ └── error.js
├── models/
│ └── Recipe.js
├── routes/
│ └── recipeRoutes.js
├── app.js
├── .env
└── README.md   


The server will start at **http://localhost:5000** or **https://recipe-app-30og.onrender.com**

---

## 📬 **API Endpoints Documentation**

### ➡️ **Create a Recipe**

- **URL:** `/api/recipes`
- **Method:** POST
- **Body (JSON):**

```json
{
  "title": "Chicken Curry",
  "ingredients": ["Chicken", "Onion", "Tomato", "Spices"],
  "instructions": "Cook chicken with onion, tomato, and spices.",
  "cookingTime": 45,
  "difficulty": "Medium"
}

Success Response:

                {
                     "success": true,
                     "data": {
                     "_id": "60b8f9f8e1bdfc24b8d7d2e1",
                     "title": "Chicken Curry",
                     "ingredients": ["Chicken", "Onion", "Tomato", "Spices"],
                     "instructions": "Cook chicken with onion, tomato, and spices.",
                     "cookingTime": 45,
                     "difficulty": "Medium",
                     "createdAt": "2021-06-03T18:25:28.710Z",
                     "__v": 0
                              }
                }


➡️ Get All Recipes
URL: /api/recipes

Method: GET

Success Response: 

{
  "success": true,
  "count": 1,
  "data": [ ... ]
}

➡️ Get Recipe by ID
URL: /api/recipes/:id

Method: GET

Success Response:

{
  "success": true,
  "data": { ... }
}

➡️ Update Recipe
URL: /api/recipes/:id

Method: PUT

Body (JSON):

{
  "title": "Updated Chicken Curry",
  "ingredients": ["Chicken", "Onion", "Tomato", "Spices", "Coriander"],
  "instructions": "Cook chicken with onion, tomato, spices, and garnish with coriander.",
  "cookingTime": 50,
  "difficulty": "Medium"
}

Success Response:

{
  "success": true,
  "data": { ... }
}

➡️ Delete Recipe
URL: /api/recipes/:id

Method: DELETE

Success Response:

{
  "success": true,
  "message": "Recipe deleted successfully"
}


⚠️ Error Handling
All error responses follow this format:

{
  "success": false,
  "error": "Error message here"
}


 