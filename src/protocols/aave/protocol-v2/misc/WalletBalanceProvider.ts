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
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";

export interface WalletBalanceProviderInterface extends utils.Interface {
  functions: {
    "balanceOf(address,address)": FunctionFragment;
    "batchBalanceOf(address[],address[])": FunctionFragment;
    "getUserWalletBalances(address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "balanceOf"
      | "batchBalanceOf"
      | "getUserWalletBalances"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "batchBalanceOf",
    values: [string[], string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserWalletBalances",
    values: [string, string]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchBalanceOf",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserWalletBalances",
    data: BytesLike
  ): Result;

  events: {};
}

export interface WalletBalanceProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WalletBalanceProviderInterface;

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
    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    batchBalanceOf(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getUserWalletBalances(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  balanceOf(
    user: string,
    token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  batchBalanceOf(
    users: string[],
    tokens: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getUserWalletBalances(
    provider: string,
    user: string,
    overrides?: CallOverrides
  ): Promise<[string[], BigNumber[]]>;

  callStatic: {
    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchBalanceOf(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getUserWalletBalances(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<[string[], BigNumber[]]>;
  };

  filters: {};

  estimateGas: {
    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    batchBalanceOf(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserWalletBalances(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      user: string,
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    batchBalanceOf(
      users: string[],
      tokens: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserWalletBalances(
      provider: string,
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
