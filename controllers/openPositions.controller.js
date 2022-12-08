import OpenPositions from '../models/openPositions.model.js';
import ClientAccounts from '../models/clientAccounts.model.js'

export const getAllOpenPositions = async(req, res) => {
    const allOpenPositions = await OpenPositions.aggregate([
        {
            $lookup: {
                from: "clientaccounts",
                localField: "client_account_name",
                foreignField: "name",
                as: "account_details"
            }
        },
    ]).exec()
    
    if (allOpenPositions.length > 0) {
        console.log({ "message": "Open Positions fetched successfully" });
        return res.status(200).send(allOpenPositions);
    } else {
        return res.status(404).send({ "message": "Open Positions not available", allOpenPositions });
    }
}