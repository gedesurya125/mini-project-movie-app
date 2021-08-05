import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//MOCK SERVER MOVIES ALL=========================
export const moviesComedy = [
  {
    id: "1",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "379686",
    title: "Space Jam: A New Legacy",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
    poster: "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 7.8,
    total_review: 1263,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "2",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "497698",
    title: "Black Widow",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    poster: "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 8,
    total_review: 3393,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "3",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "602223",
    title: "The Forever Purge",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
    poster: "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 7.8,
    total_review: 601,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "4",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "459151",
    title: "The Boss Baby: Family Business",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
    poster: "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 7.9,
    total_review: 922,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "5",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "508943",
    title: "Luca",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    poster: "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 8.1,
    total_review: 3255,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "6",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "379686",
    title: "Space Jam: A New Legacy",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/5bFK5d3mVTAvBCXi5NPWH0tYjKl.jpg",
    poster: "/8s4h9friP6Ci3adRGahHARVd76E.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 7.8,
    total_review: 1263,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "7",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "497698",
    title: "Black Widow",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/qAZ0pzat24kLdO3o8ejmbLxyOac.jpg",
    poster: "/keIxh0wPr2Ymj0Btjh4gW7JJ89e.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 8,
    total_review: 3393,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "8",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "602223",
    title: "The Forever Purge",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/uHA5COgDzcxjpYSHHulrKVl6ByL.jpg",
    poster: "/tehpKMsls621GT9WUQie2Ft6LmP.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 7.8,
    total_review: 601,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "9",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "459151",
    title: "The Boss Baby: Family Business",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/5dExO5G2iaaTxYnLIFKLWofDzyI.jpg",
    poster: "/gX5UrH1TLVVBwI7WxplW43BD6Z1.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 7.9,
    total_review: 922,
    trailler: "5qap5aO4i9A",
  },
  {
    id: "10",
    __comment:
      "id disini di moc seolah olah page_number dalam API /movies/:page_number, sehingga kita bisa memanggilnya  per page",
    movie_id: "508943",
    title: "Luca",
    category: "Anime",
    genre: ["action", "triller", "comedy", "horrom"],
    thumbnail: "/jTswp6KyDYKtvC52GbHagrZbGvD.jpg",
    poster: "/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg",
    brief_description:
      "Aliquip mollit minim excepteur incididunt et ea ea incididunt laborum nisi do.",
    average_rating: 8.1,
    total_review: 3255,
    trailler: "5qap5aO4i9A",
  },
];
//========================================

const useStyles = makeStyles((theme) => ({
  cardWrapper: {
    display: "flex",
    alignContent: "center",
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

function Item({ thumbnail }) {
  const classes = useStyles();
  return (
    <div className={classes.card__image}>
      <img src={`https://image.tmdb.org/t/p/original${thumbnail}`} alt="" />
    </div>
  );
}

export default function Comedy() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <div className={classes.cardWrapper}>
          <Grid xs={12} md={6} lg={6}>
            <div className={classes.cardContainer}>
              {moviesComedy.map((thumbnail, idx) => (
                <div key={idx}>
                  <Item thumbnail={thumbnail} />
                </div>
              ))}
            </div>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
