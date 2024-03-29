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
} from "../../../common";

export type FlowCapsStruct = { maxIn: BigNumberish; maxOut: BigNumberish };

export type FlowCapsStructOutput = [maxIn: bigint, maxOut: bigint] & {
  maxIn: bigint;
  maxOut: bigint;
};

export type FlowCapsConfigStruct = { id: BytesLike; caps: FlowCapsStruct };

export type FlowCapsConfigStructOutput = [
  id: string,
  caps: FlowCapsStructOutput
] & { id: string; caps: FlowCapsStructOutput };

export type MarketParamsStruct = {
  loanToken: AddressLike;
  collateralToken: AddressLike;
  oracle: AddressLike;
  irm: AddressLike;
  lltv: BigNumberish;
};

export type MarketParamsStructOutput = [
  loanToken: string,
  collateralToken: string,
  oracle: string,
  irm: string,
  lltv: bigint
] & {
  loanToken: string;
  collateralToken: string;
  oracle: string;
  irm: string;
  lltv: bigint;
};

export type WithdrawalStruct = {
  marketParams: MarketParamsStruct;
  amount: BigNumberish;
};

export type WithdrawalStructOutput = [
  marketParams: MarketParamsStructOutput,
  amount: bigint
] & { marketParams: MarketParamsStructOutput; amount: bigint };

