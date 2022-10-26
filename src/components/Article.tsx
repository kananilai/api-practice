import { Card, Grid, Image, Text, Title } from "@mantine/core";
import dayjs, { extend, locale } from "dayjs";
import Link from "next/link";
import relativeTime from "dayjs/plugin/relativeTime";
import { Props } from "./types";
import "dayjs/locale/ja";

export const Article: React.FC<Props> = ({ articles, title }) => {
  locale("ja");
  extend(relativeTime);
  return (
    <>
      <Title order={3}>
        {title && title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
      </Title>
      {articles?.map((article) => (
        <Card
          key={article.title}
          withBorder={true}
          m={10}
          styles={{ card: { height: 100 } }}
        >
          <Link href={article.url}>
            <a>
              <Grid justify="space-between">
                <Grid.Col span={8}>
                  <Text weight={700}>{article.title}</Text>
                </Grid.Col>
                <Grid.Col span={3}>
                  <Card.Section>
                    {article.urlToImage && (
                      <Image
                        src={article.urlToImage}
                        alt={`${article.title} image`}
                        height={150}
                        p={10}
                      />
                    )}
                  </Card.Section>
                </Grid.Col>
              </Grid>
              <Text>{dayjs(article.publishedAt).fromNow()}</Text>
            </a>
          </Link>
        </Card>
      ))}
    </>
  );
};
