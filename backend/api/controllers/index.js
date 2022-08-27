const employeeData = require("../../constants/response");

const getEmployees = (req, res) => {
  const responseFromDB = [employeeData];

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

module.exports = { getEmployees };
