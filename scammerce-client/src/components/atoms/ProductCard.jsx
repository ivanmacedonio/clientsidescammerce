import {
  Box,
  Stack,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';
import { theme } from '../../styles/theme';
import { motion } from 'motion/react';
import { onEnterAnims } from '../../utils/defaultAnims';
import { useNavigate, useParams } from 'react-router';
import { renderStars } from '../../utils/renderStars';

export const ProductCard = ({ title, price, image, is_offer, discount, product_id }) => {
  const nav = useNavigate();
  const { shop_id } = useParams();

  const renderOpinions = () => {
    return (
      <Typography variant="body2" fontWeight={600} color="rgb(153, 152, 152)">
        ({Math.floor(Math.random() * 40) + 50})
      </Typography>
    );
  };

  const DiscountChip = () => {
    return (
      <Box
        sx={{
          backgroundColor: pallete.red,
          position: 'absolute',
          padding: '0 5px',
        }}
      >
        <Typography
          variant="body1"
          sx={{ color: 'white', fontWeight: 400, fontSize: '12px' }}
        >
          -{discount}%
        </Typography>
      </Box>
    );
  };

  const pallete = theme.palette;
  return (
    <Card
      sx={{ boxShadow: 'none', width: 250 }}
      component={motion.div}
      initial={onEnterAnims.initial}
      whileInView={onEnterAnims.animate}
      transition={onEnterAnims.transition}
      onClick={() => {
        nav(`/${shop_id}/detail/${product_id}`);
      }}
    >
      <CardActionArea sx={{ height: 'auto' }}>
        {!!is_offer && <DiscountChip />}
        <CardMedia
          component="img"
          sx={{
            height: 180,
            objectFit: 'contain',
            backgroundColor: pallete.gray,
          }}
          image={image}
          alt={title}
        />
        <CardContent>
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: '15px' }}
          >
            {title.toUpperCase()}
          </Typography>
          <Stack direction="row" gap={1}>
            <Typography
              variant="body1"
              color={pallete.red}
              sx={{ fontWeight: 500, fontSize: '15px' }}
            >
              ${price}
            </Typography>
            {!!is_offer && (
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 500,
                  color: '#696969',
                  fontSize: '15px',
                  textDecoration: 'line-through',
                }}
              >
                ${price - (price * discount) / 100}
              </Typography>
            )}
          </Stack>
          <Stack direction="row" display="flex" alignItems="center">
            {renderStars()} {renderOpinions()}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
