import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <Collections />
        <Features />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}