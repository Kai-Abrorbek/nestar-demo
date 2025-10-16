import { Box, Button, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RefreshIcon from "@mui/icons-material/Refresh";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Filter = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Stack className="filter-box">
      <div>
        <h2>Find Your Home</h2>
        <Stack className="search-box">
          <Box className="input-box">
            <SearchIcon />
            <input type="input" placeholder="What are you looking?" />
          </Box>
          <RefreshIcon />
        </Stack>
      </div>
      <Stack className="location">
        <h3>Location</h3>
        <Stack className="checkbox-con">
          <Stack className="checkbox-box">
            <Checkbox />
            <span>SEOUL</span>
          </Stack>
          <Stack className="checkbox-box">
            <Checkbox />
            <span>BUSAN</span>
          </Stack>
          <Stack className="checkbox-box">
            <Checkbox />
            <span>DAEGU</span>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="property-type">
        <h3>Property Type</h3>
        <Stack className="checkbox-con">
          <Stack className="checkbox-box">
            <Checkbox />
            <span>APARTMENT</span>
          </Stack>
          <Stack className="checkbox-box">
            <Checkbox />
            <span>HAUSE</span>
          </Stack>
          <Stack className="checkbox-box">
            <Checkbox />
            <span>VILLA</span>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="rooms">
        <h3>Rooms</h3>
        <Stack className="buttons">
          <Button>
            <span>any</span>
          </Button>
          <Button>
            <span>1</span>
          </Button>
          <Button>
            <span>2</span>
          </Button>
          <Button>
            <span>3</span>
          </Button>
          <Button>
            <span>4</span>
          </Button>
          <Button>
            <span>5+</span>
          </Button>
        </Stack>
      </Stack>
      <Stack className="bed-rooms">
        <h3>BedRooms</h3>
        <Stack className="buttons">
          <Button>
            <span>any</span>
          </Button>
          <Button>
            <span>1</span>
          </Button>
          <Button>
            <span>2</span>
          </Button>
          <Button>
            <span>3</span>
          </Button>
          <Button>
            <span>4</span>
          </Button>
          <Button>
            <span>5+</span>
          </Button>
        </Stack>
      </Stack>
      <Stack className="options">
        <h3>Options</h3>
        <Stack className="checkbox-con">
          <Stack className="checkbox-box">
            <Checkbox />
            <span>APARTMENT</span>
          </Stack>
          <Stack className="checkbox-box">
            <Checkbox />
            <span>HAUSE</span>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="square-meter">
        <h3>Square meter</h3>
        <Stack className="select-box">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Min</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={50}>50</MenuItem>
              <MenuItem value={100}>100</MenuItem>
              <MenuItem value={150}>150</MenuItem>
              <MenuItem value={200}>200</MenuItem>
            </Select>
          </FormControl>
          <span>ㅡ</span>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Max</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={500}>500</MenuItem>
              <MenuItem value={400}>400</MenuItem>
              <MenuItem value={300}>300</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </Stack>
      <Stack className="price-range">
        <h3>Price Range</h3>
        <Stack className="input-box">
          <input type="number" placeholder="0" />
          <span>ㅡ</span>
          <input type="number" placeholder="250000" />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Filter;
