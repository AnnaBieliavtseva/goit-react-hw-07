import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ContactsRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import SyncRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SecurityRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import { motion } from 'framer-motion';

const items = [
  {
    icon: ContactsRoundedIcon,
    title: 'Effortless Contact Management',
    description:
      'Store, organize, and access all your contacts in one place with ease and efficiency.',
  },
  {
    icon: SecurityRoundedIcon,
    title: 'Secure & Private',
    description:
      'Your data is encrypted and protected, ensuring your personal and professional contacts remain confidential.',
  },
  {
    icon: SyncRoundedIcon,
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
      <Typography variant="h3" textAlign="center" color="primary.dark">
        Contact Keeper
      </Typography>
      {items.map((item, index) => (
        <Stack
          key={index}
          direction="row"
          sx={{ gap: 2, alignItems: 'center' }}
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <item.icon sx={{ color: 'primary.dark', fontSize: 40 }} />
          </motion.div>
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
