import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <Navbar className="justify-content-center align-items-center bg-dark pt-3 text-light fixed-bottom">
        <p>
          {" "}
          Copyright by{" "}
          <a href="https://my-portfolio-gamma-snowy.vercel.app/" target="_blank">
            Cakirfan
          </a>{" "}
          {new Date().getFullYear()}{" "}
        </p>
      </Navbar>
    </div>
  );
};

export default Footer;
