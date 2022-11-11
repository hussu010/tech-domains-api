const { StacksTestnet, StacksMainnet } = require("@stacks/network");

const DomainStatus = {
  NEW: "NEW",
  AVAILABLE: "AVAILABLE",
  ACQUIRED: "ACQUIRED",
  TAKEN: "TAKEN",
  SOLD: "SOLD",
};

const EligibilityStatus = {
  NEW: "NEW",
  ELIGIBLE: "ELIGIBLE",
  INELIGIBLE: "INELIGIBLE",
};

const TransactionStatus = {
  NEW: "NEW",
  PENDING: "PENDING",
  CONFIRMED: "CONFIRMED",
  FAILED: "FAILED",
};

const NETWORK =
  process.env.NETWORK === "mainnet" ? new StacksMainnet() : new StacksTestnet();

const WALLET_SECRET_KEY =
  process.env.NETWORK === "mainnet"
    ? process.env.MAINNET_WALLET_SECRET_KEY
    : process.env.TESTNET_WALLET_SECRET_KEY;
const WALLET_PASSWORD =
  process.env.NETWORK === "mainnet"
    ? process.env.MAINNET_WALLET_PASSWORD
    : process.env.TESTNET_WALLET_PASSWORD;

const STX_AMOUNT_TO_LOAD = 2400000n;
const NETWORK_FEE = 10000n;
const STX_AMOUNT_TO_BURN = 2000000n;

module.exports = {
  DomainStatus,
  EligibilityStatus,
  WALLET_SECRET_KEY,
  WALLET_PASSWORD,
  STX_AMOUNT_TO_LOAD,
  NETWORK,
  NETWORK_FEE,
  STX_AMOUNT_TO_BURN,
  TransactionStatus,
};
