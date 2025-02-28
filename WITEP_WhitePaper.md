# WITEP Token White Paper

WITEP (Witep Token) is a TRC-20 token on Tron, designed for a secure, transparent decentralized ecosystem.

## Token Overview

- **Name**: Witep Token
- **Symbol**: WITEP
- **Total Supply**: 52,000,000 WITEP
- **Decimals**: 18
- **Standard**: TRC-20
- **Blockchain**: Tron

## Purpose

WITEP aims to support:
- Liquidity on Tron DEXs (e.g., SunSwap V3).
- Long-term stability via vesting.
- Community-driven utility.

## Allocation

| Segment           | Amount (WITEP) | Percentage | Details                          |
|-------------------|----------------|------------|----------------------------------|
| Liquidity Pool    | 20,000,000     | 38.46%     | SunSwap V3 pool                  |
| Locked Reserve    | 10,000,000     | 19.23%     | 10-year vesting, 1M/year unlock  |
| Team/Development  | 22,000,000     | 42.31%     | Future growth and rewards        |

## Technical Details

- **Fixed Supply**: No minting or burning, 52M WITEP total.
- **Transfer**: Direct `transfer` only, no delegated allowances.
- **Lockup**: 10M WITEP locked, unlocks 1M annually over 10 years.
- **Contract**: Solidity 0.8.0, TRC-20 compatible.

```solidity
contract WITEP {
    string public constant name = "Witep Token";
    string public constant symbol = "WITEP";
    uint8 public constant decimals = 18;
    uint256 public constant totalSupply = 52_000_000 * 10**18;
    // Full code: See WITEP.sol
}
