

export const metadata = {
    title: "Contacto",
    description: "Página de Andrés Obregón",
    keywords: ["pagina web", "eventos"]
  }
  
  export default function Contacto() {
    return (
      <>
      <main className="min-h-screen flex flex-col justify-center items-center mt-24">
          <form className="flex flex-col bg-white p-8 rounded shadow-md w-96">
            <h1 className="text-green-500">Comunicate con nosotros</h1>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Nombre y Apellido:
                </label>
                <input 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="text"
                id="username"
                name="username"
                placeholder="Nombre y Apellido"
                />
            </div><div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  E-mail:
                </label>
                <input 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Asunto:
                </label>
                <input 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="text"
                id="asunto"
                name="asunto"
                placeholder="Asunto"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Mensaje:
                </label>
                <input 
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                type="text"
                id="mensaje"
                name="mensaje"
                placeholder="Mensaje"
                />
            </div>
            <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded focus:outline-none hover:bg-blue-600"
            >
              Enviar
            </button>
          </form>
      </main>
      </>
      
    );
  }
  