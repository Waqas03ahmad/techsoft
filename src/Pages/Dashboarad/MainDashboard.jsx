// import { makeStyles } from "@mui/styles";
import "../../../public/waqas.jpg";
import {
  Box as MuiBox,
  Button as MuiButton,
  Grid as MuiGrid,
  Rating as MuiRating,
  Typography as MuiTypography,
} from "@mui/material";
import { useCallback } from "react";
import StarIcon from "@mui/icons-material/Star";
import Particles from "react-particles";
import { experimentalStyled as styled } from "@mui/material/styles";
import { loadSlim } from "tsparticles-slim";
import Box from "@mui/joy/Box";

import Typography from "@mui/joy/Typography";
import Star from "@mui/icons-material/Star";
import { MdDownloadForOffline } from "react-icons/md";
const Item = styled(MuiBox)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
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
        <MuiGrid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          <MuiGrid
            item
            container
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <MuiGrid item md={7}>
              <Item>
                <MuiBox
                  sx={{
                    textAlign: { sm: "left", xs: "center" },
                    padding: { sm: "15px", xs: "20px" },
                  }}
                >
                  <MuiTypography mb={2} variant="h3" fontWeight={700}>
                    Lets scale your business
                  </MuiTypography>
                  <MuiTypography variant="h6">
                    Hire professional FrontEnd developer who will boost up your
                    business make 10X your previous state. With over 1years
                    experience in FrontEnd & algorithum, we are your best
                    client.
                  </MuiTypography>
                  <MuiButton
                    variant="contained"
                    color="primary"
                    sx={{ width: "auto", fontSize: "16px", mt: "15px" }}
                    endIcon={<MdDownloadForOffline />}
                  >
                    Resume
                  </MuiButton>
                  <MuiBox mt={2}>
                    <MuiRating
                      name="text-feedback"
                      value={4.5}
                      readOnly
                      precision={0.5}
                      emptyIcon={
                        <StarIcon
                          style={{ opacity: 0.55 }}
                          fontSize="inherit"
                        />
                      }
                    />
                  </MuiBox>
                  <Box
                    sx={(theme) => ({
                      display: "flex",
                      textAlign: "center",
                      alignSelf: "stretch",
                      columnGap: 4.5,
                      "& > *": {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        flexWrap: "wrap",
                        flex: 1,
                      },
                      [theme.breakpoints.up(834)]: {
                        textAlign: "left",
                        "& > *": {
                          flexDirection: "row",
                          gap: 1.5,
                          justifyContent: "initial",
                          flexWrap: "nowrap",
                          flex: "none",
                        },
                      },
                    })}
                  >
                    <div>
                      <Typography
                        fontSize="xl4"
                        fontWeight="lg"
                        endDecorator={
                          <Star fontSize="xl4" sx={{ color: "warning.300" }} />
                        }
                      >
                        4.5
                      </Typography>
                      <Typography textColor="text.secondary">
                        Over <b>5k</b> positive <br /> customer reviews.
                      </Typography>
                    </div>
                    <div>
                      <Typography fontSize="xl4" fontWeight="lg">
                        2+
                      </Typography>
                      <Typography textColor="text.secondary">
                        Global <br /> Projects.
                      </Typography>
                    </div>
                  </Box>
                </MuiBox>
              </Item>
            </MuiGrid>
            <MuiGrid item md={5}>
              <Item>
                <MuiBox
                  sx={{ mt: { xs: "-100px" }, float: "right" }}
                  position={"relative"}
                >
                  <img
                    src={"../../../public/hero1.png"}
                    alt="My Team"
                    style={{ position: "absalute" }}
                  />
                </MuiBox>
              </Item>
            </MuiGrid>
          </MuiGrid>
        </MuiGrid>
      </MuiBox>
    </>
  );
}
