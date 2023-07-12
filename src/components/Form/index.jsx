import "./index.css";

export const Form = () => (
  <div className="form-box fluid-container row align-items-baseline margin-central p-3">
    <div className="col-md-3">
      <label htmlFor="birthday" className="form-label">
        Ida:
      </label>
      <input
        type="date"
        className="form-control"
        id="apparture"
        name="apparture"
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
        min="1"
        max="5"
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
        min="1"
        max="5"
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
        placeholder="name@example.com"
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
        placeholder="name@example.com"
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
        placeholder="name@example.com"
      />
    </div>
    <div className="col-md-6 mt-3">
      <label htmlFor="exampleFormControlInput1" className="form-label">
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleFormControlInput1"
        placeholder="name@example.com"
      />
    </div>
    <div className="d-grid gap-2 mt-3">
      <button className="btn btn-primary" type="button">
        Enviar
      </button>
    </div>
  </div>
);
