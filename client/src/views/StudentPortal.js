import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Footer from '../components/Footer/Footer';
import NavigationBar from './common/NavigationBar';
import UserProfileCard from './portals/UserProfileCard';
import ListingList from './portals/ListingList';
import FiltersList from './portals/FiltersList'


const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
  filterItem : {
    minWidth : 450
  },
  grid : {
    alignContent : "center",

  },
  gridItem : {
   


  }
});

class StudentPortal extends React.Component {
  componentDidMount() {
    // takes you to the top of the page automaically
    window.scrollTo(0, 0);
  }

  render() {
    const { classes } = this.props;

    return (
   
      <div className={classes.root}>
        <NavigationBar />
        <main className={classes.content}>
        <Grid container spacing = {24} className = {classes.grid}>
            <Grid item xs className = {classes.gridItem}>
                <UserProfileCard/>
            </Grid>
            <Grid item xs = {4}   className = {classes.filterItem}>
                <FiltersList/>
            </Grid>
            <Grid item xs = {6} className = {classes.gridItem}>
                <ListingList/>
            </Grid>
        </Grid>
     
          
      <Footer/>   
        </main>

        
      </div>
    

      
    );
  }
}

StudentPortal.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles, { withTheme: true })(StudentPortal);