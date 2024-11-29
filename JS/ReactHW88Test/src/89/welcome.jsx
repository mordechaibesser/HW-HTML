/*import React from 'react'

export default function Welcome(props) {
    const {name} = props;
  return (
    <h1>Welcome {name}</h1>
    <div>
      
    </div>
  )
}*/
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class welcome extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(welcome)

