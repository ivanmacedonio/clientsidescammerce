import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Poppins",
        h1: {
            fontSize: "36px",
            fontWeight: 500,
            letterSpacing: "1.5px"
        },
        h2: {
            fontSize: "25px",
            fontWeight: 600,
        },
        h3: {
            fontSize: "16px",
            fontWeight: 400,
        },
        body1: {
            fontSize: "16px",
            fontWeight: 600,
        },
        subtitle1: {
            fontSize: "24px",
            fontWeight: "600"
        },
        body2: {
            fontSize: "14px",
            fontWeight: "300"
        }
    },
    palette: {
        red: "#DB4444",
        gray: "#F5F5F5",
        green: "#00FF66"
    }
})