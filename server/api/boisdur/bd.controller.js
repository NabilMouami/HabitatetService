const { ajouteBD, getBD, updateBD, deleteBD } = require("./bd.service");


  
module.exports = {
  createBoisDur: (req, res) => {
    const body = req.body;
    ajouteBD(body, (err, results) => {
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
   
  
    getBoisDurs: (req, res) => {
      getBD((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json(results);

      });
    },

    updateBoisDur: (req, res) => {
      const id = req.params.id;

      const body = req.body;
      updateBD(id,body, (err, results) => {
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
    deleteBoisDur: (req, res) => {
      const id = req.params.id;
      deleteBD(id, (err, results) => {
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
  