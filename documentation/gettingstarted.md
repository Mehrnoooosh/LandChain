

# Installing and running the Landchain 

Prerequisites:

•	Node.js

•	NPM

•	Express.js

•	Mongo database

•	React.js

•	Solidity

•	Web3.js

Clone the repository to your local machine, move to the ClientSide folder, run npm install
git clone https://github.com/Mehrnoooosh/LandChain.git

cd ClientSide
npm install
npm start
REST API Calls

| REST Call Endpoint | Description |
|------|-----|
| GET /	 | Check to see if the server is running - HealthCheck  | 
| GET/Admin | Get all Admins  | 
| GET/Admin/Id | Get Specific Admin  | 
| POST/Admin | Add New Admin  | 
| GET/Realtor | Get all Realtors  | 
| GET/Realtor/Id | Get Specific Realtor  | 
| POST/Realtor | Add New Realtor  | 
| GET/Listing/Id | Get Specific Listing  | 
| GET/Listing?postalCode=xx&priceFrom=xx&priceTo=xx&dateFrom=x&dateTo=x&count=x | Get Listing by address, price, posted date  | 
| POST/Listing | Add New Listing  | 
| GET/Property/Id | Get Specific Property  | 
| GET/Property?postalCode=xx&address=xx&count=xx | Get Properties by address, postalCode | 
| POST/Property | Add New Property  | 

