import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Sidebar from './components/sidebar';
import Main from './components/main';
import './assets/scss/app.scss';
import { useState, useEffect } from 'react'

function App() {
  
  const size = useWindowSize();
  if(size.width > 992) {
    let mainSidebar = document.getElementById('mainSidebar')
    mainSidebar.style.display = 'flex'
    mainSidebar.style.height = '814px' 
  } else {
    let mainSidebar = document.getElementById('mainSidebar')
    if(mainSidebar) {
      mainSidebar.style.display = 'none'
      mainSidebar.style.height = '100vh'
    } 
  }
  return (
    <div className="App">
      <Header />
      <main>
        <Sidebar />
        <Main />
      </main>
      <Footer /> 
    </div>
  );
}

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []); 
  return windowSize;
}
export default App;
