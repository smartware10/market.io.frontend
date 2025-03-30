import { Container, Title, TopBar } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text={"Главная"} size={"lg"} className={"font-bold"} />
      </Container>

      <TopBar />
      <div className={"h-[3000px]"} />
    </>
  );
}
