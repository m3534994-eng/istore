
 
 import {
  Card as MuiCard,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Chip,
  Divider,
  Stack
} from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory'; // Для RAM
import StorageIcon from '@mui/icons-material/Storage'; // Для SSD
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent'; // Для CPU
import { Link } from 'react-router-dom'
const Card = (props) => {
  // Принимаем все пропсы, включая объект specs
  const { title_ru, price, image, description_ru, category, specs, id } = props;

  return (
    <MuiCard sx={{
      maxWidth: 350,
      borderRadius: 4,
      overflow: 'hidden',
      transition: '0.3s',
      '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }
    }}>
      {/* Изображение и категория */}
      <Box sx={{ position: 'relative' }}>
        <CardMedia
          component="img"
          height="220"
          image={image}
          alt={title_ru}
          sx={{ objectFit: 'cover' }}
        />
        <Chip
          label={category}
          size="small"
          sx={{
            position: 'absolute',
            top: 12,
            right: 12,
            bgcolor: '#379fab',
            color: '#fff',
            fontWeight: 'bold'
          }}
        />
      </Box>

      <CardContent sx={{ pb: 1 }}>
        {/* Заголовок */}
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, fontSize: '1.1rem', height: '1.4em', overflow: 'hidden' }}>
            <Link to={`/detail/${id}`}>
            {title_ru}
            </Link>
          {title_ru}
        </Typography>

        {/* Описание */}
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, height: '3.2em', overflow: 'hidden' }}>
          {description_ru}
        </Typography>

        <Divider sx={{ mb: 2 }} />

        {/* Характеристики (Specs) */}
        <Stack spacing={1} sx={{ mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsInputComponentIcon sx={{ fontSize: 18, color: '#379fab' }} />
            <Typography variant="caption">CPU: <b>{specs.cpu}</b></Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <MemoryIcon sx={{ fontSize: 18, color: '#379fab' }} />
            <Typography variant="caption">RAM: <b>{specs.ram}</b></Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <StorageIcon sx={{ fontSize: 18, color: '#379fab' }} />
            <Typography variant="caption">SSD: <b>{specs.ssd}</b></Typography>
          </Box>
        </Stack>

        {/* Цена и кнопка */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 2 }}>
          <Typography variant="h6" sx={{ color: '#2c3e50', fontWeight: 800 }}>
            {price.toLocaleString()} сом
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#379fab',
              '&:hover': { bgcolor: '#2e8691' },
              textTransform: 'none',
              borderRadius: 2
            }}
          >
            Купить
          </Button>
        </Box>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
