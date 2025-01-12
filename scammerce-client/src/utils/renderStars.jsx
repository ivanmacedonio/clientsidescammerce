import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';

export const renderStars = () => {
  const random_star_number = Math.floor(Math.random() * 2) + 4;
  const stars = [];
  for (let i = 0; i < random_star_number; i++) {
    stars.push(<StarRateRoundedIcon sx={{ color: '#FFAD33' }} />);
  }
  return stars;
};
