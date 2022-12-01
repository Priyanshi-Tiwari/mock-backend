import ClientAccounts from "../models/clientAccounts.model.js";
import Users from "../models/users.model.js";

// GET - All client accounts data
export const getAllClientAccounts = async (req, res) => {
    const allClientAccounts = await ClientAccounts.find({});
    if (allClientAccounts.length > 0) {
        return res.status(200).send({ "message": "Client accounts fetched successfully", allClientAccounts });
    } else {
        return res.status(404).send({ "message": "Client accounts not available", allClientAccounts });
    }
}
// GET - Client accounts data by name
export const getClientAccountByName = async (req, res) => {
    const clientAccount = await ClientAccounts.find({ name: req.params.name });
    if (clientAccount.length > 0) {
        return res.status(200).send({ "message": "Client account found", clientAccount });
    } else {
        return res.status(404).send({ "message": "Client account not found", clientAccount });
    }
}
// POST - Create new client account
export const createClientAccount = async (req, res) => {
    try {
        const clientAccount = await createClientAccountObject(req);
        const savedClientAccount = await ClientAccounts.create(clientAccount);
        return res.status(200).send({ message: "Client account created successfully", client_account: savedClientAccount });
    } catch (err) {
        return res.status(400).send({ error: "Unable to create client account", err })
    }
}

const createClientAccountObject = async (req) => {
    const username = await getUsername(req.body.account_manager);
    return {
        name: req.body.name,
        account_manager_name: username
    };
}

// Common - getusername
const getUsername = async (account_manager_name) => {
    const { username } = await Users.findOne({ name: account_manager_name });
    if (username) {
        return username;
    } else {
        console.log({ error: `Unable to find user with name ${account_manager_name}`})
    }
}

// PUT - Update client account
export const updateClientAccount = async (req, res) => {
    const filter = { name: req.body.name };
    const update = req.body.updated_client_account;
    try {
        const updatedClientAccount = await ClientAccounts.findOneAndUpdate(filter, update, { new: true });
        return res.status(201).send({ message: "Client account created successfully", client_account: updatedClientAccount });
    } catch (err) {
        return res.status(400).send({ error: "Unable to update client account", err });
    }
}