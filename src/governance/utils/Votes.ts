/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface VotesInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "CLOCK_MODE"
      | "clock"
      | "delegate"
      | "delegateBySig"
      | "delegates"
      | "eip712Domain"
      | "getPastTotalSupply"
      | "getPastVotes"
      | "getVotes"
      | "nonces"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "DelegateChanged"
      | "DelegateVotesChanged"
      | "EIP712DomainChanged"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "CLOCK_MODE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "clock", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "delegate",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegateBySig",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "delegates",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPastTotalSupply",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPastVotes",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "CLOCK_MODE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "clock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delegate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "delegateBySig",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegates", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastTotalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPastVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
}

export namespace DelegateChangedEvent {
  export type InputTuple = [
    delegator: AddressLike,
    fromDelegate: AddressLike,
    toDelegate: AddressLike
  ];
  export type OutputTuple = [
    delegator: string,
    fromDelegate: string,
    toDelegate: string
  ];
  export interface OutputObject {
    delegator: string;
    fromDelegate: string;
    toDelegate: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DelegateVotesChangedEvent {
  export type InputTuple = [
    delegate: AddressLike,
    previousBalance: BigNumberish,
    newBalance: BigNumberish
  ];
  export type OutputTuple = [
    delegate: string,
    previousBalance: bigint,
    newBalance: bigint
  ];
  export interface OutputObject {
    delegate: string;
    previousBalance: bigint;
    newBalance: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EIP712DomainChangedEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Votes extends BaseContract {
  connect(runner?: ContractRunner | null): Votes;
  waitForDeployment(): Promise<this>;

  interface: VotesInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  CLOCK_MODE: TypedContractMethod<[], [string], "view">;

  clock: TypedContractMethod<[], [bigint], "view">;

  delegate: TypedContractMethod<[delegatee: AddressLike], [void], "nonpayable">;

  delegateBySig: TypedContractMethod<
    [
      delegatee: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  delegates: TypedContractMethod<[account: AddressLike], [string], "view">;

  eip712Domain: TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;

  getPastTotalSupply: TypedContractMethod<
    [timepoint: BigNumberish],
    [bigint],
    "view"
  >;

  getPastVotes: TypedContractMethod<
    [account: AddressLike, timepoint: BigNumberish],
    [bigint],
    "view"
  >;

  getVotes: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  nonces: TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "CLOCK_MODE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "clock"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "delegate"
  ): TypedContractMethod<[delegatee: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "delegateBySig"
  ): TypedContractMethod<
    [
      delegatee: AddressLike,
      nonce: BigNumberish,
      expiry: BigNumberish,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "delegates"
  ): TypedContractMethod<[account: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "eip712Domain"
  ): TypedContractMethod<
    [],
    [
      [string, string, string, bigint, string, string, bigint[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: bigint;
        verifyingContract: string;
        salt: string;
        extensions: bigint[];
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getPastTotalSupply"
  ): TypedContractMethod<[timepoint: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getPastVotes"
  ): TypedContractMethod<
    [account: AddressLike, timepoint: BigNumberish],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "getVotes"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "nonces"
  ): TypedContractMethod<[owner: AddressLike], [bigint], "view">;

  getEvent(
    key: "DelegateChanged"
  ): TypedContractEvent<
    DelegateChangedEvent.InputTuple,
    DelegateChangedEvent.OutputTuple,
    DelegateChangedEvent.OutputObject
  >;
  getEvent(
    key: "DelegateVotesChanged"
  ): TypedContractEvent<
    DelegateVotesChangedEvent.InputTuple,
    DelegateVotesChangedEvent.OutputTuple,
    DelegateVotesChangedEvent.OutputObject
  >;
  getEvent(
    key: "EIP712DomainChanged"
  ): TypedContractEvent<
    EIP712DomainChangedEvent.InputTuple,
    EIP712DomainChangedEvent.OutputTuple,
    EIP712DomainChangedEvent.OutputObject
  >;

  filters: {
    "DelegateChanged(address,address,address)": TypedContractEvent<
      DelegateChangedEvent.InputTuple,
      DelegateChangedEvent.OutputTuple,
      DelegateChangedEvent.OutputObject
    >;
    DelegateChanged: TypedContractEvent<
      DelegateChangedEvent.InputTuple,
      DelegateChangedEvent.OutputTuple,
      DelegateChangedEvent.OutputObject
    >;

    "DelegateVotesChanged(address,uint256,uint256)": TypedContractEvent<
      DelegateVotesChangedEvent.InputTuple,
      DelegateVotesChangedEvent.OutputTuple,
      DelegateVotesChangedEvent.OutputObject
    >;
    DelegateVotesChanged: TypedContractEvent<
      DelegateVotesChangedEvent.InputTuple,
      DelegateVotesChangedEvent.OutputTuple,
      DelegateVotesChangedEvent.OutputObject
    >;

    "EIP712DomainChanged()": TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
    EIP712DomainChanged: TypedContractEvent<
      EIP712DomainChangedEvent.InputTuple,
      EIP712DomainChangedEvent.OutputTuple,
      EIP712DomainChangedEvent.OutputObject
    >;
  };
}