import Navbar from "../components/Navbar";


const Homepage = () => {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Welcome to Pentagon Space Student Enrollment System</h1>

          <p>
            This is used to manage student registrations, records, courses
            efficiently with our modern enrollment platform.
          </p>

          <div className="stats">
            <div>
              <h2>500+</h2>
              <span>Students</span>
            </div>

            <div>
              <h2>5+</h2>
              <span>Courses</span>
            </div>

            <div>
              <h2>BTM</h2>
              <span>Bengaluru</span>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Homepage;