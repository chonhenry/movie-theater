import React from "react";
import "./news-item.scss";

const NewsItem = ({ news }) => {
  return (
    <a className="news" href={news.web_url} target="_blank">
      <div className="news-img">
        <img src={`https://static01.nyt.com/${news.multimedia[0].url}`} />
      </div>

      <div className="news-info">
        <p className="publish-date">{news.pub_date.slice(0, 10)}</p>
        <p href={news.url} className="news-title" target="_blank">
          {news.headline.main}
        </p>
      </div>
    </a>
  );
};

export default NewsItem;

// const NewsItem = ({ news }) => {
//   return (
//     <a className="news" href={news.url} target="_blank">
//       <div className="news-img">
//         <img src={news.urlToImage} />
//       </div>

//       <div className="news-info">
//         <p className="publish-date">{news.publishedAt.slice(0, 10)}</p>
//         <p href={news.url} className="news-title" target="_blank">
//           {news.title}
//         </p>
//       </div>
//     </a>
//   );
// };
