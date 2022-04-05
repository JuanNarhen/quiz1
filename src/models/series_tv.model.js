const mongoose = require('mongoose');
const serieSchema = mongoose.Schema({
  serie:{type:String, require: true, unique:true},
  number_seasons:{type:Number, require: true, min:1},
  original_language:{type:String, require: true},
  feature_seasons:{
    type:Object,
    require: true,
    season_number:{type:Number, require: true, min:1},
    season_name:{type:String, require: true},
    premier_date:{type:String, require: true},
    cast:{type:Array, require: true}
  },
  episodes:{
    type:Object,
    require:true,
    episode_name:{type:String, require: true},
    duration:{type:Number, require: true}
  }
});

const serieSchemaExport = mongoose.model('SeriesCollection', serieSchema);
module.exports = serieSchemaExport;