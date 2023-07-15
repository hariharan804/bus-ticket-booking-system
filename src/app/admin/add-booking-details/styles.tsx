import { SxProps } from "@mui/material";

export const styles: { [key: string]: SxProps } = {
  title: {
    fontSize: "28px",
    fontWeight: "700",
    color: "primary.900",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "700",
    color: "text.900",
    marginBottom: "12px",
  },
  label: {
    fontWeight: "600",
    fontSize: "12px",
    // lineHeight: "16px",
    letterSpacing: "0.05rem",
    color: "text.A100",
    marginBottom: "1px",
  },
  inputContainer: {
    marginTop: "12px",
  },
  section: {
    backgroundColor: "common.white",
    padding: "16px 20px",
    margin: "16px 0",
    borderRadius: "6px",
    border: "1px solid #00000014",
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
    padding: "12px 12px",
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
  chip: {
    backgroundColor: "secondary.300",
    color: "primary.900",
    fontWeight: "600",
    padding: "12px 14px",
  },
  costText: {
    color: "text.700",
    fontSize: "16px",
  },
  cost: {
    color: "text.700",
    fontSize: "16px",
    fontWeight: "600",
  },
};
