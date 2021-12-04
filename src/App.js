import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Sidebar from './components/sidebar';
import Main from './components/main';
import './assets/scss/app.scss';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <main>
        <Sidebar />
        <Main />
      </main> */}
      <Footer /> 
    </div>
  );
}

export default App;
