
# LandChain: Decentralized Land Transactions

## Problem

Blockchain technology provides a reliable way to have immutable data. This is something important in various use-cases. One of them is in selling and buying lands, houses, condos and so on. The importance is noticeable in a couple of aspects. First, it leads to access to accurate data which everyone can see the same and it eliminates any discrimination. Second, because it’s not centralized, no one could modify it to provide manipulated data, the thing that is possible in a centralized system. This is a significant feature of blockchain which is tamper-proof.
It was a problem for many years in Ontario which just a specific group of people had access to history of a property so neither a buyer nor seller could not see the history or the history of similar properties to decide on a better buy or sell. Recently, it has changed, and a company could access the data and made it accessible for everyone. But the problem is not being solved completely and the data is still centralized. So, it has the potential to be manipulated and leads to misinformation.
Let’s assume a situation when someone decides to sell their house. Without the accessible and reliable data on recent sells in the neighborhood, it can be difficult to have a guess what would be a reasonable price for the house. It is the same as point of view of a buyer as well. Having the data can lead to a fair deal who both parties can be winners.
Now we go a step further, and not asking for the data itself, but we are looking for reliable data which no one can manipulate it either deliberately or on-purpose. And the answer to this problem is blockchain.

##Coding by stakeholders
One of the difficulties in software development is undertaking the exercise to build up the requirements and to verify that the code that has been developed matches those requirements. There is a translation required from the system stakeholders to the developers and then back again. Custom coding in a computer language requires a specific set of knowledge that most stakeholders do not have the time or desire to achieve. Changing a dataset in a template requires a lower barrier to entry to the stakeholders. The existing work in modeling business processes has provided visual interpretations of the processes that stakeholders can grasp. By providing a visual editor for the templates that matches existing UML-style process design, the stakeholders are now able to design their own templates and verify how they will operate. This greatly reduces the amount of developer time required and assures the stakeholders that the process they are receiving matches their requirements.

##Governance is dissociated from code changes
In a decentralized system, the parties involved with the system need to agree upon changes. They do this through a human governance process. Any changes need to be proposed, debated, modified, and accepted or rejected. At this point there is a disconnect. Most software development is done by individuals or teams. The software as a whole is what is presented back to the governance body for approval. The governance body approves and then it is back to an individual or a team to deploy the changes. The amount of overhead that this requires in coordination, individual organizations doing reviews and audits, and verifications that what was approved is what was posted makes this a slow and costly approach. The combination of data-driven state machines and a visual editor now gives the option of making the changes as part of the governance process. Proposed changes can be viewed in the editor, votes can take place to accept or reject, and the changes can be deployed using the multiple signatures of the governance body participants. This allows for changes that can happen as fast as the governance group can meet and approve them. It also provides an audit trail of changes and who authorized the changes, including the debates around the changes.

## Who runs the user interface?
This system needs to provide the users with a user interface. The very nature of a decentralized system means that you can't have one central application that runs the interface. But because the interface here is mostly for reporting on decentralized data, we can provide it independently.


##Solution
LandChain uses a mixed architecture to provide a platform for delivering immutable and reliable transaction history.
In this architecture, there are centralized and decentralized modules explaining here.
Centralized modules consist of config-level parts including:
-	Admins: Managing admins of the system who are responsible for adding general property info (like the address, construction year), adding realtors to the system and supervising the listings
-	Realtors: Managing the realtors of the system
-	Properties: Managing the properties declared in the system (The entire list can be fetched using APIs)
-	Listing: The realtors list properties for sale here
The modules mentioned above are config-level data which are not needed to be decentralized. More precisely, there is not much benefit to decentralized them regarding to the cost.
On the other hand, there is a hash info for this config data which is being associated to each listing data which is going to be decentralized. In this way, the system easily can find out if there is any misinformation regarding the centralized data.

Decentralized module consists of transaction-level data which shows the state of the listing. Each listing is in one of these three states at any moment:
-	Listed: When a realtor lists a property, a transaction with this state will be recorded in blockchain.
-	Delisted: When a realtor for any reason decides to not list the property for sale anymore, a transaction with this stated will be recorded in blockchain.
-	Sold: When a property comes to an agreement and a buyer gets the property, a transition with this state should be recorded, in this case, sold price should be provided as well.
Benefits
There is no discrimination. Everyone has the right to access to accurate and reliable data to help them deciding on their sell or purchase.
Reduced cost of decentralized transactions because the system in utilizing the centralized architecture as well. So only transaction data will be decentralized, and a hash of centralized data will be added to make sure nothing will be modified in the centralized part.
Ease of integration with existing centralized systems like Realtor.ca.
Reach full decentralization.

##Features
Splitting the architecture to centralized and decentralized parts so we can use the benefits of each one at the place needed.
Easy to scale to application in a way that we can accept APIs for either centralized or decentralized data. So, it’s not needed to use all parts of this system and each part can be replaced. For example, instead of using Realtor module to record realtors, the data can easily be provided by an existing API.

Easily can switch to and from a super-node in blockchain. It means the system can sign each block itself, or each realtor can sign it. Now we suppose realtors are going to sign the block.

##LandChain Phases
Phase 1 – Proof of concept:
It includes testing, product development, Real-world trials

Phase 2 – Launch centralized module:
Getting config level data by a combination of automated process (accessing available APIs) and manual data entry for the data which not provided by API. The final goal of this phase is to have Realtors and properties register in the system.
Phase 3 – Launch decentralized module:
Ready to record transactions in blockchain for each listing.

Phase 4 – Providing API (Future work):
In the future we want to even make it easier to integrate by proving APIs for recording listing and changing the state of the listing.

Phase 5 – Consultant module (Future work):
Utilizing AI to process the existing data to provide advice on a sell or purchase

##Revenue Model
Revenue can be generated by providing value-added services such as consulting for a sell or purchase. Additionally, integration with existing centralized systems and charging a fee for access LandChain platform could be explored as potential revenue system.
Working with lawyers to help them in title search would be another potential revenue resource.

Eventually, we’ll have three different plans provided to users:
1.	Basic Plan (Free plan): Every user can search for a property and see the current state and transaction history of the land.
2.	Consultant Plan (Paid Plan): Provide advice on a buy or purchase using AI
3.	Title Search Plan (Paid Plan): title search for lawyers
4.	Integration Plan (Paid Plan): Other centralized system can use API provided here to register a listing status.
