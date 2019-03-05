const {
  USER_NAME,
  USER_LAST_NAME
} = require('./constants');

// save-ly get nested props
const getNestedProps = (obj, props) => props.reduce(
  (acc, currentProp) => acc && acc[currentProp],
  obj
);
module.exports.getNestedProps = getNestedProps;

// get user
module.exports.getUser = () => ({
  name: USER_NAME,
  lastname: USER_LAST_NAME
});

// map product from ML api to the front-end expected response
module.exports.mapProductItem = (item, currency, isForList = true, description = null) => {
  let result = {
    id: item.id,
    title: item.title,
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: getNestedProps(item, ['shipping', 'free_shipping']),
    price: {
      amount: item.price,
      currency: currency.symbol,
      decimals: currency.decimal_places,
      description: currency.description
    },
  };

  if (!isForList) {
    result = {
      ...result,
      sold_quantity: item.sold_quantity,
      description
    };
  }

  return result;
}