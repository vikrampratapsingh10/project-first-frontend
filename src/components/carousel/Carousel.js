import "./Carousel.css"

function Carousel() {
  return (
    <>
      <div id="carouselExampleSlidesOnly" className="carousel slide mt-100" data-bs-ride="carousel">
        <div className="carousel-inner" style={{height:"600px"}}>
          <div className="carousel-item active">
            <img src="./images/first.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/second.jpeg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="./images/third.jpeg" className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;