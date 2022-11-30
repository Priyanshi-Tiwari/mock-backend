import ClientAccounts from "../models/clientAccounts.model.js";
import Users from "../models/users.model.js";

export const getAllClientAccounts = async (req, res) => {
    const allClientAccounts = await ClientAccounts.find({});
    console.log("allClientAccounts", allClientAccounts);
    if (allClientAccounts) {
        return res.status(200).send({ "message": "Client Accounts fetched successfully", allClientAccounts });
    } else {
        return res.status(404).send({ "message": "Client Accounts not found" });
    }
}

export const getClientAccountByName = async (req, res) => {
    const clientAccount = await ClientAccounts.find({ name: req.params.name });
    if (clientAccount) {
        return res.status(200).send({ "message": "Client Account found", clientAccount });
    } else {
        return res.status(404).send({ "message": "Client Account not found" });
    }
}

export const createClientAccount = async (req, res) => {
    try{
        console.log(req);
        const clientAccount = await createClientAccountObject(req);
        const savedClientAccount = await ClientAccounts.create(clientAccount);
        return res.status(200).send({message: 'Client Account created successfully', client_account: savedClientAccount});
    } catch(err) {
        return res.status(400).send({error: 'Unable to create Client Account', err})
    }
}

const createClientAccountObject = async(req) => {

    const { username } = await Users.findOne({ name: req.body.account_manager });

    return {
        name: req.body.name,
        account_manager_name: username
    };
}