import {
  Dialog,
  DialogContent,
  Fade,
  Stack,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import { HeaderModal } from '../../../HeaderModal';
import { StatusMutation } from './StatusMutation';
import { Products } from './Products';
import { WarehouseSender } from './WarehouseSender';

const Transition = React.forwardRef((props, ref) => (
  <Fade ref={ref} {...props} />
));

export function StockMutationDetail({ open, setSmOpen }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Dialog
      open={open}
      onClose={() => setSmOpen(false)}
      keepMounted
      TransitionComponent={Transition}
      maxWidth="sm"
      fullScreen={fullScreen}
      scroll="paper"
    >
      <HeaderModal
        Title="Stock Mutation Detail"
        handleClose={() => setSmOpen(false)}
      />
      <DialogContent>
        <Stack gap={2}>
          <StatusMutation />
          <Products />
          <WarehouseSender />
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
