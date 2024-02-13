import ContactForm from "@/Components/contacto/ContactForm";

export const metadata = {
    title: "Contacto",
    description: "Página de Andrés Obregón",
    keywords: ["pagina web", "eventos"]
  }
  
  export default function Contacto() {
    return (
      <>
      <main className="min-h-screen flex flex-col justify-center items-center mt-24">
          <ContactForm />
      </main>
      </>
      
    );
  }
  