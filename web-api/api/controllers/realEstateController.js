import database from "../utility/database";

export default {
  list: (req, res) => {
    const list = database.collection("real-estate").list();

    return res.json(list);
  },
  get: (req, res) => {
    const { id } = req.query;
    const foundItem = database.collection("real-estate").findOne(id);

    return res.json(foundItem);
  },
  post: (req, res) => {
    const realEstate = req.body;

    const newRealEstate = database.collection("real-estate").create(realEstate);

    return res.json(newRealEstate);
  },
};
