import { Link } from "react-router-dom";

// Sample data for featured tutors
const featuredTutors = [
  { id: 1, name: "Joy", subject: "Math", image: "tutor1.jpg" },
  { id: 2, name: "Tanmoy", subject: "Science", image: "tutor2.jpg" },
  { id: 3, name: "Alok", subject: "English", image: "tutor3.jpg" },
];

const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white text-gray-800 font-body">
      <div className="text-center p-8 w-full max-w-screen-lg mx-auto rounded-md ">
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to Find My Tutor
        </h1>
        <p className="text-gray-600 mb-8">
          Your trusted platform to find the perfect tutor
        </p>
        <Link
          to="/search"
          className="bg-yellow-400 hover:bg-yellow-500 text-blue-800 py-2 px-6 rounded-full inline-block transition duration-300 shadow-md"
        >
          Find a Tutor
        </Link>

        {/* Display featured tutors */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold mb-6">Meet Our Featured Tutors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTutors.map((tutor) => (
              <div
                key={tutor.id}
                className="bg-white p-6 rounded-lg transform hover:scale-105 transition duration-300 shadow-2xl"
              >
                <img
                  src={`images/${tutor.image}`}
                  alt={tutor.name}
                  className="w-full h-40 object-cover mb-6 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">{tutor.name}</h3>
                <p className="text-gray-600">{tutor.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
