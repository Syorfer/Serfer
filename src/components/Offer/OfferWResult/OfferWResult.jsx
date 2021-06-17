import { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import { SearchContext } from "@/contexts/searchContext";
import { GoodsContext } from "@/contexts/goodsContext";
import { CallMerge } from "@material-ui/icons";

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

const OfferWResult = () => {
  const classes = useStyles();
  const { search } = useContext(SearchContext);
  const { goods } = useContext(GoodsContext);

  const bestGood = goods.reduce((prevGood, curGood) => {
    return prevGood.price < curGood.price ? prevGood : curGood;
  }, 0);

  console.log(bestGood);

  return (
    <>
      {/* <h1 className='offer__title'>{search.searchValue}</h1> */}
      <h1 className="offer__title">Лучшее предложение</h1>
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
      <Grid container justify="center">
        <List className={classes.root}>
          {goods.map((good) => (
            <ListItem key={good.id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={good.model} src={good.image} />
              </ListItemAvatar>
              <ListItemText
                primary={good.model}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {`${good.price} ₽`}
                    </Typography>
                    {` — ${good.nameFull}`}
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
};

export default OfferWResult;
