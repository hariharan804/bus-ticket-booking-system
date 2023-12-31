import { SxProps } from "@mui/material";

export const styles: { [key: string]: SxProps } = {
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "primary.900",
  },
  heading: {
    fontSize: "16px",
    fontWeight: "700",
    color: "text.900",
  },
  td: {
    fontWeight: "600",
    fontSize: "16px",
    // lineHeight: "16px",
    letterSpacing: "0.05rem",
    color: "#7d7787",
    textTransform: "capitalize",
  },
  success: {
    fontWeight: "600",
    fontSize: "14px",
    // lineHeight: "16px",
    letterSpacing: "0.05rem",
    color: "success.50",
    backgroundColor: "success.900",
    borderRadius: "12px",
    textTransform: "capitalize",
    padding: "2px 12px",
  },
  section: {
    backgroundColor: "common.white",
    padding: "16px 20px",
    margin: "16px 0",
    borderRadius: "6px",
    border: "2px dashed",
    borderColor:'secondary.main'
  },
  time: {
    color: "text.800",
    marginBottom: "8px",
    fontWeight: "600",
    fontSize: "16px",
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
    borderRadius: "6px",
    padding: "2px 12px",
    height:'44px',
    "&:hover": {
      backgroundColor: "secondary.dark",
      opacity: "0.80",
    },
  },
  place: {
    color: "text.700",
    marginBottom: "4px",
    fontWeight: "600",
    fontSize: "18px",
    "& span": {
      color: "secondary.main",
    },
  },
  row: {
    marginBottom: "12px",
  },
};
