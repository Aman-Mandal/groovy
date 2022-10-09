import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { useStateContext } from '../../contexts/ContextProvider';

export default function Volume() {
  const { audio } = useStateContext();

  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    audio.volume = event.target.value / 100;
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction='row' sx={{ mb: 1 }} alignItems='center'>
        <VolumeDown htmlColor={'#f7f2f2'} />
        <Slider aria-label='Volume' value={value} onChange={handleChange} />
        <VolumeUp htmlColor={'#f7f2f2'} />
      </Stack>
    </Box>
  );
}
