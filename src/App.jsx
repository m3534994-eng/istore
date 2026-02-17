import Card from "./Card/Card";

export const laptopsData = [
  {
    id: 1,
    title_ru: "Apple MacBook Air 13 M2",
    image: "https://i.pinimg.com/1200x/fb/91/75/fb917567ea462ee7c6970b7d4c620a49.jpg",
    description_ru: "Невероятно тонкий и быстрый ноутбук на базе чипа M2. Идеален для работы и творчества в дороге.",
    price: 95000,
    category: "Ультрабуки",
    specs: {
      cpu: "Apple M2",
      ram: "8 ГБ",
      ssd: "256 ГБ"
    }
  },
  {
    id: 2,
    title_ru: "ASUS ROG Strix G15",
    image: "https://i.pinimg.com/736x/ca/4c/32/ca4c327c1008d5416f0a8c5c920ad786.jpg",
    description_ru: "Мощный игровой ноутбук с частотой обновления экрана 144Гц и видеокартой RTX серии.",
    price: 125000,
    category: "Игровые",
    specs: {
      cpu: "AMD Ryzen 7",
      ram: "16 ГБ",
      ssd: "512 ГБ"
    }
  },
  {
    id: 3,
    title_ru: "Lenovo ThinkPad E15",
    image: "https://i.pinimg.com/1200x/2f/0a/7c/2f0a7c8eeb5ffb1f6529c1339a79de7a.jpg",
    description_ru: "Легендарная надежность и лучшая клавиатура в классе. Лучший выбор для бизнеса и программирования.",
    price: 68000,
    category: "Офисные",
    specs: {
      cpu: "Intel Core i5",
      ram: "16 ГБ",
      ssd: "512 ГБ"
    }
  },
  {
    id: 4,
    title_ru: "HP Victus 16",
    image: "https://i.pinimg.com/736x/fb/d8/7e/fbd87e483b4f7814fa20e54e824e9fed.jpg",
    description_ru: "Стильный дизайн и высокая производительность для современных игр и мультимедиа.",
    price: 82000,
    category: "Игровые",
    specs: {
      cpu: "Intel Core i7",
      ram: "16 ГБ",
      ssd: "1 ТБ"
    }
  },
  {
    id: 5,
    title_ru: "Xiaomi RedmiBook 15",
    image: "https://i.pinimg.com/1200x/5a/71/e1/5a71e15b68dde6152c36abf26419713b.jpg",
    description_ru: "Отличное соотношение цены и качества. Тонкий металлический корпус и яркий Full HD экран.",
    price: 45000,
    category: "Бюджетные",
    specs: {
      cpu: "Intel Core i3",
      ram: "8 ГБ",
      ssd: "256 ГБ"
    }
  }
];

const App = () => {

  return (
    <div style={{
      display: "flex",
      gap: "20px"
    }}>
      {laptopsData.map((item) => (
        <Card
          key={item.id}
          {...item}
        />
      ))}
    </div>
  )
}

export default App
