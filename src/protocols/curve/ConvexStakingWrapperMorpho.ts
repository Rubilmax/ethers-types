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

export declare namespace ConvexStakingWrapper {
  export type EarnedDataStruct = { token: AddressLike; amount: BigNumberish };

  export type EarnedDataStructOutput = [token: string, amount: bigint] & {
    token: string;
    amount: bigint;
  };
}

export interface ConvexStakingWrapperMorphoInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addRewards"
      | "addTokenReward"
      | "allowance"
      | "approve"
      | "asset"
      | "balanceOf"
      | "collateralVault"
      | "convexBooster"
      | "convexPool"
      | "convexPoolId"
      | "convexToken"
      | "crv"
      | "curveToken"
      | "cvx"
      | "decimals"
      | "decreaseAllowance"
      | "deposit"
      | "depositFor"
      | "earmarkRewards"
      | "earned"
      | "getReward(address,address)"
      | "getReward(address)"
      | "increaseAllowance"
      | "initialize"
      | "invalidateReward"
      | "isInit"
      | "isShutdown"
      | "morpho"
      | "name"
      | "owner"
      | "registeredRewards"
      | "renounceOwnership"
      | "rewardHook"
      | "rewardLength"
      | "rewardRedirect"
      | "rewards"
      | "setApprovals"
      | "setHook"
      | "setMorphoId"
      | "setRewardRedirect"
      | "shutdown"
      | "stake"
      | "symbol"
      | "totalBalanceOf"
      | "totalSupply"
      | "transfer"
      | "transferFrom"
      | "transferOwnership"
      | "underlying"
      | "user_checkpoint"
      | "withdraw"
      | "withdrawAndUnwrap"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Approval"
      | "Deposited"
      | "HookSet"
      | "OwnershipTransferred"
      | "RewardAdded"
      | "RewardInvalidated"
      | "RewardRedirected"
      | "Shutdown"
      | "Transfer"
      | "UserCheckpoint"
      | "Withdrawn"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addRewards",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addTokenReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "allowance",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "approve",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "asset", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "collateralVault",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convexBooster",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convexPool",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convexPoolId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "convexToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "crv", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "curveToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cvx", values?: undefined): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "decreaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "depositFor",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "earmarkRewards",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "earned", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "getReward(address,address)",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getReward(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "increaseAllowance",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "invalidateReward",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "isInit", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isShutdown",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "morpho", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "registeredRewards",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardHook",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardLength",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardRedirect",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "rewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setHook",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setMorphoId",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setRewardRedirect",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "shutdown", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "totalBalanceOf",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transfer",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferFrom",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "user_checkpoint",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndUnwrap",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "addRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addTokenReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "asset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "collateralVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convexBooster",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "convexPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "convexPoolId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "convexToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "crv", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "curveToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cvx", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "decreaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositFor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "earmarkRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "earned", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReward(address,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getReward(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "increaseAllowance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "invalidateReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isInit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isShutdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "morpho", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registeredRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewardHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rewardLength",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardRedirect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setHook", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setMorphoId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setRewardRedirect",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "shutdown", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "user_checkpoint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndUnwrap",
    data: BytesLike
  ): Result;
}

