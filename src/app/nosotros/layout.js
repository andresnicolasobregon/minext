
export default function NosotrosLayout({ children }) {
  return (
    <>
      {children}
      <footer className="bg-gray-200 w-full">
            <div className="container m-auto py-4 flex items-center gap-4">
                <h4>Escribinos</h4>
            </div>                
                
      </footer>
    </>
      
  );
}