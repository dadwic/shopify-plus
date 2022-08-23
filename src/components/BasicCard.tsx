import * as React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Circle = styled("span")`
  height: 12px;
  width: 12px;
  cursor: auto;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
  &.active {
    border: 1.5px solid #ffffff;
    outline: 1px solid #000000;
  }
`;

export default function BasicCard({ title, price, src }: any) {
  return (
    <Card elevation={0} sx={{ mr: { xs: 1.5, sm: 4 }, flex: "0 0 auto" }}>
      <CardMedia
        sx={{
          width: "100%",
          height: { xs: 200, sm: 310 },
        }}
        component="img"
        image={src}
        alt=""
      />
      <CardContent sx={{ p: 0 }}>
        <Typography
          fontFamily="Avenir"
          sx={{ fontSize: "12.8px", mt: 1.5, mb: 0.5 }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{ fontSize: "12.8px" }}
            fontWeight={500}
            fontFamily="Avenir"
          >
            {price}
          </Typography>
          <div>
            <Circle color="#99C3CC" className="active" />
            <Circle color="#CC9999" />
            <Circle color="#CB99CC" />
            <Circle color="#A6CC99" />
          </div>
        </Box>
      </CardContent>
    </Card>
  );
}
