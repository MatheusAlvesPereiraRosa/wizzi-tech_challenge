import { type } from "@testing-library/user-event/dist/type";
import "./index.css";
import { useState, useRef } from "react";

export const Form = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    apartureDate: "",
    departureDate: "",
    adults: 0,
    children: 0,
    passagerName: "",
    locationName: "",
  });
  const [errorName, setErrorName] = useState(null);
  const [errorEmail, setErrorEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const validate = () => {
    let error = false;

    setErrorName(null);
    setErrorEmail(null);
    setErrorMessage(null);

    if (form.name === "") {
      setErrorName("Preencha o campo de nome!");
      error = true;
    }

    if (form.email === "" || form.email.indexOf("@") == -1) {
      setErrorEmail("Preencha o campo de nome!");
      error = true;
    }

    if (form.message === "") {
      setErrorMessage("Preencha o campo de nome!");
      error = true;
    }

    return !error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    console.log(value);
    console.log(typeof value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Formulário enviado com sucesso");
    } else {
      console.log("Houve algum erro");
    }
  };

  return (
    <form
      className="form-box fluid-container row align-items-baseline margin-central p-3 rounded-3"
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <div className="col-md-3">
        <label htmlFor="birthday" className="form-label">
          Ida:
        </label>
        <input
          type="date"
          className="form-control"
          id="apparture"
          name="apparture"
          value={form.apartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-3 ">
        <label htmlFor="birthday" className="form-label">
          Volta:
        </label>
        <input
          type="date"
          className="form-control"
          id="depparture"
          name="depparture"
          value={form.departureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-3 mt-3">
        <label htmlFor="quantity" className="form-label">
          Quantidade de passageiros (adultos):
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={form.appartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-3 mt-3">
        <label htmlFor="quantity" className="form-label">
          Quantidade de passageiros (crianças):
        </label>
        <input
          type="number"
          className="form-control"
          id="quantity"
          name="quantity"
          value={form.appartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Origem
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Carbonita"
          value={form.appartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Destino
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Belo Horizonte"
          value={form.appartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nome do passageiro principal
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Nome de exemplo"
          value={form.appartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Endereço de email
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="algo@exemplo.com"
          value={form.appartureDate}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-primary" type="button">
          Enviar
        </button>
      </div>
    </form>
  );
};
