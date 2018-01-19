import propTypes from 'prop-types'
import React from 'react'
import uniId from '../utils/uniId'


const Fragment = React.Fragment



const Iterator = ({ Component, items, className }) => {
  const iteration = (iterationItems, IterationComponent) => {
    let total = 0
    if (iterationItems && iterationItems.length) {
      total = iterationItems.length;
      return iterationItems.map((iterationItem, index) => (
        <IterationComponent
          key={uniId()}
          {...iterationItem}
          index={index}
          total={total}
          first={index === 0}
          last={index === total - 1}
        />
      ));
    }
    return null
  }
  return (
    <Fragment>
      {iteration(items, (props) => <Component {...props} />)}
    </Fragment>
  )
}

Iterator.propTypes = {
  Component: propTypes.func.isRequired,
  items: propTypes.array.isRequired,
  className: propTypes.string,
}

Iterator.defaultProps = {
  className: '',
}

export default Iterator
