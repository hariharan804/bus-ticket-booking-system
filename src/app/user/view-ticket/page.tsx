"use client";
import { MyInput } from "@/components";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import {
  Box,
  Typography,
  Container,
 
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styles } from "./styles";
import { useTicketStore } from "@/store/ticketStore";
import { bookingListProps } from "@/types/ticketProps";
import { useEffect } from "react";
import { useParams } from "next/navigation";

function ViewTicket() {
  const { bookedList } = useTicketStore();
  const param  = useParams();
  console.log("🚀 ~ file: page.tsx:29 ~ ViewTicket ~ param:", param)
 useEffect(()=>{

 },[])
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
        Ticket
      </Typography>

      <Box sx={styles.section}>
        <Typography sx={{...styles.heading, textDecoration:'underline', fontSize:'22px'}} mb={1}>
          Traveller Details
        </Typography>
       
      </Box>
    </Container>
  );
}

export default ViewTicket;
