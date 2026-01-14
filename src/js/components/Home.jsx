import React from "react";

//create your first component
const Navbar = () => {
  return (
    <div className="bg bg-secondary">
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className="nav-link active color-white text-white"
            aria-current="page"
            href="#"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link color-white text-secondary-emphasis" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link color-white text-secondary-emphasis" href="#">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link color-white text-secondary-emphasis" href="#">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

const Jumbotron = () => {
  return (
    <div className="bg-light m-2 p-2">
      <h1 className="display-3 fw-semibold">A Warm Welcome!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum quidem
        itaque numquam beatae autem veritatis, placeat obcaecati dolor molestias
        velit ex, doloremque harum dignissimos. Doloremque saepe voluptas vel
        quaerat sed?
      </p>
      <button className="btn btn-primary text-white">Call to action!</button>
    </div>
  );
};

const Card = () => {
  return (
    <div className="card m-2 p-2" style={{ width: "18rem" }}>
      <img
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F20804701%2Fpexels-photo-20804701%2Ffree-photo-of-close-up-of-a-mallard-walking-on-a-field.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D800&f=1&nofb=1&ipt=de912d330691c4ca226f45f2c5b1cb936a9ee81782786ff68ccff078575ae394"
        className="card-img-top"
        alt=""
      />
      <div className="card-body text-center">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card’s content.
        </p>
        <a href="#" className="btn btn-primary">
          Find Out More!
        </a>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="m-2">
      <div>
        <Navbar />
      </div>
      <div className="container">
        <Jumbotron />
      </div>
      <div className="row justify-content-center">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
