import { Hero } from '@/components/landing/hero';
import { ClientLogos } from '@/components/landing/client-logos';
import { About } from '@/components/landing/about';
import { Services } from '@/components/landing/services';
import { Team } from '@/components/landing/team';
import { Testimonials } from '@/components/landing/testimonials';
import { Contact } from '@/components/landing/contact';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Contact />
    </main>
  );
}
