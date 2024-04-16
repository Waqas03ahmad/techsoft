import Box from "@mui/material/Box";
import "../../../public/waqas.jpg";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Button, Grid } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Project = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: { md: "95vh", sm: "auto" },
        overflowY: "auto",
        padding: "20px",
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[
          "dashboard",
          "homepage",
          "design page",
          "delivery",
          "aboutus",
          "projects",
        ].map((val, index) => (
          <Grid item xs={4} sm={8} md={4} key={index}  >
            <Item>
              <Card variant="outlined" sx={{ width: "auto" }}>
                <CardOverflow>
                  <AspectRatio ratio="2">
                    <img src={"../../../public/waqas.jpg"} />
                  </AspectRatio>
                </CardOverflow>
                <CardContent>
                  <Typography level="title-md" >
                    Yosemite National Park
                  </Typography>
                  <Typography level="body-sm" onClick={(event)=>{
                    console.log("Events Occur")
                    if(event.ctrlKey){
                      console.log("you  pressed"+ event.offsetX);
                    }
                    else{
                      console.log("not pressed");
                    }
                    }}>{val}</Typography>
                </CardContent>
                <CardOverflow
                  variant="soft"
                  sx={{ bgcolor: "background.level1" }}
                >
                  <Divider inset="context" />
                  <CardContent orientation="horizontal">
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      6.3k views
                    </Typography>
                    <Divider orientation="vertical" />
                    <Typography
                      level="body-xs"
                      fontWeight="md"
                      textColor="text.secondary"
                    >
                      1 hour ago
                    </Typography>
                  </CardContent>
                </CardOverflow>
              </Card>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Project;
