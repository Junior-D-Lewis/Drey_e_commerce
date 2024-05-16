import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import InputNumber from './InputNumber'
import { useCart } from '../contexts/cartContext'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardCartItem(
    {id, name, image, price, quantity, item_id}
) {
    const [totalPrice, setTotalPrice] = React.useState(0)
    const [newQte, setNewQte] = React.useState(quantity)
    const { updateCartItem, deleCartItem } = useCart()
    React.useEffect(() => {
        updateCartItem(id, newQte)
        setTotalPrice(price * newQte)
    }, [newQte])
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151, height: 151}}
        image={image}
        alt="item image"
        onError={(e) => {
          console.error("Erreur de chargement de l'image :", e.target.src);
          e.target.style.display = "none"; // Masquer l'élément en cas d'erreur
        }}
      />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Box component="h2" variant="h5">
                    {name}
                    <IconButton 
                        className='float-end'
                        aria-label="delete"
                        onClick={() => deleCartItem(item_id)}
                        >
                        <DeleteIcon color='error'/>
                    </IconButton>
                </Box>
                <Box component="p" variant="subtitle1">
                    {price}€ x 
                    <InputNumber value={newQte} setValue={setNewQte} />
                </Box>
                <Box component="p" variant="subtitle1">
                    Total: {totalPrice}€
                </Box>
            </CardContent>
        </Box>
    </Card>
  )
}
