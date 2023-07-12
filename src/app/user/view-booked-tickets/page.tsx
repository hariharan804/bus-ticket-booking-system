"use client";
import { MyInput } from "@/components";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import {
  Box,
  Typography,
  Container,
  Grid,
  Select,
  FormHelperText,
  FormControl,
  MenuItem,
  Divider,
  Chip,
  Stack,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styles } from "./styles";

function BookedTicket() {
  const schema = yup
    .object()
    .shape({
      name: yup.string(),
      email: yup
        .string()
        .trim()
        .email("Please the enter valid Email ID")
        .required("Please the enter Email ID"),
      password: yup
        .string()
        .trim()
        .required("Please enter the password")
        .min(6, "Password must be min 6 characters")
        .max(20, "Password must be max 20 characters")
        .matches(/^\S*$/, "Space not allowed!"),
    })
    .required();

  const { handleSubmit, control, watch } = useForm({
    defaultValues: { email: "superadmin@gmail.com", password: "123456" },

    resolver: yupResolver(schema),
  });
 
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
         Booked Tickets
      </Typography>
      <Box sx={styles.section}>
        <Typography sx={styles.heading}>Traveller Details</Typography>
       
      </Box>
    </Container>
  );
}

export default BookedTicket;
