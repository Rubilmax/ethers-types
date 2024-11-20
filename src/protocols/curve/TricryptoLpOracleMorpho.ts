/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../common";

export interface TricryptoLpOracleMorphoInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "BASE_FEED"
      | "CRVUSD_FEED"
      | "CURVE_TRI_POOL"
      | "LIDO_FEED"
      | "SCALE_FACTOR"
      | "price"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE_FEED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CRVUSD_FEED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "CURVE_TRI_POOL",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "LIDO_FEED", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SCALE_FACTOR",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "price", values?: undefined): string;

  decodeFunctionResult(functionFragment: "BASE_FEED", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CRVUSD_FEED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "CURVE_TRI_POOL",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "LIDO_FEED", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "SCALE_FACTOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "price", data: BytesLike): Result;
}

export interface TricryptoLpOracleMorpho extends BaseContract {
  connect(runner?: ContractRunner | null): TricryptoLpOracleMorpho;
  waitForDeployment(): Promise<this>;

  interface: TricryptoLpOracleMorphoInterface;

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

  BASE_FEED: TypedContractMethod<[], [string], "view">;

  CRVUSD_FEED: TypedContractMethod<[], [string], "view">;

  CURVE_TRI_POOL: TypedContractMethod<[], [string], "view">;

  LIDO_FEED: TypedContractMethod<[], [string], "view">;

  SCALE_FACTOR: TypedContractMethod<[], [bigint], "view">;

  price: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "BASE_FEED"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CRVUSD_FEED"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "CURVE_TRI_POOL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "LIDO_FEED"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "SCALE_FACTOR"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "price"
  ): TypedContractMethod<[], [bigint], "view">;

  filters: {};
}