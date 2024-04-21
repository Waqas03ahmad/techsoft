import { Grid, Paper, Rating } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Avatar from "@mui/joy/Avatar";
import Chip from "@mui/joy/Chip";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import StarIcon from "@mui/icons-material/Star";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const data = [
  {
    name: "Html",
    discription:
      "Layout Design  Forms Design Tables Design  Html Media Html Graphics",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 3,
  },
  {
    name: "CSS",
    discription:
      "Css Styling, Responsive design and Media Queries, MUI and Bootstrap, Tools and Resourses,",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 3,
  },
  {
    name: "Jawascript",
    discription:
      "JawaScript Promeses, Jawascript Callbacks, Error handling, OOPs, Data structure and Algorithum",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 4,
  },
  {
    name: "React",
    discription:
      "React Basics, Reconcialiation, Hooks, Customization, SOLID prcess",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 3.5,
  },

  {
    name: "Material UI",
    discription:
      "Responsiveness, Costomization, Styling, Interactive UI, Design-Driven",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 4.5,
  },
  {
    name: "Bootstrap",
    discription:
      "Responsiveness, Costomization, Styling, Interactive UI, Design-Driven",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 3,
  },

  {
    name: "NPM",
    discription:
      "Formik + Yup, reac-router-dom, react-redux-toolkit, MUI, apexChart ...",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 3,
  },
  {
    name: "Python",
    discription:
      "Syntax and Basics, consept of OOPs, Data Structure and algorithum, Error handling, Data Analysis",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 4,
  },
  {
    name: "ChatGPT",
    discription:
      "intelligent interactions, dynamic content generation providing personalized experience valuable insights...",
    icon: "https://res.cloudinary.com/dt6z3lqko/image/upload/v1713669246/waqas_x0ouxy.jpg",
    stars: 3,
  },
];

const Technology = () => {
  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data.map((value, index) => (
          <Grid item xs={4} sm={8} md={4} key={index} data-aos="zoom-in">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Item
                sx={{
                  border: 0.5,
                  borderColor: "transparent",
                  "&:hover": {
                    borderColor: (theme) =>
                      theme.palette.mode === "dark" ? "white" : "gray",
                  },
                }}
              >
                <Card
                  sx={{
                    width: "auto",
                    maxWidth: "100%",
                    boxShadow: "lg",
                    height: "300px",
                  }}
                >
                  <CardContent
                    sx={{ alignItems: "center", textAlign: "center" }}
                  >
                    <Avatar src={value.icon} sx={{ "--Avatar-size": "4rem" }} />
                    <Chip
                      size="sm"
                      variant="soft"
                      color="primary"
                      sx={{
                        mt: -1,
                        mb: 1,
                        border: "3px solid",
                        borderColor: "background.surface",
                      }}
                    >
                      PRO
                    </Chip>
                    <Typography level="title-lg">{value.name}</Typography>
                    <Typography level="body-sm" sx={{ maxWidth: "24ch" }}>
                      {value.discription}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        mt: 2,
                        "& > button": { borderRadius: "2rem" },
                      }}
                    >
                      <Rating
                        name="text-feedback"
                        value={value.stars}
                        readOnly
                        precision={0.5}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                    </Box>
                  </CardContent>
                </Card>
              </Item>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Technology;
