import PropTypes from 'prop-types'

function Card(props) {
    return(
        <div className="card">
            <img src={props.image} className="card-image"></img>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-text">{props.text}</p>
        </div>
    );
}

Card.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    email: PropTypes.string,
}

export default Card