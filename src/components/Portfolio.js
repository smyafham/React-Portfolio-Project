const Portfolio = ({ Projects }) => (
  <div class="album py-5 bg-light">
    <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        {Projects &&
          Projects.length > 0 &&
          Projects.map((project, key) => (
            <div class="col" key={key}>
              <div class="card shadow-sm">
                <img
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  src={project.Image}
                  alt="portfolio"
                  aria-label="image"
                  focusable="false"
                />

                <div class="card-body">
                  <p class="card-text">{project.Desc}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-secondary"
                      >
                        View project
                      </button>
                    </div>
                    <small class="text-muted">{Projects.Tags}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  </div>
);
export default Portfolio;
