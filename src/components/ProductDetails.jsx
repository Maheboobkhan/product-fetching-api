import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Grid,
} from '@mui/material';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  return (
    <Container maxWidth="lg" sx={{ py: 4, fontFamily: 'Montserrat' }}>
      {product && (
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            {/* <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}> */}
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ width: '50%', px: 4, py:2, ml: 6}}
              />
            {/* </Card> */}
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom color='#c43776'>
                  {product.title}
                </Typography>
                <Typography variant="body1" color="#e27daa" paragraph mt={4}>
                  {product.description}
                </Typography>
              </CardContent>
              <Box sx={{ mt: 'auto' }}>
                <Button sx={{
                    bgcolor: '#c43776',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#e27daa',
                      color: 'white',
                    },
                  }}>
                  Add to Cart
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default ProductDetails;
