import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function TechnologyPage({ technologies }) {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const companySlug = searchParams.get("companySlug");

  return (
    <div className="content technologies-details-content">
      <h1 className="page-name">Technology Details</h1>
      <div className="technologies-details">
        {technologies &&
          technologies
            .filter((tech) => tech.slug === slug)
            .map((tech) => (
              <div className="technology">
                <div className="tech-img">
                  <img src={tech.image} alt={tech.name} />
                </div>
                <div key={tech.slug} className="tech-about">
                  <h1>{tech.name}</h1>
                  <h3>About</h3>
                  <p>{tech.description}</p>
                </div>
              </div>
            ))}
      </div>
      <div>
        <button
          className="back-btn"
          onClick={() => navigate(`/company/${companySlug}`)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default TechnologyPage;
