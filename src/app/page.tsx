import FAQPage from "@/components/faq";
import Footer from "@/components/footer";
import MarqueTestimoni from "@/components/marque-testimoni";
import { ArrowRight, ArrowUpRight, CircleCheckBig, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const unggulan = [
    { name: "Alami & Tanpa pengawet" },
    { name: "Tingkatkan Imun dan Visibilitas" },
    { name: "Segar kapan saja, Di Mana Saja!" },
    { name: "Baik untuk pencernaan & Energi" },
  ]
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/img/herosection.png')",
          }}
        />
        <div className="absolute inset-0 bg-[#6B4226]/75" />
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container px-6 mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
              Sari Madu
            </h1>
            <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/85">
              Segar Alami, Sehat Setiap Hari
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/">
                <button
                  className="flex items-center gap-2 rounded-full bg-primary px-7 py-2.5 text-sm md:text-base font-semibold text-white shadow-lg hover:bg-accent hover:text-secondary transition duration-300 cursor-pointer"
                >
                  Mulai Hidup Sehat
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* unggulan section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">

          <div
            className="mx-auto max-w-7xl rounded-3xl bg-secondary px-8 py-8 md:px-14 md:py-14 flex flex-col lg:flex-row items-center justify-between gap-10 shadow"
          >
            <div className="flex-1 w-full">

              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-10"
              >
                Kenapa kami?
              </h2>

              <div className="space-y-6">

                {unggulan.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >
                    <div
                      className="flex items-center justify-center rounded-full bg-white w-8 h-8 shrink-0"
                    >
                      <CircleCheckBig
                        size={18}
                        className="text-secondary"
                      />
                    </div>
                    <p
                      className="text-white/90 text-lg md:text-xl font-medium"
                    >
                      {item.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end w-full">
              <div
                className="overflow-hidden rounded-xl bg-white shadow w-full max-w-225"
              >
                <Image
                  src="/img/kenapakami.png"
                  alt="Unggulan"
                  width={900}
                  height={520}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Example Product */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <img
          src="/svg/madu-left.svg"
          alt="Decoration Left"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-40 lg:w-52 xl:w-72 opacity-70 pointer-events-none select-none"
        />
        <img
          src="/svg/madu-right.svg"
          alt="Decoration Right"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-40 lg:w-52 xl:w-72 opacity-70 pointer-events-none select-none"
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Produk <span className="text-primary">Kami</span>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image
              src="/img/produk.png"
              alt="Produk Kami"
              width={800}
              height={700}
              className="rounded-xl border border-secondary/20 hover:border-secondary/80 mx-auto object-contain w-full max-w-3xl lg:max-w-4xl h-auto hover:scale-105 transition duration-500"
            />
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm md:text-base font-semibold text-white
            cursor-pointer transition duration-300 hover:bg-secondary">
              Selengkapnya
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Testimoni */}
      <section className="py-16 md:py-24">
        <h2 className="text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Apa Kata <span className="text-primary">Mereka?</span>
        </h2>
        <MarqueTestimoni />
      </section>

      {/* faq */}
      <section className="py-20 md:py-32">
        <h2 className="mb-12 text-center text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          FAQs
        </h2>
        <div className="container mx-auto px-6">
          <FAQPage />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20 md:py-52">
        <img
          src="/svg/ctaleftdaun.svg"
          alt="Decoration Left"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-28 md:w-40 lg:w-52 xl:w-72 opacity-70 pointer-events-none select-none"
        />
        <img
          src="/svg/ctarightdaun.svg"
          alt="Decoration Right"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-28 md:w-40 lg:w-52 xl:w-72 opacity-70 pointer-events-none select-none"
        />
        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col gap-4 items-center justify-center mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-secondary">
              Siap Menjadi Lebih Sehat?
            </h2>
            <p className="text-base md:text-lg font-normal text-secondary text-center">
              Hubungi kami untuk mendapatkan informasi <br className="hidden md:block" /> lebih lanjut tentang  produk herbal dan kesehatan
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm md:text-base font-semibold text-white
            cursor-pointer transition duration-300 hover:bg-secondary">
              <Phone size={20} />
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}