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
} from "../../../common";

export interface MorphoAaveV3BulkerGatewayInterface extends Interface {
  getFunction(
    nameOrSignature: "MORPHO" | "WETH" | "execute" | "stETH" | "wstETH"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "MORPHO", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [BigNumberish[], BytesLike[]]
  ): string;
  encodeFunctionData(functionFragment: "stETH", values?: undefined): string;
  encodeFunctionData(functionFragment: "wstETH", values?: undefined): string;

  decodeFunctionResult(functionFragment: "MORPHO", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stETH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wstETH", data: BytesLike): Result;
}

export interface MorphoAaveV3BulkerGateway extends BaseContract {
  connect(runner?: ContractRunner | null): MorphoAaveV3BulkerGateway;
  waitForDeployment(): Promise<this>;

  interface: MorphoAaveV3BulkerGatewayInterface;

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

  WETH: TypedContractMethod<[], [string], "view">;

  execute: TypedContractMethod<
    [actions: BigNumberish[], data: BytesLike[]],
    [void],
    "payable"
  >;

  stETH: TypedContractMethod<[], [string], "view">;

  wstETH: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "MORPHO"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<
    [actions: BigNumberish[], data: BytesLike[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "stETH"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wstETH"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
