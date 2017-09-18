import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import FeedCard from './FeedCard.jsx'

class Connect extends React.Component {
  constructor() {
    super();
    this.state={
    };

  }

  componentWillMount() {
  }


  render() {
    return (
      <div>
        <div style={{'padding': "10px"}}></div>
        hello world
        <FeedCard
          image_link={"https://media.licdn.com/mpr/mprx/0_FfbQYoD6hPMMdg-SFDkzYWYEhKoJIUGSLHPJYWmR0POdq0zDwdBErdVza4E6eyiT625ZlaKY6MaR"}
          displayName={"Jonathan Kim"}
          message={"Congratulate Jonathan on an Offer from Google!"}
          likes={2}
        />
      </div>
    )
  }
}

export default Connect;

Connect.propTypes = {
}
