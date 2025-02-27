import { CssBaseline, Stack } from "@mui/material";
import AppTheme from "./Shared-theme/AppTheme";

export default function AppThemeMy({children}) {
    return (
      <AppTheme AppTheme>
        <CssBaseline></CssBaseline>

        <Stack
          direction="column"
          component="main"
          sx={[
            {
              justifyContent: 'center',
              height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
              marginTop: '15px',
              minHeight: '100%',
            },
            theme => ({
              '&::before': {
                content: '""',
                display: 'block',
                position: 'fixed',
                zIndex: -1,
                inset: 0,
                backgroundImage:
                  'radial-gradient(at 50% 50%, hsl(211, 52.50%, 80.20%), hsl(210, 100.00%, 99.60%))',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                ...theme.applyStyles('dark', {
                  backgroundImage:
                    'radial-gradient(at 50% 50%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))',
                }),
              },
            }),
          ]}
        >
          {children}
        </Stack>
      </AppTheme>
    );
}

// import { CssBaseline, Stack } from '@mui/material';
// import AppTheme from './Shared-theme/AppTheme';
// import { useTheme } from '@mui/material/styles';

// export default function AppThemeMy({ children }) {
//   const theme = useTheme(); // Получаем текущую тему

//   return (
//     <AppTheme>
//       <CssBaseline />
//       <Stack
//         direction="column"
//         component="main"
//         sx={{
//           justifyContent: 'center',
//           height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
//           marginTop: '15px',
//           minHeight: '100%',

//           '&::before': {
//             content: '""',
//             display: 'block',
//             position: 'fixed',
//             zIndex: -1,
//             inset: 0,
//             backgroundImage:
//               theme.palette.mode === 'dark'
//                 ? 'radial-gradient(at 50% 50%, hsla(220, 100%, 16%, 0.5), hsl(220, 30%, 5%))'
//                 : 'radial-gradient(circle, #ffffff, #f5f5f7)', // Светлый фон
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             transition: 'background 0.3s ease', // Плавное переключение
//           },
//         }}
//       >
//         {children}
//       </Stack>
//     </AppTheme>
//   );
// }
