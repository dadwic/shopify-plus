import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import BasicCard from "components/BasicCard";
import { ArrowRight } from "icons";
import { PRODUCTS } from "data";
import type { Product } from "types";
import type { Theme } from "@mui/material";

export default function App() {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Grid
      container
      component="main"
      sx={{ height: { xs: "auto", sm: "100vh" }, overflowX: "hidden" }}
    >
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
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
        {!matches && <Box pr={15}>{Text}</Box>}
        <Box
          sx={{
            position: "relative",
            ml: { xs: 3, sm: 15 },
            mt: { xs: -5, sm: 8.5 },
          }}
        >
          <Box
            sx={{
              width: "100%",
              display: "flex",
              overflowX: "scroll",
              overflowY: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {PRODUCTS.map((item: Product, key: number) => (
              <BasicCard {...item} key={key} />
            ))}
          </Box>
          <Button
            color="inherit"
            sx={{
              position: "absolute",
              top: 135,
              right: 48,
              width: 40,
              height: 40,
              minWidth: 0,
              padding: 0,
              borderRadius: 0,
              border: "1px solid rgba(0, 0, 0, 0.1)",
              display: { xs: "none", sm: "inline-flex" },
            }}
          >
            <ArrowRight />
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

const Text = (
  <Box
    sx={{
      mt: { xs: 31, sm: 12 },
      pr: { xs: 10, sm: 3 },
      pl: { xs: 3, sm: 15 },
      pb: { xs: 9, sm: 0 },
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      background: {
        xs: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 78.65%)",
        sm: "none",
      },
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
      fontSize={16}
      lineHeight="25.6px"
      color="#666666"
      variant="body1"
      fontFamily="Avenir"
      sx={{ mb: 4, display: { xs: "none", sm: "block" } }}
    >
      At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit
      tincidunt semper eu proin leo gravida cursus.
    </Typography>
    <Button
      sx={{
        color: { xs: "#fff", sm: "#000" },
        borderBottom: { xs: "1px solid #fff", sm: "1px solid #000" },
        borderRadius: 0,
        fontSize: "12.8px",
        lineHeight: "17.48px",
      }}
    >
      Shop all everyday items
    </Button>
  </Box>
);
