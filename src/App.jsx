import {
  Leaf,
  Sprout,
  ShieldCheck,
  Droplets,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronRight,
  Factory,
  Wheat,
  BadgeCheck,
  Menu,
  X,
  FlaskConical,
  Microscope,
  Flower2,
  Handshake,
  Users,
} from "lucide-react";

import { useState } from "react";

const products = [
  {
    name: "BIAS-GOLD",
    category: "Bio Stimulant",
    image: "/images/bias-gold.jpg",
    description:
      "Supports vegetative growth, flowering, fruit setting, stress tolerance and better nutrient absorption.",
    dosage: "1.5–2 ml / litre water",
    pack: "1 L, 500 ml, 250 ml",
  },
  {
    name: "Amrit 62",
    category: "Amino Acid Bio Stimulant",
    image: "/images/amrit62.jpg",
    description:
      "Recommended for roots, leaves, flowers and fruits across fruit crops, vegetables and field crops.",
    dosage: "1.5–2 ml / litre water",
    pack: "1 L, 500 ml, 250 ml",
  },
  {
    name: "BIAS Combo Kit",
    category: "Crop Nutrition Kit",
    image: "/images/combo.jpg",
    description:
      "Combination crop nutrition kit with magnesium, iron, zinc, manganese, boron and potassium humate support.",
    dosage: "1 acre / 23.5 kg bag",
    pack: "19 kg",
  },
  {
    name: "Root 1st",
    category: "Potassium Humate 98%",
    image: "/images/root1st.jpg",
    description:
      "Improves soil quality, root growth, nutrient uptake, crop vigour, seed germination and stress management.",
    dosage: "Foliar: 5–10 g / litre water",
    pack: "1 kg, 500 g, 250 g",
  },
  {
    name: "BIAS+",
    category: "Silicone Based Spreader",
    image: "/images/spreader.jpg",
    description:
      "Improves spray spreading, coverage, absorption and compatibility with agro-chemical sprays.",
    dosage: "5–10 ml / 15 litre water",
    pack: "500 ml, 100 ml, 50 ml",
  },
];

const serviceCards = [
  {
    icon: <Leaf size={32} />,
    title: "Bio Stimulants",
    text: "Growth support for flowering, fruiting, stress tolerance and crop vigour.",
  },
  {
    icon: <Sprout size={32} />,
    title: "Root Growth",
    text: "Solutions for stronger roots, better soil interaction and nutrient uptake.",
  },
  {
    icon: <Droplets size={32} />,
    title: "Spray Activators",
    text: "Spreader solutions for better spray coverage, absorption and performance.",
  },
  {
    icon: <Microscope size={32} />,
    title: "Micronutrient Support",
    text: "Crop nutrition support for better plant health and yield potential.",
  },
  {
    icon: <FlaskConical size={32} />,
    title: "Crop Nutrition Kits",
    text: "Balanced combinations for field crops, vegetables and horticulture.",
  },
  {
    icon: <Flower2 size={32} />,
    title: "Flowering & Fruiting",
    text: "Products designed to support flower retention, fruit size and quality.",
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", link: "#home" },
    { label: "Products", link: "#products" },
    { label: "About", link: "#about" },
    { label: "Why Us", link: "#why-us" },
    { label: "Contact", link: "#contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-agroGreenDark/95 shadow-xl backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-agroGold/30">
            <img
              src="/images/brand-icon.png"
              alt="BIAS-R AGRO"
              className="h-full w-full scale-[1.35] object-contain"
            />
          </div>

          <div className="leading-tight">
            <p className="text-2xl font-black tracking-wide text-white">
              BIAS-R AGRO
            </p>
            <p className="text-sm font-bold tracking-wide text-agroGold">
              Pvt. Ltd.
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.link}
              className="text-base font-bold text-white/80 transition hover:text-agroGold"
            >
              {item.label}
            </a>
          ))}

          <div className="group relative">
            <button className="flex items-center gap-1 text-base font-bold text-white/80 transition hover:text-agroGold">
              Services <ChevronDown size={17} />
            </button>

            <div className="invisible absolute left-0 top-8 w-64 translate-y-3 rounded-2xl bg-white p-3 opacity-0 shadow-soft ring-1 ring-green-100 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {[
                "Bio Stimulants",
                "Crop Nutrition",
                "Root Growth",
                "Spray Activators",
                "Micronutrients",
              ].map((item) => (
                <a
                  key={item}
                  href="#services"
                  className="block rounded-xl px-4 py-3 font-bold text-agroGreenDark transition hover:bg-agroLight hover:text-agroGreen"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-agroGold px-7 py-3 text-base font-black text-agroGreenDark shadow-lg transition hover:scale-105 hover:bg-[#e8bd5d] md:inline-flex"
        >
          Dealership Enquiry
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-agroGreenDark px-6 py-5 lg:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.link}
                onClick={() => setOpen(false)}
                className="text-lg font-bold text-white/85"
              >
                {item.label}
              </a>
            ))}

            <a
              href="#services"
              onClick={() => setOpen(false)}
              className="text-lg font-bold text-white/85"
            >
              Services
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-agroGold px-6 py-3 text-center font-black text-agroGreenDark"
            >
              Dealership Enquiry
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-agroGreenDark pt-28"
    >
      <picture>
  <source media="(max-width: 768px)" srcSet="/images/hero-mobile.jpg" />
  <img
    src="/images/hero.jpg"
    alt="Farmer in crop field"
   className="absolute inset-0 h-full w-full object-cover object-[75%_center] md:object-center"  />
