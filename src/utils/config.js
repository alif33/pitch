export const PITCHSHOW_ABI = [
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "project_name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "token_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "swap_rate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "token_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "available_token_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					}
				],
				"internalType": "struct Project",
				"name": "project",
				"type": "tuple"
			}
		],
		"name": "createProject",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "project_name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "token_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "swap_rate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "token_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "available_token_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					}
				],
				"internalType": "struct Project",
				"name": "",
				"type": "tuple"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "usdt_contract_address",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "project_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdt_token_amount",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			}
		],
		"name": "updatePoolAvailableTokenAmount",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "project_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "withdrawProjectLeftOvers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "project_id",
				"type": "uint256"
			}
		],
		"name": "getProjectLeftOverTokenAmount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getProjects",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "project_name",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "token_address",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "symbol",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "swap_rate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "token_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "available_token_amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "start_time",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "end_time",
						"type": "uint256"
					}
				],
				"internalType": "struct Project[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

export const APP_ABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "projects_contract",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "project_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "usdt_token_amount",
				"type": "uint256"
			}
		],
		"name": "invest",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];
