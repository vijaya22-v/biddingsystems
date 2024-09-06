import React from 'react'
import{ Box, Card, CardContent, Typography, CardActions, Button, CardMedia} from '@mui/material';
return (
    <Box width='300px'>
        <Card>
        <CardMedia component='img' height='150px' image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRckDb4wBHWp6-_y0OAWtHDu0PSRXDqxOUS_Xs8-CFttDCiqJM_ehJK2t7hkFXy5wPJs1kABSJlNy0&usqp=CAU&ec=48600112' alt='sample image'>
        </CardMedia>
            <CardContent>
                <Typography gutterBottom variant='h5'>
                        ..REACT..
                </Typography>
                <Typography>
                    React is a Javascript liabrary, which is very useful in future to devolop web pages
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small'>SHARE</Button>
                <Button size='small'>Learn More</Button>
            </CardActions>
        </Card>
    </Box>
  )
}