</picture>

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-112px)] max-w-[1500px] items-center px-6 py-20 lg:px-10">
        <div className="max-w-5xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-agroGold/50 bg-white/10 px-5 py-3 text-base font-bold text-agroGold shadow-lg backdrop-blur">
            <Wheat size={21} />
            Farmer’s Faith, Our Promise
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-white drop-shadow-lg md:text-6xl xl:text-7xl">
            Sustainable Crop Nutrition for Better Harvests
          </h1>

          <p className="mt-7 max-w-3xl text-xl font-medium leading-9 text-white/90 drop-shadow">
            BIAS-R AGRO Pvt. Ltd. delivers bio-stimulants, crop nutrition kits,
            root growth support and spray activator solutions for Indian farming
            conditions.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-agroGold px-8 py-4 text-lg font-black text-agroGreenDark shadow-soft transition hover:scale-105 hover:bg-[#e8bd5d]"
            >
              Explore Products <ChevronRight size={22} />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/12 px-8 py-4 text-lg font-black text-white shadow-lg backdrop-blur transition hover:bg-white/20"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.25em] text-agroGold">
            Our Services
          </p>

          <h2 className="mt-3 text-4xl font-black text-agroGreenDark md:text-5xl">
            Nourishing growth, empowering harvests
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Practical crop-care solutions across soil health, plant nutrition,
            root growth, spray performance and crop vigour.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceCards.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-green-100 bg-agroLight p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl green-gradient text-white shadow-md">
                {service.icon}
              </div>

              <h3 className="text-2xl font-black text-agroGreenDark">
                {service.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="products" className="bg-agroLight py-20">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-black uppercase tracking-[0.25em] text-agroGold">
              Product Portfolio
            </p>

            <h2 className="mt-3 text-4xl font-black text-agroGreenDark md:text-5xl">
              Products for every crop stage
            </h2>
          </div>

          <p className="max-w-xl text-lg leading-8 text-slate-600">
            From seed germination and root development to flowering, fruiting,
            spray coverage and nutrient uptake.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-green-100 transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="relative h-80 overflow-hidden bg-white">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain p-7 transition duration-500 group-hover:scale-105"
                />

                <div className="absolute left-5 top-5 rounded-full bg-agroGreen px-4 py-2 text-xs font-black uppercase tracking-wide text-white shadow-md">
                  {product.category}
                </div>
              </div>

              <div className="p-7">
                <h3 className="text-3xl font-black text-agroGreenDark">
                  {product.name}
                </h3>

                <p className="mt-4 min-h-24 leading-7 text-slate-600">
                  {product.description}
                </p>

                <div className="mt-6 space-y-3 rounded-2xl bg-agroLight p-5">
                  <div className="flex justify-between gap-4">
                    <span className="font-black text-slate-500">Dosage</span>
                    <span className="text-right font-black text-agroGreen">
                      {product.dosage}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span className="font-black text-slate-500">Pack</span>
                    <span className="text-right font-black text-agroGreen">
                      {product.pack}
                    </span>
                  </div>
                </div>

                <a
                  href="#contact"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-agroGreen px-6 py-3 font-black text-white transition hover:bg-agroGreenDark"
                >
                  Enquire Now <ChevronRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative overflow-hidden rounded-[2rem] shadow-soft">
          <img
            src="/images/hero.jpg"
            alt="Agriculture field"
            className="h-full min-h-[520px] w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-agroGreenDark/85 via-agroGreenDark/20 to-transparent" />

          <div className="absolute bottom-8 left-8 right-8 rounded-3xl bg-white/92 p-7 shadow-lg backdrop-blur">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-agroGold">
              Our Promise
            </p>

            <h3 className="mt-2 text-3xl font-black text-agroGreenDark">
              Farmer’s Faith, Our Promise
            </h3>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <p className="font-black uppercase tracking-[0.25em] text-agroGold">
            About BIAS-R AGRO
          </p>

          <h2 className="mt-3 text-4xl font-black leading-tight text-agroGreenDark md:text-5xl">
            Helping farmers improve crop performance with trusted inputs
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            BIAS-R AGRO Pvt. Ltd. focuses on practical crop-care products that
            support soil quality, root growth, nutrient absorption, plant vigour,
            flowering, fruit development and spray performance.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Crop nutrition support",
              "Bio-stimulant solutions",
              "Root development focus",
              "Spray efficiency products",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-agroLight p-5 font-black text-agroGreenDark"
              >
                <BadgeCheck className="shrink-0 text-agroGold" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[2rem] border border-green-100 bg-white p-6 shadow-sm">
            <p className="text-lg font-bold leading-8 text-slate-700">
              Our range includes bio-stimulants, amino acid solutions, potassium
              humate, crop nutrition kits and silicone based spreader activators
              for practical field use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="bg-agroGreenDark py-20 text-white">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.25em] text-agroGold">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-4xl font-black md:text-5xl">
            Practical solutions for Indian farms
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/70">
            BIAS-R AGRO combines product clarity, farmer-focused positioning and
            crop-stage specific solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              icon: <Factory size={34} />,
              title: "Focused Range",
              text: "Clear product portfolio for crop growth, roots, nutrition and spray performance.",
            },
            {
              icon: <Wheat size={34} />,
              title: "Crop-Oriented Use",
              text: "Products positioned for vegetables, fruits, field crops and horticulture.",
            },
            {
              icon: <ShieldCheck size={34} />,
              title: "Quality Focus",
              text: "Field-use products designed around practical crop-care needs.",
            },
            {
              icon: <Handshake size={34} />,
              title: "Dealer Support",
              text: "Built for distribution, product enquiry and farmer-connect growth.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-white/8 p-8 backdrop-blur transition hover:bg-white/12"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl gold-gradient text-agroGreenDark shadow-md">
                {item.icon}
              </div>

              <h3 className="text-2xl font-black">{item.title}</h3>

              <p className="mt-4 leading-8 text-white/72">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Founders() {
  const leaders = [
    {
      name: "RAMKRISHNA PATEL",
      role: "Founder & CEO",
      image: "/images/ramkrishna-patel.jpg",
      position: "center 34%",
    },
    {
      name: "ROHIT BIRLA",
      role: "Managing Director",
      image: "/images/rohit-birla.jpg",
      position: "center 28%",
    },
  ];

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-[1500px] px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-black uppercase tracking-[0.25em] text-agroGold">
            Leadership
          </p>

          <h2 className="mt-3 text-4xl font-black text-agroGreenDark md:text-5xl">
            Founders & Managing Team
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Meet the leadership team behind BIAS-R AGRO Pvt. Ltd., committed to
            building trusted crop-care solutions for Indian farmers.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-2">
          {leaders.map((person) => (
            <div
              key={person.name}
              className="overflow-hidden rounded-[2rem] border border-green-100 bg-agroLight text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="bg-white px-6 pt-6">
                <div className="mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden rounded-[1.6rem] bg-white shadow-md">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: person.position }}
                  />
                </div>
              </div>

              <div className="px-8 pb-8 pt-6">
                <h3 className="text-2xl font-black tracking-wide text-agroGreenDark">
                  {person.name}
                </h3>

                <p className="mt-2 text-lg font-black text-agroGold">
                  {person.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden bg-agroGreenDark py-20 text-white">
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-agroGold/20 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="font-black uppercase tracking-[0.25em] text-agroGold">
          Join With Us
        </p>

        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Build a better farming future with BIAS-R AGRO
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/75">
          For dealership enquiries, bulk purchase and product information,
          connect with our team.
        </p>

        <a
          href="#contact"
          className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-agroGold px-8 py-4 text-lg font-black text-agroGreenDark shadow-soft transition hover:scale-105"
        >
          Contact Us <ChevronRight size={22} />
        </a>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    enquiryType: "Product Enquiry",
    message: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const whatsappNumber = "+919243083404"; // Replace with official WhatsApp number

    const message = `Hello BIAS-R AGRO,

I want to submit an enquiry.

Name: ${formData.name}
Mobile Number: ${formData.phone}
District / State: ${formData.location}
Enquiry Type: ${formData.enquiryType}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 lg:grid-cols-2 lg:px-10">
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-agroGold">
            Contact
          </p>

          <h2 className="mt-3 text-4xl font-black text-agroGreenDark md:text-5xl">
            For dealership and product enquiries
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Connect with BIAS-R AGRO Pvt. Ltd. for product information,
            dealership enquiries and crop input support.
          </p>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4 rounded-3xl bg-agroLight p-5">
              <Mail className="shrink-0 text-agroGreen" />

              <div>
                <p className="font-black text-agroGreenDark">Email</p>
                <a
                  href="mailto:biasragro@gmail.com"
                  className="text-slate-600 hover:text-agroGreen"
                >
                  biasragro@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-agroLight p-5">
              <MapPin className="shrink-0 text-agroGreen" />

              <div>
                <p className="font-black text-agroGreenDark">
                  Corporate Address
                </p>
                <p className="text-slate-600">
                  377, Near Flour Mill, Deonagar Colony, Sehore, Madhya Pradesh
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-3xl bg-agroLight p-5">
              <Phone className="shrink-0 text-agroGreen" />

              <div>
                <p className="font-black text-agroGreenDark">WhatsApp</p>
                <p className="text-slate-600">+919243083404</p>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[2rem] bg-agroLight p-6 shadow-soft"
        >
          <div className="grid gap-5">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="rounded-2xl border border-green-100 bg-white px-5 py-4 outline-none focus:border-agroGreen"
            />

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="rounded-2xl border border-green-100 bg-white px-5 py-4 outline-none focus:border-agroGreen"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="District / State"
              required
              className="rounded-2xl border border-green-100 bg-white px-5 py-4 outline-none focus:border-agroGreen"
            />

            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              className="rounded-2xl border border-green-100 bg-white px-5 py-4 outline-none focus:border-agroGreen"
            >
              <option>Product Enquiry</option>
              <option>Dealership Enquiry</option>
              <option>Bulk Purchase</option>
              <option>Crop Advisory</option>
            </select>

            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              className="rounded-2xl border border-green-100 bg-white px-5 py-4 outline-none focus:border-agroGreen"
            />

            <button
              type="submit"
              className="rounded-full bg-agroGreen px-7 py-4 font-black text-white transition hover:bg-agroGreenDark"
            >
              Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-agroGreenDark pt-16 text-white">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <a href="#home" className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-agroGold/30">
              <img
                src="/images/brand-icon.png"
                alt="BIAS-R AGRO"
                className="h-full w-full scale-[1.35] object-contain"
              />
            </div>

            <div className="leading-tight">
              <p className="text-2xl font-black tracking-wide text-white">
                BIAS-R AGRO
              </p>
              <p className="text-sm font-bold tracking-wide text-agroGold">
                Pvt. Ltd.
              </p>
            </div>
          </a>

          <p className="mt-5 max-w-sm leading-7 text-white/65">
            Farmer’s Faith, Our Promise. Practical crop-care products for Indian
            farming conditions.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-black">Services</h3>
          <div className="mt-5 space-y-3 text-white/65">
            <p>Bio Stimulants</p>
            <p>Crop Nutrition</p>
            <p>Root Growth</p>
            <p>Spray Activators</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">Products</h3>
          <div className="mt-5 space-y-3 text-white/65">
            <p>BIAS-GOLD</p>
            <p>Amrit 62</p>
            <p>BIAS Combo Kit</p>
            <p>Root 1st</p>
            <p>BIAS+</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-black">Contact Info</h3>
          <div className="mt-5 space-y-3 text-white/65">
            <p>biasragro@gmail.com</p>
            <p>Sehore, Madhya Pradesh</p>
            <p>Dealership enquiries open</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-white/55">
        © {new Date().getFullYear()} BIAS-R AGRO Pvt. Ltd. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Products />
      <About />
      <WhyUs />
      <Founders />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}