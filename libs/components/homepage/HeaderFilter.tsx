import React from "react";
import { Stack, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const HeaderFilter = () => {
    return (
        <> <br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />< br /><br />
            <Stack className="search-box">
                <Stack className="select-box">
                    <Box component={"div"} className="box on"
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "10px 20px",
                        }}
                    >
                        <span>Location</span>
                        <ExpandMoreIcon />
                    </Box>

                    <Box className="box">
                        <span>Property type</span>
                        <ExpandMoreIcon />
                    </Box>

                    <Box className="box">
                        <span>7 Rooms</span>
                        <ExpandMoreIcon />
                    </Box>
                </Stack>

                <Stack className="search-box-other">
                    <Box className="advanced-filter">
                        <img src="/img/icons/tune.svg" alt="" />
                        <span>Advanced</span>
                    </Box>

                    <Box className="search-btn">
                        <img src="/img/icons/search_white.svg" alt="" />
                    </Box>
                </Stack>
            </Stack>
        </>
    );
};

export default HeaderFilter;
