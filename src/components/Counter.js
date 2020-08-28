import * as React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { Button } from 'antd';


import { INCREMENT, DECREMENT, INCREMENT_IF_ODD, INCREMENT_ASYNC, CANCEL_INCREMENT_ASYNC } from '../actionTypes'

function Counter({ counter, countdown, dispatch }) {
  const action = (type, value) => () => dispatch({ type, value })

  return (
    <div>
      Clicked: {counter} times <Button onClick={action(INCREMENT)}>+</Button>{' '}
      <Button type="primary" onClick={action(DECREMENT)}>-</Button>{' '}
      <Button type="primary" onClick={action(INCREMENT_IF_ODD)}>Increment if odd</Button>{' '}
      <Button type="primary"
        onClick={countdown ? action(CANCEL_INCREMENT_ASYNC) : action(INCREMENT_ASYNC, 5)}
        style={{ color: countdown ? 'red' : 'black' }}
      >
        {countdown ? `Cancel increment (${countdown})` : 'increment after 5s'}
      </Button>
    </div>
  )
}

Counter.propTypes = {
  // dispatch actions
  dispatch: PropTypes.func.isRequired,
  // state
  counter: PropTypes.number.isRequired,
  countdown: PropTypes.number.isRequired,
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
    countdown: state.countdown,
  }
}

export default connect(mapStateToProps)(Counter)
