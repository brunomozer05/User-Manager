import { db } from "../db.js";

export const getUsers = (_,res) => {
    const q = "SELECT * FROM user;";

    db.query(q, (err,data) => {
        if (err) return res.json(err);

        return res.status(200).json(data)
    });
};

export const createUser = (req, res) => {

    const {name, email, birthDate, number} = req.body
    const query = `INSERT INTO user (name, email, birth_date, number) VALUES ('${name}', '${email}', '${birthDate}', ${number})`

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data.insertId)
    });
}

export const updateUser = (req, res) => {
    const {name, email, birthDate, number} = req.body
    const query = `UPDATE user SET name = '${name}', email = '${email}', birth_date = '${birthDate}', number = ${number} WHERE id = ${req.params.id}`

    db.query(query, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data.insertId)
    });
}