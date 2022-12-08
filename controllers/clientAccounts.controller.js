import ClientAccounts from "../models/clientAccounts.model.js";
import Users from "../models/users.model.js";

export const getAllClientAccounts = async (req, res) => {
    const allClientAccounts = await ClientAccounts.aggregate([
        // { $match: {} },
        {
            $lookup: {
                from: "users",
                localField: "account_manager",
                foreignField: "username",
                as: "account_manager_user"
            }
        },
        {
            $project: {
                "_id": true,
                "name": true,
                "account_manager": true,
                "status": true,
                "createdAt": true,
                "updatedAt": true,
                "account_manager_name": "$account_manager_user.name",
            }
        },
    ]).exec();

    if (allClientAccounts.length > 0) {
        console.log({ "message": "Client accounts fetched successfully" });
        return res.status(200).send(allClientAccounts);
    } else {
        return res.status(404).send({ "message": "Client accounts not available", allClientAccounts });
    }
}

// GET - Client accounts data by name
export const getClientAccountByName = async (req, res) => {
    const clientAccount = await ClientAccounts.aggregate([
        { $match: {} },
        {
            $lookup: {
                from: "users",
                localField: "account_manager",
                foreignField: "username",
                as: "account_manager_user"
            }
        },
        {
            $project: {
                "_id": true,
                "name": true,
                "account_manager": true,
                "status": true,
                "createdAt": true,
                "updatedAt": true,
                "account_manager_name": "$account_manager_user.name",
            }
        },
    ]).exec();

    if (clientAccount.length > 0) {
        console.log({ "message": "Client account fetched successfully" });
        return res.status(200).send(clientAccount);
    } else {
        return res.status(404).send({ "message": "Client account not found", clientAccount });
    }
}
// POST - Create new client account
export const createClientAccount = async (req, res) => {
    try {
        const clientAccount = await createClientAccountObject(req);
        const savedClientAccount = await ClientAccounts.create(clientAccount);
        console.log({ "message": "Client account created successfully" });
        return res.status(200).send(savedClientAccount);
    } catch (err) {
        return res.status(400).send({ error: "Unable to create client account", err })
    }
}

const createClientAccountObject = async (req) => {
    const username = await getUsername(req.body.account_manager);
    return {
        name: req.body.name,
        account_manager: username,
        status: req.body.status
    };
}

// Common - getusername
const getUsername = async (account_manager_name) => {
    const { username } = await Users.findOne({ name: account_manager_name });
    if (username) {
        return username;
    } else {
        console.log({ error: `Unable to find user with name ${account_manager_name}` })
    }
}

// PUT - Update client account
export const updateClientAccount = async (req, res) => {
    const filter = { name: req.body.name };
    const update = req.body.updated_client_account;
    try {
        const updatedClientAccount = await ClientAccounts.findOneAndUpdate(filter, update, { new: true });
        console.log({ message: "Client account created successfully"});
        return res.status(201).send(updatedClientAccount);
    } catch (err) {
        return res.status(400).send({ error: "Unable to update client account", err });
    }
}