import mongoose, { Schema } from "mongoose";
const clientAccountsSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    account_manager_name: {
        type: String,
        trim: true,
        required: true,
    },
}, {
    timestamps: true,
});

export default mongoose.model("ClientAccounts", clientAccountsSchema);