import pool from "../../config/db.config";

export const getItems = (request, response) => {
  pool.query("SELECT * FROM items", (error, results) => {
    if (error) {
      console.log(error);
    }
    response.status(200).json(results.rows);
  });
};
export const getItemById = (request, response) => {
  const id = parseInt(request.params.id);
  pool.query("SELECT * FROM items WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};
export const createItem = (request, response) => {
  const { name, description, startdate, enddate, user } = request.body;
  pool.query(
    "INSERT INTO items (name, description, startdate, enddate, user) VALUES ($1, $2, $3, $4, $5)",
    [name, description, startdate, enddate, user],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(` User added with ID`);
    }
  );
};
