import "../../../public/waqas.jpg";
import { Grid, Paper } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import "../../../public/react.png";
import "../../../public/MUI.png";
import "../../../public/jawascript.png";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ReactPlayer from "react-player";
import { useSelector, useDispatch } from "react-redux";
import { viewClose, viewOpen } from "../../store/ToggleStates";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  border: "2px solid #000",
  boxShadow: 24,
  width: { md: "95%", lg: "80%", xs: "90%" },
  height: { md: "auto", lg: "auto", xs: "auto" },
};

const Project = () => {
  const [data, setdata] = useState([
    {
      watch: false,
      id: 1,
      name: "Admin Dashboard",
      discription:
        "Admin Dashboard is for administration but this is based on my basic information. Click view to know more",
      photo: "../../../public/Dashboard.jpg",
      video: "https://youtu.be/84Zs8KoXT2o?si=4SV1wyDeU_zJAUHL",
    },
    {
      watch: false,
      id: 2,
      name: "Services",
      discription:
        "We develope user interfaces UI for your projects professoinally and creatively with React and other libraries...",
      photo: "../../../public/services.jpg",
      video: "https://youtu.be/usaOHOmsVwM?si=JBQ7pkHvb0Xwa5VL",
    },
    {
      watch: false,
      id: 3,
      name: "Languages/Technology",
      discription:
        "Jawascript, Python, Django, CSS, Html, Reactjs, Material UI, Bootstrap, and other more AI tools like ChatGPT, coplit etc..",
      photo: "../../../public/languages.jpg",
      video: "https://youtu.be/L2TrVmpfbzs?si=uF006MDSZYQ6W3p8",
    },
    {
      watch: false,
      id: 4,
      name: "Reviews",
      discription:
        "The Reviews have shown in the website is for the demo purpose of including reviews functionality in app..",
      photo: "../../../public/reviews.jpg",
      video: "https://youtu.be/_1AFWOVwo6g?si=uK7Y3YiwcQ7nv0Cl",
    },

    {
      watch: false,
      id: 5,
      name: "About",
      discription:
        "About page contained basic information about me. Here is what and how we solve your poblems professionally...",
      photo: "../../../public/about.jpg",
      video: "https://youtu.be/_M0FEREzwaw?si=BcoUBSZDyRsZHctU",
    },
    {
      watch: false,
      id: 6,
      name: "Projects",
      discription:
        "Projects are already listed about all worked I have done, you can check anything just click on view button..",
      photo: "../../../public/project.jpg",
      video: "../../../public/project.wmv",
    },
  ]);
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);

  const watched = useSelector((e) => e.counter.open);
  const dispatch = useDispatch();
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  const handlChanged = (a) => {
    const updated = data.map((val) => {
      if (a == val.id) {
        return { ...val, watch: !watched };
      }
      return val;
    });

    setdata(updated);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
          {data.map((value, index) => {
            return (
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
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Card>
                      <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={value.photo}
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {value.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {value.discription}
                        </Typography>
                      </CardContent>
                      <CardActions
                        sx={{ display: "felx", justifyContent: "center" }}
                      >
                        <Button
                          size="small"
                          onClick={() => {
                            dispatch(viewOpen());
                            handlChanged(value.id);
                          }}
                        >
                          View
                        </Button>
                      </CardActions>
                    </Card>
                    <div>
                      <Modal
                        open={value.watch}
                        onClose={() => {
                          dispatch(viewClose());
                          handlChanged(value.id);
                        }}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        
                      >
                        <Box
                          sx={style}
                          display={"flex"}
                          justifyContent={"center"}
                          alignItems={"center"}
                          width={"100%"}
                          height={"90%"}
                        >
                          <ReactPlayer
                            className="react-player"
                            url={value.video}
                            width="100%"
                            height="100%"
                            playing={true}
                            volume={1}
                            controls={true}
                          />
                        </Box>
                      </Modal>
                    </div>
                  </Item>
                </motion.div>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default Project;
