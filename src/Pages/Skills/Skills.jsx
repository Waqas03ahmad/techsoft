import Box from "@mui/material/Box";
import BasicCard from "./Card";


const Skills = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: { md: "95vh", sm: "auto" },
        padding: "20px",
      }}
    >
      <Box>
        <BasicCard/>
      </Box>
    </Box>
  );
};

export default Skills;
