module.exports = {
  mutipleMongooseOj: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject());
  },

  MongooseOj: function (mongooses) {
    return mongooses ? mongooses.toObject() : mongooses;
  },
};
