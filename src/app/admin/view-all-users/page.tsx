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
import { useRouter } from "next/navigation";
import { useStore } from "@/store/authStore";

function BookedTicket() {
  const { userList, deleteUsers } = useStore();
  // const router = useRouter();
  const goToViewTicket = (data: string | number) => {
    deleteUsers(data);
  };
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
        View All Users
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
          Users Details
        </Typography>
        <TableContainer>
          <Table
            sx={{ minWidth: 1050 }}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell sx={styles.heading}>User Id</TableCell>
                <TableCell sx={styles.heading}>Name</TableCell>
                <TableCell sx={styles.heading}>Email Id</TableCell>
                <TableCell sx={styles.heading}>DOB</TableCell>
                <TableCell sx={styles.heading}>Role</TableCell>
                <TableCell sx={styles.heading} align="center">
                  Status
                </TableCell>
                <TableCell sx={styles.heading} align="center">
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userList?.length > 0 ? (
                <>
                  {userList.map((row, index) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell sx={styles.td}>{row.id || index}</TableCell>
                      <TableCell sx={styles.td}>{row.name}</TableCell>
                      <TableCell sx={styles.td}>{row.email}</TableCell>
                      <TableCell sx={styles.td}>{row.dob}</TableCell>
                      <TableCell sx={styles.td}>{row?.role}</TableCell>

                      <TableCell align="center">
                        <Typography sx={styles.success}>{"Active"}</Typography>
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{
                          ...styles.td,
                          textDecoration: "underline",
                          color:
                            row?.role === "admin"
                              ? "info.light"
                              : "error.light",
                          cursor: "pointer",
                        }}
                        onClick={() =>
                          row?.role !== "admin" && goToViewTicket(row?.id)
                        }
                      >
                        {row?.role === "admin" ? "No action" : "Remove"}
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
