import ProducDetail from '@/Components/products/ProductDetail'
import React from 'react'

function DetalleProductos({params}) {
    const {slug} = params
  return (
    <div>
        <ProducDetail slug={slug}/>
    </div>
  )
}

export default DetalleProductos