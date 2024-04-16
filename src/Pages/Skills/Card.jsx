import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { experimentalStyled as styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { Paper } from "@mui/material";
import { CgWebsite } from "react-icons/cg";
import { SiCodesignal } from "react-icons/si";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { GrUserAdmin } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicCard() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid
            xs={4}
            sm={8}
            md={12}
            marginBottom={"10px"}
            textAlign={"center"}
          >
            <Typography variant="h4">My Services</Typography>
            <Typography variant="h6">
              You will get the bellow services
            </Typography>
          </Grid>
          {[
            {
              name: "UI Developement",
              icon: <CgWebsite size={30} />,
              description:
                "We develope innovative, professoinal and best-performance websites, dashboards and more...",
            },
            {
              name: "Design-Driven",
              icon: <SiCodesignal size={30} />,
              description:
                "Creating task-driven, and design-driven according to given template using react...",
            },
            {
              name: "Management",
              icon: <MdOutlineManageAccounts size={30} />,
              description:
                "We create and manage your ecomerce, educational and other websites professionally...",
            },
            {
              name: "Creativity",
              icon: <IoPaperPlaneOutline size={30} />,
              description:
                "Develope Your UI creatively and professionally with react, MUI, and AI as per your requirments.",
            },
            {
              name: "Admin Dashboard",
              icon: <GrUserAdmin size={30} />,
              description:
                "Develope UI Administration dashboard, Educational, Ecommerce and other for your business...",
            },
            {
              name: "Ecommerce Website",
              icon: <CgWebsite size={30} />,
              description:
                "Innovative, creative and professional Ui for your Ecommerce website and products...",
            },
          ].map((val, index) => (
            <Grid xs={4} sm={4} md={4} key={index}>
              <Item elevation={3} sx={{ "&:hover": { border: 0.3 } }}>
                <Card sx={{ width: "auto" }}>
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        mb: "10px",
                      }}
                    >
                      {val.icon}
                    </Box>
                    <Typography variant="h5" component="div">
                      {val.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {val.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Item>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
