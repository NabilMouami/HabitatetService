const db = require("../../config/database");

module.exports = {
  venteAppart: (data, callBack) => {
    db.query(
      `insert into vente_appartement(appart_id, situation, client_id, avance, delaite, date_achete) 
                values(?,?,?,?,?,?)`,
      [
        data.appart_id,
        data.situation,
        data.client_id,
        data.avance,
        data.delaite,
        data.dateCreation,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  createAppart: (data, callBack) => {
    db.query(
      `insert into appartement(num_appart,surface,prix,accs_parking) 
                values(?,?,?,?)`,
      [
        data.num_appart,
        data.surface,
        data.prix,
        data.accsparking,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getApparts: callBack => {
    db.query(
      `select * from appartement`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getVentesApparts: callBack => {
    db.query(
      `select v.id,a.num_appart,c.fullname,situation,avance,delaite,date_achete from vente_appartement v,client c,appartement a where v.appart_id = a.id and v.client_id = c.id`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  updateAppart: (id,data, callBack) => {
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
  deleteAppart: (id, callBack) => {
    db.query(
      `delete from appartement where id = ?`,
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