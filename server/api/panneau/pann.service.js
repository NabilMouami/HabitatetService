const db = require("../../config/database");

module.exports = {
  ajoutePanneau: (data, callBack) => {
    db.query(
      "insert into panneau(type,marque,fornisseur,`piece_total`,`long`,larg,epaisseur,prix_unity,date,code) values(?,?,?,?,?,?,?,?,?,?)",
      [
        data.type,
        data.marque,
        data.fornisseur,
        data.piece_total,
        data.long,
        data.larg,
        data.epaisseur,
        data.prix_unity,
        data.date,
        data.code,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getPann: callBack => {
    db.query(
      `select * from panneau`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updatePan: (id,data, callBack) => {
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
        return callBack(null, results[0]);
      }
    );
  },
  deletePan: (id, callBack) => {
    db.query(
      `delete from panneau where id = ?`,
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