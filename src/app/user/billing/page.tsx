"use client";
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
import { styles } from "../ticket-booking/styles";

function Billing() {
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
        Billing
      </Typography>
      <Box sx={{...styles.section, padding:'22px 26px'}}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography sx={styles.heading}>
              Debit/Credit Card Details
            </Typography>
            <Grid container columnSpacing={3}>
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
                        label="Card Number :"
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
                    name="name"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MyInput
                        type="text"
                        label="Expiry Date :"
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
                    name="name"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { error },
                    }) => (
                      <MyInput
                        type="text"
                        label="CVV :"
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
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
          <Box
            sx={{
              ...styles.section,
              border:'none',
              borderRadius:'0',
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
            <Divider sx={{borderColor:'secondary.400', borderStyle:'dashed', marginBottom:'12px'}}/>
            <Button
              // onClick={handleSubmit(onSubmit)}
              sx={styles.loginBtn}
              fullWidth={true}
              variant="contained"
              type="submit"
              disableElevation
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