export interface PublicAllocatorInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "MORPHO"
      | "accruedFee"
      | "admin"
      | "fee"
      | "flowCaps"
      | "reallocateTo"
      | "setAdmin"
      | "setFee"
      | "setFlowCaps"
      | "transferFee"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "PublicReallocateTo"
      | "PublicWithdrawal"
      | "SetAdmin"
      | "SetFee"
      | "SetFlowCaps"
      | "TransferFee"
  ): EventFragment;

  encodeFunctionData(functionFragment: "MORPHO", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "accruedFee",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "admin", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "fee", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "flowCaps",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "reallocateTo",
    values: [AddressLike, WithdrawalStruct[], MarketParamsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setAdmin",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setFee",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setFlowCaps",
    values: [AddressLike, FlowCapsConfigStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFee",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "MORPHO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "accruedFee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fee", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flowCaps", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "reallocateTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setAdmin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFee", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setFlowCaps",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferFee",
    data: BytesLike
  ): Result;
}

export namespace PublicReallocateToEvent {
  export type InputTuple = [
    sender: AddressLike,
    vault: AddressLike,
    supplyMarketId: BytesLike,
    suppliedAssets: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    vault: string,
    supplyMarketId: string,
    suppliedAssets: bigint
  ];
  export interface OutputObject {
    sender: string;
    vault: string;
    supplyMarketId: string;
    suppliedAssets: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PublicWithdrawalEvent {
  export type InputTuple = [
    sender: AddressLike,
    vault: AddressLike,
    id: BytesLike,
    withdrawnAssets: BigNumberish
  ];
  export type OutputTuple = [
    sender: string,
    vault: string,
    id: string,
    withdrawnAssets: bigint
  ];
  export interface OutputObject {
    sender: string;
    vault: string;
    id: string;
    withdrawnAssets: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetAdminEvent {
  export type InputTuple = [
    sender: AddressLike,
    vault: AddressLike,
    admin: AddressLike
  ];
  export type OutputTuple = [sender: string, vault: string, admin: string];
  export interface OutputObject {
    sender: string;
    vault: string;
    admin: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetFeeEvent {
  export type InputTuple = [
    sender: AddressLike,
    vault: AddressLike,
    fee: BigNumberish
  ];
  export type OutputTuple = [sender: string, vault: string, fee: bigint];
  export interface OutputObject {
    sender: string;
    vault: string;
    fee: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetFlowCapsEvent {
  export type InputTuple = [
    sender: AddressLike,
    vault: AddressLike,
    config: FlowCapsConfigStruct[]
  ];
  export type OutputTuple = [
    sender: string,
    vault: string,
    config: FlowCapsConfigStructOutput[]
  ];
  export interface OutputObject {
    sender: string;
    vault: string;
    config: FlowCapsConfigStructOutput[];
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferFeeEvent {
  export type InputTuple = [
    sender: AddressLike,
    vault: AddressLike,
    amount: BigNumberish,
    feeRecipient: AddressLike
  ];
  export type OutputTuple = [
    sender: string,
    vault: string,
    amount: bigint,
    feeRecipient: string
  ];
  export interface OutputObject {
    sender: string;
    vault: string;
    amount: bigint;
    feeRecipient: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface PublicAllocator extends BaseContract {
  connect(runner?: ContractRunner | null): PublicAllocator;
  waitForDeployment(): Promise<this>;

  interface: PublicAllocatorInterface;

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

  MORPHO: TypedContractMethod<[], [string], "view">;

  accruedFee: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  admin: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  fee: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  flowCaps: TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike],
    [[bigint, bigint] & { maxIn: bigint; maxOut: bigint }],
    "view"
  >;

  reallocateTo: TypedContractMethod<
    [
      vault: AddressLike,
      withdrawals: WithdrawalStruct[],
      supplyMarketParams: MarketParamsStruct
    ],
    [void],
    "payable"
  >;

  setAdmin: TypedContractMethod<
    [vault: AddressLike, newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;

  setFee: TypedContractMethod<
    [vault: AddressLike, newFee: BigNumberish],
    [void],
    "nonpayable"
  >;

  setFlowCaps: TypedContractMethod<
    [vault: AddressLike, config: FlowCapsConfigStruct[]],
    [void],
    "nonpayable"
  >;

  transferFee: TypedContractMethod<
    [vault: AddressLike, feeRecipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MORPHO"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "accruedFee"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "admin"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "fee"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "flowCaps"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike],
    [[bigint, bigint] & { maxIn: bigint; maxOut: bigint }],
    "view"
  >;
  getFunction(
    nameOrSignature: "reallocateTo"
  ): TypedContractMethod<
    [
      vault: AddressLike,
      withdrawals: WithdrawalStruct[],
      supplyMarketParams: MarketParamsStruct
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setAdmin"
  ): TypedContractMethod<
    [vault: AddressLike, newAdmin: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFee"
  ): TypedContractMethod<
    [vault: AddressLike, newFee: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setFlowCaps"
  ): TypedContractMethod<
    [vault: AddressLike, config: FlowCapsConfigStruct[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFee"
  ): TypedContractMethod<
    [vault: AddressLike, feeRecipient: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "PublicReallocateTo"
  ): TypedContractEvent<
    PublicReallocateToEvent.InputTuple,
    PublicReallocateToEvent.OutputTuple,
    PublicReallocateToEvent.OutputObject
  >;
  getEvent(
    key: "PublicWithdrawal"
  ): TypedContractEvent<
    PublicWithdrawalEvent.InputTuple,
    PublicWithdrawalEvent.OutputTuple,
    PublicWithdrawalEvent.OutputObject
  >;
  getEvent(
    key: "SetAdmin"
  ): TypedContractEvent<
    SetAdminEvent.InputTuple,
    SetAdminEvent.OutputTuple,
    SetAdminEvent.OutputObject
  >;
  getEvent(
    key: "SetFee"
  ): TypedContractEvent<
    SetFeeEvent.InputTuple,
    SetFeeEvent.OutputTuple,
    SetFeeEvent.OutputObject
  >;
  getEvent(
    key: "SetFlowCaps"
  ): TypedContractEvent<
    SetFlowCapsEvent.InputTuple,
    SetFlowCapsEvent.OutputTuple,
    SetFlowCapsEvent.OutputObject
  >;
  getEvent(
    key: "TransferFee"
  ): TypedContractEvent<
    TransferFeeEvent.InputTuple,
    TransferFeeEvent.OutputTuple,
    TransferFeeEvent.OutputObject
  >;

  filters: {
    "PublicReallocateTo(address,address,bytes32,uint256)": TypedContractEvent<
      PublicReallocateToEvent.InputTuple,
      PublicReallocateToEvent.OutputTuple,
      PublicReallocateToEvent.OutputObject
    >;
    PublicReallocateTo: TypedContractEvent<
      PublicReallocateToEvent.InputTuple,
      PublicReallocateToEvent.OutputTuple,
      PublicReallocateToEvent.OutputObject
    >;

    "PublicWithdrawal(address,address,bytes32,uint256)": TypedContractEvent<
      PublicWithdrawalEvent.InputTuple,
      PublicWithdrawalEvent.OutputTuple,
      PublicWithdrawalEvent.OutputObject
    >;
    PublicWithdrawal: TypedContractEvent<
      PublicWithdrawalEvent.InputTuple,
      PublicWithdrawalEvent.OutputTuple,
      PublicWithdrawalEvent.OutputObject
    >;

    "SetAdmin(address,address,address)": TypedContractEvent<
      SetAdminEvent.InputTuple,
      SetAdminEvent.OutputTuple,
      SetAdminEvent.OutputObject
    >;
    SetAdmin: TypedContractEvent<
      SetAdminEvent.InputTuple,
      SetAdminEvent.OutputTuple,
      SetAdminEvent.OutputObject
    >;

    "SetFee(address,address,uint256)": TypedContractEvent<
      SetFeeEvent.InputTuple,
      SetFeeEvent.OutputTuple,
      SetFeeEvent.OutputObject
    >;
    SetFee: TypedContractEvent<
      SetFeeEvent.InputTuple,
      SetFeeEvent.OutputTuple,
      SetFeeEvent.OutputObject
    >;

    "SetFlowCaps(address,address,tuple[])": TypedContractEvent<
      SetFlowCapsEvent.InputTuple,
      SetFlowCapsEvent.OutputTuple,
      SetFlowCapsEvent.OutputObject
    >;
    SetFlowCaps: TypedContractEvent<
      SetFlowCapsEvent.InputTuple,
      SetFlowCapsEvent.OutputTuple,
      SetFlowCapsEvent.OutputObject
    >;

    "TransferFee(address,address,uint256,address)": TypedContractEvent<
      TransferFeeEvent.InputTuple,
      TransferFeeEvent.OutputTuple,
      TransferFeeEvent.OutputObject
    >;
    TransferFee: TypedContractEvent<
      TransferFeeEvent.InputTuple,
      TransferFeeEvent.OutputTuple,
      TransferFeeEvent.OutputObject
    >;
  };
}
