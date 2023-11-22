import {
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { HeaderModal } from '../../../HeaderModal';
import useCustomSearchParams from '../../../../hooks/useCustomSearchParams';
import api from '../../../../constants/api';

export function SelectByProductName({ open, setOpen }) {
  // eslint-disable-next-line no-unused-vars
  const [searchParams, updateQueryParams] = useCustomSearchParams();
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await api.get('/products');
      setProducts(data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleListItemClick = (product) => {
    updateQueryParams({ productName: product?.name });
    setOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <HeaderModal Title="Select Products" handleClose={() => setOpen(false)} />
      <DialogContent>
        <List>
          {products?.map((product, index) => (
            <ListItem key={product?.name} disablePadding>
              <ListItemButton onClick={() => handleListItemClick(product)}>
                <ListItemText primary={`${index + 1}. ${product?.name}`} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}
