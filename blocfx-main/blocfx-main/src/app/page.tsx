
import Hero from './components/hero'
import VipSection from './components/vip'
import SafeSection from './components/safe'
import FastPaySection from './components/fastPay/fast-pay-section'
import TransferSection from './components/transfer'
import BusinessSection from './components/business'
import ApplyingSection from './components/applying'
import DebitCardSection from './components/debit-card'
import ServicePriceSection from './components/service-price'
import AccessSection from './components/access'
import { cn } from '../../lib/utils'

export default function Home() {
  const stickyCard = "sticky top-0 h-screen w-screen"
  return (
    <main >
      <div className={cn(stickyCard, 'bg-black -mt-20')}>
        <section id='home' >
          <Hero />
        </section>
      </div>
      <div className={cn(stickyCard, 'h-full static top-0 md:sticky')}>
        <section id='fastPay'  >
          <FastPaySection />
        </section>
      </div>

      <div className='static top-0'>
        <section id='service'  >
          <ServicePriceSection />
        </section>
      </div>
      <div className={cn(stickyCard, 'bg-white')}>
        <section id='applying' >
          <ApplyingSection />
        </section>
      </div>
      <div className={cn(stickyCard)}>
        <section id='safe-payment' >
          <SafeSection />
        </section>
      </div>
      <div className={cn(stickyCard)}>
        <section id='business'  >
          <BusinessSection />
        </section>
      </div>
      <div className={cn(stickyCard)}>
        <section id='safe-transfer' >
          <TransferSection />
        </section>
      </div>

      <div className={cn(stickyCard, 'bg-white')}>
        <section id='vip'  >
          <VipSection />
        </section>
      </div>
      <div className={cn(stickyCard)}>
        <section id='funds'  >
          <DebitCardSection />
        </section>
      </div>
      <div className={cn(stickyCard, 'bg-black')}>
        <section id='multiple-currency'  >
          <AccessSection />
        </section>
      </div>
    </main>
  )
}
