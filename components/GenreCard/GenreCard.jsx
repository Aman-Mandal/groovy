import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Image from 'next/image';

export default function GenreCard({name,img,icon}) {
  return (
    <Card sx={{ maxWidth: 345,  }}>
      <CardActionArea>

        <CardMedia
          component="img"
          maxHeight="10"
          maxWidth='10'
          image={img}
          
          alt="green iguana"
        />
        {/* <Image alt='' height={100} width={100} src={'/data/theme.jpg'}/> */}
        
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <div className='flex  justify-between items-center'>

            {name}
            <p className='text-orange-500'>

            {icon}
            </p>
            </div>
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}