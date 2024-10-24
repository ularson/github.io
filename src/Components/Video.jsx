
function Video (props) {
    return (
        <div className="col-xs-12 col-lg-6 video">
            <h6>{props.title}</h6>
            <iframe src={props.url} title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
        
    );
}

export default Video