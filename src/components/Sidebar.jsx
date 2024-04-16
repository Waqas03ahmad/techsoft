import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { useDispatch, useSelector } from "react-redux";
import { toggleclose } from "../store/ToggleStates";
import { Divider, Toolbar } from "@mui/material";

export default function Sidebar() {
  const openstate = useSelector((e) => e.counter.open);
  const dispatch = useDispatch();

  const data = [
    { name: "Dashboard", path: "dashboard", icon: <InboxIcon /> },
    { name: "Skill", path: "skill", icon: <InboxIcon /> },
    { name: "Technologies", path: "technologies", icon: <InboxIcon /> },
    { name: "Projects", path: "projects", icon: <InboxIcon /> },
    { name: "About Me", path: "about", icon: <InboxIcon /> },
    { name: "Reviews", path: "reviews", icon: <InboxIcon /> },
    { name: "Contact", path: "contact", icon: <InboxIcon /> },
  ];

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={() => dispatch(toggleclose())}
    >
      <List>
        {data.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={openstate} onClose={() => dispatch(toggleclose())}>
        <Toolbar />
        <Divider />
        {DrawerList}
      </Drawer>
    </div>
  );
}
