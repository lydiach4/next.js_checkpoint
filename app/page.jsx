// pages/index.js
import Head from "next/head";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section
        id="home"
        className="bg-gray-900 text-white min-h-screen flex items-center"
      >
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Hi, I'm Lydia Ch
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            I'm a passionate web developer focused on building clean and modern
            websites.
          </p>
          <a
            href="#projects"
            className="text-xl text-indigo-600 hover:text-indigo-400 underline"
          >
            Check out my projects
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 text-gray-900 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">About Me</h2>
          <p className="text-lg sm:text-xl mb-6">
            I'm a self-taught developer who loves to create beautiful,
            user-friendly websites. I specialize in front-end development, and
            I'm passionate about learning new technologies to improve my skills.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project 1</h3>
              <p className="mb-4">Not yet</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-400">
                View Project
              </a>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project 2</h3>
              <p className="mb-4">Not yet.</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-400">
                View Project
              </a>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Project 3</h3>
              <p className="mb-4">Not yet</p>
              <a href="#" className="text-indigo-600 hover:text-indigo-400">
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
          <p className="text-lg sm:text-xl mb-6">
            I would love to hear from you! Whether it's about a project or a
            potential collaboration, feel free to reach out.
          </p>
          <a
            href="mailto:john.doe@example.com"
            className="text-lg text-indigo-600 hover:text-indigo-400 underline"
          >
            Send me an email
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 Lydia Ch. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
