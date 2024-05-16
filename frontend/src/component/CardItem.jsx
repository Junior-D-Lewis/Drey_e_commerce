import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InputNumber from './InputNumber';
import { useCart } from '../contexts/cartContext';

export default function CardItem({id, name, image, price, description }) {

  console.log('id, name, image, price, description', id);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [quantity, setQuantity] = React.useState(1);

  const { addToCart } = useCart();

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Card sx={{ maxWidth: 345 }} onClick={handleOpen}>
        <CardMedia
          sx={{ height: 180 }}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name} - {price}€
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleOpen}>
            Add 
            <ShoppingCartIcon size={8} />
          </Button>
        </CardActions>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CardMedia
            sx={{ height: 180 }}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name} - {price}€
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardContent>
            <InputNumber value={quantity} setValue={setQuantity} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={handleClose}>Close</Button>
            <Button size="large" onClick={() =>{
                handleClose()
               addToCart(id, quantity)
               }}>
              Add 
              <ShoppingCartIcon size={8} />
            </Button>
          </CardActions>
        </Box>
      </Modal>
    </div>
  );
}
