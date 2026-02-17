import { useParams, useNavigate } from "react-router-dom";
import { laptopsData } from "../App"; // Убедись, что путь к данным верный
import {
  Container, Grid, Typography, Box, Button,
  Chip, Divider, Paper, Stack
} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CpuIcon from '@mui/icons-material/DeveloperBoard';
import RamIcon from '@mui/icons-material/Memory';
import SsdIcon from '@mui/icons-material/Storage';

const DetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Находим ноутбук по id. Приводим к числу, так как в URL id всегда строка.
  const laptop = laptopsData.find((item) => item.id === Number(id));

  // Если ноутбук не найден
  if (!laptop) {
    return (
      <Container sx={{ py: 10, textAlign: 'center' }}>
        <Typography variant="h4">Ноутбук не найден</Typography>
        <Button onClick={() => navigate('/')} sx={{ mt: 2 }}>
          Вернуться на главную
        </Button>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      {/* Кнопка назад */}
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate(-1)}
        sx={{ mb: 4, color: '#379fab' }}
      >
        Назад к списку
      </Button>

      <Grid container spacing={6}>
        {/* Левая часть: Изображение */}
        <Grid item xs={12} md={6}>
          <Paper elevation={0} sx={{ borderRadius: 4, overflow: 'hidden', border: '1px solid #eee' }}>
            <Box
              component="img"
              src={laptop.image}
              alt={laptop.title_ru}
              sx={{ width: '100%', display: 'block' }}
            />
          </Paper>
        </Grid>

        {/* Правая часть: Инфо */}
        <Grid item xs={12} md={6}>
          <Box>
            <Chip label={laptop.category} color="primary" sx={{ mb: 2, bgcolor: '#379fab' }} />
            <Typography variant="h3" fontWeight={800} gutterBottom>
              {laptop.title_ru}
            </Typography>

            <Typography variant="h4" color="#379fab" fontWeight={700} sx={{ mb: 3 }}>
              {laptop.price.toLocaleString()} сом
            </Typography>

            <Typography variant="body1" color="text.secondary" paragraph sx={{ lineHeight: 1.8 }}>
              {laptop.description_ru}
            </Typography>

            <Divider sx={{ my: 4 }} />

            <Typography variant="h6" sx={{ mb: 2, fontWeight: 700 }}>Характеристики:</Typography>

            <Stack spacing={2}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <CpuIcon color="primary" />
                <Typography variant="body1">Процессор: <strong>{laptop.specs.cpu}</strong></Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <RamIcon color="primary" />
                <Typography variant="body1">Оперативная память: <strong>{laptop.specs.ram}</strong></Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <SsdIcon color="primary" />
                <Typography variant="body1">Накопитель: <strong>{laptop.specs.ssd}</strong></Typography>
              </Box>
            </Stack>

            <Box sx={{ mt: 5, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                size="large"
                sx={{ bgcolor: '#379fab', px: 6, py: 1.5, borderRadius: 2 }}
              >
                В корзину
              </Button>
              <Button
                variant="outlined"
                size="large"
                sx={{ borderColor: '#379fab', color: '#379fab', px: 4, borderRadius: 2 }}
              >
                Купить в кредит
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default DetailPage;
