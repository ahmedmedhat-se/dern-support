import plansData from "./Data/Installations.json";

const Installations = () => {
  return (
    <div className="container-fluid p-5 installations">
      <h2 className="text-center mb-4">Our Installation Plans</h2>
      <div className="row">
        {plansData.map((plan, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card h-100 border-0">
              <div className="card-body">
                <h3 className="card-title text-center">{plan.title}</h3>
                <p className="card-text text-center">{plan.description}</p>
                <ul className="list-unstyled">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer bg-transparent text-center">
                <h4>{plan.price}</h4>
                <button className="btn btn-primary">Choose Plan</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installations;