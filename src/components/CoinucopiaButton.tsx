import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

interface CoinucopiaButtonProps extends ButtonProps {
  variantType?: "filled" | "outlined";
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "variantType",
})<CoinucopiaButtonProps>(({ theme, variantType }) => ({
  borderRadius: "40px",
  textTransform: "none",
  fontSize: "20px",
  fontWeight: 400,
  padding: "0.3rem 1.8rem",
  borderWidth: 2,
  borderStyle: "solid",
  fontFamily: `Helvetica`,

  [theme.breakpoints.down("sm")]: {
    padding: "0.2rem 1rem",
  },

  ...(variantType === "filled"
    ? {
        backgroundColor: "#FDBB2C",
        color: "#000000",
        borderColor: "#000000",
        "&:hover": {
          backgroundColor: "#f3aa00",
        },
      }
    : {
        backgroundColor: "transparent",
        color: "#000000",
        borderColor: "#000000",
        "&:hover": {
          backgroundColor: "#eeeeee",
        },
      }),
}));

const CoinucopiaButton = ({
  variantType = "filled",
  ...props
}: CoinucopiaButtonProps) => {
  return (
    <StyledButton variant="contained" variantType={variantType} {...props} />
  );
};

export default CoinucopiaButton;
