import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeUpRounded from '@mui/icons-material/VolumeUpRounded';
import VolumeDownRounded from '@mui/icons-material/VolumeDownRounded';

const Volume = () => {
  return (
    // reference : https://mui.com/material-ui/react-slider/#music-player
    <Stack
      spacing={2}
      direction='row'
      sx={{ mb: 1, px: 1 }}
      alignItems='center'
    >
      <VolumeDownRounded htmlColor={'#fff'} />
      <Slider
        aria-label='Volume'
        defaultValue={30}
        sx={{
          color: '#fff',
          '& .MuiSlider-track': {
            border: 'none',
          },
          '& .MuiSlider-thumb': {
            width: 24,
            height: 24,
            backgroundColor: '#fff',
            '&:before': {
              boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
            },
            '&:hover, &.Mui-focusVisible, &.Mui-active': {
              boxShadow: 'none',
            },
          },
        }}
      />
      <VolumeUpRounded htmlColor={'#fff'} />
    </Stack>
  );
};

export default Volume;
