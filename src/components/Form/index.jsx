import "./index.css";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";

export const Form = ({ handleStatus, setShow }) => {
  // referência do formulário
  const formRef = useRef();

  // estado do formulário
  const [form, setForm] = useState({
    departure: "",
    return: "",
    adults: "0",
    children: "0",
    origin: "",
    destination: "",
    email: "",
    name: "",
  });

  // tratamento de erros
  const [errorDeparture, setErrorDeparture] = useState(null);
  const [errorReturn, setErrorReturn] = useState(null);
  const [errorAdults, setErrorAdults] = useState(null);
  // const [errorChildren, setErrorChildren] = useState(null);
  const [errorOrigin, setErrorOrigin] = useState(null);
  const [errorDestination, setErrorDestination] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);

  console.log(form);

  // validação do formulário
  const validate = () => {
    let error = false;

    setErrorDeparture(null);
    setErrorReturn(null);
    setErrorAdults(null);
    setErrorOrigin(null);
    setErrorDestination(null);
    setErrorEmail(null);
    setErrorName(null);

    if (form.departure === "") {
      setErrorDeparture("Informe a data de ida!");
      error = true;
    }

    if (form.return === "") {
      setErrorReturn("Informe a data de retorno!");
      error = true;
    }

    if (form.adults === "0") {
      setErrorAdults("Necessário um passageiro ao menos");
      error = true;
    }

    if (form.origin === "") {
      setErrorOrigin("Informe sua origem");
      error = true;
    }

    if (form.destination === "") {
      setErrorDestination("Informe seu destino");
      error = true;
    }

    if (form.name === "") {
      setErrorName("Informe seu nome");
      error = true;
    }

    if (form.email === "") {
      setErrorEmail("Informe o seu email!");
      error = true;
    } else if (
      !form.email
        .toLocaleLowerCase()
        .match(/^([\w\-]+\.)*[\w\- ]+@([\w\- ]+\.)+([\w\-]{2,3})$/)
    ) {
      setErrorEmail("O email não é válido");
      error = true;
    }

    return !error;
  };

  // funções

  const handleChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(validate());

    if (validate()) {
      handleStatus({
        type: "sucesso",
        message: "Formulário enviado com sucesso",
      });
    } else {
      handleStatus({
        type: "erro",
        message: "Houve algum erro",
      });
    }
  };

  return (
    <form
      className="p-3 bg-body-tertiary container rounded-3"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2 className="text-center mb-3">Carbo-viagens</h2>

      <div className="input-container form-scroll fluid-container row align-items-baseline">
        <div className="col-lg-3 col-md-6">
          <label className="form-label">Ida:</label>
          <input
            type="date"
            className="form-control"
            name="departure"
            max="9999-12-31"
            value={form.departure}
            onChange={(e) => {
              handleChange(e), setErrorDeparture(null);
            }}
          />
          {errorDeparture && (
            <span className="text-danger fw-bolder">{errorDeparture}</span>
          )}
        </div>
        <div className="col-lg-3 col-md-6">
          <label className="form-label">Volta:</label>
          <input
            type="date"
            className="form-control"
            name="return"
            max="9999-12-31"
            value={form.return}
            onChange={(e) => {
              handleChange(e), setErrorReturn(null);
            }}
          />
          {errorReturn && (
            <span className="text-danger fw-bolder">{errorReturn}</span>
          )}
        </div>
        <div className="col-lg-3  col-md-6 mt-3">
          <label className="form-label">Nº de passageiros (adultos):</label>
          <input
            type="number"
            className="form-control"
            name="adults"
            min={0}
            value={form.adults}
            onChange={(e) => {
              handleChange(e), setErrorAdults(null);
            }}
          />
          {errorAdults && (
            <span className="text-danger fw-bolder">{errorAdults}</span>
          )}
        </div>
        <div className="col-lg-3 col-md-6 mt-3">
          <label className="form-label">Nº de passageiros (crianças):</label>
          <input
            type="number"
            className="form-control"
            name="children"
            min={0}
            value={form.children}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label">Origem</label>
          <input
            type="name"
            className="form-control"
            placeholder="Carbonita"
            name="origin"
            value={form.origin}
            onChange={(e) => {
              handleChange(e), setErrorOrigin(null);
            }}
          />
          {errorOrigin && (
            <span className="text-danger fw-bolder">{errorOrigin}</span>
          )}
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label">Destino</label>
          <input
            type="name"
            className="form-control"
            placeholder="Belo Horizonte"
            name="destination"
            value={form.destination}
            onChange={(e) => {
              handleChange(e), setErrorDestination(null);
            }}
          />
          {errorDestination && (
            <span className="text-danger fw-bolder">{errorDestination}</span>
          )}
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label">Nome do passageiro principal</label>
          <input
            type="name"
            className="form-control"
            name="name"
            placeholder="Seu nome"
            value={form.name}
            onChange={(e) => {
              handleChange(e), setErrorName(null);
            }}
          />
          {errorName && (
            <span className="text-danger fw-bolder">{errorName}</span>
          )}
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label">Endereço de email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="algo@exemplo.com"
            value={form.email}
            onChange={(e) => {
              handleChange(e), setErrorEmail(null);
            }}
          />
          {errorEmail && (
            <span className="text-danger fw-bolder">{errorEmail}</span>
          )}
        </div>
      </div>
      <div className="d-grid mt-3">
        <Button type="submit" onClick={() => setShow(true)}>
          Show Toast
        </Button>
      </div>
    </form>
  );
};
