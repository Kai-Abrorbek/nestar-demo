import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import useDeviceDetect from "@/libs/hooks/useDeviceDetect";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Agents: NextPage = () => {
  const device = useDeviceDetect();
  if (device === "mobile") {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack>Agents LIST MOBILE</Stack>
      </div>
    );
  } else {
    return (
      <div style={{ margin: "20px 0" }}>
        <Stack className={"container"}>Agents LIST</Stack>
      </div>
    );
  }
};

export default withLayoutBasic(Agents);
