const bill_clientModel = require('../models/bill_clientModel');
const boom = require('@hapi/boom');

class ClientService{
  async createBill(billClient){
    bill_clientModel(billClient).save();
    return {model:billClient};
  }

  async listBills(){
    return bill_clientModel.find()
      .then((data) => {return data;})
      .catch((error) => {return error;});
  }

  async showDetailsBill(billClientId){
    return bill_clientModel.findById({_id: billClientId})
      .then((data) => {return data;})
      .catch((error) => {return error;});
  }

  async updateBill(billClientId, billClient){
    return bill_clientModel.findById({_id: billClientId}).then(() => {
      if(!billClient) throw Error('No encontro la factura');
      return bill_clientModel.updateOne({_id: billClientId}, {$set: billClient})
        .then(() => {return billClient;})
        .catch((error) => {return error;});
    });
  }

  async deleteBill(billClientId){
    return bill_clientModel.deleteOne({_id: billClientId})
      .then((data) => {return data;})
      .catch((error) => {return error;});
  }
}

module.exports = ClientService;