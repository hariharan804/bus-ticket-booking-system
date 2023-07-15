"use client";
import { MyInput } from "@/components";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { styles } from "./styles";
import { useStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useBusStore } from "@/store/busStore";

function TicketBooking() {
  const schema = yup
    .object()
    .shape({
      designation: yup.string().required("Please Enter the Designation"),
      drop_address: yup.string().required("Please Enter the Drop Address"),
      pickup_address: yup.string().required("Please enter the Pickup Address"),
      travel_hours: yup.string().required("Please enter the Travel Hours"),
      bus_name: yup.string().required("Please enter the Bus Name"),
      bus_no: yup.string().required("Please enter the Bus No"),
      base_fare: yup.number().required("Please enter the Bus No"),
      bus_contact: yup.string().required("Please enter the Bus Contact"),
      travel_time: yup.string().required("Please select travel Date"),
    })
    .required();
  const { userDetails } = useStore();
  const { updateBusDetails } = useBusStore();
  const router = useRouter();
  const { handleSubmit, control, watch } = useForm({
 
    resolver: yupResolver(schema),
  });
 

  const onSubmit = (data: any) => {
    data.id = '';
    updateBusDetails(data);
    // router.push("/user/billing");
  };
 
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
        Bus Details
      </Typography>
      <Box sx={styles.section}>
        <Typography sx={styles.heading}>Add Bus Details</Typography>
        <Grid container columnSpacing={2} rowSpacing={1}>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="designation"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Designation :"
                    placeholder="Enter Designation"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="drop_address"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Drop Address :"
                    placeholder="Enter Drop Address"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="pickup_address"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Pickup Address :"
                    placeholder="Enter Pickup Address"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="travel_hours"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Travel Hours :"
                    placeholder="Enter Travel Hours"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="bus_name"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Bus Name :"
                    placeholder="Enter Bus Name"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="bus_no"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Bus No :"
                    placeholder="Enter Bus No"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="base_fare"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Base Fare :"
                    placeholder="Enter Base Fare"
                    value={value}
                    onChange={(e:any)=>onChange(e)}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="bus_contact"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Bus Contact :"
                    placeholder="Enter Bus Contact"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="travel_time"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="datetime-local"
                    label="Travel Date :"
                    placeholder="Enter Travel Date"
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
      </Box>

      <Grid container justifyContent={"center"} mb={4}>
        <Grid item xs={12} sm={4}>
          <Box
            sx={{
              ...styles.section,
              border: "1.4px solid",
              borderColor: "secondary.light",
            }}
          >
            <Button
              onClick={handleSubmit(onSubmit)}
              sx={styles.loginBtn}
              fullWidth={true}
              variant="contained"
              type="submit"
              disableElevation
            >
              Add Bus
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default TicketBooking;
