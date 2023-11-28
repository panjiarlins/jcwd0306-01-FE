import { TableCell, TableSortLabel } from '@mui/material';
import { node, string } from 'prop-types';
import useCustomSearchParams from '../../../hooks/useCustomSearchParams';

function SortLabelTableCell({ children, label }) {
  const [searchParams, updateQueryParams] = useCustomSearchParams();

  const handleCLick = () => {
    if (searchParams.get('orderBy').toLowerCase() === 'asc')
      updateQueryParams({ sortBy: label, orderBy: 'desc' });
    else updateQueryParams({ sortBy: label, orderBy: 'asc' });
  };

  return (
    <TableCell
      sortDirection={
        searchParams.get('sortBy') === label
          ? searchParams.get('orderBy').toLowerCase()
          : false
      }
      sx={{ color: 'white' }}
    >
      <TableSortLabel
        onClick={handleCLick}
        active={searchParams.get('sortBy') === label}
        direction={searchParams.get('orderBy')?.toLowerCase()}
      >
        {children}
      </TableSortLabel>
    </TableCell>
  );
}

SortLabelTableCell.propTypes = {
  children: node.isRequired,
  label: string.isRequired,
};

export default SortLabelTableCell;
