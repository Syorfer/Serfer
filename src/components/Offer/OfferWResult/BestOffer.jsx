import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { GoodsContext } from "@/contexts/goodsContext";
import GoodsReviews from "./Review/GoodsReviews";
import { SearchContext } from '@/contexts/searchContext';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "840px",
    borderRadius: "20px",
    margin: "0 auto",
  },
  cardWrapper: {
    width: "100%",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bestOfferTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "32px",
    width: "550px",
    margin: "50px auto 20px 0",
  },
  cardImage: {
    width: "40%",
    height: "200px",
  },
  cardContent: {
    width: "60%",
  },
}));




const BestOffer = () => {
  const classes = useStyles();
  const { search } = useContext(SearchContext);
  const { goods } = useContext(GoodsContext);
  // const bestGood = goods.reduce((prevGood, curGood) => {
  //   return prevGood.price < curGood.price ? prevGood : curGood;
  // }, 0);
  const bestGood = { ...goods.find(item => item.id === search.bestGoodId) };
  console.log(bestGood);
  console.log(search.bestGoodId);
  return (
    <>
      <Grid container justify="center" className={classes.root}>
        <Typography component="h1" className={classes.bestOfferTitle}>
          Лучшее предложение
        </Typography>
        <Card className={classes.cardWrapper}>
          <CardActionArea className={classes.flex}>
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
                {bestGood.nameFull}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {bestGood.price} ₽
              </Typography>
              <Typography variant="body2" color="textSecondary" component="h6">
                Рейтинг: {bestGood.rate}
              </Typography>

              <Typography variant="body2" color="textSecondary" component="span">
                Доставка - {bestGood.deliveryCost} ₽
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <GoodsReviews bestGood={bestGood } />
    </>
  );
};

export default BestOffer;
