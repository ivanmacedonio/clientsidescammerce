import React, { useState } from 'react';
import { Typography, Box, Stack } from '@mui/material';
import Countdown from 'react-countdown';

export const CustomCountdown = () => {
  const [futureDate, setFutureDate] = useState(new Date('2025-01-30T00:00:00'));

  const DateComponent = ({ title, arg }) => {
    return (
      <Box>
        <Typography fontSize="0.8rem" color='rgb(94, 94, 94)' >{title.toUpperCase()}</Typography>
        <Typography sx={{ fontSize: '2.5rem', letterSpacing: '1rem', marginLeft: "1.6rem" }}>
          {arg}
        </Typography>
      </Box>
    );
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      setFutureDate(new Date(new Date().getTime() + 12 * 60 * 60 * 1000));
    }

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');


    return (
      <Stack direction="row" gap={2}>
        <DateComponent title={"hours"} arg={formattedHours + ":"}/>
        <DateComponent title={"minutes"} arg={formattedMinutes + ":"}/>
        <DateComponent title={"seconds"} arg={formattedSeconds}/>
      </Stack>
    );
  };

  return <Countdown date={futureDate} renderer={renderer} />;
};
