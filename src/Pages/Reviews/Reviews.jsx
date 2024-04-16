import Box from "@mui/material/Box";
import "../../../public/waqas.jpg";
import { Avatar, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const Reviews = () => {
  var data = [
    {
      name: "Muhammad Ali",
      photo: "1.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "2.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "3.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "4.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "5.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "6.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "7.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "8.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
    {
      name: "Muhammad Ali",
      photo: "10.jpg",
      review: "the quick brown fox jumps over the lazy dog",
      rating: 3.5,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        padding: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "10px",
          width: "100%",
        }}
      >
        <Box sx={{ flexGrow: 1 }} >
          <Grid container spacing={4} columns={12}>
            {data.map((val, index) => (
              <Grid xs={12} sm={12} md={6} key={index}>
                <Grid xs={12}>
                  <Item elevation={3} sx={{ "&:hover": { border: 0.3 } }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        alt={val.name}
                        src={`../../../public/${val.photo}`}
                        sx={{ width: 56, height: 56 }}
                      />

                      <Box sx={{ marginLeft: "8px" }}>
                        <Typography>{val.name}</Typography>
                        <Typography sx={{ mt: "-3px", opacity: "0.6" }}>
                          {val.review}
                        </Typography>
                        <Box>
                          <Box
                            sx={{
                              width: 200,
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Rating
                              name="text-feedback"
                              value={val.rating}
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
                        </Box>
                      </Box>
                    </Box>
                  </Item>
                </Grid>
              </Grid>
            ))}

            <Grid container xs={16}></Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
