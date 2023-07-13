import { getConnection } from "./../database/database";

const getLenguages = async (req, res) => {
    try {
        const connection = await getConnection();
    const result = await connection.query("SELECT * FROM languaje");
    console.log(result)
    res.json(result)
    } catch (error) {
        res.starus(500);
        res.send(error.message)
    }
}


const addLenguage = async (req, res) => {
    try {
        console.log(req.body)
        const {name, programmers} = req.body
        if(name === undefined || programmers === undefined) {
            res.status(400).json({message:"Bad Request, please fill all field."})
        } else {
            const language = { name, programmers}
            const connection = await getConnection();
         const result = await connection.query("INSERT INTO languaje SET ?",language);
          res.json({message:"exit"})
        }
       
    } catch (error) {
        res.starus(500);
        res.send(error.message)
    }
}

const getLenguagesBID = async (req, res) => {
    try {
        const connection = await getConnection();
        const {id} = req.params
        console.log(req.params)
    const result = await connection.query("SELECT * FROM languaje where id = ?", id);
    console.log(result)
    res.json(result)
    } catch (error) {
        res.starus(500);
        res.send(error.message)
    }
}

const deleteLenguages = async (req, res) => {
    try {
        const connection = await getConnection();
        const {id} = req.params
        console.log(req.params)
    const result = await connection.query("DELETE  FROM languaje where id = ?", id);
    console.log(result)
    res.json(result)
    } catch (error) {
        res.starus(500);
        res.send(error.message)
    }
}

const updateLenguages = async (req, res) => {
    try {
        console.log(req.body)
        const {id} = req.params
        const {name, programmers} = req.body

        if(id === undefaine && name === undefined || programmers === undefined) {
            res.status(400).json({message:"Bad Request, please fill all field."})
        } else {
            const language ={ name, programmers}
            const connection = await getConnection();
         const result = await connection.query("UPDATE languaje SET ? WHERE id = ?",[language, id]);
          res.json({message:"exit"})
        }
       
    } catch (error) {
        res.starus(500);
        res.send(error.message)
    }
}


export const methods = {
    getLenguages
    ,addLenguage
    ,getLenguagesBID
    ,deleteLenguages
    ,updateLenguages
}