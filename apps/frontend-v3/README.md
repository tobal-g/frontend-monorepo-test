# Balancer frontend V3

[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/balancer/frontend-monorepo)

> **Note:** The Balancer Dapp no longer has a pool creation interface. The standalone
> Pool Creator page (`/create`) has been removed, the "Pool creator" entry has been
> removed from the ecosystem links, the "Build" nav popover no longer offers a "Create
> a pool" CTA, and the `BuildPromo` create-a-pool promo card has been removed from the
> Pools page. Users wanting to create new Balancer pools should use the Balancer SDK
> directly, the Balancer subgraph and contracts, or a dedicated third-party pool
> creator tool.

> **Note:** The standalone Swap page (`/swap`) has been removed from the Balancer Dapp.
> Users can no longer navigate to `app.balancer.fi/swap` and the "Swap" entry has been
> removed from the primary navigation. Token swapping is no longer offered as a top-level
> page in the Balancer Dapp; users who want to swap tokens through Balancer should use
> the swap action available on individual pool detail pages, or use a third-party
> aggregator (e.g. 1inch, Matcha, Paraswap, CoW Swap).

> **Note:** The Liquidity Bootstrapping Pool (LBP) creation flow (`/lbp/create`) has been
> removed from this app. Existing LBPs remain viewable from the standard pool detail pages,
> but new LBPs can no longer be created from this frontend.

> **Note:** Support for the **Fraxtal** network has been fully removed from this app as
> a continuation of the BIP-906 sunset
> ([forum link](https://forum.balancer.fi/t/bip-906-deprecation-of-polygon-zkevm-fraxtal-and-mode/6951)).
> Fraxtal is no longer in `supportedNetworks`, its network config and chain icon have been
> deleted, and per-chain maps (RPCs, slugs, colors, deprecation helpers, tests) no longer
> reference it. Contracts remain deployed on-chain but are no longer accessible via this UI.

## Getting Started

_This project uses `pnpm`, if you haven't already installed it you can find the documentation here:
https://pnpm.io/installation_

To setup the development environment, first clone the repo:

```bash
git clone https://github.com/balancer/frontend-monorepo.git && cd frontend-monorepo/apps/frontend-v3
```

Copy the `.env.template` file to `.env.local`:

```bash
cp .env.template .env.local
```

Copy the `.env.local` file to `../../packages/lib`:

```bash
cp .env.local ../../packages/lib
```

Next, install dependencies:

```bash
cd ../..
pnpm install
```

Then, run the development server:

```bash
pnpm dev:bal
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Developing on a local fork

1. Create a `.env.local` file in the root of project:

```
ETHEREUM_RPC_URL=xxx
BASE_RPC_URL=xxx
GNOSIS_RPC_URL=xxx
```

2. Start local anvil fork

```
make fork-ethereum
```

3. Run the development server in fork mode:

```
pnpm dev:bal:fork
```

## Testing

See [Testing instructions](../../README.md#testing).

## Developing in Windows

To develop in Windows you need to use WSL2. Learn more about it
[here](https://learn.microsoft.com/en-us/windows/wsl/about).

With WSL2 all environment variables will be correctly set without having to use `cross-env`.
