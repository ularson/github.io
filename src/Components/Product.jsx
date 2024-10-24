

function Products(props){
    return(
        <div className="product">
            <h2 className="product-title">{props.title}</h2>
            <p className="product-text">{props.text}</p>
            <img className="product-image" src={props.image} />
        </div>
    );
}

export default Products