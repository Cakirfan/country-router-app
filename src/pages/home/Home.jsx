import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Col, Card, Row, Button } from "react-bootstrap";
import ScrollBtn from "../../components/scrollTop/ScrollBtn";

const Home = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (countries.length === 0) {
      fetchData();
    }
  }, [countries]);

  const handleDetailsClick = (name) => {
    navigate(`/Details/${name}`);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  const filteredCountries = countries.filter(({ name }) =>
    name.common.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCountries = filteredCountries.slice(0, 250);

  return (
    <Container className="text-center mt-5 d-flex flex-column align-items-center">
      <input
        className="input-group-text w-75"
        style={{ marginTop: "6rem" }}
        type="text"
        placeholder="Search countries..."
        onChange={handleSearchChange}
        autoFocus
      />
      <Row className="g-5 mt-3">
        {paginatedCountries.map(({ flags, name }) => {
          return (
            <Col
              className="m-auto my-3 d-flex justify-content-center align-items-center"
              sm={12}
              md={6}
              lg={3}
              key={name.common}
            >
              <Card
                style={{ width: "100%", height: "20rem" }}
                className="g-3 shadow"
              >
                <Card.Img
                  style={{ width: "100%", height: "11rem" }}
                  variant="top"
                  src={flags.png}
                  onClick={() => handleDetailsClick(name.common)}
                />
                <Card.Body className="text-center d-flex flex-column align-items-center justify-content-center">
                  <Card.Title>{name.common}</Card.Title>
                  <Button
                    variant="danger"
                    onClick={() => handleDetailsClick(name.common)}
                  >
                    DETAYLAR
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <ScrollBtn />
    </Container>
  );
};
export default Home;
