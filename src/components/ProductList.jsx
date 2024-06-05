import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from '@mui/material';

const Home = () => {
    const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);

    const goToProductDetails = (id) => {
      navigate(`/product/${id}`);
    };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container sx={{ minHeight: '100vh', bgcolor: 'grey.100', py: 4, fontFamily: 'Montserrat' }}>
      <Typography variant="h4" component="h1" textAlign="center" mb={4} color="textPrimary">
        Product Listing
      </Typography>
      <TextField
        fullWidth
        variant='outlined'
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        sx={{
          mb: 4,
          '& .MuiOutlinedInput-root': {
            color: '#c43776',
            borderColor: '#c43776',
            '&:active': {
                outline: 'none',
                borderColor: '#c43776', // Change border color when focused
              },
          },
        }}
      />
      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
                border: '1px solid',
                borderColor: '#e27daa',
                '&:hover': {
                  boxShadow: 3,
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s',
                  cursor: 'pointer',
                },
                position: 'relative',
              }}
              onClick={() =>goToProductDetails(product.id)}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.title}
                sx={{ height: 160, objectFit: 'contain', mb: 2, pt: 2 }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  component="h2"
                  textAlign="center"
                  mb={8}
                  color="#c43776"
                >
                  {product.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  sx={{ position: 'absolute', bottom: 10 }}
                >
                  ${product.price}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                <Button
                  sx={{
                    bgcolor: '#e27daa',
                    color: 'white',
                    '&:hover': {
                      bgcolor: '#c43776',
                      color: 'white',
                    },
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      {/* {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )} */}
    </Container>
  );
};

export default Home;
