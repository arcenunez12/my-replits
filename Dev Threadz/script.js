function showAllProducts(products) {
    // forEach
    // products.forEach(theProduct => console.log(theProduct));
    products.forEach(theProduct => newProductCard(theProduct));
  }
  
  function getFilteredProducts(productNames, query) {
    // filter
    return productNames.filter(theProduct => theProduct.toLowerCase() === query);
  }
  
  function getConvertedPrices(productPrices, currency) {
    // map
    if(currency === "jpy") {
      return productPrices.map(thePrice => thePrice * 141.51)
    } else if (currency === "gbp") {
      return productPrices.map(thePrice => thePrice * 0.78)
    } else if (currency === "usd") {
      return productPrices.map(thePrice => thePrice) 
    }
  }
  
  function getCartTotal(cartPrices) {
    // reduce
    //let initialValue = 0;
    return cartPrices.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  
  showAllProducts(PRODUCTS);
  