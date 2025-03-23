import { Link } from "react-router-dom";

function HomePage({ companies }) {
  return (
    <div className="content home-page-content">
      <h1>StackTracker: Discover Tech Stacks Used by Top Companies</h1>
      <div className="companies">
        {companies &&
          companies.map((company) => (
            <Link to={`/company/${company.slug}`}>
              <div className="company">
                <p className="company-name">{company.name}</p>
                <img className="company-logo" src={company.logo} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default HomePage;
