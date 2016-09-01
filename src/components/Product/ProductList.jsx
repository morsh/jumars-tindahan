import React from 'react';
import ProductItem from './ProductItem';


export default React.createClass({

  updateListHeight() {
    var $ = window.$;
    $('#product-list').css({ maxHeight: ($(window).height() - 170) + 'px' }); 
  },

  componentDidMount() {
    this.updateListHeight();
  },
  componentDidUpdate() {
    this.updateListHeight();
  },
  
  render() {
    var { filter, data } = this.props;

    return (
      <div className="list pre-scrollable" id="product-list">
        { data
          .filter((product) => {
            return filter !== 'all' ? product.get('category') == filter : true
          })
          .map((product, i) => {
            return <ProductItem data={product} key={i} />
          })
        }
      </div>
    );
  }
})
