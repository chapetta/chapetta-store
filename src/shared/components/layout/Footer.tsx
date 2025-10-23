import { Box, Container, Typography, Link, IconButton, Stack } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import InstagramIcon from '@mui/icons-material/Instagram'

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#0f172a',
        color: 'white',
        py: 4,
        mt: 'auto',
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Texto principal */}
        <Typography variant="body1" align="center" sx={{ fontWeight: 500 }}>
          © {new Date().getFullYear()} ChapettaStore — Todos os direitos reservados
        </Typography>

        {/* Ícones sociais */}
        <Stack direction="row" spacing={2}>
          <IconButton
            component="a"
            href="https://github.com/chapetta"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              transition: '0.3s',
              '&:hover': { color: '#00bcd4', transform: 'scale(1.1)' },
            }}
          >
            <GitHubIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.linkedin.com/in/yan-chapetta"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              transition: '0.3s',
              '&:hover': { color: '#0A66C2', transform: 'scale(1.1)' },
            }}
          >
            <LinkedInIcon />
          </IconButton>

          <IconButton
            component="a"
            href="https://www.instagram.com/chapetta"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              transition: '0.3s',
              '&:hover': { color: '#E1306C', transform: 'scale(1.1)' },
            }}
          >
            <InstagramIcon />
          </IconButton>
        </Stack>

        {/* Créditos */}
        <Typography variant="body2" align="center" color="gray">
          Feito com ❤️ usando{' '}
          <Link href="https://mui.com/" color="secondary" underline="hover">
            MUI React
          </Link>
        </Typography>
      </Container>
    </Box>
  )
}
