
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import RouterConfig from "./RouterConfig";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body_sec">
        <section id="Content">
            <RouterConfig />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
