# polling-api
Polling System API
# Overview
You need to create an API where anyone can create questions with options and also add votes to it
# Functionalties
-	Create a question
-	Add options to a question
-	Add a vote to an option of question
-	Delete a question 
-	Delete an option 
-	View a question with it’s options and all the votes given to it
-    View all questions along with it's options

# Languages & Tools Used for development
- Nodejs
- Express
- Mongoose
- MongoDB
- Javascript
- Git
- MongoDB Compass
- Visual Studio Code
# Tools used for hosting
- Railway
- Git
# Live project Link
https://polling-api-production-0be6.up.railway.app

# Steps to set project locally[Windows]
- Go to terminal. Run below command:
     git clone https://github.com/anandkumarmca6/polling-api.git
-  cd polling-api
- npm install
- npm start
 # Your project is set up .
 # You can use Postman to check all routes
 # API Routes 
-	localhost:8000/api/v1/questions/create  (To create a question)
-	localhost:8000/api/v1/questions/question_id/options/create (To add options to a specific question)
-	localhost:8000/api/v1/questions/question_id/delete (To delete a question)
-	localhost:8000/api/v1/options/option_id/delete (To delete an option)
-	localhost:8000/api/v1/options/option_id/add_vote (To increment the count of votes)
-	localhost:8000/api/v1/questions/question_id (To view a question and it’s options)
-	localhost:8000/api/v1 (To view all questions and it’s options)

