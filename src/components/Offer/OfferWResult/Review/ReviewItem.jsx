import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoodsContext } from "@/contexts/goodsContext";
import { faUser } from "@fortawesome/free-solid-svg-icons";

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
}));

const ReviewItem = ({index}) => {
  const classes = useStyles();
  const { goods } = useContext(GoodsContext);

  const bestGood = goods.reduce((prevGood, curGood) => {
    return prevGood.price < curGood.price ? prevGood : curGood;
  }, 0);

  return (
    <>
      <CardHeader
        avatar={
          <Avatar>
            {!bestGood.reviews.avatar ? (
              <FontAwesomeIcon icon={faUser} />
            ) : (
              bestGood.reviews.avatar
            )}
          </Avatar>
        }
        title={bestGood.reviews[index].autor}
        subheader={bestGood.reviews[index].date}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {bestGood.reviews[index].text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </>
  );
};

export default ReviewItem;
