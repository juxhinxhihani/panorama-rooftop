import Header from '../components/layout/Header'
import HeroScreen from '../screens/HeroScreen'
import AboutScreen from '../screens/AboutScreen'
import Footer from '../components/layout/Footer'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroScreen />
        <AboutScreen />
      </main>
      <Footer />
    </div>
  )
}