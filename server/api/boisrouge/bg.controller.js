const { ajouteBG, getBG, updateBG, deleteBG } = require("./bg.service");


  
module.exports = {
  createBoisRouge: (req, res) => {
    const body = req.body;
    ajouteBG(body, (err, results) => {
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
   
  
    getBoisRouges: (req, res) => {
      getBG((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json(results);

      });
    },

    updateBoisRouge: (req, res) => {
      const id = req.params.id;

      const body = req.body;
      updateBG(id,body, (err, results) => {
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
    deleteBoisRouge: (req, res) => {
      const id = req.params.id;
      deleteBG(id, (err, results) => {
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
  