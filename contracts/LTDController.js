// folia-contracts commit 59511acfe39e87ba220a627ace30ee69172efa5f

export default {
  contractName: 'LTDController',
  abi: [
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "lightestToDarkest",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "address"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "adminWallet",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "address"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "paused",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "bool"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [],
    //   "name": "renounceOwnership",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      name: 'editionsLeft',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "owner",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "address"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "isOwner",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "bool"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    {
      constant: true,
      inputs: [],
      name: 'price',
      outputs: [
        {
          name: '',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "artistWallet",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "address"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "totalMax",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "uint256"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": true,
    //   "inputs": [],
    //   "name": "adminSplit",
    //   "outputs": [
    //     {
    //       "name": "",
    //       "type": "uint256"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "view",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "newOwner",
    //       "type": "address"
    //     }
    //   ],
    //   "name": "transferOwnership",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "inputs": [
    //     {
    //       "name": "_lightestToDarkest",
    //       "type": "address"
    //     },
    //     {
    //       "name": "_adminWallet",
    //       "type": "address"
    //     }
    //   ],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "constructor"
    // },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'contractAddress',
          type: 'address'
        },
        {
          indexed: false,
          name: 'maxEditions',
          type: 'uint256'
        }
      ],
      name: 'newContract',
      type: 'event'
    },
    // {
    //   "anonymous": false,
    //   "inputs": [
    //     {
    //       "indexed": false,
    //       "name": "contractAddress",
    //       "type": "address"
    //     }
    //   ],
    //   "name": "deletedContract",
    //   "type": "event"
    // },
    // {
    //   "anonymous": false,
    //   "inputs": [
    //     {
    //       "indexed": false,
    //       "name": "contractAddress",
    //       "type": "address"
    //     },
    //     {
    //       "indexed": false,
    //       "name": "tokenId",
    //       "type": "uint256"
    //     },
    //     {
    //       "indexed": false,
    //       "name": "newTokenId",
    //       "type": "uint256"
    //     }
    //   ],
    //   "name": "editionBought",
    //   "type": "event"
    // },
    // {
    //   "anonymous": false,
    //   "inputs": [
    //     {
    //       "indexed": true,
    //       "name": "previousOwner",
    //       "type": "address"
    //     },
    //     {
    //       "indexed": true,
    //       "name": "newOwner",
    //       "type": "address"
    //     }
    //   ],
    //   "name": "OwnershipTransferred",
    //   "type": "event"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "contractAddress",
    //       "type": "address"
    //     },
    //     {
    //       "name": "maxEditions",
    //       "type": "uint256"
    //     }
    //   ],
    //   "name": "addContract",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "contractAddress",
    //       "type": "address"
    //     }
    //   ],
    //   "name": "removeContract",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "_price",
    //       "type": "uint256"
    //     }
    //   ],
    //   "name": "updateArtworkPrice",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "_artistWallet",
    //       "type": "address"
    //     }
    //   ],
    //   "name": "updateArtistWallet",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "_totalMax",
    //       "type": "uint256"
    //     }
    //   ],
    //   "name": "updateTotalMax",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    {
      constant: false,
      inputs: [
        {
          name: 'recipient',
          type: 'address'
        },
        {
          name: 'contractAddress',
          type: 'address'
        },
        {
          name: 'tokenId',
          type: 'uint256'
        }
      ],
      name: 'buy',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: true,
      stateMutability: 'payable',
      type: 'function'
    }
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "_adminSplit",
    //       "type": "uint256"
    //     }
    //   ],
    //   "name": "updateAdminSplit",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "_adminWallet",
    //       "type": "address"
    //     }
    //   ],
    //   "name": "updateAdminWallet",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // },
    // {
    //   "constant": false,
    //   "inputs": [
    //     {
    //       "name": "_paused",
    //       "type": "bool"
    //     }
    //   ],
    //   "name": "updatePaused",
    //   "outputs": [],
    //   "payable": false,
    //   "stateMutability": "nonpayable",
    //   "type": "function"
    // }
  ],
  networks: {
    4: {
      events: {},
      links: {},
      address: '0x7e11A2081f617f9423C3b23d4E30e2de4F52Aa65',
      transactionHash: '0x03fc4ec899bd93a2d9800504aa36280a98267c29e63464963d9ddf56e7ffeceb'
    }
  }
}
