import mongoose, { Schema } from "mongoose";
const clientAccountsSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    account_manager: {
        type: String,
        trim: true,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Archived", "Planned"],
        default: "Active",
    },
}, {
    timestamps: true,
});

export default mongoose.model("ClientAccounts", clientAccountsSchema);