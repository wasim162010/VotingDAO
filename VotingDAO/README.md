# vote-system
A blockchain dapp vote system using react + solidity + hardhat.

# vote-system-dapp


## General

This is a simple example of running a frontend that interacts with an smartcontract using hardhat. The smart contract used for this project is an example of solidty docs about a voting system.


## 🛠️ Installation Steps

(This project runs with hardhat. If it is your first time using hardhat follow this tutorial first [tutorial](https://hardhat.org/tutorial/setting-up-the-environment.html#macos)

### Run the Smart Contract (our backend)

1. Run Hardhat *(New Tab Terminal)*

`/vote-system`

```bash
npx hardhat node
```

2. Run the smart contract with hardhat *(New Tab Terminal)*

`/vote-system`

```bash
npx hardhat run script/deploy.js --network localhost


```

3. Run the frontend *(New Tab Terminal)*

`/vote-system/frontend`

Post deployment of the smart contract , mention the smart contract address in '/vote-system/frontend/src/ABI/contract-address.json'

```bash
yarn install
```

4. Run the app

```bash
yarn start
```

🌟 You are all set!

## 🧪 Run Tests


Screenshots :
Add proposal
<img width="873" alt="image" src="https://github.com/wasim162010/VotingDAO/assets/47940538/e2845e06-86a5-4dd1-ac6f-f9fd71065534">
<img width="659" alt="image" src="https://github.com/wasim162010/VotingDAO/assets/47940538/2c7676b2-96fe-4bb0-8683-8ef58f11fa38">

Give right to vote :
<img width="877" alt="image" src="https://github.com/wasim162010/VotingDAO/assets/47940538/06f9cf98-c050-4874-bc42-236a2afd2f88">
<img width="1188" alt="image" src="https://github.com/wasim162010/VotingDAO/assets/47940538/6828fc9e-c6d2-4776-8fdb-e4ed91045506">

Vote for proposal :
<img width="777" alt="image" src="https://github.com/wasim162010/VotingDAO/assets/47940538/b0d169c4-9f80-468a-b839-a3341f927919">

Check vote status of user

<img width="915" alt="image" src="https://github.com/wasim162010/VotingDAO/assets/47940538/25a2e8af-c3c7-447e-b077-62447daf493b">










