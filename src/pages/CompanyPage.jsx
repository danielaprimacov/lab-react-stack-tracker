import { useParams, Link } from "react-router-dom";

function CompanyPage({ companies }) {
  const { companySlug } = useParams();

  return (
    <div className="content company-details-content">
      <h1 className="page-name">Company Profile</h1>
      {companies &&
        companies
          .filter((company) => company.slug === companySlug)
          .map((company) => (
            <div key={company.slug} className="company-wrapper">
              <div className="company-details">
                <div className="company-img">
                  <img src={company.logo} alt={company.name} />
                </div>
                <div className="company-about-section">
                  <h2>{company.name}</h2>
                  <h3>About</h3>
                  <p>{company.description}</p>
                </div>
              </div>
              <div className="technologies">
                {company.techStack.map((tech) => (
                  <Link to={`/tech/${tech.slug}?companySlug=${company.slug}`}>
                    <div className="tech-details">
                      <div className="tech-img">
                        <img src={tech.image} alt={tech.name} />
                      </div>
                      <p>{tech.name}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
    </div>
  );
}

export default CompanyPage;
