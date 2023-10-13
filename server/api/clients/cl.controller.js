const {
    createClient,
    getClients,
    updateClient,
    deleteClient,
  } = require("./cl.service");

  
module.exports = {
    createCl: (req, res) => {
      const body = req.body;
      createClient(body, (err, results) => {
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
  
  
    getCls: (req, res) => {
      getClients((err, results) => {
        if (err) {
          console.log(err);
          return;
        }
        return res.status(200).json(results);

      });
    },
    updateCl: (req, res) => {
      const id = req.params.id;

      const body = req.body;
      updateClient(id,body, (err, results) => {
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
    deleteCl: (req, res) => {
      const id = req.params.id;
      deleteClient(id, (err, results) => {
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
  