import { styled } from '@mui/material';
import MuiCard from '@mui/material/Card';

const ContactCard = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'center',
  width: '100%',
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  transition: 'all 0.3s ease',
  [theme.breakpoints.up('sm')]: {
    width: '450px',
  },
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  border: `1.5px solid ${
    theme.palette.mode === 'light'
      ? theme.palette.grey[300]
      : theme.palette.divider
  }`,
  boxShadow:
    theme.palette.mode === 'dark'
      ? 'hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px'
      : 'hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px',
  '&:hover, &:focus': {
    boxShadow:
      theme.palette.mode === 'dark'
        ? 'hsla(220, 30%, 5%, 0.7) 0px 10px 22px 0px, hsla(220, 25%, 10%, 0.15) 0px 22px 45px -5px'
        : 'hsla(220, 30%, 5%, 0.1) 0px 10px 22px 0px, hsla(220, 25%, 10%, 0.1) 0px 22px 45px -5px',
  },
}));

export default ContactCard
