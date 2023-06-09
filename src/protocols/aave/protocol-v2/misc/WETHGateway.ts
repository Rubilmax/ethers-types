/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface WETHGatewayInterface extends utils.Interface {
  functions: {
    "authorizeLendingPool(address)": FunctionFragment;
    "borrowETH(address,uint256,uint256,uint16)": FunctionFragment;
    "depositETH(address,address,uint16)": FunctionFragment;
    "emergencyEtherTransfer(address,uint256)": FunctionFragment;
    "emergencyTokenTransfer(address,address,uint256)": FunctionFragment;
    "getWETHAddress()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "repayETH(address,uint256,uint256,address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawETH(address,uint256,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authorizeLendingPool"
      | "borrowETH"
      | "depositETH"
      | "emergencyEtherTransfer"
      | "emergencyTokenTransfer"
      | "getWETHAddress"
      | "owner"
      | "renounceOwnership"
      | "repayETH"
      | "transferOwnership"
      | "withdrawETH"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "authorizeLendingPool",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "borrowETH",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "depositETH",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyEtherTransfer",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "emergencyTokenTransfer",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWETHAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "repayETH",
    values: [string, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawETH",
    values: [string, BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "authorizeLendingPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "borrowETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "emergencyEtherTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "emergencyTokenTransfer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWETHAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "repayETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawETH",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface WETHGateway extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WETHGatewayInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getWETHAddress(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  authorizeLendingPool(
    lendingPool: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  borrowETH(
    lendingPool: string,
    amount: BigNumberish,
    interesRateMode: BigNumberish,
    referralCode: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  depositETH(
    lendingPool: string,
    onBehalfOf: string,
    referralCode: BigNumberish,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  emergencyEtherTransfer(
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  emergencyTokenTransfer(
    token: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getWETHAddress(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  repayETH(
    lendingPool: string,
    amount: BigNumberish,
    rateMode: BigNumberish,
    onBehalfOf: string,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  withdrawETH(
    lendingPool: string,
    amount: BigNumberish,
    to: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: CallOverrides
    ): Promise<void>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getWETHAddress(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getWETHAddress(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authorizeLendingPool(
      lendingPool: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    borrowETH(
      lendingPool: string,
      amount: BigNumberish,
      interesRateMode: BigNumberish,
      referralCode: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    depositETH(
      lendingPool: string,
      onBehalfOf: string,
      referralCode: BigNumberish,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    emergencyEtherTransfer(
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    emergencyTokenTransfer(
      token: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getWETHAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    repayETH(
      lendingPool: string,
      amount: BigNumberish,
      rateMode: BigNumberish,
      onBehalfOf: string,
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    withdrawETH(
      lendingPool: string,
      amount: BigNumberish,
      to: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
