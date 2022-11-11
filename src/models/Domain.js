const mongoose = require("mongoose");
const { DomainStatus, EligibilityStatus } = require("../constants");

const DomainSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 264,
    },
    status: {
      type: String,
      enum: DomainStatus,
      default: DomainStatus.NEW,
    },
    price: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Domain", DomainSchema);
