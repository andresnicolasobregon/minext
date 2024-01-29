
export default function ProductCard ({item}) {
    return(
        <article className="basig-72 shadow-lg rounded">
            <div className="px-4 border-t border-gray-200">
                <h4>Producto: {item.title}</h4>
                <p>Pecio: $ {item.price}</p>
            </div>
        </article>
        
    )
        
  }