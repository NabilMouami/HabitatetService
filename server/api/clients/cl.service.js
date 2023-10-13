const db = require("../../config/database");

module.exports = {
  createClient: (data, callBack) => {
    db.query(
      `insert into client(fullname, ville, adresse, phone, cne) 
                values(?,?,?,?,?)`,
      [
        data.fullname,
        data.ville,
        data.adresse,
        data.phone,
        data.cne,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getClients: callBack => {
    db.query(
      `select * from client`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateClient: (id,data, callBack) => {
    db.query(
      `update client set fullname=? ville=? , adresse=? , phone=?, cni=?  where id = ?`,
      [
        data.nom,
        data.ville,
        data.adresse,
        data.phone,
        data.cni,
        id
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  },
  deleteClient: (id, callBack) => {
    db.query(
      `delete from client where id = ?`,
      [id],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results[0]);
      }
    );
  }
};