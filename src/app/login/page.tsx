"use client";
import { Box, Button, SxProps, Typography } from "@mui/material";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { EmailIcon, PasswordIcon } from "@/assets/svg";
import { MyInput } from "@/components";
import Link from "next/link";
import { useStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export const styles: { [key: string]: SxProps } = {
  root: {
    minHeight: "100svh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "16px",
    // background: 'rgb(167,142,255)',
    background:
      "radial-gradient(circle, rgba(167,142,255,.6) 0%, rgba(243,242,255,1) 100%)",
  },
  loginContainer: {
    minWidth: { xs: "90%", sm: "350px" },
    backgroundColor: "common.white",
    padding: { xs: "16px", sm: "20px" },
    borderRadius: "8px",
    boxShadow: "0 3px 10px #00000011",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "700",
    color: "text.900",
  },
  inputContainer: {
    marginTop: "12px",
  },
  forgetPassword: {
    color: "text.700",
    marginTop: "10px",
    marginBottom: "10px",
    fontWeight: "600",
    fontSize: "13px",
    lineHeight: "16px",
    "& span": {
      color: "secondary.dark",
    },
  },
  loginBtn: {
    color: "common.white",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "19px",
    textTransform: "uppercase",
    letterSpacing: "0.06rem",
    marginTop: "6px",
    backgroundColor: "secondary.dark",
    borderRadius: "8px",
    padding: "10px 12px",
    "&:hover": {
      backgroundColor: "secondary.dark",
      opacity: "0.80",
    },
  },
  notMember: {
    color: "text.700",
    marginTop: "25px",
    marginBottom: "0px",
    fontWeight: "600",
    fontSize: "14px",
    lineHeight: "16px",
    "& span": {
      color: "secondary.main",
    },
  },
};

function Login() {
  const schema = yup
    .object()
    .shape({
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
  const router = useRouter();
  const { userLogin } = useStore();
  const { handleSubmit, control } = useForm({
    defaultValues: { email: "demouser@mail.com", password: "user@123" },

    resolver: yupResolver(schema),
  });
  // const router = useRouter();

  const onSubmit = async (data: any) => {
    const res = await userLogin({
      email: data?.email,
      password: data?.password,
    });
    if (res?.email) {
      toast.success("Login Successfully!");
      router.replace("/");
    } else {
      toast("User not found!");
    }
  };

  return (
    <div>
      <Box sx={styles.root}>
        <Typography mb={1} sx={{ ...styles.heading, fontSize: "26px" }}>
          Welcome
        </Typography>
        <Box sx={styles.loginContainer}>
          <Typography mb={1} sx={styles.heading}>
            Login
          </Typography>
          <form>
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
                    startAdornment={<EmailIcon sx={{ color: "#88868d" }} />}
                    placeholder="Enter your Email ID"
                    value={value}
                    onChange={onChange}
                    helperText={error ? error.message : ""}
                    error={!!error}
                  />
                )}
              />
            </Box>
            <Box sx={styles.inputContainer}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <MyInput
                    label="Password :"
                    startAdornment={<PasswordIcon sx={{ color: "#88868d" }} />}
                    // endAdornment={<HiEye/>}
                    placeholder="Enter your password"
                    value={value}
                    onChange={(e: string | React.ChangeEvent<Element>) =>
                      onChange(e)
                    }
                    helperText={error ? error.message : ""}
                    error={!!error}
                    type={"password"}
                    defaultValue={undefined}
                  />
                )}
              />
            </Box>
            {/* <Typography
                    variant="h5"
                    component="h3"
                    align="right"
                    sx={styles.forgetPassword}
                  >
                    <Link href="/forgot-password">
                      Did you forget your password? <span>Click&nbsp;Here</span>
                    </Link>
                  </Typography> */}
            <Button
              onClick={handleSubmit(onSubmit)}
              sx={styles.loginBtn}
              fullWidth={true}
              variant="contained"
              type="submit"
              disableElevation
            >
              LogIn
            </Button>
          </form>
          <Typography
            variant="h5"
            component="h6"
            align="center"
            sx={styles.notMember}
          >
            <Link href="/create-account">
              Not a Member? <span>Create Account</span>
            </Link>
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

export default Login;
