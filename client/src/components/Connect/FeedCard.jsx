import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import styles from './../../../styles/feedStyles.css'


let FeedCard = (props) => {
  return (
      <MuiThemeProvider>
        <Card className={styles.card}>
          <CardHeader
            title={props.displayName}
            subtitle={props.date}
            avatar={props.profileImg}
          />
          <CardText>
            {props.message}
          </CardText>
        </Card>
      </MuiThemeProvider>
  );
}

export default FeedCard;

FeedCard.propTypes = {
  profileImg: PropTypes.string,
  displayName: PropTypes.string,
  message: PropTypes.string,
  likes: PropTypes.number,
  date: PropTypes.string
}
