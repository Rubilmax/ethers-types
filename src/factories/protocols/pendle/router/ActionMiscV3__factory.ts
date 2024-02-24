/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ActionMiscV3,
  ActionMiscV3Interface,
} from "../../../../protocols/pendle/router/ActionMiscV3";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualPYOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredPYOut",
        type: "uint256",
      },
    ],
    name: "RouterInsufficientPYOut",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualSyOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredSyOut",
        type: "uint256",
      },
    ],
    name: "RouterInsufficientSyOut",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualTokenOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredTokenOut",
        type: "uint256",
      },
    ],
    name: "RouterInsufficientTokenOut",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "success",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "res",
        type: "bytes",
      },
    ],
    name: "SimulationResults",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netPyOut",
        type: "uint256",
      },
    ],
    name: "MintPyFromSy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netPyOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyInterm",
        type: "uint256",
      },
    ],
    name: "MintPyFromToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "SY",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
    ],
    name: "MintSyFromToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netPyIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
    ],
    name: "RedeemPyToSy",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netPyIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyInterm",
        type: "uint256",
      },
    ],
    name: "RedeemPyToToken",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "SY",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
    ],
    name: "RedeemSyToToken",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "markets",
        type: "address[]",
      },
    ],
    name: "boostMarkets",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minPyOut",
        type: "uint256",
      },
    ],
    name: "mintPyFromSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netPyOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minPyOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "netTokenIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenMintSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "pendleSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "mintPyFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netPyOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyInterm",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "SY",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minSyOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "netTokenIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenMintSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "pendleSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenInput",
        name: "input",
        type: "tuple",
      },
    ],
    name: "mintSyFromToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "allowFailure",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct IPActionMiscV3.Call3[]",
        name: "calls",
        type: "tuple[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        components: [
          {
            internalType: "bool",
            name: "success",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "returnData",
            type: "bytes",
          },
        ],
        internalType: "struct IPActionMiscV3.Result[]",
        name: "res",
        type: "tuple[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "sys",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "yts",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "markets",
        type: "address[]",
      },
    ],
    name: "redeemDueInterestAndRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netPyIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minSyOut",
        type: "uint256",
      },
    ],
    name: "redeemPyToSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "YT",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netPyIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minTokenOut",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenRedeemSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "pendleSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenOutput",
        name: "output",
        type: "tuple",
      },
    ],
    name: "redeemPyToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyInterm",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "SY",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenOut",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minTokenOut",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenRedeemSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "pendleSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenOutput",
        name: "output",
        type: "tuple",
      },
    ],
    name: "redeemSyToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "simulate",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minTokenOut",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "netTokenIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenMintSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "pendleSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenInput",
        name: "inp",
        type: "tuple",
      },
    ],
    name: "swapTokenToToken",
    outputs: [
      {
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "address",
        name: "SY",
        type: "address",
      },
      {
        components: [
          {
            internalType: "address",
            name: "tokenIn",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "netTokenIn",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "tokenMintSy",
            type: "address",
          },
          {
            internalType: "address",
            name: "pendleSwap",
            type: "address",
          },
          {
            components: [
              {
                internalType: "enum SwapType",
                name: "swapType",
                type: "uint8",
              },
              {
                internalType: "address",
                name: "extRouter",
                type: "address",
              },
              {
                internalType: "bytes",
                name: "extCalldata",
                type: "bytes",
              },
              {
                internalType: "bool",
                name: "needScale",
                type: "bool",
              },
            ],
            internalType: "struct SwapData",
            name: "swapData",
            type: "tuple",
          },
        ],
        internalType: "struct TokenInput",
        name: "input",
        type: "tuple",
      },
      {
        internalType: "address",
        name: "tokenRedeemSy",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "minTokenOut",
        type: "uint256",
      },
    ],
    name: "swapTokenToTokenViaSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netTokenOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyInterm",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
] as const;

export class ActionMiscV3__factory {
  static readonly abi = _abi;
  static createInterface(): ActionMiscV3Interface {
    return new Interface(_abi) as ActionMiscV3Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ActionMiscV3 {
    return new Contract(address, _abi, runner) as unknown as ActionMiscV3;
  }
}
