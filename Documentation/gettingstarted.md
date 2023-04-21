
Installing and running the Landchain 
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
REST Call Endpoint	| Description
|------|-----|--------|
GET /	| Check to see if the parser is running.
GET /template	| Returns a list of all of the templates in the Mongo database in the format
[ { "name": "Test Template", "id": "6386735ed993e93ebfd30940" } ]
POST /template/create	| Adds a new template and returns the ID for the new template. Templates are specified using a JSON format like:
{
"name": "test",
"roles": [
"roleName": "Admin",
"roleId": "1000"
],
"machines": [
{}
]
}
GET /template/:id |	This returns the template JSON data for the ID you put in the address
PUT /template/:id	| This updates a template based on the ID in the address bar and the JSON in the body. Uses same format as create. Do not put the templateId (_id) in the JSON in the body.
GET /parse	| Returns a list of all instances in the format:
[ { "name": "test10", "id": "638cf9316fb0f1cace225b40", "state": "100" }, { "name": "Voting on things", "id": "638fb22c2ba472bd8497c9aa", "state": "100" } ]
POST /parse/create	| Creates a new instance of a template and returns the display objects. Input:
{
"name": "test",
"templateId": "6386735ed993e93ebfd30940",
"userId": "1234",
"roleId": "1000"
}
Returns:
{ "message": "Instance has been created successfully", "display": { "instanceId": "639b678c7b6ec51f84366a30", "displayData": [ { "displayType": "Title", "displayContent": "Admin opening page", "actionId": "0" }, { "displayType": "text", "displayContent": "You can open this up for the users.", "actionId": "0" }, { "displayType": "image", "displayContent": "https://upload.wikimedia.org/wikipedia/commons/6/6e/Golde33443.jpg", "actionId": "0" }, { "displayType": "button", "displayContent": "Open page", "actionId": "105" } ] } }
POST /parse/use	| Use a current instance with optional action and get the display objects. Input:
{
"instanceId": "639b678c7b6ec51f84366a30",
"actionId": "105",
"data": "",
"roleId": "1000"
}
returns:
{ "message": "Instance has been processed successfully", "display": { "instanceId": "639b678c7b6ec51f84366a30", "displayData": [ { "displayType": "Title", "displayContent": "Admin open page", "actionId": "0" }, { "displayType": "text", "displayContent": "Wait for user to close the page", "actionId": "0" } ] } }


