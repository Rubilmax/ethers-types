/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  BeaconProxy,
  BeaconProxyInterface,
} from "../../../proxy/beacon/BeaconProxy";
import type { Provider } from "@ethersproject/providers";
import { Contract, Signer, utils } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class BeaconProxy__factory {
  static readonly abi = _abi;
  static createInterface(): BeaconProxyInterface {
    return new utils.Interface(_abi) as BeaconProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BeaconProxy {
    return new Contract(address, _abi, signerOrProvider) as BeaconProxy;
  }
}
