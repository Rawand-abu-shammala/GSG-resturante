import './App.css';

  import Home from './pages/home/Home'
  import About from './pages/about/About'
  import Services from './pages/services/Services'
  import Menu from './pages/menu/Menu'
  import Section5 from './pages/section5/Section5'
  import Section6 from './pages/section6/Section6'
  import Section7 from './pages/section7/Section7'
  import Reviews from './pages/reviews/Reviews';

  import Blog from './pages/blog/Blog'
  import Footer from './pages/footer/Footer'



function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Services />
      <Menu />
      <Section5 />
      <Section6/>
      <Section7 />
      <Reviews />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
