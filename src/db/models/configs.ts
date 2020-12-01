import { Schema, model } from "mongoose"

const Configs = new Schema({
    name: {
        type: String
    }
})

const ConfigSchema = model('Configs', Configs);
export default ConfigSchema;