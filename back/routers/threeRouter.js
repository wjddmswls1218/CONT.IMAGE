const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/get", (req, res, next) => {
  const seletQuery = `
    SELECT  id,
            txt,
            imageURL
      FROM  typeThree
      `;

  try {
    db.query(seletQuery, (error, rows) => {
      if (error) {
        throw error;
      }
      return res.status(200).json({ rows });
    });
  } catch (error) {
    console.error(error);
    return res.status(400).send("데이터를 조회하지 못했습니다");
  }
});

router.post("/update", (req, res, next) => {
  const { id, txt } = req.body;

  const updateQuery = `
      UPDATE  typeThree
         SET  txt = "${txt}"
       WHERE  id = ${id}
    
    `;

  try {
    db.query(updateQuery, (error, rows) => {
      if (error) {
        throw error;
      }
      return res.status(200).json({ result: true });
    });
  } catch (error) {
    console.error(error);
    res.status(400).send("데이터를 수정할 수 없습니다.");
  }
});

module.exports = router;
