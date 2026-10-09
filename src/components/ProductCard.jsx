const ProductCard = (props) => {
  return (
    <div>
      <p>{props.id}</p>
      <p>{props.name}</p>
      <p>{props.category}</p>
      <p>{props.price}</p>
      <p>{props.inStock}</p>
    </div>
  )
}

export default ProductCard
