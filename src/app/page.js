import { Title } from "@/Components/Title";
import { Counter } from "@/Components/Counter.jsx";

export const metadata = {
  title: "Mi página next",
  description: "Página de Andrés Obregón",
  keywords: ["pagina web", "eventos"]
}

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-2">
      <Title  text={"Contador de Andrés"}/>
      <Counter />
    </main>
  );
}