export namespace ApprovalEvent {
  export type InputTuple = [
    owner: AddressLike,
    spender: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [owner: string, spender: string, value: bigint];
  export interface OutputObject {
    owner: string;
    spender: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace DepositedEvent {
  export type InputTuple = [
    _user: AddressLike,
    _account: AddressLike,
    _amount: BigNumberish,
    _wrapped: boolean
  ];
  export type OutputTuple = [
    _user: string,
    _account: string,
    _amount: bigint,
    _wrapped: boolean
  ];
  export interface OutputObject {
    _user: string;
    _account: string;
    _amount: bigint;
    _wrapped: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace HookSetEvent {
  export type InputTuple = [_hook: AddressLike];
  export type OutputTuple = [_hook: string];
  export interface OutputObject {
    _hook: string;
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

export namespace RewardAddedEvent {
  export type InputTuple = [_token: AddressLike];
  export type OutputTuple = [_token: string];
  export interface OutputObject {
    _token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardInvalidatedEvent {
  export type InputTuple = [_rewardToken: AddressLike];
  export type OutputTuple = [_rewardToken: string];
  export interface OutputObject {
    _rewardToken: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RewardRedirectedEvent {
  export type InputTuple = [_account: AddressLike, _forward: AddressLike];
  export type OutputTuple = [_account: string, _forward: string];
  export interface OutputObject {
    _account: string;
    _forward: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ShutdownEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace TransferEvent {
  export type InputTuple = [
    from: AddressLike,
    to: AddressLike,
    value: BigNumberish
  ];
  export type OutputTuple = [from: string, to: string, value: bigint];
  export interface OutputObject {
    from: string;
    to: string;
    value: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UserCheckpointEvent {
  export type InputTuple = [_userA: AddressLike, _userB: AddressLike];
  export type OutputTuple = [_userA: string, _userB: string];
  export interface OutputObject {
    _userA: string;
    _userB: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [
    _user: AddressLike,
    _amount: BigNumberish,
    _unwrapped: boolean
  ];
  export type OutputTuple = [
    _user: string,
    _amount: bigint,
    _unwrapped: boolean
  ];
  export interface OutputObject {
    _user: string;
    _amount: bigint;
    _unwrapped: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ConvexStakingWrapperMorpho extends BaseContract {
  connect(runner?: ContractRunner | null): ConvexStakingWrapperMorpho;
  waitForDeployment(): Promise<this>;

  interface: ConvexStakingWrapperMorphoInterface;

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

  addRewards: TypedContractMethod<[], [void], "nonpayable">;

  addTokenReward: TypedContractMethod<
    [_token: AddressLike],
    [void],
    "nonpayable"
  >;

  allowance: TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;

  approve: TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  asset: TypedContractMethod<[], [string], "view">;

  balanceOf: TypedContractMethod<[account: AddressLike], [bigint], "view">;

  collateralVault: TypedContractMethod<[], [string], "view">;

  convexBooster: TypedContractMethod<[], [string], "view">;

  convexPool: TypedContractMethod<[], [string], "view">;

  convexPoolId: TypedContractMethod<[], [bigint], "view">;

  convexToken: TypedContractMethod<[], [string], "view">;

  crv: TypedContractMethod<[], [string], "view">;

  curveToken: TypedContractMethod<[], [string], "view">;

  cvx: TypedContractMethod<[], [string], "view">;

  decimals: TypedContractMethod<[], [bigint], "view">;

  decreaseAllowance: TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  deposit: TypedContractMethod<
    [_amount: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  depositFor: TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  earmarkRewards: TypedContractMethod<[], [boolean], "nonpayable">;

  earned: TypedContractMethod<
    [_account: AddressLike],
    [ConvexStakingWrapper.EarnedDataStructOutput[]],
    "nonpayable"
  >;

  "getReward(address,address)": TypedContractMethod<
    [_account: AddressLike, _forwardTo: AddressLike],
    [void],
    "nonpayable"
  >;

  "getReward(address)": TypedContractMethod<
    [_account: AddressLike],
    [void],
    "nonpayable"
  >;

  increaseAllowance: TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  initialize: TypedContractMethod<
    [_poolId: BigNumberish],
    [void],
    "nonpayable"
  >;

  invalidateReward: TypedContractMethod<
    [_token: AddressLike],
    [void],
    "nonpayable"
  >;

  isInit: TypedContractMethod<[], [boolean], "view">;

  isShutdown: TypedContractMethod<[], [boolean], "view">;

  morpho: TypedContractMethod<[], [string], "view">;

  name: TypedContractMethod<[], [string], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  registeredRewards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  rewardHook: TypedContractMethod<[], [string], "view">;

  rewardLength: TypedContractMethod<[], [bigint], "view">;

  rewardRedirect: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  rewards: TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint] & {
        reward_token: string;
        reward_pool: string;
        reward_integral: bigint;
        reward_remaining: bigint;
      }
    ],
    "view"
  >;

  setApprovals: TypedContractMethod<[], [void], "nonpayable">;

  setHook: TypedContractMethod<[_hook: AddressLike], [void], "nonpayable">;

  setMorphoId: TypedContractMethod<[_id: BytesLike], [void], "nonpayable">;

  setRewardRedirect: TypedContractMethod<
    [_to: AddressLike],
    [void],
    "nonpayable"
  >;

  shutdown: TypedContractMethod<[], [void], "nonpayable">;

  stake: TypedContractMethod<
    [_amount: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;

  symbol: TypedContractMethod<[], [string], "view">;

  totalBalanceOf: TypedContractMethod<
    [_account: AddressLike],
    [bigint],
    "view"
  >;

  totalSupply: TypedContractMethod<[], [bigint], "view">;

  transfer: TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferFrom: TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  underlying: TypedContractMethod<[], [string], "view">;

  user_checkpoint: TypedContractMethod<
    [_account: AddressLike],
    [boolean],
    "nonpayable"
  >;

  withdraw: TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  withdrawAndUnwrap: TypedContractMethod<
    [_amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addRewards"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addTokenReward"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "allowance"
  ): TypedContractMethod<
    [owner: AddressLike, spender: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "approve"
  ): TypedContractMethod<
    [spender: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "asset"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "balanceOf"
  ): TypedContractMethod<[account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "collateralVault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "convexBooster"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "convexPool"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "convexPoolId"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "convexToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "crv"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "curveToken"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cvx"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "decimals"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "decreaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, subtractedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deposit"
  ): TypedContractMethod<
    [_amount: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "depositFor"
  ): TypedContractMethod<
    [_to: AddressLike, _amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "earmarkRewards"
  ): TypedContractMethod<[], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "earned"
  ): TypedContractMethod<
    [_account: AddressLike],
    [ConvexStakingWrapper.EarnedDataStructOutput[]],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getReward(address,address)"
  ): TypedContractMethod<
    [_account: AddressLike, _forwardTo: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getReward(address)"
  ): TypedContractMethod<[_account: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "increaseAllowance"
  ): TypedContractMethod<
    [spender: AddressLike, addedValue: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_poolId: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "invalidateReward"
  ): TypedContractMethod<[_token: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isInit"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "isShutdown"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "morpho"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "name"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "registeredRewards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rewardHook"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rewardLength"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rewardRedirect"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "rewards"
  ): TypedContractMethod<
    [arg0: BigNumberish],
    [
      [string, string, bigint, bigint] & {
        reward_token: string;
        reward_pool: string;
        reward_integral: bigint;
        reward_remaining: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "setApprovals"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setHook"
  ): TypedContractMethod<[_hook: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setMorphoId"
  ): TypedContractMethod<[_id: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setRewardRedirect"
  ): TypedContractMethod<[_to: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "shutdown"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stake"
  ): TypedContractMethod<
    [_amount: BigNumberish, _to: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "symbol"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "totalBalanceOf"
  ): TypedContractMethod<[_account: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "totalSupply"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "transfer"
  ): TypedContractMethod<
    [recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferFrom"
  ): TypedContractMethod<
    [sender: AddressLike, recipient: AddressLike, amount: BigNumberish],
    [boolean],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "underlying"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "user_checkpoint"
  ): TypedContractMethod<[_account: AddressLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "withdrawAndUnwrap"
  ): TypedContractMethod<[_amount: BigNumberish], [void], "nonpayable">;

  getEvent(
    key: "Approval"
  ): TypedContractEvent<
    ApprovalEvent.InputTuple,
    ApprovalEvent.OutputTuple,
    ApprovalEvent.OutputObject
  >;
  getEvent(
    key: "Deposited"
  ): TypedContractEvent<
    DepositedEvent.InputTuple,
    DepositedEvent.OutputTuple,
    DepositedEvent.OutputObject
  >;
  getEvent(
    key: "HookSet"
  ): TypedContractEvent<
    HookSetEvent.InputTuple,
    HookSetEvent.OutputTuple,
    HookSetEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RewardAdded"
  ): TypedContractEvent<
    RewardAddedEvent.InputTuple,
    RewardAddedEvent.OutputTuple,
    RewardAddedEvent.OutputObject
  >;
  getEvent(
    key: "RewardInvalidated"
  ): TypedContractEvent<
    RewardInvalidatedEvent.InputTuple,
    RewardInvalidatedEvent.OutputTuple,
    RewardInvalidatedEvent.OutputObject
  >;
  getEvent(
    key: "RewardRedirected"
  ): TypedContractEvent<
    RewardRedirectedEvent.InputTuple,
    RewardRedirectedEvent.OutputTuple,
    RewardRedirectedEvent.OutputObject
  >;
  getEvent(
    key: "Shutdown"
  ): TypedContractEvent<
    ShutdownEvent.InputTuple,
    ShutdownEvent.OutputTuple,
    ShutdownEvent.OutputObject
  >;
  getEvent(
    key: "Transfer"
  ): TypedContractEvent<
    TransferEvent.InputTuple,
    TransferEvent.OutputTuple,
    TransferEvent.OutputObject
  >;
  getEvent(
    key: "UserCheckpoint"
  ): TypedContractEvent<
    UserCheckpointEvent.InputTuple,
    UserCheckpointEvent.OutputTuple,
    UserCheckpointEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;

  filters: {
    "Approval(address,address,uint256)": TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;
    Approval: TypedContractEvent<
      ApprovalEvent.InputTuple,
      ApprovalEvent.OutputTuple,
      ApprovalEvent.OutputObject
    >;

    "Deposited(address,address,uint256,bool)": TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;
    Deposited: TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;

    "HookSet(address)": TypedContractEvent<
      HookSetEvent.InputTuple,
      HookSetEvent.OutputTuple,
      HookSetEvent.OutputObject
    >;
    HookSet: TypedContractEvent<
      HookSetEvent.InputTuple,
      HookSetEvent.OutputTuple,
      HookSetEvent.OutputObject
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

    "RewardAdded(address)": TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;
    RewardAdded: TypedContractEvent<
      RewardAddedEvent.InputTuple,
      RewardAddedEvent.OutputTuple,
      RewardAddedEvent.OutputObject
    >;

    "RewardInvalidated(address)": TypedContractEvent<
      RewardInvalidatedEvent.InputTuple,
      RewardInvalidatedEvent.OutputTuple,
      RewardInvalidatedEvent.OutputObject
    >;
    RewardInvalidated: TypedContractEvent<
      RewardInvalidatedEvent.InputTuple,
      RewardInvalidatedEvent.OutputTuple,
      RewardInvalidatedEvent.OutputObject
    >;

    "RewardRedirected(address,address)": TypedContractEvent<
      RewardRedirectedEvent.InputTuple,
      RewardRedirectedEvent.OutputTuple,
      RewardRedirectedEvent.OutputObject
    >;
    RewardRedirected: TypedContractEvent<
      RewardRedirectedEvent.InputTuple,
      RewardRedirectedEvent.OutputTuple,
      RewardRedirectedEvent.OutputObject
    >;

    "Shutdown()": TypedContractEvent<
      ShutdownEvent.InputTuple,
      ShutdownEvent.OutputTuple,
      ShutdownEvent.OutputObject
    >;
    Shutdown: TypedContractEvent<
      ShutdownEvent.InputTuple,
      ShutdownEvent.OutputTuple,
      ShutdownEvent.OutputObject
    >;

    "Transfer(address,address,uint256)": TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;
    Transfer: TypedContractEvent<
      TransferEvent.InputTuple,
      TransferEvent.OutputTuple,
      TransferEvent.OutputObject
    >;

    "UserCheckpoint(address,address)": TypedContractEvent<
      UserCheckpointEvent.InputTuple,
      UserCheckpointEvent.OutputTuple,
      UserCheckpointEvent.OutputObject
    >;
    UserCheckpoint: TypedContractEvent<
      UserCheckpointEvent.InputTuple,
      UserCheckpointEvent.OutputTuple,
      UserCheckpointEvent.OutputObject
    >;

    "Withdrawn(address,uint256,bool)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
  };
}
