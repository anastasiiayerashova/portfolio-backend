import { model, Schema } from "mongoose"

const projectsSchema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        skills: {
            type: [String],
            required: true,
        },
        alt: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: false,
        versionKey: false,
    }
)

export const projectsCollection = model('projects', projectsSchema)
