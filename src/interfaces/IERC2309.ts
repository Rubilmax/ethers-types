/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  FunctionFragment,
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
} from "../common";

export interface IERC2309Interface extends Interface {
  getEvent(nameOrSignatureOrTopic: "ConsecutiveTransfer"): EventFragment;
}

export namespace ConsecutiveTransferEvent {
  export type InputTuple = [
    fromTokenId: BigNumberish,
    toTokenId: BigNumberish,
    fromAddress: AddressLike,
    toAddress: AddressLike
  ];
  export type OutputTuple = [
    fromTokenId: bigint,
    toTokenId: bigint,
    fromAddress: string,
    toAddress: string
  ];
  export interface OutputObject {
    fromTokenId: bigint;
    toTokenId: bigint;
    fromAddress: string;
    toAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC2309 extends BaseContract {
  connect(runner?: ContractRunner | null): IERC2309;
  waitForDeployment(): Promise<this>;

  interface: IERC2309Interface;

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

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getEvent(
    key: "ConsecutiveTransfer"
  ): TypedContractEvent<
    ConsecutiveTransferEvent.InputTuple,
    ConsecutiveTransferEvent.OutputTuple,
    ConsecutiveTransferEvent.OutputObject
  >;

  filters: {
    "ConsecutiveTransfer(uint256,uint256,address,address)": TypedContractEvent<
      ConsecutiveTransferEvent.InputTuple,
      ConsecutiveTransferEvent.OutputTuple,
      ConsecutiveTransferEvent.OutputObject
    >;
    ConsecutiveTransfer: TypedContractEvent<
      ConsecutiveTransferEvent.InputTuple,
      ConsecutiveTransferEvent.OutputTuple,
      ConsecutiveTransferEvent.OutputObject
    >;
  };
}
