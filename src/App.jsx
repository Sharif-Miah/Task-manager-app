import "./App.css";
import Footer from "./component/Footer/Footer";
import Hero from "./component/Hero/Hero";
import Navbar from "./component/Navbar/Navbar";
import TaskBoard from "./component/TaskBoard/TaskBoard";

function App() {
  return (
    <div className="bg-[#191d26]">
      <Navbar />
      <div className="text-white">
        <Hero />
        <TaskBoard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
