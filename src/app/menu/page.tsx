import FullMenuScreen from '@/screens/FullMenuScreen'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <FullMenuScreen />
      </main>
      <Footer />
    </div>
  )
}