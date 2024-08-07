/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MorphoChainlinkOracleV2,
  MorphoChainlinkOracleV2Interface,
} from "../../../../protocols/morpho/blue/MorphoChainlinkOracleV2";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC4626",
        name: "baseVault",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseVaultConversionSample",
        type: "uint256",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "baseFeed1",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "baseFeed2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "baseTokenDecimals",
        type: "uint256",
      },
      {
        internalType: "contract IERC4626",
        name: "quoteVault",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quoteVaultConversionSample",
        type: "uint256",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "quoteFeed1",
        type: "address",
      },
      {
        internalType: "contract AggregatorV3Interface",
        name: "quoteFeed2",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "quoteTokenDecimals",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "MathOverflowedMulDiv",
    type: "error",
  },
  {
    inputs: [],
    name: "BASE_FEED_1",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BASE_FEED_2",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BASE_VAULT",
    outputs: [
      {
        internalType: "contract IERC4626",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "BASE_VAULT_CONVERSION_SAMPLE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "QUOTE_FEED_1",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "QUOTE_FEED_2",
    outputs: [
      {
        internalType: "contract AggregatorV3Interface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "QUOTE_VAULT",
    outputs: [
      {
        internalType: "contract IERC4626",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "QUOTE_VAULT_CONVERSION_SAMPLE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SCALE_FACTOR",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class MorphoChainlinkOracleV2__factory {
  static readonly abi = _abi;
  static createInterface(): MorphoChainlinkOracleV2Interface {
    return new Interface(_abi) as MorphoChainlinkOracleV2Interface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MorphoChainlinkOracleV2 {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as MorphoChainlinkOracleV2;
  }
}
