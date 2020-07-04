# Backend
fork the project

run **npm install** through command line(command line must be pointing to the folder)

run mongoose server first ,EX : **mongod.exe --dbpath="your_db_storage_path_location"**( again through command line and it must to pointing to db location)

run **node src/index.js** (command line must to ponting to backend folder)

    
# Steps to run the project:

1: Download/Fork the Project

2: Install Dependencies i.e Navigate to the folder through cmd/terminal and type npm install                       
Note(you must have installed node in your computer. To check if you have node installed in your system or not
type command node -v. If error occurs ,Please Install Node first (https://nodejs.org/en/) )

3:run mongoose server first ,EX : **mongod.exe --dbpath="your_db_storage_path_location"**( again through command line and it must to pointing to db location)

4: Run node src/index.js or npm start

**Please use postman to access these endpoints as of now, I will update the project to use sessions/localstorage for broswer viewed Endpoints in near future. So, again if you don't have postman installed : https://www.postman.com/downloads/**

# API Endpoints
1: **To create user**

@params : name(required),phone_no(required),password(required),mail(optional)
                      
    url : localhost:3000/users/register
    
    Format : {
                "name":"saksham",
                "mail":"saksham@gmail.com",
                "phoneNo":"1234567899",
                "password":"123456"
              }  

2: **To login**

@params : mail(required),password(required)

    url : localhost:3000/users/signin

3: **To View your profile**

@params : auth_token(required)

    url : localhost:3000/users/me

4: **To Find other users**

@params : auth_token(required), mail/phone_no (required)

    url : localhost:3000/users/find?mail=... or localhost:3000/users/find?phone_no=...

5: **To update your profile**

@params : auth_token(required),field to update (name/mail/password/contact_list)

    url : localhost:3000/users/me/update


7: **To Logout**

@params : auth_token(required)

    url : localhost:3000/users/logout

8: **To delete the user**

@params : auth_token(required)

    url : localhost:3000/users/delete  


# Messages Route

1: **Post Message**

@params : auth_token(required)
     
     url: localhost:3000/messages/message
     
     Format : {
                "message":"Hi My name is saksham",
                "receiverNo":"1234567899",
              }  1: **Post Message**

2: **Delete Message**
@params : auth_token(required),message_id(required)
     
     url: localhost:3000/messages/delete
     
     Format : {
                "messageId":'ihvy72ryoimv0i"
              }  
              
