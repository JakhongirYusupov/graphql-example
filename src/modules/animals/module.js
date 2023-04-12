import pool from "../../pg/index.js";

const getAnimals = async () => {
  try {
    let data = await pool.query(`select * from animals`);
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};

const createAnimal = async ({ name, color, type }) => {
  try {
    let data = await pool.query(
      `insert into animals(name, color, type) values ($1, $2, $3)`,
      [name, color, type]
    );
    if (data.command === "INSERT") return { message: "Animal created!" };
    return { message: "Animal did not create" };
  } catch (error) {
    console.log(error);
  }
};

const updateAnimal = async ({ id, name, color, type }) => {
  try {
    let animal = (await pool.query(`select * from animals where id = $1`, [id]))
      .rows[0];
    if (!animal) return { message: "Animal not found" };

    name = name ? name : animal.name;
    color = color ? color : animal.color;
    type = type ? type : animal.type;

    let res = await pool.query(
      `update animals set name = $1, color = $2, type = $3 where id = $4`,
      [name, color, type, id]
    );

    if (res.command === "UPDATE") {
      let animal = (
        await pool.query(`select * from animals where id = $1`, [id])
      ).rows[0];
      return { message: "Animal updated", data: animal };
    }
    return { message: "Animal did not updated" };
  } catch (error) {
    console.log(error);
  }
};

const deleteAnimal = async ({ id }) => {
  try {
    let animal = (await pool.query(`select * from animals where id = $1`, [id]))
      .rows[0];
    if (!animal) return { message: "Animal not found" };

    const res = await pool.query(`delete from animals where id = $1`, [id]);
    if (res.command === "DELETE") return { message: "Animal deleted" };

    return { message: "Animal did not delete" };
  } catch (error) {
    console.log(error);
  }
};

export default {
  getAnimals,
  createAnimal,
  updateAnimal,
  deleteAnimal,
};
