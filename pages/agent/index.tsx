import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import { Stack } from "@mui/material";
import { NextPage } from "next";

const Agents: NextPage = () => {
  return (
    <div style={{ margin: "20px 0" }}>
      <Stack className={"container"}>Agents LIST</Stack>
    </div>
  );
};

export default withLayoutBasic(Agents);
