import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";
import CategoriesList from "@/components/shared/cat";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text={"Главная"} size={"lg"} className={"font-bold"} />
      </Container>

      <TopBar />

      <Container className={"mt-5 pb-14"}>
        <div className={"flex gap-[40px]"}>
          <CategoriesList />
          <div className={"w-[250px]"}>
            <Filters />
          </div>

          <div className={"flex-1"}>
            <div className={"flex flex-col gap-16"}>
              <ProductsGroupList
                title={"Компьютеры"}
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Компьютер",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img.png",
                    price: 500,
                  },
                  {
                    id: 2,
                    name: "Компьютер",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img.png",
                    price: 15500,
                  },
                  {
                    id: 3,
                    name: "Компьютер",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img.png",
                    price: 5660,
                  },
                  {
                    id: 4,
                    name: "Компьютер",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img.png",
                    price: 100,
                  },
                  {
                    id: 5,
                    name: "Компьютер",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img.png",
                    price: 8700,
                  },
                  {
                    id: 6,
                    name: "Компьютер",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img.png",
                    price: 5500,
                  },
                ]}
              />

              <ProductsGroupList
                title={"Планшеты"}
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Планшет",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_1.png",
                    price: 500,
                  },
                  {
                    id: 2,
                    name: "Планшет",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_1.png",
                    price: 15500,
                  },
                  {
                    id: 3,
                    name: "Планшет",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_1.png",
                    price: 5660,
                  },
                ]}
              />

              <ProductsGroupList
                title={"Смартфоны"}
                categoryId={3}
                items={[
                  {
                    id: 1,
                    name: "Смартфон",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_2.png",
                    price: 500,
                  },
                  {
                    id: 2,
                    name: "Смартфон",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_2.png",
                    price: 15500,
                  },
                  {
                    id: 3,
                    name: "Смартфон",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_2.png",
                    price: 5660,
                  },
                  {
                    id: 4,
                    name: "Смартфон",
                    description:
                      'Экран 13.6" Liquid Retina (2560x1664), глянцевый / Apple M4 / RAM 16 ГБ / SSD 256 ГБ / Apple M4 Graphics (8 ядер) / Wi-Fi / Bluetooth / macOS Sequoia / 1.24 кг / голубой',
                    imageUrl: "/img_2.png",
                    price: 100,
                  },
                ]}
              />

              <ProductsGroupList title={"Мониторы"} categoryId={4} items={[]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
