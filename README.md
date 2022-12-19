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
https://placement-app-production.up.railway.app/

# Steps to set project locally[Windows]
- Go to terminal. Run below command:
     git clone https://github.com/anandkumarmca6/placement-app.git
-  cd placement-app
- npm install
- npm start
 # Your project is set up .
 # You can use Postman to check all routes
 # API Routes 
-	/questions/create  (To create a question)
-	/questions/:id/options/create  (To add options to a specific question)
-	/questions/:id/delete (To delete a question)
-	/options/:id/delete (To delete an option)
-	/options/:id/add_vote (To increment the count of votes)
-	/questions/:id (To view a question and it’s options)

