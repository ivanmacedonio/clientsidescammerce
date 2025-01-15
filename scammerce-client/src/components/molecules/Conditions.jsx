import { Stack } from '@mui/material';
import { ConditionItem } from '../atoms/ConditionItem';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

export const Conditions = () => {
  const CONDITIONS = [
    {
      title: 'Envio gratis y rapido',
      description: 'En tu primer compra',
      icon: <LocalShippingOutlinedIcon />,
    },
    {
      title: 'Atencion 24/7',
      description: 'Disponible las 24 horas',
      icon: <HeadsetMicOutlinedIcon />,
    },
    {
      title: 'Devolucion sin cargo',
      description: 'Durante los 30 dias posteriores a tu compra',
      icon: <GppGoodOutlinedIcon />,
    },
  ];
  return (
    <Stack
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
      gap="10%"
    >
      {CONDITIONS.map((condition, index) => {
        return (
          <ConditionItem
            key={index}
            title={condition.title}
            description={condition.description}
            icon={condition.icon}
          />
        );
      })}
    </Stack>
  );
};
