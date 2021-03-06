export const addProductToCart = (skuId) => {
  fetch('/overview/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(skuId),
  })
    .then(() => { console.log('product added to cart!'); })
    .catch((error) => console.log('error in adding product to cart', error));
};

export const getProductInfo = (currentProduct, setProductInfo) => {
  fetch(`/overview/${currentProduct.id}`)
    .then((response) => response.json())
    .then((data) => {
      setProductInfo(data);
    })
    .catch((error) => {
      console.log(`error in fetching id ${currentProduct.id}`, error);
    });
};

export const getProductStyles = (currentProduct, setProductStyles) => {
  fetch(`/overview/${currentProduct.id}/styles`)
    .then((response) => response.json())
    .then((data) => {
      setProductStyles(data);
    })
    .catch((error) => {
      console.log(`error in fetching data for id ${currentProduct.id}`, error);
    });
};
