import React from "react";
import {
  IconNews,
  IconBriefcase,
  IconFlag2,
  IconConfetti,
  IconRun,
} from "@tabler/icons";
import { Grid, Text } from "@mantine/core";
import Link from "next/link";

const TOPICS = [
  {
    icon: <IconNews size={40} />,
    path: "/",
    title: "Top stories",
  },
  {
    icon: <IconBriefcase size={40} />,
    path: "/topics/business",
    title: "Business",
  },
  {
    icon: <IconFlag2 size={40} />,
    path: "/topics/technology",
    title: "Technology",
  },
  {
    icon: <IconConfetti size={40} />,
    path: "/topics/entertainment",
    title: "Entertainment",
  },
  {
    icon: <IconRun size={30} />,
    path: "/topics/sports",
    title: "Sports",
  },
];

export const Nav: React.FC = () => {
  return (
    <>
      {TOPICS.map((topic) => (
        <div key={topic.title}>
          <Link href={topic.path}>
            <a>
              <Grid>
                <Grid.Col span={2}>
              {topic.icon}
              </Grid.Col>
              <Grid.Col span={8}>
              <Text weight={600} size={"xl"}>
                {topic.title}
              </Text>
              </Grid.Col>
              </Grid>
            </a>
          </Link>
        </div>
      ))}
    </>
  );
};
