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
  AddressLike,
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
} from "../../../../common";

export interface AaveV3L2EncoderInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "POOL"
      | "encodeBorrowParams"
      | "encodeLiquidationCall"
      | "encodeRebalanceStableBorrowRate"
      | "encodeRepayParams"
      | "encodeRepayWithATokensParams"
      | "encodeRepayWithPermitParams"
      | "encodeSetUserUseReserveAsCollateral"
      | "encodeSupplyParams"
      | "encodeSupplyWithPermitParams"
      | "encodeSwapBorrowRateMode"
      | "encodeWithdrawParams"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "POOL", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "encodeBorrowParams",
    values: [AddressLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeLiquidationCall",
    values: [AddressLike, AddressLike, AddressLike, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeRebalanceStableBorrowRate",
    values: [AddressLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeRepayParams",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeRepayWithATokensParams",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeRepayWithPermitParams",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSetUserUseReserveAsCollateral",
    values: [AddressLike, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSupplyParams",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSupplyWithPermitParams",
    values: [
      AddressLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeSwapBorrowRateMode",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "encodeWithdrawParams",
    values: [AddressLike, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "POOL", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "encodeBorrowParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeLiquidationCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeRebalanceStableBorrowRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeRepayParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeRepayWithATokensParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeRepayWithPermitParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeSetUserUseReserveAsCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeSupplyParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeSupplyWithPermitParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeSwapBorrowRateMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "encodeWithdrawParams",
    data: BytesLike
  ): Result;
}

export interface AaveV3L2Encoder extends BaseContract {
  connect(runner?: ContractRunner | null): AaveV3L2Encoder;
  waitForDeployment(): Promise<this>;

  interface: AaveV3L2EncoderInterface;

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

  POOL: TypedContractMethod<[], [string], "view">;

  encodeBorrowParams: TypedContractMethod<
    [
      asset: AddressLike,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      referralCode: BigNumberish
    ],
    [string],
    "view"
  >;

  encodeLiquidationCall: TypedContractMethod<
    [
      collateralAsset: AddressLike,
      debtAsset: AddressLike,
      user: AddressLike,
      debtToCover: BigNumberish,
      receiveAToken: boolean
    ],
    [[string, string]],
    "view"
  >;

  encodeRebalanceStableBorrowRate: TypedContractMethod<
    [asset: AddressLike, user: AddressLike],
    [string],
    "view"
  >;

  encodeRepayParams: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish, interestRateMode: BigNumberish],
    [string],
    "view"
  >;

  encodeRepayWithATokensParams: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish, interestRateMode: BigNumberish],
    [string],
    "view"
  >;

  encodeRepayWithPermitParams: TypedContractMethod<
    [
      asset: AddressLike,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike
    ],
    [[string, string, string]],
    "view"
  >;

  encodeSetUserUseReserveAsCollateral: TypedContractMethod<
    [asset: AddressLike, useAsCollateral: boolean],
    [string],
    "view"
  >;

  encodeSupplyParams: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish, referralCode: BigNumberish],
    [string],
    "view"
  >;

  encodeSupplyWithPermitParams: TypedContractMethod<
    [
      asset: AddressLike,
      amount: BigNumberish,
      referralCode: BigNumberish,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike
    ],
    [[string, string, string]],
    "view"
  >;

  encodeSwapBorrowRateMode: TypedContractMethod<
    [asset: AddressLike, interestRateMode: BigNumberish],
    [string],
    "view"
  >;

  encodeWithdrawParams: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [string],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "POOL"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "encodeBorrowParams"
  ): TypedContractMethod<
    [
      asset: AddressLike,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      referralCode: BigNumberish
    ],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeLiquidationCall"
  ): TypedContractMethod<
    [
      collateralAsset: AddressLike,
      debtAsset: AddressLike,
      user: AddressLike,
      debtToCover: BigNumberish,
      receiveAToken: boolean
    ],
    [[string, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeRebalanceStableBorrowRate"
  ): TypedContractMethod<
    [asset: AddressLike, user: AddressLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeRepayParams"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish, interestRateMode: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeRepayWithATokensParams"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish, interestRateMode: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeRepayWithPermitParams"
  ): TypedContractMethod<
    [
      asset: AddressLike,
      amount: BigNumberish,
      interestRateMode: BigNumberish,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike
    ],
    [[string, string, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeSetUserUseReserveAsCollateral"
  ): TypedContractMethod<
    [asset: AddressLike, useAsCollateral: boolean],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeSupplyParams"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish, referralCode: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeSupplyWithPermitParams"
  ): TypedContractMethod<
    [
      asset: AddressLike,
      amount: BigNumberish,
      referralCode: BigNumberish,
      deadline: BigNumberish,
      permitV: BigNumberish,
      permitR: BytesLike,
      permitS: BytesLike
    ],
    [[string, string, string]],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeSwapBorrowRateMode"
  ): TypedContractMethod<
    [asset: AddressLike, interestRateMode: BigNumberish],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "encodeWithdrawParams"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [string],
    "view"
  >;

  filters: {};
}
