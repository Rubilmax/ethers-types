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

export interface BackedWhitelistControllerAggregatorInterface
  extends Interface {
  getFunction(
    nameOrSignature:
      | "add"
      | "controllers"
      | "initialize"
      | "isAuthorizedCaller"
      | "isCallerAdmin"
      | "isWhitelisted"
      | "owner"
      | "remove"
      | "renounceOwnership"
      | "setCaller"
      | "setCallerAdmin"
      | "transferOwnership"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedController"
      | "Initialized"
      | "OwnershipTransferred"
      | "RemovedController"
      | "UpdatedCaller"
      | "UpdatedCallerAdmin"
  ): EventFragment;

  encodeFunctionData(functionFragment: "add", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "controllers",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isAuthorizedCaller",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isCallerAdmin",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isWhitelisted",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setCaller",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "setCallerAdmin",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "controllers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isAuthorizedCaller",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isCallerAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setCaller", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setCallerAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
}

export namespace AddedControllerEvent {
  export type InputTuple = [controller: AddressLike];
  export type OutputTuple = [controller: string];
  export interface OutputObject {
    controller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemovedControllerEvent {
  export type InputTuple = [controller: AddressLike];
  export type OutputTuple = [controller: string];
  export interface OutputObject {
    controller: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedCallerEvent {
  export type InputTuple = [caller: AddressLike, newState: boolean];
  export type OutputTuple = [caller: string, newState: boolean];
  export interface OutputObject {
    caller: string;
    newState: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedCallerAdminEvent {
  export type InputTuple = [callerAdmin: AddressLike, newState: boolean];
  export type OutputTuple = [callerAdmin: string, newState: boolean];
  export interface OutputObject {
    callerAdmin: string;
    newState: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BackedWhitelistControllerAggregator extends BaseContract {
  connect(runner?: ContractRunner | null): BackedWhitelistControllerAggregator;
  waitForDeployment(): Promise<this>;

  interface: BackedWhitelistControllerAggregatorInterface;

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

  add: TypedContractMethod<[controller: AddressLike], [void], "nonpayable">;

  controllers: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  initialize: TypedContractMethod<[], [void], "nonpayable">;

  isAuthorizedCaller: TypedContractMethod<
    [arg0: AddressLike],
    [boolean],
    "view"
  >;

  isCallerAdmin: TypedContractMethod<[arg0: AddressLike], [boolean], "view">;

  isWhitelisted: TypedContractMethod<
    [addressToCheck: AddressLike],
    [
      [boolean, string] & {
        isWhitelisted: boolean;
        whitelistController: string;
      }
    ],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  remove: TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  setCaller: TypedContractMethod<
    [caller: AddressLike, value: boolean],
    [void],
    "nonpayable"
  >;

  setCallerAdmin: TypedContractMethod<
    [toSet: AddressLike, value: boolean],
    [void],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "add"
  ): TypedContractMethod<[controller: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "controllers"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isAuthorizedCaller"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isCallerAdmin"
  ): TypedContractMethod<[arg0: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "isWhitelisted"
  ): TypedContractMethod<
    [addressToCheck: AddressLike],
    [
      [boolean, string] & {
        isWhitelisted: boolean;
        whitelistController: string;
      }
    ],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "remove"
  ): TypedContractMethod<[index: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setCaller"
  ): TypedContractMethod<
    [caller: AddressLike, value: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setCallerAdmin"
  ): TypedContractMethod<
    [toSet: AddressLike, value: boolean],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "AddedController"
  ): TypedContractEvent<
    AddedControllerEvent.InputTuple,
    AddedControllerEvent.OutputTuple,
    AddedControllerEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RemovedController"
  ): TypedContractEvent<
    RemovedControllerEvent.InputTuple,
    RemovedControllerEvent.OutputTuple,
    RemovedControllerEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedCaller"
  ): TypedContractEvent<
    UpdatedCallerEvent.InputTuple,
    UpdatedCallerEvent.OutputTuple,
    UpdatedCallerEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedCallerAdmin"
  ): TypedContractEvent<
    UpdatedCallerAdminEvent.InputTuple,
    UpdatedCallerAdminEvent.OutputTuple,
    UpdatedCallerAdminEvent.OutputObject
  >;

  filters: {
    "AddedController(address)": TypedContractEvent<
      AddedControllerEvent.InputTuple,
      AddedControllerEvent.OutputTuple,
      AddedControllerEvent.OutputObject
    >;
    AddedController: TypedContractEvent<
      AddedControllerEvent.InputTuple,
      AddedControllerEvent.OutputTuple,
      AddedControllerEvent.OutputObject
    >;

    "Initialized(uint8)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RemovedController(address)": TypedContractEvent<
      RemovedControllerEvent.InputTuple,
      RemovedControllerEvent.OutputTuple,
      RemovedControllerEvent.OutputObject
    >;
    RemovedController: TypedContractEvent<
      RemovedControllerEvent.InputTuple,
      RemovedControllerEvent.OutputTuple,
      RemovedControllerEvent.OutputObject
    >;

    "UpdatedCaller(address,bool)": TypedContractEvent<
      UpdatedCallerEvent.InputTuple,
      UpdatedCallerEvent.OutputTuple,
      UpdatedCallerEvent.OutputObject
    >;
    UpdatedCaller: TypedContractEvent<
      UpdatedCallerEvent.InputTuple,
      UpdatedCallerEvent.OutputTuple,
      UpdatedCallerEvent.OutputObject
    >;

    "UpdatedCallerAdmin(address,bool)": TypedContractEvent<
      UpdatedCallerAdminEvent.InputTuple,
      UpdatedCallerAdminEvent.OutputTuple,
      UpdatedCallerAdminEvent.OutputObject
    >;
    UpdatedCallerAdmin: TypedContractEvent<
      UpdatedCallerAdminEvent.InputTuple,
      UpdatedCallerAdminEvent.OutputTuple,
      UpdatedCallerAdminEvent.OutputObject
    >;
  };
}
