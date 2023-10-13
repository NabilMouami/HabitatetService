
const { ajoutePanneau, getPann, updatePan, deletePan } = require("./pann.service");

  
module.exports = {
  createPann: (req, res) => {
    const body = req.body;
    ajoutePanneau(body, (err, results) => {
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
   
  
    getPanns: (req, res) => {
      getPann((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json(results);

      });
    },

    updatePann: (req, res) => {
      const id = req.params.id;

      const body = req.body;
      updatePan(id,body, (err, results) => {
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
    deletePann: (req, res) => {
      const id = req.params.id;
      deletePan(id, (err, results) => {
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
  