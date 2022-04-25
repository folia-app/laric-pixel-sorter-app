// folia-contracts commit 0f2da58dfe82faca60bbc041c76c86e949cbf94b

export default {
  contractName: 'DecomposerController',
  abi: [
    {
      constant: true,
      inputs: [],
      name: 'adminWallet',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'paused',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: false,
      inputs: [],
      name: 'renounceOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
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
    {
      constant: true,
      inputs: [],
      name: 'owner',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'isOwner',
      outputs: [
        {
          name: '',
          type: 'bool'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
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
    {
      constant: true,
      inputs: [],
      name: 'artistWallet',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'totalMax',
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
    {
      constant: true,
      inputs: [],
      name: 'decomposer',
      outputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [
        {
          name: '',
          type: 'address'
        }
      ],
      name: 'aC',
      outputs: [
        {
          name: '_cT',
          type: 'uint8'
        },
        {
          name: 'editionsLeft',
          type: 'uint256'
        }
      ],
      payable: false,
      stateMutability: 'view',
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'adminSplit',
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
    {
      constant: false,
      inputs: [
        {
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'transferOwnership',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [
        {
          name: '_decomposer',
          type: 'address'
        },
        {
          name: '_adminWallet',
          type: 'address'
        }
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor'
    },
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
        },
        {
          indexed: false,
          name: 'contractType',
          type: 'uint8'
        }
      ],
      name: 'newContract',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'deletedContract',
      type: 'event'
    },
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
          name: 'tokenId',
          type: 'uint256'
        },
        {
          indexed: false,
          name: 'newTokenId',
          type: 'uint256'
        }
      ],
      name: 'editionBought',
      type: 'event'
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: 'previousOwner',
          type: 'address'
        },
        {
          indexed: true,
          name: 'newOwner',
          type: 'address'
        }
      ],
      name: 'OwnershipTransferred',
      type: 'event'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'contractAddress',
          type: 'address'
        },
        {
          name: 'maxEditions',
          type: 'uint256'
        },
        {
          name: '_cT',
          type: 'uint8'
        }
      ],
      name: 'addContract',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: 'contractAddress',
          type: 'address'
        }
      ],
      name: 'removeContract',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_price',
          type: 'uint256'
        }
      ],
      name: 'updateArtworkPrice',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_artistWallet',
          type: 'address'
        }
      ],
      name: 'updateArtistWallet',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_totalMax',
          type: 'uint256'
        }
      ],
      name: 'updateTotalMax',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
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
    },
    {
      constant: false,
      inputs: [
        {
          name: '_adminSplit',
          type: 'uint256'
        }
      ],
      name: 'updateAdminSplit',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_adminWallet',
          type: 'address'
        }
      ],
      name: 'updateAdminWallet',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      constant: false,
      inputs: [
        {
          name: '_paused',
          type: 'bool'
        }
      ],
      name: 'updatePaused',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function'
    }
  ],
  networks: {
    4: {
      events: {
        '0x18670913cc4dffc5277486432dacf08f8b021a6c7769b001c47d6e9a4b9917d9': {
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
            },
            {
              indexed: false,
              name: 'contractType',
              type: 'uint8'
            }
          ],
          name: 'newContract',
          type: 'event'
        },
        '0xd3840f2b66d1e3a61ffdc026ab468057800950090c80d328846619783e386d7c': {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: 'contractAddress',
              type: 'address'
            }
          ],
          name: 'deletedContract',
          type: 'event'
        },
        '0x2088abfb2df177e9561e5ed597c9e58ac0598bf4f7fbd1425fc25735abc875e0': {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              name: 'contractAddress',
              type: 'address'
            },
            {
              indexed: false,
              name: 'tokenId',
              type: 'uint256'
            },
            {
              indexed: false,
              name: 'newTokenId',
              type: 'uint256'
            }
          ],
          name: 'editionBought',
          type: 'event'
        },
        '0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0': {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'previousOwner',
              type: 'address'
            },
            {
              indexed: true,
              name: 'newOwner',
              type: 'address'
            }
          ],
          name: 'OwnershipTransferred',
          type: 'event'
        }
      },
      links: {},
      address: '0x95B72657423Ad32dbe56ab67319cf835b81438b1',
      transactionHash: '0x9f6a512ed4e31fbf06f1bb561bb7febcc231f2f37558146a420f24d3210fd129'
    }
  }
}
