const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/get", (req, res, next) => {
  const seletQuery = `
    SELECT  id,
            txt,
            imageURL
      FROM  typeOne
    `;

  try {
    db.query(seletQuery, (error, rows) => {
      if (error) {
        throw error;
      }
      return res.status(200).json(rows[0]);
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send("데이터를 조회하지 못했습니다");
  }
});

router.post("/update", (req, res, next) => {
  const { txt } = req.body;

  const updateQuery = `
    UPDATE  typeOne
       SET  txt = "${txt}"
     WHERE  id = 1 
  
  `;

  try {
    db.query(updateQuery, (error, rows) => {
      if (error) {
        throw error;
      }
      res.status(200).json({ result: true });
    });
  } catch (error) {
    console.error(error);
    res.status(400).send("데이터를 수정할 수 없습니다.");
  }
});

module.exports = router;
