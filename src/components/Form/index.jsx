import { type } from "@testing-library/user-event/dist/type";
import "./index.css";
import { useState, useRef } from "react";

export const Form = () => {
  const formRef = useRef();
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
  const [emptyValues, setEmptyValue] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  console.log(form);

  const validate = () => {};

  const handleChange = (e) => {
    console.log(e.target);

    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(validate());

    if (validate()) {
      console.log("Formulário enviado com sucesso");
    }

    console.log("Houve algum erro");
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
          name="departure"
          value={form.aparture}
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
          name="return"
          value={form.departure}
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
          name="adults"
          min={0}
          value={form.adults}
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
          name="children"
          min={0}
          value={form.children}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Origem
        </label>
        <input
          type="name"
          className="form-control"
          placeholder="Carbonita"
          name="origin"
          value={form.origin}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Destino
        </label>
        <input
          type="name"
          className="form-control"
          placeholder="Belo Horizonte"
          name="destination"
          value={form.destination}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mt-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nome do passageiro principal
        </label>
        <input
          type="name"
          className="form-control"
          name="name"
          placeholder="Nome de exemplo"
          value={form.name}
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
          name="email"
          placeholder="algo@exemplo.com"
          value={form.email}
          onChange={handleChange}
        />
      </div>
      <div className="d-grid gap-2 mt-3">
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </div>
    </form>
  );
};
