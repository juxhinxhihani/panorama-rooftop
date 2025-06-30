import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BookingScreen from '@/screens/BookingScreen'

export default function BookPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <BookingScreen />
      </main>
      <Footer />
    </div>
  )
}
