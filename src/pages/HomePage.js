import React from "react";
import HomepageCarousel from "../components/homepageMovie/HomepageCarousel";

import { BrowserRouter } from "react-router-dom";
import HomepageTabs from "../components/homepageMovie/HomepageTabs";
import BasicPagination from "../components/homepageMovie/Pagination";
// import { Provider } from "react-redux";

//MOCK SERVER====================================
const moviesMock = [
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
];
//===============================================

const HomePage = () => {
  const posterOnly = moviesMock.map((movie) => movie.poster);
  return (
    <BrowserRouter>
      <div className="screen">
        <div className="wrapper">
          <HomepageCarousel posters={posterOnly} />
          <HomepageTabs />
          <BasicPagination />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default HomePage;
