function Card(props) {
  return (
    <>
      <div className="d-flex align-items-stretch">
        <div className="card shadow-lg auto">
          <div className="card-body d-flex justify-content-center align-items-center p-5">
            <h3>
              <i>{props.children}</i>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
