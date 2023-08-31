import { ethers } from 'ethers';

export const parseBytes = (bytesProposal) => {
	console.log("parseBytes ", bytesProposal)
	console.log("parseBytes parseBytes32String", ethers.utils.parseBytes32String(bytesProposal))
	return ethers.utils.parseBytes32String(bytesProposal);
};

export const parseName = (name) => {
	console.log("parseName ", name);
	const newName = name.replace('-', ' ');
	return newName[0].toUpperCase() + newName.substring(1);
};