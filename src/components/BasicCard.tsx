import * as React from "react";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

interface Props {
  title: string;
  price: string;
  src: string;
}

const Circle = styled("span")`
  height: 12px;
  width: 12px;
  cursor: auto;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin-left: 8px;
  @media (max-width: 599px) {
    margin-left: 1px;
    margin-right: 7px;
  }
  &.active {
    border: 1.5px solid #fff;
    box-shadow: 0 0 0 1px #000;
  }
`;

export default function BasicCard({ title, price, src }: Props) {
  return (
    <Card
      elevation={0}
      sx={{
        mr: { xs: 1.5, sm: 4 },
        flex: "0 0 auto",
        width: { xs: 140, sm: 230 },
      }}
    >
      <CardMedia component="img" image={src} alt={title} />
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
            flexDirection: { xs: "column", sm: "row" },
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
