export default function ProductCard (item) {
    return(
        <div className="basig-72 shadow-lg rounded">
            
            <h4>Producto: {item.title}</h4>
            <p>Pecio: $ {item.price}</p>
        </div>
    )
        
  }