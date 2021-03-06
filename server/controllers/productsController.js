const axios = require('axios');

module.exports = {
  getProducts: (req, res) => {
    const { page, count } = req.params;

    axios({
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-sfo/products',
      method: 'get',
      params: {
        page,
        count,
      },
      headers: {
        Authorization: process.env.TOKEN,
      },
    })
      .then((response) => res.send(response.data))
      .catch((err) => {
        console.log('error getting products', err);
        res.sendStatus(500);
      });
  },
};
