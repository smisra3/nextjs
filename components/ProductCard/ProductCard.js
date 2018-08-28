import Link from "next/link";

const ProductCard = props => {
  return (
    <div className={props.class + " product-card" || ""}>
      <p className="t-font-weight-bold">{props.productName || ""}</p>
      <p>{props.productDescription || ""}</p>
      <Link href={"/CommonData/" + props.id}>
        <a className="btn btn-primary">Browse</a>
      </Link>
    </div>
  );
};

export default ProductCard;
