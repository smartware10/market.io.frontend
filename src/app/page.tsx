import { Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text={"Главная"} size={"lg"} className={"font-bold"} />
      </Container>
    </>
  );
}
