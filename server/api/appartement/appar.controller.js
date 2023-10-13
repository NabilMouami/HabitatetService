const {
    createAppart,
    getApparts,
    updateAppart,
    deleteAppart,
    venteAppart,
    getVentesApparts,
  } = require("./appar.service");

  
module.exports = {
  venteAprt: (req, res) => {
    const body = req.body;
    venteAppart(body, (err, results) => {
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
    createAprt: (req, res) => {
      const body = req.body;
      createAppart(body, (err, results) => {
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
  
  
    getAprts: (req, res) => {
      getApparts((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json(results);

      });
    },
    getVentesAprts: (req, res) => {
      getVentesApparts((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json(results);

      });
    },
    updateAprt: (req, res) => {
      const id = req.params.id;

      const body = req.body;
      updateAppart(id,body, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.json({
          success: 1,
          message: "updated successfully",
        });
      });
    },
    deleteAprt: (req, res) => {
      const id = req.params.id;
      deleteAppart(id, (err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        if (!results) {
          return res.json({
            success: 0,
            message: "Record Not Found",
          });
        }
        return res.json({
          success: 1,
          message: "user deleted successfully",
        });
      });
    },
  };
  