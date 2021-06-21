import React, { useContext } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { GoodsContext } from "@/contexts/goodsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "840px",
    backgroundColor: "transparent",
    margin: "0 auto",
    color: "#fff",
  },
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
  similarOffersTitle: {
    color: "#fff",
    fontWeight: "500",
    fontSize: "32px",
    width: "550px",
    margin: "50px auto 20px 0",
  },
  inline: {
    display: "inline",
  },
  avatar: {
    width: "160px",
    height: "120px",
    borderRadius: "20px",
  },
  
  goodRate: {
    color: "#fff",
    fontSize: "14px",
    
  },
  goodDelivery: {
    color: "#fff",
    fontSize: "14px",
    fontWeight: "500",
  },
  goodPrice: {
    color: "#fff",
    fontSize: "24px"
  },
}));

const GoodsList = () => {
  const classes = useStyles();
  const { goods } = useContext(GoodsContext);

  return (
    <>
      <Grid container justify="center" className={classes.root}>
        <Typography component="h1" className={classes.similarOffersTitle}>
          Похожие предложения
        </Typography>
        <List className={classes.root}>
          {goods.map((good) => (
            <ListItem key={good.id} className={classes.wrapper}>
              <ListItemAvatar>
                <Avatar
                  alt={good.model}
                  src={good.image}
                  className={classes.avatar}
                />
              </ListItemAvatar>
              <ListItemText
                primary={good.nameFull}
                secondary={
                  <>
                    <Typography component="span" className={classes.goodRate}>
                      {`Рейтинг: ${good.rate}`}
                    </Typography>
                    
                    <Typography component="span" className={classes.goodDelivery}>
                      {good.deliveryCost === 0
                        ? `Бесплатная доставка`
                        : `Доставка: ${good.deliveryCost} ₽`}
                    </Typography>
                  </>
                }
              />
              <ListItemText
                primary={`${good.price} ₽`}
                className={classes.goodPrice}
              ></ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
    </>
  );
};

export default GoodsList;
