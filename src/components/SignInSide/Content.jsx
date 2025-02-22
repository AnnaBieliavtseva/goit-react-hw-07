import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactsRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SyncRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SecurityRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';

const items = [
  {
    icon: <ContactsRoundedIcon sx={{ color: 'primary.dark' }} />,
    title: 'Effortless Contact Management',
    description:
      'Store, organize, and access all your contacts in one place with ease and efficiency.',
  },
  {
    icon: <SecurityRoundedIcon sx={{ color: 'primary.dark' }} />,
    title: 'Secure & Private',
    description:
      'Your data is encrypted and protected, ensuring your personal and professional contacts remain confidential.',
  },
  {
    icon: <SyncRoundedIcon sx={{ color: 'primary.dark' }} />,
    title: 'Seamless Syncing',
    description:
      'Sync your contacts across all your devices and never lose touch with important connections.',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: 'column',
        alignSelf: 'center',
        gap: 4,
        maxWidth: 450,
      }}
    >
      <Typography variant="h1" textAlign="center" color="info.dark">
        Contact keeper
      </Typography>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
