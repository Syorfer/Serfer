import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { GoodsContext } from "@/contexts/goodsContext";
import { SearchContext } from "@/contexts/searchContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const BestOffer = () => {
  const classes = useStyles();
  const { search } = useContext(SearchContext);
  const { goods } = useContext(GoodsContext);

  const bestGood = goods.reduce((prevGood, curGood) => {
    return prevGood.price < curGood.price ? prevGood : curGood;
  }, 0);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={bestGood.image}
          title="Contemplative Reptile"
        />
        <CardContent>
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
  );
};

export default BestOffer;
