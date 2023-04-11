import pool from "../../pg/index.js";

const getAnimals = async () => {
  try {
    let data = await pool.query(`select * from animals`);
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAnimals,
};
