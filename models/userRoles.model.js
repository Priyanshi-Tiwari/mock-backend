import mongoose from "mongoose";
const userRolesSchema = mongoose.Schema({
    role: {
        type: String,
        required: true,
        trim: true,
    },
    entitlements: {
        accessToCandidates: { type: Boolean, default: false },
        accessToClientAccounts: { type: Boolean, default: false },
        accessToInterviewSchedules: { type: Boolean, default: false },
        accessToJobOpenings: { type: Boolean, default: true },
        accessToLoginPage: { type: Boolean, default: true },
        accessToOpenPositions: { type: Boolean, default: false },
        accessToReferrals: { type: Boolean, default: false },
    }
}, {
    timestamps: true,
});

export default mongoose.model("UserRoles", userRolesSchema);