const mongoose = require("mongoose");
const {
  DomainStatus,
  EligibilityStatus,
  TransactionStatus,
} = require("../constants");

const AccountSchema = mongoose.Schema(
  {
    stxPrivateKey: {
      type: String,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    salt: {
      type: String,
    },
    testnetAddress: {
      type: String,
    },
    mainnetAddress: {
      type: String,
    },
    balance: Number,
    username: {
      type: String,
    },
    loadBalanceTransactionStatus: {
      type: String,
      enum: TransactionStatus,
      default: TransactionStatus.NEW,
    },
    loadBalanceTransactionHash: {
      type: String,
    },
    preOrderTransactionStatus: {
      type: String,
      enum: TransactionStatus,
      default: TransactionStatus.NEW,
    },
    preOrderTransactionHash: {
      type: String,
    },
    registerTransactionStatus: {
      type: String,
      enum: TransactionStatus,
      default: TransactionStatus.NEW,
    },
    registerTransactionHash: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Account", AccountSchema);
