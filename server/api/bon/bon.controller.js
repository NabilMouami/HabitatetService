const { createLivrAccClient, createEtrge, getBons, createBonLivr, getBonByNum, SortirBon, getLastId } = require("./bon.service");

  
module.exports = {
  createLivrClie: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    createLivrAccClient(id,body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  createBonClient: (req, res) => {
    const body = req.body;
    createBonLivr(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  createEtranger: (req, res) => {
    const body = req.body;
    createEtrge(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  createSortirBon: (req, res) => {
    const body = req.body;
    const id = req.params.id;
    SortirBon(id,body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          success: 0,
          message: "Database connection errror",
        });
      }
      return res.status(200).json({
        success: 1,
        data: results,
      });
    });
  },
  getBonLivrs: (req, res) => {
    getBons((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);

    });
  },
  getBon: (req, res) => {
    const id = req.params.id;

    getBonByNum(id,(err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);

    });
  },
  getNumBon: (req, res) => {
   
    getLastId((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return  res.send(results);

    });
  },
  };
  