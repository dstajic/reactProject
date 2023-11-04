function PRODUCTS() {
  return (
    <>
      <h2 className="productTitle">
        <br />
        <br />
        <a id="product">Our Products</a>
        <br />
        <br />
        <br />
      </h2>
      <div className="products">
        <div className="product1">
          <img src="images/Caj1.png" className="productIMG"></img>
          <h3 className="under1">
            English Breakfast
            <br />
            0.99$
          </h3>
        </div>

        <div className="product2">
          <img src="images/Caj2.png" className="productIMG"></img>
          <h3 className="under1">
            Green Tea
            <br />
            0.99$
          </h3>
        </div>

        <div className="product3">
          <img src="images/Caj3.png" className="productIMG"></img>
          <h3 className="under1">
            Peppermint
            <br />
            0.99$
          </h3>
        </div>

        <div className="product4">
          <img src="images/Caj4.png" className="productIMG"></img>
          <h3 className="under1">
            Happy Berries
            <br />
            0.99$
          </h3>
        </div>
      </div>
    </>
  );
}
export default PRODUCTS;
