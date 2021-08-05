import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },

  card__image: {
    "& img": {
      width: 150,
    },
  },
}));

export default useStyles;
