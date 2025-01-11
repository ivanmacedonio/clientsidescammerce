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
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { motion } from 'motion/react';
import { onEnterAnims } from '../../utils/defaultAnims';

export const ProductCard = ({ title, price, image }) => {
  const renderStars = () => {
    const random_star_number = Math.floor(Math.random() * 2) + 4;
    const stars = [];
    for (let i = 0; i < random_star_number; i++) {
      stars.push(<StarRateRoundedIcon sx={{ color: '#FFAD33' }} />);
    }
    return stars;
  };

  const renderOpinions = () => {
    return (
      <Typography variant="body2" fontWeight={600} color="rgb(153, 152, 152)">
        ({Math.floor(Math.random() * 40) + 50})
      </Typography>
    );
  };

  const Chip = ({ percentage }) => {
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
          -{percentage}%
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
    >
      <CardActionArea sx={{ height: 'auto' }}>
        <Chip percentage={20} />
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
            <Typography
              variant="body1"
              sx={{
                fontWeight: 500,
                color: '#696969',
                fontSize: '15px',
                textDecoration: 'line-through',
              }}
            >
              ${price}
            </Typography>
          </Stack>
          <Stack direction="row" display="flex" alignItems="center">
            {renderStars()} {renderOpinions()}
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
