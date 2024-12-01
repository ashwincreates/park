import Drawer from "@mui/joy/Drawer";
import { useNode } from "../../../hooks/useNode";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Stack,
  Tab,
  TabList,
  Tabs,
  Typography,
} from "@mui/joy";
import {
  CubeIcon,
  DocumentTextIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import NodeForm from "./NodeForm";
import { useState } from "react";
import EditNeighbours from "./EditNeighbours";

const enum SelectedTab {
  DETAILS,
  NEIGHBOURS,
}

function EditNode() {
  const {
    editingMode,
    toggleEditing,
    newNode
  } = useNode();
  const [tab, setTab] = useState(SelectedTab.DETAILS);

  console.log("edit node");

  const TabContent = () => {
    switch (tab) {
      case SelectedTab.DETAILS:
        return <NodeForm />;
      case SelectedTab.NEIGHBOURS:
        return <EditNeighbours />;
    }
  };

  return (
    <Drawer
      open={editingMode}
      size={"md"}
      anchor={"right"}
      hideBackdrop={true}
      disablePortal={true}
      slotProps={{
        root: {
          sx: {
            position: "absolute",
            pointerEvents: "none",
          },
        },
        content: {
          sx: {
            position: "absolute",
            height: "calc(100% - 32px)",
            borderRadius: (theme) => theme.radius.sm,
            top: 16,
            right: 16,
            bottom: 16,
            left: "unset",
            background: "transparent",
            boxShadow: "none",
            pointerEvents: "all",
          },
        },
      }}
    >
      <Card>
        <Stack
          direction="row"
          alignContent="center"
          justifyContent="space-between"
        >
          <Stack direction="row" gap={1}>
            <Typography alignSelf="center" level="title-lg">
              {newNode.node.id !== '' ? "Edit Node" : "New Node"}
            </Typography>
          </Stack>
          <IconButton onClick={() => toggleEditing()}>
            <XMarkIcon height={16} />
          </IconButton>
        </Stack>
        <CardContent>
          <Tabs size="sm" onChange={(e, v) => setTab(v as SelectedTab)}>
            <TabList sx={{ gap: 1 }} disableUnderline tabFlex={1}>
              <Tab
                sx={(theme) => ({ borderRadius: theme.radius.sm })}
                indicatorInset
                value={SelectedTab.DETAILS}
              >
                <DocumentTextIcon height={16} />
                Details
              </Tab>
              <Tab
                sx={(theme) => ({ borderRadius: theme.radius.sm })}
                indicatorInset
                value={SelectedTab.NEIGHBOURS}
              >
                <CubeIcon height={16} />
                Neighbours
              </Tab>
            </TabList>
          </Tabs>
          <TabContent />
        </CardContent>
        <CardActions>
          <Button onClick={() => {}}>Save</Button>
        </CardActions>
      </Card>
    </Drawer>
  );
}

export default EditNode;
