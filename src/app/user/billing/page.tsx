"use client";
"use client";
import { MyInput } from "@/components";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import {
  Box,
  Typography,
  Container,
  Grid,
  Divider,
  Stack,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styles } from "../ticket-booking/styles";
import { useRouter } from "next/navigation";
import { useTicketStore } from "@/store/ticketStore";
import { toast } from "react-hot-toast";

function Billing() {
  const schema = yup
    .object()
    .shape({
      cardNumber: yup.string().required("Please Enter Card Number"),
      name: yup.string().required("Please Enter Card holder name"),
      expiryDate: yup.string().required("Please Enter Expiry Date"),
      cvv: yup.string().required("Please Enter Card cvv"),
    })
    .required();
  const ticketData = useTicketStore();
  const router = useRouter();
  const { handleSubmit, control, watch } = useForm({
    // defaultValues: { email: "superadmin@gmail.com", password: "123456" },

    resolver: yupResolver(schema),
  });
  const onSubmit = (data: any) => {
    // updateTicketStore(data);
    // data.payment = 'success'
    ticketData?.updateTicketList({
      id: new Date().getTime().toString(),
      traveler_name: ticketData?.traveler_name,
      gender: ticketData?.gender,
      place: ticketData?.place,
      email: ticketData?.email,
      mobile: ticketData?.mobile,
      payment: "success",
    });
    toast.success("Ticket Booked Successfully!");
    // router.push("/user/view-booked-tickets");
  };
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
        Billing
      </Typography>
      <Box sx={{ ...styles.section, padding: "22px 26px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography sx={styles.heading}>
              Debit/Credit Card Details
            </Typography>
            <Grid container columnSpacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={styles.inputContainer}>
                  <Controller
                    name="cardNumber"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MyInput
                        type="text"
                        label="Card Number :"
                        placeholder="Enter your card Number"
                        value={value}
                        onChange={onChange}
                        helperText={error ? error.message : ""}
                        error={!!error}
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={styles.inputContainer}>
                  <Controller
                    name="name"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MyInput
                        type="text"
                        label="Card Holder Name :"
                        placeholder="Enter Card Holder Name"
                        value={value}
                        onChange={onChange}
                        helperText={error ? error.message : ""}
                        error={!!error}
                      />
                    )}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} sm={6} md={4}>
                <Box sx={styles.inputContainer}>
                  <Controller
                    name="expiryDate"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MyInput
                        type="text"
                        label="Expiry Date :"
                        placeholder="Enter Card Expiry Date"
                        value={value}
                        onChange={onChange}
                        helperText={error ? error.message : ""}
                        error={!!error}
                      />
                    )}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Box sx={styles.inputContainer}>
                  <Controller
                    name="cvv"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MyInput
                        type="text"
                        label="CVV :"
                        placeholder="Enter Card CVV"
                        value={value}
                        onChange={onChange}
                        helperText={error ? error.message : ""}
                        error={!!error}
                      />
                    )}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box
              sx={{
                ...styles.section,
                border: "none",
                borderRadius: "0",
                borderLeft: "1.4px solid",
                borderLeftColor: "#00000014",
              }}
            >
              <Stack direction={"row"} mb={1}>
                <Box flexGrow={1}>
                  <Typography sx={styles.costText}>Base Fare</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost} align="right">
                    ₹ {ticketData?.place?.base_fare}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"row"} mb={1}>
                <Box flexGrow={1}>
                  <Typography sx={styles.costText}>Tax</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost} align="right">
                    ₹ {ticketData?.place?.base_fare * 0.02}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"row"} mb={1.8}>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost}>Total Base Price</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost} align="right">
                    ₹{" "}
                    {ticketData?.place?.base_fare * 0.02 +
                      ticketData?.place?.base_fare}
                  </Typography>
                </Box>
              </Stack>
              <Divider
                sx={{
                  borderColor: "secondary.400",
                  borderStyle: "dashed",
                  marginBottom: "12px",
                }}
              />
              <Button
                // onClick={handleSubmit(onSubmit)}
                sx={styles.loginBtn}
                fullWidth={true}
                variant="contained"
                type="submit"
                disableElevation
                onClick={handleSubmit(onSubmit)}
              >
                PAY NOW
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Billing;
