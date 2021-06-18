import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { GoodsContext } from "@/contexts/goodsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "840px",
    margin: "20px auto",
  },
  title: {
    color: "#fff",
  },
}));

const GoodsReview = () => {
  const classes = useStyles();
  const { goods } = useContext(GoodsContext);

  const bestGood = goods.reduce((prevGood, curGood) => {
    return prevGood.price < curGood.price ? prevGood : curGood;
  }, 0);

  return (
    <Grid container className={classes.root}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.title}
      >
        Отзывы:
      </Typography>
    </Grid>
  );
};

export default GoodsReview;
