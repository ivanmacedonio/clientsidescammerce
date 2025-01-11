import { Box, Stack, Typography } from '@mui/material';
import { SectionChip } from '../atoms/SectionChip';
import { ProductCard } from '../atoms/ProductCard';
import { products } from '../../mocks/products';
import { CTAButton } from '../atoms/CTAButton';
import { theme } from '../../styles/theme';
import { CustomCountdown } from './Countdown';

export const ProductList = ({
  chip_title,
  category_title,
  cta_text,
  slice_in,
  hasCountdown,
}) => {
  return (
    <Stack gap={2} sx={{ marginTop: '4rem' }}>
      <SectionChip title={chip_title} />
      <Box display="flex" alignItems="center" gap={12}>
        <Typography variant="h1" fontWeight={600}>
          {category_title}
        </Typography>
        {hasCountdown && <CustomCountdown />}
      </Box>
      <Stack direction="row" gap={4} flexWrap="wrap" marginTop="2rem">
        {products?.slice(0, slice_in).map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            image={product.image}
            price={product.price}
          />
        ))}
      </Stack>

      <Box display="flex" justifyContent="center" margin="2rem 0">
        <CTAButton color={theme.palette.red} title={cta_text} />
      </Box>
    </Stack>
  );
};
