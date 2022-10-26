import { AppShell, Navbar, Header, Text, Grid } from "@mantine/core";
import { Nav } from "components/nav/Nav";
import { ThemeIcon } from "components/ThemeIcon";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            <Nav />
          </Navbar>
        }
        header={
          <Header height={60} p="md" >
            <Grid justify="space-between">
              <Grid.Col span={3}>
                <Text color="pink" weight={800} size={"xl"}>News & Weather</Text>
              </Grid.Col>
              <Grid.Col span={1}>
                <ThemeIcon />
              </Grid.Col>
            </Grid>
          </Header>
        }
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        <main>{children}</main>
      </AppShell>
    </>
  );
};
export default MainLayout;
