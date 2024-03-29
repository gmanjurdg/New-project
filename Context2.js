import React, { Component } from 'react';
import { storeProducts, detailProduct } from './Data';
const ProductContext = React.createContext();

 //provider
//consumer

class ProductProvider extends Component {
    state ={
        product: [],
        detailProduct: detailProduct,
        cart:storeProducts,
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal:0
    };
    componentDidMount(){
        this.setProducts();
    }
    
    setProducts =() =>{
        let tempProducts = [];
        storeProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        });
        this.setState(()=>{
            return {products: tempProducts};
        });
        
    };

    getItem = (id) =>{
        const product= this.state.products.find(item => item.id === id);
        return product;
    };

    handleDetail = (id) =>{
    const product = this.getItem(id);
    this.setState(()=>{
        return {detailProduct:product}
    })
}
addToCart = id =>{
    let tempProducts =[...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;
    this.setState(()=>{
     return {product: tempProducts, cart: [...this.state.cart.product]};  
 },() =>{
     this.addTotals(id);   
     
 }
 );
};
openModal= id =>{
    const Product= this.getItem(id);
    this.setState(()=>{
        return {modalProduct: Product, modalOpen: true};
    });
};
closeModal = () =>{
    this.setState(()=>{
        return {modalOpen:false}
    });
};
removeItem =(id) =>{
  let tempProducts = [...this.state.products];
  let tempCart = [...this.state.cart];

  tempCart = tempCart.filter(item =>item.id !==id);
  const index = tempProducts.indexOf(this.getItem(id));
  let removedProduct = tempProducts[index];
  removedProduct.inCart = false;
  removedProduct.count = 0;
  removedProduct.total = 0;
  this.setState(()=>{
      return {
          cart: [...tempCart],
          products:[...tempProducts]
      };
  },() => {
      this.addTotals();
  });
};
clearCart =() =>{
    this.setState(()=>{
        return {cart: []};
    },()=>{
        this.setProducts();  
              
    });
};
render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                removeItem:this.removeItem,
                clearCart:this.clearCart,
                
            }}>
                {this.props.children}
               </ProductContext.Provider>
                
        );
    }
}
const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer };