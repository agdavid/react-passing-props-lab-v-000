// import React, { Component }  from 'react';
import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList';

const FruitBasket = ({ fruit, filters, currentFilter, onUpdateFilter }) => {
  return (
      <div className="fruit-basket">
        <Filter
          filters={filters}
          handleChange={onUpdateFilter}
        />
        <FilteredFruitList
          fruit={fruit}
          filter={currentFilter}
        />
      </div>
  );
}

FruitBasket.defaultProps = {
    fruit: [],
    filters: [],
    currentFilter: null,
    updateFilterCallback: () => {}
};

// class FruitBasket extends Component {
//   constructor() {
//     super();
//
//     this.state = {
//       filters: [],
//       selectedFilter: null
//     };
//   }
//
//   handleFilterChange = event => {
//     console.log('new filter: ', event.target.value);
//     this.setState({ selectedFilter: event.target.value });
//   }
//
//   render() {
//     return (
//       <div className="fruit-basket">
//         <Filter handleChange={this.handleFilterChange} />
//         <FilteredFruitList
//           filter={this.state.selectedFilter} />
//       </div>
//     );
//   }
// }

export default FruitBasket;
