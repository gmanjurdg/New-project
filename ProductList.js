import React, { Component } from 'react';
import Title from './Title';
import Product from './Product';
import { storeProducts } from '../Data';
import { Link } from 'react-router-dom';



export default class ProductList extends Component {
    state={
        products:storeProducts
    };
    render() {
        return (
               <React.Fragment>
            
              <div>
              <Title name="Today Special"/>
                
              <img src={"https: 5.imimg.com/data5/TY/QJ/MY-17263151/paneer-kadai-500x500.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Kofta Kurma" />
              <img src={"https: www.sccpre.cat/mypng/detail/175-1755599_sunil-momos-png-download-momo-non-veg.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Veg Momo" />
              <img src={"https: hungerfeel.com/wp-content/uploads/2019/02/kadhi-paneer.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Kadai Paneer" />
              <img src={"https: www.searchpng.com/wp-content/uploads/2018/12/PATISSERIE-Cake-slices-png-715x715.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Pastery" />
                
              <div className="row">
              
                  {value=> {
                      return value.products.map(product => {
                          return <Product key= {Product.id} Product={Product} />;
                      });
                  }}
              </div>
              <Title name="Courses"/>
              <Link to="/details">       
              <img src={"https: 5.imimg.com/data5/TY/QJ/MY-17263151/paneer-kadai-500x500.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Starters" />
              <img src={"https: www.sccpre.cat/mypng/detail/175-1755599_sunil-momos-png-download-momo-non-veg.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Main Course" />
              <img src={"https: hungerfeel.com/wp-content/uploads/2019/02/kadhi-paneer.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Deserts" />
              <img src={"https: www.searchpng.com/wp-content/uploads/2018/12/PATISSERIE-Cake-slices-png-715x715.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Bevarages" />
              </Link>
              <div className="row">
              
                  {value=> {
                      return value.products.map(product => {
                          return <Product key= {Product.id} Product={Product} />;
                      });
                  }}
              </div>
              <Title name="Chefs Corner"/>
              <img src={"https: 5.imimg.com/data5/TY/QJ/MY-17263151/paneer-kadai-500x500.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Veg" />
              <img src={"https: www.sccpre.cat/mypng/detail/175-1755599_sunil-momos-png-download-momo-non-veg.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Verities" />
              <img src={"https: hungerfeel.com/wp-content/uploads/2019/02/kadhi-paneer.png"} className="col-9 mx-auto col-md-6 col-lg-3 my-3" alt="Non veg" />
              <div className="row">
              
                  {value=> {
                      return value.products.map(product => {
                          return <Product key= {Product.id} Product={Product} />;
                      });
                  }}
              </div>
              </div>
              </React.Fragment>  
                             
        );
    }
}


