import mongoose, { Schema } from "mongoose";

const openPositionsSchema = mongoose.Schema({

is_valid_job_opening : {
    type: Boolean,
    required: true
},
location: {
    type: String,
    required: true
},
number_of_open_positions: {
    type: Number,
    required: true
},
priority: {
    type: String,
    required: true
},
open_position_details:
// Object 
{
    experience_required: {
    type: Number,
    required: true
},
// Array
skills_required: [String],
open_position_summary: {
    type: String,
    required: true
},
open_position_description: {
    type: String,
    required: true
},
reference_link: {
    type: String,
    required: true
}
},
client_account_name: {
    type: String,
    required: true
}


})

export default mongoose.model("OpenPositions", openPositionsSchema);