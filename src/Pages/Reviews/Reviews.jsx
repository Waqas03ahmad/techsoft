import Box from "@mui/material/Box";
import { Pagination, Paper, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import { useEffect, useState } from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import { motion } from "framer-motion";
import AOS from "aos";
import 'aos/dist/aos.css'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  borderRadius: "5px",
}));

const Reviews = () => {
  useEffect(() => {
    AOS.init({ duration: 400 });
  }, []);
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },

    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Sajjad khan",
      photo: "1.jpg",
      review: "Feel very easy while working with him.",
      rating: 5,
    },
    {
      name: "Jawad ahmad",
      photo: "2.jpg",
      review: "thank you for assistant sir.",
      rating: 2,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
    {
      name: "Masood Shah",
      photo: "3.jpg",
      review: "Deliver perfectly on time as what i expected from him thanks",
      rating: 3.5,
    },
    {
      name: "Mahnoor Hashmi",
      photo: "4.jpg",
      review: "Receomended for the furture work. feel easy to work whith him.",
      rating: 5,
    },
    {
      name: "Waqar Ahmad",
      photo: "5.jpg",
      review: "Feel professional working with Sir Waqas",
      rating: 3.5,
    },
    {
      name: "Zakir ali khan",
      photo: "6.jpg",
      review: "Well done job. Provided what i expected from him.",
      rating: 4,
    },
    {
      name: "Jamal khan",
      photo: "7.jpg",
      review: "He done well job but he has low communication skills.",
      rating: 2.5,
    },
    {
      name: "Amir Khan",
      photo: "8.jpg",
      review: "Developed creative admin dashboard for my school",
      rating: 3,
    },
    {
      name: "Muhammad Ali",
      photo: "9.jpg",
      review: "Recomended for the next project use.",
      rating: 4,
    },
    {
      name: "Kamal Shah",
      photo: "10.jpg",
      review: "Great job waqas thank for your assistant sir..",
      rating: 3.5,
    },
  ]); // Your array of items

  // Logic to calculate total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Logic to get items for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page change
  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/photos")
  //     .then((results) => results.json())
  //     .then((data) => {
  //       return data;
  //     });
  // }, []);

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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} columns={12}>
            {currentItems.map((val, index) => (
              <Grid xs={12} sm={12} md={6} key={index} data-aos="zoom-in">
                <Grid xs={12}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Item elevation={3}>
                      <Card
                        invertedColors
                        sx={{
                          border: 0.5,
                          borderColor: "transparent",
                          "&:hover": {
                            borderColor: (theme) =>
                              theme.palette.mode === "dark" ? "white" : "gray",
                          },
                        }}
                      >
                        <CardContent orientation="horizontal">
                          <Box maxWidth={{ xs: "60px", sm: "70px" }}>
                            <img
                              src={`../../../public/${val.photo}`}
                              alt="Waqas ahmad"
                              style={{
                                width: "100%",
                                height: "auto",
                                borderRadius: "50%",
                              }}
                            />
                          </Box>
                          <CardContent>
                            <Typography level="body-md">{val.name}</Typography>
                            <Typography level="h2">{val.review}</Typography>
                            <Rating
                              name="text-feedback"
                              value={val.rating}
                              readOnly
                              precision={0.5}
                              emptyIcon={
                                <StarIcon
                                  style={{ opacity: 1 }}
                                  fontSize="inherit"
                                />
                              }
                            />
                          </CardContent>
                        </CardContent>
                      </Card>
                    </Item>
                  </motion.div>
                </Grid>
              </Grid>
            ))}

            <Grid container xs={16}></Grid>
            <Pagination
              count={totalPages}
              page={currentPage}
              onChange={handlePageChange}
              sx={{ margin: "30px", float: "right" }}
            />
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Reviews;
