import { useTheme } from '@mui/material';
import ContainerReportPage from '../../components/admin/ReportPage/ContainerReportPage';

export function ReportPage() {
  const theme = useTheme();

  return (
    <main
      style={{
        maxWidth: theme.breakpoints.values.lg,
        padding: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <ContainerReportPage />{' '}
    </main>
  );
}
