import ContactFormScreen from '@/screens/ContactFormScreen'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <ContactFormScreen />
      </main>
      <Footer />
    </div>
  )
}