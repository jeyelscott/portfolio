import Hero from "../pages/AboutMe/Hero";
import WhatSetsMeApart from "../pages/WhatSetMeApart/WhatSetsMeApart";
import Education from "../pages/Education/Education";
import MyExpertise from "../pages/MyExpertise/MyExpertise";
import ClientsIWorkWith from "../pages/ClientsIWorkWith/ClientsIWorkWith";
import Footer from "../pages/Footer/Footer";

export default function Home() {
  return (
    <body className="bg-gray-100">
      <section className="py-10 md:py-16">
        <Hero />
      </section>

      <section className="py-10 md:py-16">
        <WhatSetsMeApart />
      </section>

      <section className="py-10 md:py-16">
        <Education />
      </section>

      <section className="py-10 md:py-16">
        <MyExpertise />
      </section>

      <section className="py-10 md:py-16">
        <ClientsIWorkWith />
      </section>

      <Footer></Footer>
    </body>
  );
}
