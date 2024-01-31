/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  UniswapV2Migrator,
  UniswapV2MigratorInterface,
} from "../../../../protocols/uniswap/v2-periphery/UniswapV2Migrator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factoryV1",
        type: "address",
      },
      {
        internalType: "address",
        name: "_router",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountTokenMin",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountETHMin",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class UniswapV2Migrator__factory {
  static readonly abi = _abi;
  static createInterface(): UniswapV2MigratorInterface {
    return new Interface(_abi) as UniswapV2MigratorInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): UniswapV2Migrator {
    return new Contract(address, _abi, runner) as unknown as UniswapV2Migrator;
  }
}