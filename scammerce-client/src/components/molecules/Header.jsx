import {
  Typography,
  Stack,
  Box,
  TextField,
  InputAdornment,
  Divider,
  Button,
} from '@mui/material';
import { NavLink, useParams } from 'react-router';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';

export const Header = () => {
  const nav = useNavigate();
  const { shop_id } = useParams();

  const LINKS = [
    { title: 'Inicio', route: `/${shop_id}/` },
    { title: 'Contacto', route: `/${shop_id}/contact` },
    { title: 'Tienda', route: `/${shop_id}/shop` },
  ];
  const TITLE = 'MYYMERCHANT';
  const TEXTFIELD_STYLE = {
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        border: '#F5F5F5',
      },
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: 'none',
      },
    },
  };
  const P_STYLES = {
    fontWeight: 600,
    textDecoration: 'underline',
    marginLeft: '2rem',
    cursor: "pointer"
  };
  return (
    <>
      <Box
        sx={{
          background: 'black',
          textAlign: 'center',
          paddingY: '6px',
        }}
      >
        <Typography sx={{ color: 'white', fontSize: '12px' }} variant="body2">
          ¡Aprovecha las ofertas semanales! - OFF 50%!{' '}
          <Typography variant="p" sx={P_STYLES} component={"span"} onClick={() => {nav(`/${shop_id}/shop`)}}>
            Ir a la tienda
          </Typography>
        </Typography>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="40px 20rem"
      >
        <Typography variant="h2" fontWeight="700">
          {TITLE}
        </Typography>
        <Stack direction="row" gap={3}>
          {LINKS.map((link, index) => {
            return (
              <Typography
                key={index}
                variant="h3"
                component={NavLink}
                to={link.route}
              >
                {link.title}
              </Typography>
            );
          })}
        </Stack>
        <Stack direction="row" gap={2} display="flex" alignItems="center">
          <TextField
            placeholder="Busca un producto..."
            sx={TEXTFIELD_STYLE}
            focused={false}
            slotProps={{
              input: {
                sx: {
                  backgroundColor: '#F5F5F5',
                  height: '2rem',
                  fontSize: '0.9rem',
                  padding: '1.2rem',
                  fontWeight: 400,
                },
                endAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
          />
          <Button
            variant="outlined"
            sx={{ border: 'solid 1px #DB4444', color: '#DB4444' }}
            onClick={() => {
              nav(`/${shop_id}/login`);
            }}
          >
            Iniciar Sesión
          </Button>
        </Stack>
      </Box>
      <Divider />
    </>
  );
};
