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
  Stack,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styles } from "./styles";
import { useTicketStore } from "@/store/ticketStore";
import { bookingListProps } from "@/types/ticketProps";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function ViewTicket() {
  const { bookedList } = useTicketStore();
  const searchParam = useSearchParams();
  const id = searchParam.get("id");

  const [ticketData, setTicketData] = useState<bookingListProps>({});
  useEffect(() => {
    const data = bookedList?.find((val) => val?.id === id) || bookedList?.[0];
    console.log("🚀 ~ file: page.tsx:37 ~ useEffect ~ data:", data);
    setTicketData(data || {});
  }, [id]);

  const Print = () => {
    //console.log('print');
    let printContents = document?.getElementById("printablediv")?.innerHTML || '';
    let originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  };

  return (
    <Container>
      <Stack direction={"row"} justifyContent={'space-between'} mt={2.4} >
        <Typography sx={styles.title} mt={1}>
          Ticket
        </Typography>
        <Button onClick={()=> print()} sx={styles?.loginBtn}>Print</Button>
      </Stack>

      <Box sx={styles.section} id="printablediv">
        <Typography
          sx={{ ...styles?.heading, fontSize: "22px" }}
          // align="center"
          mb="12px"
        >
          {ticketData?.place?.bus_name}
        </Typography>
        <Stack direction={"row"} gap={"12px"} sx={styles?.row} alignItems={'center'}>
          <Typography sx={styles?.td}>Traveler Name :</Typography>
          <Typography sx={styles?.heading}>
            {ticketData?.traveler_name}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"12px"} sx={styles?.row}>
          <Typography sx={styles?.td}>Gender :</Typography>
          <Typography sx={styles?.heading}>{ticketData?.gender}</Typography>
        </Stack>
        <Stack direction={"row"} gap={"12px"} sx={styles?.row}>
          <Typography sx={styles?.td}>Designation : </Typography>
          <Typography sx={styles?.heading}>
            {ticketData?.place?.label}
          </Typography>
        </Stack>

        <Stack direction={"row"} gap={"12px"} sx={styles?.row}>
          <Typography sx={styles?.td}>Traveling Hours : </Typography>
          <Typography sx={styles?.heading}>
            {ticketData?.place?.travel_hours}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"12px"} sx={styles?.row}>
          <Typography sx={styles?.td}>Reference Id : </Typography>
          <Typography sx={styles?.heading}>
            {ticketData?.id || "BST38484374637E6"}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"12px"} sx={styles?.row}>
          <Typography sx={styles?.td}>Date of Traveling : </Typography>
          <Typography sx={styles?.heading}>
            {ticketData?.travel_time}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"12px"} sx={styles?.row}>
          <Typography sx={styles?.td}>Rate : </Typography>
          <Typography sx={styles?.heading}>
            ₹{" "}
            {(ticketData?.place?.base_fare || 0) * 0.02 +
              (ticketData?.place?.base_fare || 0)}
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export default ViewTicket;
