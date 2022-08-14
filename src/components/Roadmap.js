import Carousel from "react-bootstrap/Carousel";

function DarkVariantExample() {
  return (
    <Carousel className="justify-content-center" variant="dark">
      <Carousel.Item>
        <img
          style={{ width: "20rem" }}
          className="d-block w-5"
          src="process.svg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Eylül 2022</h5>
          <p>Platformun Alpha Sürümü</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "20rem" }}
          className="d-block w-5"
          src="process.svg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Ekim 2022</h5>
          <p>Platformun Beta Sürümü</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "20rem" }}
          className="d-block w-5"
          src="process.svg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Kasım 2022</h5>
          <p>Mentor - Mentee Programı</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "20rem" }}
          className="d-block w-5"
          src="process.svg"
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h5>Ocak 2023</h5>
          <p>Yapay Zeka ile Özgeçmiş İnceleme</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "20rem" }}
          className="d-block w-5"
          src="process.svg"
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h5>Şubat 2023</h5>
          <p>İş arayanlarla işe verenlerin eşleştirilmesi</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "20rem" }}
          className="d-block w-5"
          src="process.svg"
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h5>Mayıs 2023</h5>
          <p>Metaverse ile Mülakat Görüşmesi</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;
