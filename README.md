# ethers-types

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> 🛟 Making web3 more predictable & safer, 1 type at a time!

## Install

```bash
npm install ethers-types
```

```bash
yarn add ethers-types
```

---

## Getting Started

Import your favorite protocol's contract types directly into your TypeScript code:

```typescript
import { getDefaultProvider } from "ethers";
import { MorphoAaveV3__factory } from "ethers-types/factories/protocols/morpho/aave-v3/MorphoAaveV3__factory";
import { ERC20__factory } from "ethers-types/factories/token/ERC20/ERC20__factory";

const provider = getDefaultProvider();

const dai = ERC20__factory.connect("0x6B175474E89094C44Da98b954EedeAC495271d0F", provider);
const ma3Eth = MorphoAaveV3__factory.connect("0x33333aea097c193e66081E930c33020272b33333", provider);
```

You can even use [ethers-multicall-provider](https://github.com/Rubilmax/ethers-multicall-provider) to batch your RPC calls and load responses faster!

```typescript
import { getDefaultProvider } from "ethers";
import { MorphoAaveV3__factory } from "ethers-types/factories/protocols/morpho/aave-v3/MorphoAaveV3__factory";
import { ERC20__factory } from "ethers-types/factories/token/ERC20/ERC20__factory";

const provider = MulticallWrapper.wrap(getDefaultProvider());

const dai = ERC20__factory.connect("0x6B175474E89094C44Da98b954EedeAC495271d0F", provider);

dai.symbol().then(console.log);
dai.decimals().then(console.log);
```

[build-img]: https://github.com/Rubilmax/ethers-types/actions/workflows/release.yml/badge.svg
[build-url]: https://github.com/Rubilmax/ethers-types/actions/workflows/release.yml
[downloads-img]: https://img.shields.io/npm/dt/ethers-types
[downloads-url]: https://www.npmtrends.com/ethers-types
[npm-img]: https://img.shields.io/npm/v/ethers-types
[npm-url]: https://www.npmjs.com/package/ethers-types
[issues-img]: https://img.shields.io/github/issues/Rubilmax/ethers-types
[issues-url]: https://github.com/Rubilmax/ethers-types/issues
[semantic-release-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release
[commitizen-img]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli/
