import { Box, Container, Typography, Link } from "@mui/material";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#0f172a", // mesmo azul do header
        color: "white",
        py: 3,
        mt: "auto",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} ChapettaStore — Todos os direitos reservados
        </Typography>
        <Typography variant="body2" align="center">
          Feito com ❤️ usando{" "}
          <Link href="https://mui.com/" color="secondary" underline="hover">
            MUI React
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};
