import React from 'react'

const Products = ({ data,page }) => {
    return (
        <div className='products-wrapper'>
            {
                data.length > 0 &&
                data.slice(page*9-9,page*9).map((item, index) => {
                    return (
                        <div key={item.id} className='product'>
                            <div className='image-wrapper'>
                                <img  src={item.thumbnail} alt={item.title} />
                            </div>
                            <div className="details">
                                <h4>{item.title}</h4>
                                <p>$ {item.price}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Products