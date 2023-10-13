const db = require("../../config/database");

module.exports = {
  ajouteBG: (data, callBack) => {
    db.query(
        "insert into boisrouge(`type`,`marque`,`fornisseur`,`n_fardou`,`epaisseur`,`larg`,`pieces`,`metre_lineare`,`prix_unity`,`volume`,`long_moyenne`,`quality`,`date_creation`,`long`,`piece`) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [
        data.type,
        data.marque,
        data.fornisseur,
        data.n_fardou,
        data.epaisseur,
        data.larg,
        data.pieces,
        data.metre_lineare,
        data.prix_unity,
        data.volume,
        data.long_moyenne,
        data.quality,
        data.date_creation,
        data.long,
        data.piece,
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
  getBG: callBack => {
    db.query(
      `select * from boisrouge`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateBG: (id,data, callBack) => {
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
  deleteBG: (id, callBack) => {
    db.query(
      `delete from boisrouge where id = ?`,
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

 


