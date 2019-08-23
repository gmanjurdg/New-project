import React, { Component } from 'react';
import Title from '../Title';
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context2';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {Cart} = value;
                        if(Cart.length > 0) {
                            return (
                                <React.Fragment>
                                <Title name="Your Cart"/>
                                <CartColumn />
                                <CartList value= {value} />
                                <CartTotals value={value} />
                                </React.Fragment>
                            );
                        }
                        else {
                        return <EmptyCart />;
                        }
                    }}
                </ProductConsumer>
            </section>
        );
    }
}

