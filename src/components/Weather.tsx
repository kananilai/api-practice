import { Card, Grid, Text } from "@mantine/core";
import Image from "next/image";
import { Props } from "./types";

export const Weather: React.FC<Props> = ({ weather }) => {
  const currentWeatherMain = weather?.current.weather[0].main;
  const currentWeatherTemp = weather?.current.temp;
  const currentWeatherIcon = weather?.current.weather[0].icon.slice(0, 2) + "d";
  console.log(currentWeatherIcon);

  return (
    <>
      <Card>
        <Card.Section withBorder inheritPadding py="xs">
          <Text weight={700} size="lg" color="pink">
            Tokyo
          </Text>
        </Card.Section>
        <Card.Section inheritPadding py="md">
          <Grid justify="space-between">
            <Grid.Col span={7}>
              <Text weight={700}>{currentWeatherMain}</Text>
              <Text >
                {currentWeatherTemp?.toString().slice(0, 2)}℃
              </Text>
            </Grid.Col>
            <Grid.Col span={3}>
              <Image
                src={`/img/weatherIcons/${currentWeatherIcon}.png`}
                width={50}
                height={50}
                alt="weather icon"
              />
            </Grid.Col>
          </Grid>
        </Card.Section>
      </Card>
    </>
  );
};
