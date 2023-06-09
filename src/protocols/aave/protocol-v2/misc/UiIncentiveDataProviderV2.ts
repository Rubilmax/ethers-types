/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../../common";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export declare namespace IUiIncentiveDataProviderV2 {
  export type IncentiveDataStruct = {
    emissionPerSecond: BigNumberish;
    incentivesLastUpdateTimestamp: BigNumberish;
    tokenIncentivesIndex: BigNumberish;
    emissionEndTimestamp: BigNumberish;
    tokenAddress: string;
    rewardTokenAddress: string;
    incentiveControllerAddress: string;
    rewardTokenDecimals: BigNumberish;
    precision: BigNumberish;
  };

  export type IncentiveDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    number,
    number
  ] & {
    emissionPerSecond: BigNumber;
    incentivesLastUpdateTimestamp: BigNumber;
    tokenIncentivesIndex: BigNumber;
    emissionEndTimestamp: BigNumber;
    tokenAddress: string;
    rewardTokenAddress: string;
    incentiveControllerAddress: string;
    rewardTokenDecimals: number;
    precision: number;
  };

  export type AggregatedReserveIncentiveDataStruct = {
    underlyingAsset: string;
    aIncentiveData: IUiIncentiveDataProviderV2.IncentiveDataStruct;
    vIncentiveData: IUiIncentiveDataProviderV2.IncentiveDataStruct;
    sIncentiveData: IUiIncentiveDataProviderV2.IncentiveDataStruct;
  };

  export type AggregatedReserveIncentiveDataStructOutput = [
    string,
    IUiIncentiveDataProviderV2.IncentiveDataStructOutput,
    IUiIncentiveDataProviderV2.IncentiveDataStructOutput,
    IUiIncentiveDataProviderV2.IncentiveDataStructOutput
  ] & {
    underlyingAsset: string;
    aIncentiveData: IUiIncentiveDataProviderV2.IncentiveDataStructOutput;
    vIncentiveData: IUiIncentiveDataProviderV2.IncentiveDataStructOutput;
    sIncentiveData: IUiIncentiveDataProviderV2.IncentiveDataStructOutput;
  };

  export type UserIncentiveDataStruct = {
    tokenincentivesUserIndex: BigNumberish;
    userUnclaimedRewards: BigNumberish;
    tokenAddress: string;
    rewardTokenAddress: string;
    incentiveControllerAddress: string;
    rewardTokenDecimals: BigNumberish;
  };

  export type UserIncentiveDataStructOutput = [
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    number
  ] & {
    tokenincentivesUserIndex: BigNumber;
    userUnclaimedRewards: BigNumber;
    tokenAddress: string;
    rewardTokenAddress: string;
    incentiveControllerAddress: string;
    rewardTokenDecimals: number;
  };

  export type UserReserveIncentiveDataStruct = {
    underlyingAsset: string;
    aTokenIncentivesUserData: IUiIncentiveDataProviderV2.UserIncentiveDataStruct;
    vTokenIncentivesUserData: IUiIncentiveDataProviderV2.UserIncentiveDataStruct;
    sTokenIncentivesUserData: IUiIncentiveDataProviderV2.UserIncentiveDataStruct;
  };

  export type UserReserveIncentiveDataStructOutput = [
    string,
    IUiIncentiveDataProviderV2.UserIncentiveDataStructOutput,
    IUiIncentiveDataProviderV2.UserIncentiveDataStructOutput,
    IUiIncentiveDataProviderV2.UserIncentiveDataStructOutput
  ] & {
    underlyingAsset: string;
    aTokenIncentivesUserData: IUiIncentiveDataProviderV2.UserIncentiveDataStructOutput;
    vTokenIncentivesUserData: IUiIncentiveDataProviderV2.UserIncentiveDataStructOutput;
    sTokenIncentivesUserData: IUiIncentiveDataProviderV2.UserIncentiveDataStructOutput;
  };
}

export interface UiIncentiveDataProviderV2Interface extends utils.Interface {
  functions: {
    "getFullReservesIncentiveData(address,address)": FunctionFragment;
    "getReservesIncentivesData(address)": FunctionFragment;
    "getUserReservesIncentivesData(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getFullReservesIncentiveData"
      | "getReservesIncentivesData"
      | "getUserReservesIncentivesData"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getFullReservesIncentiveData",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getReservesIncentivesData",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserReservesIncentivesData",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getFullReservesIncentiveData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReservesIncentivesData",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserReservesIncentivesData",
    data: BytesLike
  ): Result;

  events: {};
}

export interface UiIncentiveDataProviderV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UiIncentiveDataProviderV2Interface;

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
    getFullReservesIncentiveData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        IUiIncentiveDataProviderV2.AggregatedReserveIncentiveDataStructOutput[],
        IUiIncentiveDataProviderV2.UserReserveIncentiveDataStructOutput[]
      ]
    >;

    getReservesIncentivesData(
      provider: string,
      overrides?: CallOverrides
    ): Promise<
      [IUiIncentiveDataProviderV2.AggregatedReserveIncentiveDataStructOutput[]]
    >;

    getUserReservesIncentivesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [IUiIncentiveDataProviderV2.UserReserveIncentiveDataStructOutput[]]
    >;
  };

  getFullReservesIncentiveData(
    provider: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<
    [
      IUiIncentiveDataProviderV2.AggregatedReserveIncentiveDataStructOutput[],
      IUiIncentiveDataProviderV2.UserReserveIncentiveDataStructOutput[]
    ]
  >;

  getReservesIncentivesData(
    provider: string,
    overrides?: CallOverrides
  ): Promise<
    IUiIncentiveDataProviderV2.AggregatedReserveIncentiveDataStructOutput[]
  >;

  getUserReservesIncentivesData(
    provider: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<IUiIncentiveDataProviderV2.UserReserveIncentiveDataStructOutput[]>;

  callStatic: {
    getFullReservesIncentiveData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      [
        IUiIncentiveDataProviderV2.AggregatedReserveIncentiveDataStructOutput[],
        IUiIncentiveDataProviderV2.UserReserveIncentiveDataStructOutput[]
      ]
    >;

    getReservesIncentivesData(
      provider: string,
      overrides?: CallOverrides
    ): Promise<
      IUiIncentiveDataProviderV2.AggregatedReserveIncentiveDataStructOutput[]
    >;

    getUserReservesIncentivesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<
      IUiIncentiveDataProviderV2.UserReserveIncentiveDataStructOutput[]
    >;
  };

  filters: {};

  estimateGas: {
    getFullReservesIncentiveData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getReservesIncentivesData(
      provider: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserReservesIncentivesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getFullReservesIncentiveData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReservesIncentivesData(
      provider: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserReservesIncentivesData(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
