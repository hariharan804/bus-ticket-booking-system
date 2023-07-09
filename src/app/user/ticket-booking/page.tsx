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

function TicketBooking() {
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
  console.log("🚀 ~ file: page.tsx:43 ~ TicketBooking ~ watch:", watch());

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
                name="name"
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
                name="name"
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
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>
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
                name="name"
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
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>
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
                name="name"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="datetime-local"
                    label="Travel Time :"
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
        </Grid>

        {/* Name

Gender date and time place*/}
      </Box>
      <Box
        sx={{
          ...styles.section,
          border: ".10rem dashed",
          borderColor: "primary.light",
          padding:'22px'
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
            21:40 9 Jul' 23, Sun
          </Typography>
          <Typography
            sx={{ ...styles.time, color: "secondary.main" }}
            color="secondary.main"
          >
            21:40 9 Jul' 23, Sun
          </Typography>
        </Stack>
        <Grid container spacing={2} alignItems={"center"}>
          <Grid item xs={12} sm={4}>
            <Typography sx={styles.time}>21:40 9 Jul' 23, Sun</Typography>
            <Typography sx={styles.place}>
              Delhi - Akshardham metro station
            </Typography>
            <Typography sx={styles.label}>
              Opp Akshardham Metro Station, DTC Bus Stand (Van Pickup) (Delhi)
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
              <Chip sx={styles.chip} label={"7h 30m"} />
            </Divider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography sx={styles.time}>21:40 9 Jul' 23, Sun</Typography>
            <Typography sx={styles.place}>
              Delhi - Akshardham metro station
            </Typography>
            <Typography sx={styles.label}>
              Opp Akshardham Metro Station, DTC Bus Stand (Van Pickup) (Delhi)
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={styles.section}>
        <Typography sx={styles.heading}>Enter Contact Details</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
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
                    label="Email ID :"
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
              <Controller
                name="name"
                control={control}
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    type="text"
                    label="Mobile Number :"
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
            <Stack direction={"row"} mb={1}>
              <Box flexGrow={1}>
                <Typography sx={styles.costText}>Base Fare</Typography>
              </Box>
              <Box flexGrow={1}>
                <Typography sx={styles.cost} align="right">
                  ₹ 1153{" "}
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"row"} mb={1}>
              <Box flexGrow={1}>
                <Typography sx={styles.costText}>Tax</Typography>
              </Box>
              <Box flexGrow={1}>
                <Typography sx={styles.cost} align="right">
                  ₹ 58
                </Typography>
              </Box>
            </Stack>
            <Stack direction={"row"} mb={1.8}>
              <Box flexGrow={1}>
                <Typography sx={styles.cost}>Total Base Price</Typography>
              </Box>
              <Box flexGrow={1}>
                <Typography sx={styles.cost} align="right">
                  ₹1211
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{borderColor:'secondary.400', marginBottom:'12px'}}/>
            <Button
              // onClick={handleSubmit(onSubmit)}
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
    </Container>
  );
}

export default TicketBooking;
