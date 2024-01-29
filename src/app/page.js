import { Title } from "@/Components/Title";
import { Counter } from "@/Components/Counter.jsx";
import { Header } from "@/Components/ui/Header";
import { Footer } from "@/Components/ui/Footer";


export const metadata = {
  title: "Mi página next",
  description: "Página de Andrés Obregón",
  keywords: ["pagina web", "eventos"]
}

export default function Home() {
  return (
    <>
    <Header />
    <main className="min-h-screen mt-24 flex flex-col justify-center items-center sm:flex-row sm:gap-x-6 md:mt-6">
      <Title  text={"Contador de Andrés"}/>
      <Counter />
    </main>
    <Footer/>
    </>
    
  );
}
