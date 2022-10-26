import { Center, Grid, Loader } from "@mantine/core";
import { Article } from "components/Article";
import { Props } from "components/types";
import { Weather } from "components/Weather";
import { newsApi } from "libs/news";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

const CategoryPage: React.FC<Props> = ({ articles, title, weather }) => {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <Center style={{ height: "50vh" }}>
        <Loader color="cyan" />
      </Center>
    );
  }
  return (
    <>
      <Grid gutter="xl">
        <Grid.Col span={9}>
          <Article articles={articles} title={title} />
        </Grid.Col>
        <Grid.Col span={3}>
          <Weather weather={weather} />
        </Grid.Col>
      </Grid>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return { notFound: true };
  const data = await newsApi.v2.topHeadlines({
    country: "jp",
    category: context.params.category,
  });
  const exclude = "hourly,minutely";
  const weatherRes = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${process.env.LAT}&lon=${process.env.LON}&units=metric&exclude=${exclude}&appid=${process.env.WEATHER_API_KEY}`
  );
  const weatherData = await weatherRes.json();
  console.log(weatherData.current);

  return {
    props: {
      articles: data.articles,
      title: context.params.category,
      weather: weatherData,
    },
    revalidate: 60 * 10,
  };
};

export default CategoryPage;
