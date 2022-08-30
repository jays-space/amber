const data = require("../../constants/response");

// resource that queries the db
// name of resource matches the name in the spec document
const getCandidates = (req, res) => {
  const responseFromDB = [data];

  res.json({
    results: responseFromDB,
    info: {
      seed: "934a8f5063e7b2ec",
      results: responseFromDB.length,
      page: 1,
      version: "1.3",
    },
  });
};

module.exports = { getCandidates };
