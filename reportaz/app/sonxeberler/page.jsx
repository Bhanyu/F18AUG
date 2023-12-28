import { getNews } from "../libs/news";

const LastNews = async () => {
  const news = await getNews();

  return (
    <>
      <h1>Siyaset</h1>
      {news &&
        news.slice(0, 11).map((item) => {
          return <p>{item.descP}</p>;
        })}
    </>
  );
};
export default LastNews;
