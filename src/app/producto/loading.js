import Image from "next/image";

const Loading = () => {
    return(
        <main className="min-h-screen mt-24 flex flex-col justify-center items-center">
        <div className="p-2 flex flex-col items-center">
                <Image
                    src={"/logocresi.ico"}
                    alt="Logotipo de CrESI"
                    width={64}
                    height={64}
                    className="animate-pulse"
                />
		</div>
        </main>
    )
}
export default Loading