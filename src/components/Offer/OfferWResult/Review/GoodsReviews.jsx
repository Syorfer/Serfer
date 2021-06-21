import React, { useContext, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { GoodsContext } from "@/contexts/goodsContext";
import ReviewItem from "./ReviewItem";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "840px",
    margin: "20px auto",
    background: "transparent",
    color: "#fff",
    boxShadow: "none",
    borderBottom: "1px solid #fff",
    borderRadius: 0,
  },
  reviewWrapper: {
    width: "840px",
    margin: "20px auto 0",
  },
  title: {
    color: "#fff",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
    color: "#fff",
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

const GoodsReview = () => {
  const classes = useStyles();
  const { goods } = useContext(GoodsContext);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const bestGood = goods.reduce((prevGood, curGood) => {
    return prevGood.price < curGood.price ? prevGood : curGood;
  }, 0);

  return (
    <Grid container className={classes.reviewWrapper}>
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.title}
      >
        Отзывы:
      </Typography>
      <Card className={classes.root}>
        <ReviewItem index={0} />
        <CardActions disableSpacing>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {
              bestGood.reviews.slice(1).map((good, index) => <ReviewItem key={good.id} index={index + 1} />)
            }
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default GoodsReview;
