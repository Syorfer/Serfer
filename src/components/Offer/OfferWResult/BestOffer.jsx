import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { GoodsContext } from "@/contexts/goodsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "200px",
    margin: "0 50px"
  },
  flex: {
    display: "flex",
    justifyContent: "center"
  },
  cardImage: {
    width: "40%",
    height: "200px"
  },
  cardContent: {
    width: "60%"
  }
}));

const BestOffer = () => {
  const classes = useStyles();
  const { goods } = useContext(GoodsContext);

  const bestGood = goods.reduce((prevGood, curGood) => {
    return prevGood.price < curGood.price ? prevGood : curGood;
  }, 0);

  return (
    <Grid container justify="center">
      <Card className={classes.root}>
        <CardActionArea display="flex" className={classes.flex}>
          <CardMedia
            component="img"
            alt={bestGood.model}
            height="140"
            className={classes.cardImage}
            image={bestGood.image}
            title={bestGood.model}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {bestGood.model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {bestGood.rate}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
              {bestGood.price}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Доставка - {bestGood.deliveryCost} ₽
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions></CardActions>
      </Card>
    </Grid>
  );
};

export default BestOffer;
