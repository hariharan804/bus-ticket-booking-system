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
import { useStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useTicketStore } from "@/store/ticketStore";
import { useEffect, useState } from "react";

function TicketBooking() {
  const schema = yup
    .object()
    .shape({
      traveler_name: yup.string().required("Please the traveler name"),
      gender: yup.string().required("Please select Gender"),
      place: yup.object().required("Please select Place"),
      travel_time: yup.string().required("Please select Place"),
      email: yup
        .string()
        .trim()
        .email("Please the enter valid Email ID")
        .required("Please the enter Email ID"),
      mobile: yup.number().required("Please enter the Mobile Number"),
      // .min(9,'Min 10 dight only').max(10,'Max 10 dight only'),
    })
    .required();
  const { userDetails } = useStore();
  const { updateTicketStore } = useTicketStore();
  const router = useRouter();
  const { handleSubmit, control, watch } = useForm({
    defaultValues: {
      email: userDetails?.email,
      traveler_name: userDetails?.name,
    },
    resolver: yupResolver(schema),
  });
  const [currentBus, setCurrentBus] = useState({
    email: "",
    traveler_name: "",
    travel_time: "",
    place: {
      id: 0,
      label: "",
      drop_address: "",
      pickup_address: "",
      base_fare: 0,
      travel_hours: "",
      bus_name: "",
      bus_no: "",
      bus_contact: "",
    },
    mobile: "",
  });

  const onSubmit = (data: any) => {
    updateTicketStore(data);
    router.push("/user/billing");
  };

  useEffect(() => {
    if (watch()?.place || watch()?.travel_time) {
      setCurrentBus(watch());
    }
  }, [watch()?.place, watch()?.travel_time]);
  const busDetails = [
    {
      id: 1,
      label: "Chennai to Madurai",
      drop_address: "Madurai Bus Stand",
      pickup_address: "CMPT Bus Stand",
      base_fare: 600,
      travel_hours: "8h 30m",
      bus_name: "RVS Bus Service",
      bus_no: "TN 20 BN 1020",
      bus_contact: "8887657556",
      travel_data:'23/03/23'
    },
    {
      id: 2,
      label: "Madurai to Chennai",
      drop_address: "CMPT Bus Stand(Last stop)",
      pickup_address: "Madurai Bus Stand",
      base_fare: 600,
      travel_hours: "8h 30m",
      bus_name: "RVS Bus Service",
      bus_no: "TN 20 BN 1020",
      bus_contact: "8887657556",
      travel_data:'23/03/23'
    },
  ];
  return (
    <Container>
      <Typography sx={styles.title} mt={3}>
        Ticket Booking
      </Typography>
      <Box sx={styles.section}>
        <Typography sx={styles.heading}>Traveller Details</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="traveler_name"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Name :"
                    placeholder="Enter your Name"
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
              <Typography sx={styles.label}>Gender :</Typography>
              <Controller
                name="gender"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <FormControl fullWidth>
                    <Select
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value);
                      }}
                      displayEmpty
                      fullWidth
                      size="small"
                      inputProps={{ "aria-label": "Without label" }}
                      error={!!error}
                    >
                      <MenuItem value={"Male"}>Male</MenuItem>
                      <MenuItem value={"Female"}>Female</MenuItem>
                      <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                    <FormHelperText sx={{ color: "#f44f5a" }}>
                      {error ? error.message : ""}
                    </FormHelperText>
                  </FormControl>
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Typography sx={styles.label}>Select Place :</Typography>
              <Controller
                name="place"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <FormControl fullWidth>
                    <Select
                      value={value?.id}
                      // onChange={(e) => {
                      //   onChange(e.target.value);
                      // }}
                      fullWidth
                      size="small"
                      inputProps={{ "aria-label": "Without label" }}
                      error={!!error}
                    >
                      {busDetails?.map((bus) => (
                        <MenuItem value={bus?.id} onClick={() => onChange(bus)}>
                          {bus?.label}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText sx={{ color: "#f44f5a" }}>
                      {error ? error.message : ""}
                    </FormHelperText>
                  </FormControl>
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
                    label="Travel Time :"
                    placeholder="Enter your Travel Time"
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

        {/* Name

Gender date and time place*/}
      </Box>
      {currentBus?.place?.id !== 0 && currentBus?.travel_time && (
        <Box
          sx={{
            ...styles.section,
            border: ".10rem dashed",
            borderColor: "primary.light",
            padding: "22px",
          }}
        >
          <Stack
            direction={"row"}
            divider={<TrendingFlatIcon color="inherit" />}
            gap={"12px"}
            sx={{ color: "secondary.light" }}
          >
            <Typography
              sx={{ ...styles.time, color: "secondary.main" }}
              color="secondary.main"
            >
              {currentBus?.place?.label?.split("to")?.[0]}
            </Typography>
            <Typography
              sx={{ ...styles.time, color: "secondary.main" }}
              color="secondary.main"
            >
              {currentBus?.place?.label?.split("to")?.[1]}
            </Typography>
          </Stack>
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item xs={12} sm={4}>
              <Typography sx={styles.time}>
                {currentBus?.travel_time}
              </Typography>
              <Typography sx={styles.place}>
                {currentBus?.place?.label?.split("to")?.[0]}
              </Typography>
              <Typography sx={styles.label}>
                {currentBus?.place?.drop_address}
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              sx={{
                ".MuiDivider-withChildren:after, .MuiDivider-withChildren:before":
                  { border: "2px dotted", borderColor: "primary.200" },
              }}
            >
              <Divider>
                <Chip
                  sx={styles.chip}
                  label={currentBus?.place?.travel_hours}
                />
              </Divider>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography sx={styles.time}> </Typography>
              <Typography sx={styles.place}>
                {currentBus?.place?.label?.split("to")?.[1]}
              </Typography>
              <Typography sx={styles.label}>
                {currentBus?.place?.drop_address}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      )}
      <Box sx={styles.section}>
        <Typography sx={styles.heading}>Enter Contact Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Box sx={styles.inputContainer}>
              <Controller
                name="email"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Email ID :"
                    placeholder="Enter your Email ID"
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
                name="mobile"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="number"
                    label="Mobile Number :"
                    placeholder="Enter your Mobile Number"
                    value={value}
                    onChange={(e) => onChange(e as unknown as number)}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      {currentBus?.place?.id !== 0 && currentBus?.travel_time && (
        <Grid container justifyContent={"center"} mb={4}>
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                ...styles.section,
                border: "1.4px solid",
                borderColor: "secondary.light",
              }}
            >
              <Stack direction={"row"} mb={1}>
                <Box flexGrow={1}>
                  <Typography sx={styles.costText}>Base Fare</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost} align="right">
                    ₹ {currentBus?.place?.base_fare}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"row"} mb={1}>
                <Box flexGrow={1}>
                  <Typography sx={styles.costText}>Tax</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost} align="right">
                    ₹{" "}
                    {currentBus?.place?.base_fare * 0.02}
                  </Typography>
                </Box>
              </Stack>
              <Stack direction={"row"} mb={1.8}>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost}>Total Base Price</Typography>
                </Box>
                <Box flexGrow={1}>
                  <Typography sx={styles.cost} align="right">
                    ₹ {(currentBus?.place?.base_fare * 0.02) + currentBus?.place?.base_fare}
                  </Typography>
                </Box>
              </Stack>
              <Divider
                sx={{ borderColor: "secondary.400", marginBottom: "12px" }}
              />
              <Button
                onClick={handleSubmit(onSubmit)}
                sx={styles.loginBtn}
                fullWidth={true}
                variant="contained"
                type="submit"
                disableElevation
              >
                Continue TO book NOW
              </Button>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
}

export default TicketBooking;
