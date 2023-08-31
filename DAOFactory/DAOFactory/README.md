# DAOFactory

## Table of contents
* [Intro](#intro)
* [General info](#general-info)
* [Objective](#objective)
* [Concept](#concept)
* [Team](#team)
* [Setup](#setup)
* [Test](#test)
* [Demo](#demo)
* [Deployed Addresses](#DeployedAddresses)
* [Docs](#Docs)
* [Copyright & License](#Copyright)

## Intro
DAOFactory is a plateform for creating, customizing, deploying and intereacting with DAO:
- Customize your DAO, add modules and features (Membership, vote, funds and more)
- Differents smart-contracts for each Module.
- User friendly plateform, let your create your DAO without knwowledge and without code
- Simplified smart contracts methods for create DAO and gas efficient
- Interact with your DAO directly on the plateform

## Objective
* Democratize the use of DAOs and bring it to the general public
* Bring transparency and autonomy of governance to any group of people
* Assist in the self-management and transparency 
* Offer associations and horizontal organizations a framework for collegial decision-making, Crowdfunding, etc.
* Driving Governance 3.0
* Help humanitarian associations to collect and redistribute around the world

## Concept

DAOFactory allows you to create, with an intuitive interface, without prior technical knowledge, a CAD.
The user can create a DAO, providing:
- name
- description
- Rules (contract governing the DAO)
- visibility
By also choosing modules.
The modules have the following characteristics:
- A category or type
- A sub-category or an implementation: each type of category can contain several implementations, thus giving the user the choice to personalize his DAO by choosing an appropriate implementation for his use. For example the Membership type contains several implementaions such as OpenMembership or InviteMembership
- Mandatory: The membership module is mandatory for example to be able to manage the members of the DAO
- exclusive: determines if we can choose several implementations for the same type

OpenMembership module:
- a new member can join a DAO freely, without validation of existing members. Provided that the DAO is public

InviteMembership module:
- A new member can only join a DAO following the invitation of a member of the DAO.
- The new member sees his "guest" status at the DAO level. He can then accept the invitation to join the DAO.

RequestMembership module:
- A new member can only join a DAO following a membership request.
- Any DAO member can view the new membership application and accept it
- Following acceptance of the membership application, the member becomes a member of the DAO

Module VoteYesNo:
- allows you to create voting sessions.
- Voters can vote by Yes or No to a statement.
- any member can create a voting session.
- A voting session has the following characteristics:
    - name
    - description
    - duration
- each member has the right to vote only once.
- All member votes have the same weight
- At the end of the time allowed for the vote, the result is displayed


## Setup 

* rename .env.example in .env and configure it by adding your parameters. Example:
    - `MNEMONIC=Your mnemonic`
    - `INFURA_API_KEY=your infura API key`
* Install depedency using npm or yarn:
`$ npm install`
* Deploy smarts contracts after coosing your chain. Examples:
    - Ganache:
        * Open ganache cli or app in another terminal
        * Standard Ethereum port: 7545
        * Network Id: 5777
        `$ ganache-cli`
        * Migrate smart-contract on ganache
        `$ truffle deploy -- reset --network developement `
    

## Test
To lunch test of all smart-contract
* Open a terminal in root
`$ cd DAOFactory/`
* Open ganache cli or app in another terminal
`$ ganache-cli`
* Run all test
`$ truffle test test/DAOFactory.test.js`

