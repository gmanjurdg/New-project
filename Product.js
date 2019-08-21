import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../Context2';
import PropTypes from 'prop-types';
import { storeProducts } from '../Data';



export default class Product extends Component {
    
    state = {
        data: [],
        img: []
    }
    componentDidMount() {
        this.storeProducts = this.state.data;
        this.storeProducts.title = this.state.img
        console.log(storeProducts)
    }
    render() {
        const { id, title, img, price, inCart } = this.props.Product;
        return (
            <div>
                <ProductWraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                    <div className="card">
                        <ProductConsumer>
                            {value => (
                                <div className="col-9 mx-auto col-md-6 col-lg-3 my-3" onClick={() => value.handleDetail(id)}
                                >
                                    <Link to="/details">
                                        <img src={img} alt="product" className="card-img-top" />
                                   
                                    </Link>
                                    <button className="cart-btn"
                                        disabled={inCart ? true : false}
                                        onClick={() => {
                                            value.addToCart(id);
                                            value.openModal(id);
                                        }}
                                    >
                                        {inCart ? (
                                            <p className="text-capitalize mb-0" disabled>
                                                {" "}
                                            in Cart</p>
                                        ) : (
                                                <i className="fas fa-cart-plus" />
                                            )}
                                    </button>
                                </div>
                            )}
                        </ProductConsumer>
                        <div className="card-footer d-flex justfiy-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1">₹</span>
                                {price}
                            </h5>
                        </div>
                    </div>
                </ProductWraper>
            </div>
        );
    }
}
Product.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool
    }).isRequired
};
const ProductWraper = styled.div`
`
;