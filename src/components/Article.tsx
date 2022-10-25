import { Props } from "./types";

export const Article: React.FC<Props> = ({ articles, title }) => {
  return (
    <div>
      {title}
      {articles?.map((article) => (
        <div key={article.title}>
          <h2>{article.title}</h2>
        </div>
      ))}
    </div>
  );
};
