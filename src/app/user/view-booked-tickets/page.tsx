"use client";
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
} from "@mui/material";
import { styles } from "./styles";
import { useTicketStore } from "@/store/ticketStore";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/authStore";
import { useEffect } from "react";

function BookedTicket() {
  const { userDetails } = useStore();
  const { bookedList, getAllTickets } = useTicketStore();
  console.log("🚀 ~ file: page.tsx:22 ~ BookedTicket ~ bookedList:", bookedList)

  const router = useRouter();
  const goToViewTicket = (data: string | number) => {
    router.push("/user/view-ticket?id=" + data);
  };

  useEffect(() => {
    getAllTickets();
  }, []);
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
        Booked Tickets
      </Typography>

      <Box sx={styles.section}>
        <Typography
          sx={{
            ...styles.heading,
            textDecoration: "underline",
            fontSize: "22px",
          }}
          mb={1}
        >
          Traveller Details
        </Typography>
        <TableContainer>
          <Table
            sx={{ minWidth: 1050 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={styles.heading}>Traveler Name</TableCell>
                <TableCell sx={styles.heading}>Gender</TableCell>
                <TableCell sx={styles.heading}>Travel Hours</TableCell>
                <TableCell sx={styles.heading}>Place</TableCell>
                <TableCell sx={styles.heading}>Bus Name</TableCell>
                <TableCell sx={styles.heading}>Paid</TableCell>
                <TableCell sx={styles.heading} align="center">
                  Status
                </TableCell>
                <TableCell sx={styles.heading} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bookedList?.length > 0 ? (
                <>
                  {bookedList
                    .filter((val) => val?.user_id == userDetails?.id)
                    .map((row) => (
                      <TableRow
                        key={row.traveler_name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell sx={styles.td}>
                          {row.traveler_name}
                        </TableCell>
                        <TableCell sx={styles.td}>{row.gender}</TableCell>
                        <TableCell sx={styles.td}>
                          {row.place?.travel_hours}
                        </TableCell>
                        <TableCell sx={styles.td}>
                          {row.place?.designation}
                        </TableCell>
                        <TableCell sx={styles.td}>
                          {row?.place?.bus_name}
                        </TableCell>
                        <TableCell sx={styles.td}>
                          ₹{" "}
                          {(row?.place?.base_fare || 0) * 0.02 +
                            (row?.place?.base_fare || 0)}
                        </TableCell>
                        <TableCell align="center">
                          <Typography sx={styles.success}>
                            {row?.payment}
                          </Typography>
                        </TableCell>
                        <TableCell
                          align="center"
                          sx={{
                            ...styles.td,
                            textDecoration: "underline",
                            color: "secondary.light",
                            cursor: "pointer",
                          }}
                          onClick={() => goToViewTicket(row?.id)}
                        >
                          View Ticket
                        </TableCell>
                      </TableRow>
                    ))}
                </>
              ) : (
                "No Data found!"
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
}

export default BookedTicket;
