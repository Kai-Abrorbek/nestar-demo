import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Pagination, Stack } from "@mui/material";
import { NextPage } from "next";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Filter from "@/libs/components/property/Filter";
import Propertes from "@/libs/components/property/PropertyList";

const PropertyList: NextPage = () => {
  return (
    <div>
      <Stack className={"container"}>
        <Stack className="top-frame">
          <p>Sort by</p>
          <strong>New</strong>
          <ExpandMoreIcon />
        </Stack>
        <Stack className="middle-frame">
          <Stack className="middle-left">
            <Filter />
          </Stack>
          <Stack className="middle-right">
            <Propertes />
            <Stack className="pagination-box">
              <Pagination count={10} color="primary" />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default withLayoutBasic(PropertyList);
