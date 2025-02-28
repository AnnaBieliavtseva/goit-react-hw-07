import { Button } from "@mui/material";



function ContactBtn({children, type, handleClick}) {
  return (
    <Button
      type={type}
      fullWidth
      variant="outlined"
      onClick={handleClick}
      sx={theme => ({
        backgroundColor:
          theme.palette.mode === 'dark' ? 'primary.main' : 'primary.light',
        color: theme.palette.text.primary,
        '&:hover': {
          backgroundColor:
            theme.palette.mode === 'dark' ? 'primary.dark' : 'info.dark',
        },
        transition: 'all 0.3s ease',
      })}
      >{ children}</Button>
  );
}

export default ContactBtn
