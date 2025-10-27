import React, { useState } from 'react';
import { ShoppingCart, Trash2, Mail, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function PetiteSucreeStore() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [slide, setSlide] = useState(0);

  const sliderImages = [
    'https://www.pequerecetas.com/wp-content/uploads/2024/09/tarta-fraisier-francesa-768x576.jpg',
    'https://comebonito.cl/cdn/shop/articles/20231019123420-manjar-20nuez-2.jpg?v=1699369526',
    'https://www.espresso-international.es/media/image/54/5a/04/cantuccini.jpg',
    'https://m.media-amazon.com/images/I/71oFY19Q5vL._AC_UF894%2C1000_QL80_.jpg'
  ];

  const nextSlide = () => setSlide((slide + 1) % sliderImages.length);
  const prevSlide = () => setSlide((slide - 1 + sliderImages.length) % sliderImages.length);

  const products = [
    {
      name: 'Torta Alfajor Imperial',
      description: 'Capas suaves de bizcocho rellenas de dulce artesanal y nuez, inspiradas en el alfajor tradicional.',
      image: 'https://comebonito.cl/cdn/shop/articles/20231019123420-manjar-20nuez-2.jpg?v=1699369526',
      color: 'bg-purple-100'
    },
    {
      name: 'Tarta de Fresas Fraisier',
      description: 'Postre francés con bizcocho esponjoso, crema mousseline y fresas frescas.',
      image: 'https://www.pequerecetas.com/wp-content/uploads/2024/09/tarta-fraisier-francesa-768x576.jpg',
      color: 'bg-pink-100'
    },
    {
      name: 'Galleta Crocante Amaretti',
      description: 'Crujientes por fuera y suaves por dentro, con el delicado sabor de almendras italianas.',
      image: 'https://m.media-amazon.com/images/I/71oFY19Q5vL._AC_UF894%2C1000_QL80_.jpg',
      color: 'bg-amber-100'
    },
    {
      name: 'Galleta de Almendra Biscotti',
      description: 'Galletas horneadas al estilo toscano, perfectas para acompañar un café o té.',
      image: 'https://www.espresso-international.es/media/image/54/5a/04/cantuccini.jpg',
      color: 'bg-blue-100'
    }
  ];

  const futureCreations = [
    'Mini tartaletas de pistacho',
    'Eclairs de vainilla y frutos rojos',
    'Cheesecake artesanal de limón',
    'Macarons gourmet con rellenos naturales'
  ];

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

  return (
    <div className="min-h-screen bg-purple-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-purple-200 shadow-md">
        <h1 className="text-3xl font-bold text-purple-700">Petite Sucrée</h1>
        <Button onClick={() => setShowCart(!showCart)} className="bg-purple-500 hover:bg-purple-600 text-white">
          <ShoppingCart className="mr-2" /> Carrito ({cart.length})
        </Button>
      </header>

      {!showCart ? (
        <>
          {/* Slider */}
          <section className="relative h-[400px] overflow-hidden">
            <img
              src={sliderImages[slide]}
              alt="postre"
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute inset-0 flex justify-between items-center px-4">
              <Button variant="ghost" className="bg-white/50 hover:bg-white" onClick={prevSlide}>◀</Button>
              <Button variant="ghost" className="bg-white/50 hover:bg-white" onClick={nextSlide}>▶</Button>
            </div>
            <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-center text-white">
              <h2 className="text-4xl font-semibold mb-2">El arte dulce hecho con amor</h2>
              <p className="text-lg">Bienvenidos a Petite Sucrée, donde la repostería se convierte en poesía.</p>
            </div>
          </section>

          {/* Productos */}
          <section className="p-8">
            <h2 className="text-2xl font-bold text-purple-700 mb-6">Nuestros Productos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((p, i) => (
                <Card key={i} className={`${p.color} rounded-2xl shadow-lg hover:shadow-xl transition`}>
                  <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-t-2xl" />
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold text-purple-700">{p.name}</h3>
                    <p className="text-sm mb-3">{p.description}</p>
                    <Button onClick={() => addToCart(p)} className="bg-purple-500 hover:bg-purple-600 text-white">Agregar</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Futuras Creaciones */}
          <section className="p-8 bg-pink-50">
            <h2 className="text-2xl font-bold text-pink-700 mb-4">✨ Futuras Creaciones ✨</h2>
            <ul className="list-disc ml-6 space-y-2">
              {futureCreations.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
          </section>

          {/* Acerca de */}
          <section className="p-8 bg-purple-100 text-purple-800">
            <h2 className="text-2xl font-bold mb-4">Acerca de Petite Sucrée</h2>
            <p>
              Nacimos del amor por los detalles y la pasión por el arte dulce. En Petite Sucrée creemos que cada postre
              debe contar una historia, despertar emociones y regalar momentos de felicidad. Nuestros productos
              combinan técnicas tradicionales con toques modernos, buscando siempre la armonía perfecta entre sabor y presentación.
            </p>
          </section>

          {/* Contacto */}
          <footer className="bg-purple-200 p-8 mt-8">
            <h2 className="text-xl font-bold text-purple-700 mb-4">Contáctanos</h2>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-2"><Phone /> <span>1.3027438547</span></div>
              <div className="flex items-center gap-2"><Mail /> <span>Correo próximamente</span></div>
              <div className="flex items-center gap-2"><MapPin /> <span>Ubicación próximamente</span></div>
              <a href="https://www.instagram.com/petitesucreecol/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-pink-700 hover:text-pink-900"><Instagram /> Instagram</a>
            </div>
            <p className="mt-4 text-sm text-purple-800">Horario: Lunes a sábado de 8:00 a.m. a 7:00 p.m.</p>
          </footer>
        </>
      ) : (
        <section className="p-8 bg-white shadow-lg rounded-2xl max-w-3xl mx-auto mt-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">🛍️ Tu Carrito</h2>
          {cart.length === 0 ? (
            <p className="text-gray-600">Tu carrito está vacío. ¡Agrega algo dulce!</p>
          ) : (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center justify-between border-b border-purple-200 pb-2">
                  <div className="flex items-center gap-3">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold text-purple-700">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.description.slice(0, 50)}...</p>
                    </div>
                  </div>
                  <Button variant="ghost" onClick={() => removeFromCart(index)}><Trash2 className="text-red-500" /></Button>
                </li>
              ))}
            </ul>
          )}
          {cart.length > 0 && (
            <div className="mt-6 flex justify-between items-center">
              <p className="font-semibold text-purple-700">Total: definir precios luego 💰</p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-xl">Proceder al pago</Button>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
