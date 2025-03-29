import { Container, Title } from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-3">
        <Title text={"Главная"} size={"lg"} className={"font-bold"} />
      </Container>
    </>
  );
}
