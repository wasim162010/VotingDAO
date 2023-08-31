import React, { useEffect, useState } from 'react';

import { ethers } from 'ethers';

import CheckVoterAddress from './CheckVoterAddress';
import Proposals from './Proposals';
import AddVoter from './AddVoter';
import AddProposal from './AddProposal';

import TokenArtifact from '../ABI/Ballot.json';
import contractAddress from '../ABI/contract-address.json';

export const Dapp = () => {

	const [token, setToken] = useState();
	const [newVoter, setNewVoter] = useState('');
	const [newVoterStatus, setNewVoterStatus] = useState('');
	const [voterStatus, setVoterStatus] = useState();
	const [voterAddressToCheck, setVoterAddressToCheck] = useState('');
	const [proposals, setProposals] = useState([]);
	const [chairperson, setChairperson] = useState('');
	const [newProposal, setNewProposal] = useState('');
	const [proposalToAdd, setProposalToAdd] = useState('');
	const [provider, setProvider] = useState('');

	// **************** Ethers Connection for the SmartContract ****************

	async function _initialize() {
		await _intializeEthers();
	}

	const _intializeEthers = async () => {
		// ethers connection for the smartcontract
		const _provider = new ethers.providers.Web3Provider(window.ethereum);

		const _token = new ethers.Contract(
			contractAddress.Ballot,
			TokenArtifact,
			_provider.getSigner(0)
		);

	
			// get the proposals
			const newProposal = await _token.getAllProposals();
		
			// get the chairman address
			const newChairperson = await _token.chairperson();
	
		// save the token data into a hook to reuse it along the app
		setToken(_token);
		setProposals(newProposal);
		setChairperson(newChairperson);
		setProvider(_provider);
	};

	// Connects to the smart contract token id (check /contracts/contract-address.json)
	async function init() {
		const [selectedAddress] = await window.ethereum.enable();
		_initialize(selectedAddress);
	}

	useEffect(() => {
		// When the page loads it will initialize the init function
		// that we need to connect the frontend with the smartcontract
		init();
	}, []);

	// **************** Here Starts The Real Logic of the Frontend -> SmartContract ****************

	// Vote the selected proposal (you can only vote one time)
	const voteProposal = async (proposal) => {

		console.log("voteProposal ", proposal)
		console.log("provider.getSigner().getAddress() ", await provider.getSigner().getAddress())

		const curUser = await provider.getSigner().getAddress();
		const chairperson = await token.chairperson()
		
		const stats = await token.voters(curUser);
		console.log("stats[voted] ", stats["voted"])

		if(stats["voted"]) {
			alert("The voter has already voted.")
		}

		else {

			if( chairperson === curUser) {
				
				token.vote(proposal).then(function(result) {
					provider.getTransactionReceipt(result["hash"]).then(function(res){
						console.log(res)
						console.log("state ", res["status"])
						if(res["status"] === 1) {
							window.location.reload();
						}
					})
	
				})

			}
			else {
		
				if(stats["weight"]  === 1) {

					token.vote(proposal).then(function(result) {
						provider.getTransactionReceipt(result["hash"]).then(function(res){
							console.log(res)
							console.log("state ", res["status"])
							if(res["status"] === 1) {
								window.location.reload();
							}
						})
		
					})


		
				} else if(stats["weight"]  === 0) {
					alert("You first needs to be given permission to vote.")
				}
	
			}

		}
		
	};

	// Check if the address the user entered is a a voter or not
	const checkAddressVoter = async () => {
		try {
			const voterData = await token.voters(`${voterAddressToCheck}`);
			setVoterStatus(voterData);
		} catch (err) {
			console.log(err);
			setVoterStatus('An error has occured');
		}
	};

	const refreshProposal = async () => {
		const newProposal = await token.getAllProposals();
		setProposals(newProposal);
	}
	const addProposal = async () => {
		try {
			console.log("addProposal ", proposalToAdd);
			const inbytes = ethers.utils.formatBytes32String(proposalToAdd);
			console.log("addProposal inbytes ", inbytes);
		//	await token.addProposal(inbytes);
			token.addProposal(inbytes).then(function(result) {
				provider.getTransactionReceipt(result["hash"]).then(function(res){
					console.log(res)
					console.log("state ", res["status"])
					if(res["status"] === 1) {
						window.location.reload();
					}
				})

			})

		} catch (err) {
			console.log(err);

		}
	};

	// It gives the right to vote to a new address
	const addNewVoter = async () => {
		try {
			//const curUser = await provider.getSigner().getAddress();
			console.log("addNewVoter newVoter ", newVoter)
			const chairperson = await token.chairperson()
			const stats = await token.voters(newVoter);
			if(stats["voted"]) {
				alert("User has already voted.")
			}
			if(newVoter === chairperson) {
				alert("User are a Admin. You already have rights to vote")
			}
			else{
				await token.giveRightToVote(newVoter);
				setNewVoterStatus('Success');
				alert("User has been given right to vote")
			}

			
		} catch (err) {
			console.log("addNewVoter ", err);
			setNewVoterStatus('An error has occured');
		}
	};


	return (
		<div style={{ padding: '3rem 5rem' }}>
			<h1>Voting System</h1>
			<div>
				<h4>chairperson: {chairperson}</h4>
			</div>
			
			<AddProposal
				proposalToAdd={proposalToAdd}
				setProposalToAdd={setProposalToAdd}
				addProposal={addProposal}
			/>

			<Proposals proposals={proposals} voteProposal={voteProposal} />
			<AddVoter
				addNewVoter={addNewVoter}
				setNewVoter={setNewVoter}
				newVoter={newVoter}
				newVoterStatus={newVoterStatus}
			/>
			<CheckVoterAddress
				voterAddressToCheck={voterAddressToCheck}
				setVoterAddressToCheck={setVoterAddressToCheck}
				checkAddressVoter={checkAddressVoter}
				voterStatus={voterStatus}
			/>
		</div>
	);
};
