import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import type { Theme } from "@mui/material";

const Text = (
  <Box
    sx={{
      mt: { xs: 31, sm: 8 },
      mx: { xs: 3, sm: 4 },
      display: "flex",
      flexDirection: "column",
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
    <Link sx={{ color: { xs: "#fff", sm: "#000" } }}>
      Shop all everyday items
    </Link>
  </Box>
);

export default function App() {
  const matches = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
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
      <Grid item xs={12} sm={6} px={15} py={12} component={Paper} square>
        {!matches && Text}
      </Grid>
    </Grid>
  );
}
