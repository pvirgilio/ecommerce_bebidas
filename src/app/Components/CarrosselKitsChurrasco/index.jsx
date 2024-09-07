"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { getProductHome } from "../../api/apiEcommerce";
import CardsAluguel from "../CardsAluguel";
import "../CarrosselKitsBebidas/CarrosselKitBebidas.css";

export default function CarrosselKitsChurrasco() {
  const cards = [
    { id: "1", image: "/images/Produtos/image 51.png" },
    { id: "2", image: "/images/Produtos/image 52.png" },
    { id: "3", image: "/images/Produtos/image 53.png" },
    { id: "4", image: "/images/Produtos/image 45.png" },
    { id: "5", image: "/images/Produtos/image 52.png" },
    { id: "6", image: "/images/Produtos/image 45.png" },
    { id: "7", image: "/images/Produtos/image 51.png" },
    { id: "8", image: "/images/Produtos/image 53.png" },
  ];

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchProdutos() {
      const resultado = await getProductHome();
      // console.log(resultado);
      setProdutos(resultado);
    }
    fetchProdutos();
  }, []);

  console.log(produtos);

  return (
    <section className="mt-[20px] max-w-[1416px] w-full h-full mx-auto px-5 lg:mt-10">
      <div className="w-full">
        <div className="relative w-full">
          <Swiper
            className="kitbebidas"
            //breaks por resolucao no slidesPerView
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            slidesPerView={4}
            navigation
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
              480: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1586: {
                slidesPerView: 4,
                spaceBetween: 75,
              },
            }}
            keyboard
            spaceBetween={20}
          >
            {/* {produtos.map((item) => (
                <SwiperSlide key={item.ean}>
                  <Cards
                    imagem={item.image}
                    nome={item.nomeproduto}
                    promoQtd="Compre 3 leve 1"
                    // promoNovo="Novo"
                    promoValor="R$ 55,00 a partir de 6 un."
                    a="R$ 50,00"
                    valor={item.valor}
                    parcelas="até 4x sem juros"
                  />
                </SwiperSlide>
              ))} */}
            {cards.map((item) => (
              <SwiperSlide key={item.id}>
                <CardsAluguel
                  imagem={item.image}
                  nome="Whisky Johnnie Walker Green Label 750 ml"
                  promoQtd="Compre 3 leve 1"
                  // promoNovo="Novo"
                  promoValor="R$ 55,00 a partir de 6 un."
                  a="R$ 50,00"
                  valor="R$ 50,00"
                  parcelas="até 4x sem juros"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
