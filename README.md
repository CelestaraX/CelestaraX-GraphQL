# Mammothon Subgraph

This subgraph indexes events from the Web3ite contract on the Mammothon G2 network. It tracks page creation, updates, ownership changes, votes, and other interactions with Web3ite pages.

## Setup

1. Install dependencies:
```bash
npm install -g @graphprotocol/graph-cli@latest
```
2. Generate types:
```bash
graph codegen
```
3. Build the subgraph:
```
graph build
```
4. Deploy the subgraph:
```
graph deploy \
  --node [Your node port] \
  [subgraph name]
```
