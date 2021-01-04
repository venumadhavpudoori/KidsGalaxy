import React from 'react';
import StudyImage from './../assets/studyImage.png';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "25px 90px"
  },
}));
function Product(props) {
    const classes = useStyles();

    return (
        <div>
          <div className="row">
          <div className="col-lg-6 p-5">
           <p style={{fontSize:"14px",color:'#000'}}>Lorem ipsum.</p>
           <p style={{fontSize:"14px",textAlign:'center',padding:'50px',color:'#000'}}>Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod
              tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et
              accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est</p>
              <Button variant="contained" color="secondary" className={classes.root}>
              CTA
             </Button>
          </div>
          <div className="col-lg-6 p-3">
           <img src={StudyImage} alt="study image" />
          </div>
          </div>
        </div>
    );
}

export default Product;