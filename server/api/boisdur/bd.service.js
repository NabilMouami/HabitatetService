const db = require("../../config/database");

module.exports = {
  ajouteBD: (data, callBack) => {
    db.query(
        "insert into boisdur(`marque`,`fornisseur`,`n_fardou`,`pieces`,`long`,`larg`,`epaisseur`,`volume`,`prix_unity`,`date_creation`) values(?,?,?,?,?,?,?,?,?,?)",
        [
        data.marque,
        data.fornisseur,
        data.n_fardou,
        data.pieces,
        data.long,
        data.larg,
        data.epaisseur,
        data.volume,
        data.prix_unity,
        data.date_creation,
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        else {
         return callBack(null, results[0]);
        }
           
      }
    );
  },
  getBD: callBack => {
    db.query(
      `select * from boisdur`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateBD: (id,data, callBack) => {
    db.query(
      `update appartement set nom=?, prenom = ?, ville=? , adresse=? , phone=?, cni=?  where id = ?`,
      [
        data.nom,
        data.prenom,
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
        return callBack(null, results);
      }
    );
  },
  deleteBD: (id, callBack) => {
    db.query(
      `delete from boisdur where id = ?`,
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

 


