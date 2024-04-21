// import { makeStyles } from "@mui/styles";
import { Button, Grid, Box as MuiBox, Rating, Typography } from "@mui/material";
import { useCallback } from "react";
import StarIcon from "@mui/icons-material/Star";
import Particles from "react-particles";
import { experimentalStyled as styled } from "@mui/material/styles";
import { loadSlim } from "tsparticles-slim";
import Box from "@mui/joy/Box";
import { MdDownloadForOffline } from "react-icons/md";
const Item = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: "5px",
}));

const Item2 = styled(Box)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: "5px",
}));
export default function Hook() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      <MuiBox position={"relative"}>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            particles: {
              number: {
                value: 80,
                density: {
                  enable: true,
                  value_area: 2130.6986324071363,
                },
              },
              color: {
                value: "#00f0ff",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 0.5,
                random: false,
                anim: {
                  enable: false,
                  speed: 1,
                  opacity_min: 0.1,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 40,
                  size_min: 0.1,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#09e2ff",
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "repulse",
                },
                onclick: {
                  enable: false,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 3,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        ></Particles>
        <Grid
          container
          columns={12}
          position={"absolute"}
          sx={{ display: "flex", alignItems: "start" }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            sx={{ textAlign: { xs: "center", sm: "start" } }}
          >
            <Item>
              <Box sx={{ paddingX: { xs: "30px", sm: "5px" }, mt: "10px" }}>
                <Typography
                  variant="h3"
                  sx={{ display: { sm: "block", xs: "none" } }}
                >
                  Lets scale your business with professional frontend developer
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ display: { sm: "none", xs: "block" } }}
                >
                  Lets scale your business with professional frontend developer
                </Typography>
                <Typography level="title-lg">
                  Get professional frontEnd Developer who will scale up your
                  business with creative, innovative, and modern user interface.
                  I am Waqas Ahmad FrontEnd developer with 1 years of
                  experience. I develope User interface as per your
                  requirements. Let me to make your client happy. Check Resume
                  for more details.
                </Typography>
                <Button
                  variant="contained"
                  endIcon={<MdDownloadForOffline />}
                  sx={{ marginY: "15px" }}
                >
                  Resume
                </Button>

                <Box>
                  <Rating
                    name="text-feedback"
                    value={4}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 1 }} fontSize="inherit" />
                    }
                  />
                </Box>
              </Box>
            </Item>
          </Grid>
          <Grid
            item
            xs={12}
            sm={5}
            sx={{ textAlign: { xs: "center", sm: "center", md: "center" } }}
          >
            <Item2>
              <Box sx={{ maxWidth: "100%", height: "auto" }}>
                <img
                  src="https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg"
                  alt="Waqas ahmad"
                  width={"60%"}
                  height={"auto"}
                />
              </Box>
            </Item2>
          </Grid>
        </Grid>
      </MuiBox>
    </>
  );
}
