import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">New to Buddhism?</h2>
        <p className="text-gray-600 mb-6">
          Get a short overview and practical advice
        </p>
        <Link href="/essentials" className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-500 hover:text-white">
        Essentials</Link>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-16">
        <div> 
          <img src="/video.jpg" alt="Video" className="rounded shadow w-500 h-100 object-cover" />
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="font-bold">5 Buddhist Principles to Help Run a Business</h3>
            <p className="text-gray-600 text-sm">Yury iyutin</p>
          </div>
          <div>
            <h3 className="font-bold">The 8 Precepts of Buddhism</h3>
            <p className="text-gray-600 text-sm">Yury iyutin</p>

          </div>
          <div>
            <h3 className="font-bold">What is Buddhist Perspective?</h3>
            <p className="text-gray-600 text-sm">Yury iyutin</p>
          </div>
        </div>
      </section>

      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4"> Seeking a Deeper Understanding?</h2>
        <p className="text-gray-600 mb-6">
          Learn more about Tibetan Buddhism
        </p>
        <Link href="/tibetan-buddhism" className="border border-red-500 px-6 py-2 text-red-500 rounded hover:bg-red-500 hover:text-white">
        Tibetan Buddhism
        </Link>
      </section>

      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4"> Want to Go Further?</h2>
        <p className="text-gray-600 mb-6">
          Explore advanced studies and courses
        </p>
        <Link href="/advanced-studies" className="border border-red-500 px-6 py-2 text-red-500 rounded hover:bg-red-500 hover:text-white">
        Advanced Studies
        </Link>
      </section>
      
      <section className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4"> Need Help?</h2>
        <p className="text-gray-600 mb-6">
          Get in touch with our community
        </p>
        <Link href="/contact" className="border border-red-500 px-6 py-2 text-red-500 rounded hover:bg-red-500 hover:text-white">
        Contact Us
        </Link>
      </section>

    </div>
  );
}
