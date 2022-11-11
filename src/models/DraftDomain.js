const mongoose = require("mongoose");
const { DomainStatus, EligibilityStatus } = require("../constants");

const DraftDomainSchema = mongoose.Schema(
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
    partOfSpeech: {
      type: String,
    },
    eligibilityStatus: {
      type: String,
      enum: EligibilityStatus,
      default: EligibilityStatus.NEW,
    },
    frequency: {
      type: Number,
    },
    definition: {
      type: String,
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

module.exports = mongoose.model("DraftDomain", DraftDomainSchema);
