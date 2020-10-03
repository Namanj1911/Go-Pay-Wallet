A Spot Forex Wallet Transaction application that works on Angular as front-end and SpringBoot as back-end.
The problem statement to this application is as such -
Design a payment wallet platform which allows users to apply for Spot Cash in Forex of their choice of 
location for purchase / payments for certain local services such as Medicines, Fashion and Education.
You can include other offers bundled services easily available and enable rewards for every payment. 


#Refer to the application.yml files of all services for the database and port information

Information Regarding the services and their functions.

1. UserAuthenticationService- Port no. 9100
2. UserService- Port no. 9200
3. TransactionService- Port no. 9005
4. BankService- Port no. 9000
5. Netflix Eureka Naming Server - 8761 
6. Netflix Zuul API Gateway Server- 8765 

Functions with urls -- The below API links are without using the Netflix eureka and zuul servers.
If Netflix and eureka are run then `http://localhost:8765/{service-name registered in eureka}/api/v1/....` --> URL should be used.
The eureka registers the services and runs everything via zuul gateway servers running at port 8765



 You should set following properties for Microservices
 application.properties for all Services except Eureka server 


  spring.application.name= {{name of the application }}

  server.port=  {{port number suggested above}}

  eureka.client.service-url.default-zone=http://localhost:8761/eureka
=========================

1. UserAuthenticationService- Port no. 8089
   a. Register a user- http://localhost:8089/api/v1/auth/register
   b. Login- http://localhost:8089/api/v1/auth/login

2. UserService- Port no. 8085
   a. Save a user- http://localhost:8085/api/v1/user
      POST Mapping
   b. Update user- http://localhost:8085/api/v1/user/update/{id}
      PUT Mapping
   c. Delete user- http://localhost:8085/api/v1/user/delete/{id}
   d. Get User- http://localhost:8085/api/v1/user/{id}
   e. Get wallet balance- http://localhost:8085/api/v1/user/balance/{id}
   f. Get all users- http://localhost:8085/api/v1/user/all
   
3. TransactionService- Port no. 8087
   a. Save Transaction- http://localhost:8087/api/v1/transaction
   b. Get by id- http://localhost:8087/api/v1/transaction/{id}
   c. Get all- http://localhost:8087/api/v1/transaction/all