import { Hero, About, Expertise, Portfolio, Contact } from './sections'
import { Navbar, Footer } from './components'
 
const App = () => {
  return (
    <div className="bg-primary text-slate-50/90 z-10">
      <Navbar/>
      <main className="relative">
        <section id='home'>
          <Hero/>
        </section>
        <section id='about'>
          <About/>
        </section>
        <section id='expertise'>
          <Expertise/>
        </section>
        <section id='portfolio'>
          <Portfolio/>
        </section>
        <section id='contact'>
          <Contact/>
        </section>
      </main>
      <Footer/>
    </div>
  )
}

export default App