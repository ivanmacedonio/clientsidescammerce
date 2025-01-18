import { Box, Stack, Typography } from '@mui/material';
import { SectionChip } from '../atoms/SectionChip';
import { ProductCard } from '../atoms/ProductCard';
import { CTAButton } from '../atoms/CTAButton';
import { theme } from '../../styles/theme';
import { CustomCountdown } from './Countdown';
import { useNavigate } from 'react-router';

export const ProductList = ({
  products,
  chip_title,
  category_title,
  cta_text,
  from,
  to,
  hasCountdown,
}) => {
  const nav = useNavigate();

  return (
    <Stack gap={2} sx={{ marginTop: '4rem' }}>
      {chip_title && <SectionChip title={chip_title} />}
      {category_title && (
        <Box display="flex" alignItems="center" gap={12}>
          <Typography variant="h1" fontWeight={600}>
            {category_title}
          </Typography>
          {hasCountdown && <CustomCountdown />}
        </Box>
      )}
      <Stack direction="row" gap={4} flexWrap="wrap" marginTop="2rem">
        {products?.slice(from, to).map((product, index) => (
          <ProductCard
            key={index}
            product_id={product.id}
            title={product.name}
            is_offer={product.is_offer}
            discount={product.discount}
            image={product.image_url}
            price={product.price}
          />
        ))}
      </Stack>
      {cta_text && (
        <Box display="flex" justifyContent="center" margin="2rem 0">
          <CTAButton
            color={theme.palette.red}
            title={cta_text}
            onClick={() => {
              nav('/shop');
            }}
          />
        </Box>
      )}
    </Stack>
  );
};
