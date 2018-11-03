import '../components/Shop/Shop.css';
import NavBar from '../components/NavBar';
import React, { PureComponent } from 'react';
import {
  CartComponent,
  ProductComponent,
  CheckoutButtonComponent,
  cartLocalization,
} from 'react-shopping-cart';
 
 
import 'bootstrap/dist/css/bootstrap.css';
import 'animate.css/animate.min.css';
import 'font-awesome/css/font-awesome.min.css';
 
const { getDefaultLocalization } = cartLocalization;
 
// You may take localization object from wherever you want, that's just an example
// For more information, see localization section
const DrumSetLocalization = {
  Brand: 'Yamaha',
  drumSet: 'Drum Set',
  USD: '$',
};

 
class AddToCart extends PureComponent {
 
  state = {
    products: {},
    product: {
      name: 'D2 Drum Set',
      id: 'drum-set',
      path: '/shop/drums/',
      properties: {
        brand: ['D2', 'Tama', {
          value: 'DW',
        }],
      },
      propertiesToShowInCart: ['brand'],
      prices: { USD: 365 },
      currency: 'USD',
      imageSrc: 'https://media.musiciansfriend.com/is/image/MMGS7/D2-5-piece-Drum-Set-Midnight-Black/713170000001000-00-500x500.jpg',
    },
    getProductLocalization:
      getDefaultLocalization(
        'product',
        'en',
        {
          ...DrumSetLocalization,
        }
      ),
    getCheckoutButtonLocalization:
      getDefaultLocalization(
        'checkoutButton',
        'en',
        DrumSetLocalization,
      ),
    getCartLocalization:
      getDefaultLocalization(
        'cart',
        'en',
        DrumSetLocalization
      )
  };
 
  addProduct = (key, product, currency) =>
    void this.setState(
      (
        {
          products:
            {
              [key]: cartProduct = { quantity: 0 },
              ...restOfProducts
            }
        }
      ) => ({
        products: {
          ...restOfProducts,
          [key]: {
            ...product,
            quantity:
              product.quantity +
              cartProduct.quantity,
          }
        }
      })
    );
 
  generateProductKey = (id, properties) =>
    `${id}/${Object.entries(properties).join('_')}`;
 
  updateProduct = (key, updatedProduct) => void console.log(':)');
 
  removeProduct = key => void console.log(':C');
 
  render() {
 
    const {
      addProduct,
      generateProductKey,
      updateProduct,
      removeProduct,
      state,
    } = this;
 
    const {
      getProductLocalization,
      getCheckoutButtonLocalization,
      getCartLocalization,
      products,
      product,
    } = state;
 
    const checkoutButtonElement =
      <CheckoutButtonComponent
        grandTotal = {395}
        hidden={false}
        checkoutURL="ThankYou"
        currency="USD"
        getLocalization={getCheckoutButtonLocalization}
      />;
    return (
      <div className="container">
        <ProductComponent
          {...product}
          checkoutButton={checkoutButtonElement}
          onAddProduct={
            addProduct
            // Help product to get into the cart
          }
          generateProductKey={
            generateProductKey
                    // create product key as you wish
          }
          getLocalization={getProductLocalization}
        />
 
 
        <CartComponent
          products={
            products
            // Provide your own product's Object(Look at Products)
          }
          onUpdateProduct={
            updateProduct
            // Update something
          }
          getLocalization={
            getCartLocalization
          }
          currency="USD"
          onRemoveProduct={
            removeProduct
            // Remove something
          }
          checkoutButton={
            checkoutButtonElement
          }
          isCartEmpty={
            false
          }
          getLocalization={getCartLocalization}
        />
      </div>
    );
  }
}
 

const Shopper = () => (
    <div>
        <NavBar />
        <AddToCart />
    </div> 
    
);

export default Shopper;