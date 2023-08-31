const CheckVoterAddress = ({
	proposalToAdd,
	setProposalToAdd,
	addProposal,
	voterStatus,
}) => {
	const handleNewProposalToAdd = (e) => {
		setProposalToAdd(e.target.value);
	};
	return (
		<div>
			<h4>Add new proposal</h4>
			<div
				style={{
					width: '15em',
					display: 'flex',
					justifyContent: 'space-between',
				}}>
				<input
					value={proposalToAdd}
					onChange={handleNewProposalToAdd}
				/>
				<button onClick={addProposal}>Add New Proposal</button>
			</div>
	
		</div>
	);
};

export default CheckVoterAddress;
