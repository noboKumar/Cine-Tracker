import Image from "next/image";
import Container from "./components/Container";

export default function Home() {
  return (
    <Container className="py-5">
      <h1 className="text-4xl font-bold">Welcome to Cine Tracker</h1>
    </Container>
  );
}