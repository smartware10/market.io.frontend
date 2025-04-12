import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductCard,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text={"Главная"} size={"lg"} className={"font-bold"} />
      </Container>

      <TopBar />

      <Container className={"mt-5 pb-14"}>
        <div className={"flex gap-[60px]"}>
          <div className={"w-[250px]"}>
            <Filters />
          </div>

          <div className={"flex-1"}>
            <div className={"flex flex-col gap-16"}>
              <ProductCard
                id={1}
                title={"Компьютер"}
                description={
                  'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой'
                }
                imageUrl={"/img.png"}
                price={5500}
              />
            </div>
          </div>
        </div>
      </Container>

      <div className={"h-[3000px]"} />
    </>
  );
}
