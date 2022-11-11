const paginate = require("express-paginate");

const Domain = require("../models/Domain");

const getAllDomains = async (req, res) => {
  try {
    const domains = await Domain.find({})
      .limit(req.query.limit)
      .skip(req.skip)
      .lean();
    const domainsCount = await Domain.count({});
    const pageCount = Math.ceil(domainsCount / req.query.limit);
    const hasMorePages = paginate.hasNextPages(req)(pageCount);

    return res.json({
      count: domainsCount,
      ...(hasMorePages && { next: paginate.href(req)(pageCount) }),
      previous: paginate.href(req)(true),
      data: domains,
    });
  } catch (err) {
    return res.status(500).json(err);
  }
};

module.exports = { getAllDomains };
