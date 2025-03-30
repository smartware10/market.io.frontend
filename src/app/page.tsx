import { Categories, Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text={"Главная"} size={"lg"} className={"font-bold"} />
        <Categories />
        <div className={"h-[3000px]"} />
      </Container>
    </>
  );
}
