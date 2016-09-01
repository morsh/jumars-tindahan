import React from 'react';
import { Link } from 'react-router';
import AltContainer from 'alt/components/AltContainer';
import ProductStore from '../../stores/ProductStore';

export default React.createClass({
  render() {
    return (
      <AltContainer
        store={ProductStore}
        render={(props) => {
          var categories = props.categories;

          function Categories () {
            return categories.map((category) => {
              return <Link to={ '/category/' + category} className={'link -' + category.replace(/\s/g, '')}>{category}</Link>;
            })
          }

          return (
            <div className="category-links">
              <Link to='all' className="link -all">All</Link>
              {Categories()}
            </div>
          );
        }} />
    )
  }
})
