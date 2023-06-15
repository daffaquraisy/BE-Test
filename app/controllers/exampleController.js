const db = require("../models");
// const Model = db.Model;
// const { Op } = require("sequelize");

exports.refactoreMe1 = (req, res) => {
  // function ini sebenarnya adalah hasil survey dri beberapa pertnayaan, yang mana nilai dri jawaban tsb akan di store pada array seperti yang ada di dataset
  db.sequelize.query(`select * from "surveys"`).then((data) => {
    let index1 = [];
    let index2 = [];
    let index3 = [];
    let index4 = [];
    let index5 = [];
    let index6 = [];
    let index7 = [];
    let index8 = [];
    let index9 = [];
    let index10 = [];

    data.map((e) => {
      let values1 = e.values[0];
      let values2 = e.values[1];
      let values3 = e.values[2];
      let values4 = e.values[3];
      let values5 = e.values[4];
      let values6 = e.values[5];
      let values7 = e.values[6];
      let values8 = e.values[7];
      let values9 = e.values[8];
      let values10 = e.values[9];

      index1.push(values1);
      index2.push(values2);
      index3.push(values3);
      index4.push(values4);
      index5.push(values5);
      index6.push(values6);
      index7.push(values7);
      index8.push(values8);
      index9.push(values9);
      index10.push(values10);
    });

    let totalIndex1 = index1.reduce((a, b) => a + b, 0) / 10;
    let totalIndex2 = index2.reduce((a, b) => a + b, 0) / 10;
    let totalIndex3 = index3.reduce((a, b) => a + b, 0) / 10;
    let totalIndex4 = index4.reduce((a, b) => a + b, 0) / 10;
    let totalIndex5 = index5.reduce((a, b) => a + b, 0) / 10;
    let totalIndex6 = index6.reduce((a, b) => a + b, 0) / 10;
    let totalIndex7 = index7.reduce((a, b) => a + b, 0) / 10;
    let totalIndex8 = index8.reduce((a, b) => a + b, 0) / 10;
    let totalIndex9 = index9.reduce((a, b) => a + b, 0) / 10;
    let totalIndex10 = index10.reduce((a, b) => a + b, 0) / 10;

    let totalIndex = [
      totalIndex1,
      totalIndex2,
      totalIndex3,
      totalIndex4,
      totalIndex5,
      totalIndex6,
      totalIndex7,
      totalIndex8,
      totalIndex9,
      totalIndex10,
    ];

    res.status(200).send({
      statusCode: 200,
      success: true,
      data: totalIndex,
    });
  });
};

exports.refactoreMe2 = (req, res) => {
  // function ini untuk menjalakan query sql insert dan mengupdate field "dosurvey" yang ada di table user menjadi true, jika melihat data yang di berikan, salah satu usernnya memiliki dosurvey dengan data false
  Survey.create({
    userId: req.body.userId,
    values: req.body.values, // [] kirim array
  })
    .then((data) => {
      User.update(
        {
          dosurvey: true,
        },
        {
          where: { id: req.body.id },
        }
      )
        .then(() => {
          console.log("success");
        })
        .catch((err) => console.log(err));

      res.status(201).send({
        statusCode: 201,
        message: "Survey sent successfully!",
        success: true,
        data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        statusCode: 500,
        message: "Cannot post survey.",
        success: false,
      });
    });
};

exports.callmeWebSocket = (req, res) => {
  // do something
};

exports.getData = (req, res) => {
  // do something
};
