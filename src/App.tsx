import Hero from "./components/Hero";
import Filter from "./components/Filter";
import TargetGroups from "./components/TargetGroups";
import Income from "./components/Income";
import Training from "./components/Training";
import Location from "./components/Location";
import Fomo from "./components/Fomo";
import RegistrationForm from "./components/RegistrationForm";
import Footer from "./components/Footer";
import ZaloFloatButton from "./components/ZaloFloatButton";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Filter />
      <TargetGroups />
      <Income />
      <Training />
      <Location />
      <Fomo />
      <RegistrationForm />
      <Footer />
      <ZaloFloatButton />
    </main>
  );
}
