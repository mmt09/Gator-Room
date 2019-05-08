import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    marginBottom: theme.spacing.unit * 2,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
});

const ListingInfoCard = props => {
  const {
    classes,
    picture,
    city,
    address,
    price,
    numberOfBedroom,
    numberOfBathroom,
    onClick,
  } = props;
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          alt={`${address}, ${city}`}
          className={classes.media}
          height="200"
          width="130"
          image={picture}
          title={`${address}, ${city}`}
        />
        <CardContent>
          <Typography gutterBottom variant="subheading" component="h2">
            {`${address}, ${city}`}
          </Typography>
          <Typography color="textSecondary">
            ${price}
            {` · ${numberOfBedroom}`} {numberOfBedroom === 1 ? `Bedroom` : `Bedrooms`}
            {` · ${numberOfBathroom}`} {numberOfBathroom === 1 ? `Bathroom` : `Bathrooms`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

ListingInfoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  picture: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  numberOfBedroom: PropTypes.number.isRequired,
  numberOfBathroom: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default withStyles(styles)(ListingInfoCard);