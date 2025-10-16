import { Box, Stack } from "@mui/material";
import { useState } from "react";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedOutlinedIcon from "@mui/icons-material/BedOutlined";
import SquareFootOutlinedIcon from "@mui/icons-material/SquareFootOutlined";
const Propertes = () => {
  const [propertyList, setPropertyList] = useState<number[]>([
    1, 2, 3, 4, 5, 6,
  ]);
  return (
    <Stack className="property-list">
      {propertyList.map((item) => {
        return (
          <Stack key={item} className="property-cart">
            <Stack className="property-img">
              <div />
              <Box className="top-badge">
                <LocalActivityIcon />
                <span>TOP</span>
              </Box>
              <Box className="price-badge">
                <span>$ 25000</span>
              </Box>
            </Stack>
            <Stack className="property-info">
              <h1>Kingstone Apartments</h1>
              <h3>Busan, City Center 200-5</h3>
              <Stack className="room-info-box">
                <Stack className="bed-icon">
                  <BedOutlinedIcon />
                  <p>2 bed</p>
                </Stack>
                <Stack className="bed-icon">
                  <span>🛋️</span>
                  <p>7 room</p>
                </Stack>
                <Stack className="bed-icon">
                  <SquareFootOutlinedIcon />
                  <p>120 m2</p>
                </Stack>
              </Stack>
              <Stack className="view-like-con">
                <h3>Rent Barter</h3>
                <Stack className="view-like">
                  <VisibilityIcon />
                  <h3>100</h3>
                  <FavoriteIcon sx={{ color: "red" }} />
                  <h3>20</h3>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Propertes;
