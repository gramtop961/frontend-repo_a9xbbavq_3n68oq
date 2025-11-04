import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-inter text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Wisnu. All rights reserved.</p>
          <a href="#home" className="hover:text-gray-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
