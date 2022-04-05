const { Boom } = require('@hapi/boom');
const series_schema = require('../models/series_tv.model');

class SeriesService {
  async createSerie(serieBody){
    serieBody.save();
    return serieBody;
  }

  async listSeries(){
    return series_schema.find();
  }

  async showSerie(serieId){
    return series_schema.findById({ _id : serieId})
      .then((data) => {
        if(!data) throw Boom.notFound("La serie buscada no ha sido encontrada");
        return data;
      })
  }

  async updateSerie(serieId){
    return series_schema.findById({ _id : serieId})
      .then((data) => {
        if(!data) throw Boom.notFound("La serie buscada no ha sido encontrada")
      })
  }

  async deleteSerie(serieId){
    return series_schema.findById({ _id : serieId})
      .then((data) => {
        if(!data) throw Boom.notFound("La serie buscada no ha sido encontrada")
      })
  }
}

module.exports = SeriesService;