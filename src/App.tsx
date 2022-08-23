import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import BasicCard from "components/BasicCard";
import type { Theme } from "@mui/material";

const data = [
  {
    src: "/img/bg-1.jpg",
    title: "365 Signature Hoodie",
    price: "€33.95",
  },
  {
    src: "/img/bg-2.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    src: "/img/bg-3.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
  {
    src: "/img/bg-1.jpg",
    title: "365 Signature Hoodie",
    price: "€33.95",
  },
  {
    src: "/img/bg-2.jpg",
    title: "Organic Skinny High Waist Jeans",
    price: "€33.95",
  },
];

const Text = (
  <Box
    sx={{
      mt: { xs: 31, sm: 12 },
      mr: { xs: 11, sm: 21 },
      ml: { xs: 3, sm: 15 },
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    }}
  >
    <Typography
      variant="h1"
      component="h4"
      fontWeight={700}
      sx={{
        mb: 1.5,
        lineHeight: "130%",
        color: { xs: "#fff", sm: "#000" },
        fontSize: { xs: 20, sm: 31.25 },
      }}
    >
      Everyday items, we have something to suit every occasion.
    </Typography>
    <Typography
      fontWeight={400}
      color="#666666"
      variant="body1"
      sx={{ mb: 4, display: { xs: "none", sm: "block" } }}
    >
      At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
      tincidunt semper eu proin leo gravida cursus.
    </Typography>
    <Button
      sx={{
        color: { xs: "#fff", sm: "#000" },
        borderBottom: "1px solid #000",
        borderRadius: 0,
        fontSize: "12.8px",
        lineHeight: "17.48px",
      }}
    >
      Shop all everyday items
    </Button>
  </Box>
);

export default function App() {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      component="main"
      sx={{ height: "100vh", overflowX: "hidden" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          height: { xs: 437, sm: "auto" },
          backgroundSize: "cover",
          backgroundImage: {
            xs: "url(/img/bg-xs.jpg)",
            sm: "url(/img/bg.jpg)",
          },
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) => t.palette.grey[50],
        }}
      >
        {matches && Text}
      </Grid>
      <Grid item xs={12} sm={6} component={Paper} square>
        <Box pr={15}>{!matches && Text}</Box>
        <Box
          ml={15}
          sx={{
            mt: 8.5,
            width: "100%",
            display: "flex",
            overflowX: "scroll",
            overflowY: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {data.map((item, key) => (
            <BasicCard {...item} key={key} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}
