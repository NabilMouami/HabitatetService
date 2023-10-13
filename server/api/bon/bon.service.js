const db = require("../../config/database");

module.exports = {
  createLivrAccClient: (id,data, callBack) => {
    db.query(
      `update accessoire set quantity=? where id=?`,
      [
        data.quantity,
        id
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        else if (results){
            db.query(
                `insert into livraison_accessoire(code,p_unity,qte,p_total,num_bon) values(?,?,?,?,?)`,
                [
                  data.code,
                  data.prix_unity,
                  data.qte,
                  data.prix_total,
                  data.num_bon,
                ],
                (error, results) => {
                  if (error) {
                    callBack(error);
                  }
                  else {
                    return callBack(null, results[0]);

                  }
        })
    }
      }
    );
  },
  createBonLivr: (data, callBack) => {
    db.query(
      `insert into bon_livraison(id_user,id_client,date,reglement) values(?,?,?,?)`,
      [
        data.user_id,
        data.client_id,
        data.date_creation,
        data.reglement,
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        else {
          return callBack(null, results[0]);

        }    
        }
    );
  },
  createEtrge: (data, callBack) => {
    db.query(
      `insert into livraison_accessoire(code,p_unity,qte,p_total,num_bon) values(?,?,?,?,?)`,
      [
        data.code,
        data.prix_unity,
        data.quantity,
        data.prix_total,
        data.num_bon
      ],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        
          return callBack(null, results);
          }
    );
  },
  SortirBon: (id,data, callBack) => {
    db.query(
      `update accessoire set quantity=? where id=?`,
      [
        data.quantity,
        id
      ],
      (error, results) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);

      }
    
    )},
  getBons: callBack => {

    db.query(
      `select b.id,u.nom,u.prenom,c.fullname,b.date,b.reglement,l.num_bon from bon_livraison b left join user u on u.id = b.id_user inner join client c on c.id=b.id_client inner join livraison_accessoire l on l.num_bon = b.id group by num_bon`,
      [],
      (error, results, fields) => {
        if (error) {
          callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getBonByNum: (id,callBack) => {
    db.query(`select * from livraison_accessoire where num_bon = ?`,
    [id],
    (error, results, fields) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results);
    }
    )
  },
  getLastId: callBack => {
    db.query(`SELECT MAX(id) as num_bon FROM bon_livraison`,[],
    (error, results) => {
      if (error) {
        callBack(error);
      }
      return callBack(null, results[0]);
    }
    )
  },


};