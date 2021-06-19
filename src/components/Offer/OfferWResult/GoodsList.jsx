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
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

const GoodsList = () => {
  const classes = useStyles();
  const { goods } = useContext(GoodsContext);

  return (
    <>
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

export default GoodsList;
