import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Contact from "./Pages/Contact/Contact";
import { Avatar, Button, Grid } from "@mui/material";
import { NavLink, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboarad/MainDashboard";
import Skills from "./Pages/Skills/Skills";
import Project from "./Pages/Project/Project";
import Technology from "./Pages/Technology/Technology";
import Reviews from "./Pages/Reviews/Reviews";
import About from "./Pages/About/About";
import "../src/test.css";
import { motion } from "framer-motion";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ModeToggle } from "./App";
import { experimentalStyled as styled } from "@mui/material/styles";
import { FaCode, FaServicestack } from "react-icons/fa6";
import { MdOutlineDashboard } from "react-icons/md";
import { GoProjectSymlink } from "react-icons/go";
import { MdOutlineReviews } from "react-icons/md";
import { SiAboutdotme } from "react-icons/si";

const ItemBox = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Myappbar = styled(AppBar)(({ theme }) => ({
  ...theme.typography.body2,
  // color: theme.palette.text.secondary,
}));

const drawerWidth = "330px";

function Index(props) {
  function ScrollTop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        "#back-to-top-anchor"
      );

      if (anchor) {
        anchor.scrollIntoView({
          block: "center",
        });
      }
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: "fixed", bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography flexGrow={1}>Portfolio</Typography>
        <img
          src='https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg'
          width={35}
          height={35}
          style={{ borderRadius: "50%" }}
          alt="waqas ahmad"
        />
      </Toolbar>
      <Divider />
      <List>
        {[
          {
            name: "Dashboard",
            icon: <MdOutlineDashboard size={22} />,
            path: "/",
          },
          {
            name: "Project",
            icon: <GoProjectSymlink size={22} />,
            path: "project",
          },
          {
            name: "Services",
            icon: <FaServicestack size={22} />,
            path: "skill",
          },
          {
            name: "Languages",
            icon: <FaCode size={22} />,
            path: "technology",
          },
          {
            name: "Reviews",
            icon: <MdOutlineReviews size={22} />,
            path: "reviews",
          },
          {
            name: "About",
            icon: <SiAboutdotme size={22} />,
            path: "about",
          },
        ].map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton components={NavLink} to={text.path}>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const secondDrawer = (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Box>
          <Grid container spacing={2} columns={{ sm: 8 }}>
            <Grid item sm={12}>
              <Box marginTop={3}>
                <Box justifyContent={"center"} display={"flex"}>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg"
                    sx={{ width: 130, height: 130 }}
                  />
                </Box>
                <Box
                  justifyContent={"center"}
                  display={"flex"}
                  fontWeight={"bold"}
                  mt={1}
                >
                  Waqas Ahmad
                </Box>
                <Box
                  justifyContent={"center"}
                  display={"flex"}
                  sx={{ opacity: "0.4" }}
                >
                  I am Front-End developer
                </Box>
              </Box>
            </Grid>
            {[
              {
                name: "Dashboard",
                icon: <MdOutlineDashboard size={30} />,
                path: "/",
              },
              {
                name: "Project",
                icon: <GoProjectSymlink size={30} />,
                path: "project",
              },
              {
                name: "Services",
                icon: <FaServicestack size={30} />,
                path: "skill",
              },
              {
                name: "Languages",
                icon: <FaCode size={30} />,
                path: "technology",
              },
              {
                name: "Reviews",
                icon: <MdOutlineReviews size={30} />,
                path: "reviews",
              },
              {
                name: "About",
                icon: <SiAboutdotme size={30} />,
                path: "about",
              },
            ].map((val, index) => (
              <Grid item sm={4} key={index}>
                <Item>
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Button
                      sx={{
                        width: "110px",
                        height: "110px",
                        border: 0.5,
                        borderColor: "transparent",
                        "&:hover": {
                          borderColor: (theme) =>
                            theme.palette.mode === "dark" ? "white" : "gray",
                        },
                      }}
                      component={NavLink}
                      to={val.path}
                    >
                      <Box>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            mb: "8px",
                          }}
                        >
                          {val.icon}
                        </Box>
                        <Typography>{val.name}</Typography>
                      </Box>
                    </Button>
                  </motion.div>
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Myappbar position="fixed" elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box flexGrow={1}>
            <Typography variant="h6" noWrap component="div">
              PortFolio
            </Typography>
          </Box>
          <Box>
            <ModeToggle />
          </Box>
        </Toolbar>
      </Myappbar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 240,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              marginTop: "64px",
              overflow: "auto",
            },
          }}
          open
        >
          {secondDrawer}
        </Drawer>
      </Box>
      <ItemBox
        sx={{
          p: { md: 2 },
          width: "100%",
          height: "100vh",
        }}
      >
        <Toolbar id="back-to-top-anchor" />
        <Box component={Box} width={"100%"} height={"100vh"}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/skill" element={<Skills />} />
            <Route path="/project" element={<Project />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/about" element={<About />} />
          </Routes>

          <ScrollTop {...props}>
            <Fab size="small" aria-label="scroll back to top">
              <KeyboardArrowUpIcon />
            </Fab>
            <Divider/>
          </ScrollTop>
        </Box>
      </ItemBox>
    </Box>
  );
}

Index.propTypes = {
  window: PropTypes.func,
};

export default Index;
