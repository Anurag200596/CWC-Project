import mongoose, { schema } from "mongoose"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"




const videoschema = new schema({
    videofile: {
        type: string,
        required: true
    },
    thumbnail: {
        type: string,
        required: true
    },
    tittle: {
        type: string,
        required: true
    },
    description: {
        type: string,
        required: true
    },
    duration:{
        type:string, // cloudnary
        require:true
    },
    views: {
        type: Number,
        default: 0
    },
    ispublished: {
        type: Boolean,
        default: true

    },
    owner:{
        type:schema.Types.ObjectId,
        ref:"User"

    }

},{timestamps:true})

videoschema.plugin(mongooseAggregatePaginate)





export const Video = mongoose.model("Video", videoschema)