

# Installing and running the Landchain 

Prerequisites:

•	NPM

•	Mongo database

•	React.js

•	Solidity

•	Web3.js

•	Hardhat

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
| GET/Listing?postalCode=x&minPrice=x&maxPrice=x&fromDate=x&toDate=x | Get Listing by address, price, posted date  | 
| POST/Listing | Add New Listing  | 
| GET/Property/Id | Get Specific Property  | 
| GET/Property?postalCode=xx&address=xx&count=xx | Get Properties by address, postalCode | 
| POST/Property | Add New Property  | 



# Hardhat

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
