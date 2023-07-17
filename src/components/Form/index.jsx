import "./index.css";

// biblioteca para utilizar e comparar datas
import moment from "moment";

// import de pacote para especificar os tipos de props
import P from "prop-types";
import { useState, useRef, useEffect } from "react";
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
  const [errorOrigin, setErrorOrigin] = useState(null);
  const [errorDestination, setErrorDestination] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorName, setErrorName] = useState(null);

  /// validação de data

  // constantes com o valor do horário atual
  const CURRENT_DATE = moment();
  const FORMATTED_CURRENT = CURRENT_DATE.format("YYYY/MM/DD");

  const [departureDateObject, setDepartureDateObject] = useState();
  const [returnDateObject, setReturnDateObject] = useState();

  // hooks para settar data no formato que pode ser comparável pelo moments js
  // toda vez que a data de ida e volta mudarem
  useEffect(() => {
    const dateObject = moment(form.departure, "YYYY/MM/DD");
    setDepartureDateObject(dateObject);
  }, [form.departure]);

  useEffect(() => {
    const dateObject = moment(form.return, "YYYY/MM/DD");
    setReturnDateObject(dateObject);
  }, [form.return]);

  // função de validação do formulário
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
    } else if (departureDateObject.isBefore(FORMATTED_CURRENT)) {
      setErrorDeparture("A data de ida precisa ser maior do que a atual!");
    }

    if (form.return === "") {
      setErrorReturn("Informe a data de retorno!");
      error = true;
    } else if (returnDateObject.isBefore(FORMATTED_CURRENT)) {
      setErrorReturn("A data de ida precisa ser maior do que a atual!");
    }

    if (departureDateObject.isAfter(returnDateObject)) {
      setErrorDeparture("A data de ida tem que ser antes da data de volta!");
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

  // função para setar estado toda vez
  // que mudar algo nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  // função para captar evento de submit
  // e setar status do envio
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // chama função do componente pai
      handleStatus({
        type: "Sucesso",
        message: "Formulário enviado com sucesso",
      });
    } else {
      // chama função do componente pai
      handleStatus({
        type: "Erro",
        message:
          "Houve algum erro na validação do formulário, corrija e tente novamente",
      });
    }
  };

  return (
    <form
      className="p-3 bg-body-tertiary container rounded-3"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2 className="titulo position-relative text-center mb-3">
        Carbo-viagens
      </h2>

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
            <p className="text-danger fw-bolder mt-2 mb-0">{errorDeparture}</p>
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
            <p className="text-danger fw-bolder mt-2 mb-0">{errorReturn}</p>
          )}
        </div>
        <div className="col-lg-3  col-md-6 mt-3 mb-0">
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
            <p className="text-danger fw-bolder mt-2">{errorAdults}</p>
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
            placeholder="Carbonita/MG"
            name="origin"
            value={form.origin}
            onChange={(e) => {
              handleChange(e), setErrorOrigin(null);
            }}
          />
          {errorOrigin && (
            <p className="text-danger fw-bolder mt-2 mb-0">{errorOrigin}</p>
          )}
        </div>
        <div className="col-md-6 mt-3">
          <label className="form-label">Destino</label>
          <input
            type="name"
            className="form-control"
            placeholder="Belo Horizonte/MG"
            name="destination"
            value={form.destination}
            onChange={(e) => {
              handleChange(e), setErrorDestination(null);
            }}
          />
          {errorDestination && (
            <p className="text-danger fw-bolder mt-2 mb-0">
              {errorDestination}
            </p>
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
            <p className="text-danger fw-bolder mt-2 mb-0">{errorName}</p>
          )}
        </div>
        <div className="col-md-6 mt-3 mb-0">
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
            <p className="text-danger fw-bolder mt-2 mb-0">{errorEmail}</p>
          )}
        </div>
      </div>
      <div className="d-grid mt-3">
        <Button type="submit" onClick={() => setShow(true)}>
          Enviar
        </Button>
      </div>
    </form>
  );
};

Form.propTypes = {
  handleStatus: P.func.isRequired,
  setShow: P.string.isRequired,
};
