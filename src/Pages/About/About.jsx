import Box from "@mui/material/Box";
import "../../../public/waqas.jpg";
import { Avatar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
// import { Typography as Joytypo } from "@mui/joy/Typography";
import { useState } from "react";
import { Collapse } from "@mui/material";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
}));

const About = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          <Grid xs={12}>
            <Item>
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  justifyContent: "center",
                  width: "100%",
                  height: "30vh",
                  alignItems: "center",
                  backgroundImage: `url("../../../public/aboutme.jpg")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust color and opacity here
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    color: "white",
                    paddingTop: "50px",
                  }}
                >
                  <Typography variant="h3">About Me</Typography>
                  <Typography variant="body1">
                    This is an example of applying a color overlay on an image
                    in Material-UI.
                  </Typography>
                </Box>
              </Box>
            </Item>
          </Grid>

          <Grid xs={12} sm={6}>
            <Item>
              <Card
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "auto",
                  // to make the demo resizable
                  overflow: "auto",
                  "--icon-size": "100px",
                }}
              >
                <CardOverflow variant="solid" color="warning">
                  <AspectRatio
                    variant="outlined"
                    color="warning"
                    ratio="1"
                    sx={{
                      m: "auto",
                      transform: "translateY(50%)",
                      borderRadius: "50%",
                      width: "var(--icon-size)",
                      boxShadow: "sm",
                      bgcolor: "background.surface",
                      position: "relative",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="../../../public/waqas.jpg"
                      sx={{ width: 56, height: 56 }}
                    />
                  </AspectRatio>
                </CardOverflow>
                <Typography
                  level="title-lg"
                  sx={{ mt: "calc(var(--icon-size) / 2)" }}
                >
                  🎊 Waqas Ahmad 🎊
                </Typography>
                <Typography sx={{opacity:"0.5",mt:'-10px'}} variant="h0">Front-End Developer</Typography>
                <CardContent sx={{ maxWidth: "40ch" }}>
                 innovative, task-driven professional with 1 year of experience in Front-End Development with react. I develop user interface wit
                </CardContent>
                <CardActions
                  orientation="vertical"
                  buttonFlex={1}
                  sx={{
                    "--Button-radius": "40px",
                    width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
                  }}
                ></CardActions>
                <Box>
                  <Button
                    variant="outline"
                    color="warning"
                    onClick={handleExpandClick1}
                  >
                    {expanded1 ? "View Less" : "View More"}
                  </Button>
                  <Collapse in={expanded1} timeout="auto" unmountOnExit>
                    <Typography variant="body1">
                      This is the additional content that appears when the
                      button is clicked.
                    </Typography>
                  </Collapse>
                </Box>
              </Card>
            </Item>
          </Grid>
          <Grid xs={12} sm={6}>
            <Item>
              <Card
                sx={{
                  textAlign: "center",
                  alignItems: "center",
                  width: "auto",
                  // to make the demo resizable
                  overflow: "auto",
                  "--icon-size": "100px",
                }}
              >
                <CardOverflow variant="solid" color="warning">
                  <AspectRatio
                    variant="outlined"
                    color="warning"
                    ratio="1"
                    sx={{
                      m: "auto",
                      transform: "translateY(50%)",
                      borderRadius: "50%",
                      width: "var(--icon-size)",
                      boxShadow: "sm",
                      bgcolor: "background.surface",
                      position: "relative",
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="../../../public/hero1.png"
                      sx={{ width: 56, height: 56 }}
                    />
                  </AspectRatio>
                </CardOverflow>
                <Typography
                  level="title-lg"
                  sx={{ mt: "calc(var(--icon-size) / 2)" }}
                >
                  🎊 Waqas Ahmad 🎊
                </Typography>
                <Typography sx={{opacity:"0.5",mt:'-10px'}} variant="h0">Front-End Developer</Typography>
                <CardContent sx={{ maxWidth: "40ch" }}>
                  You just gain one Cookhat for Salad cooking. Share your
                  achievement with your friends.
                </CardContent>
                <CardActions
                  orientation="vertical"
                  buttonFlex={1}
                  sx={{
                    "--Button-radius": "40px",
                    width: "clamp(min(100%, 160px), 50%, min(100%, 200px))",
                  }}
                ></CardActions>
                <Box>
                  <Button
                    variant="outline"
                    color="warning"
                    onClick={handleExpandClick1}
                  >
                    {expanded1 ? "View Less" : "View More"}
                  </Button>
                  <Collapse in={expanded1} timeout="auto" unmountOnExit>
                    <Typography variant="body1">
                      This is the additional content that appears when the
                      button is clicked.
                    </Typography>
                  </Collapse>
                </Box>
              </Card>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
