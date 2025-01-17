import { Stack, Box, Typography } from '@mui/material';
export const ProductOverview = ({ image_url, title, price }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={2}
      justifyContent="space-between"
      sx={{ backgroundColor: 'gray', paddingX: '1rem' }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <img src={image_url} alt={title} width="8%" />
        <Typography fontWeight={400} noWrap fontSize="13px">
          {title}
        </Typography>
      </Box>
      <Typography fontWeight={400} fontSize="13px">
        ${price}
      </Typography>
    </Stack>
  );
};
