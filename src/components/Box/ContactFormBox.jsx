import { Box } from '@mui/material';

function ContactFormBox({ children, onHandleSubmit }) {
  return (
    <Box
      component="form"
      onSubmit={onHandleSubmit}
      noValidate
      sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}
    >
      {children}
    </Box>
  );
}

export default ContactFormBox;
