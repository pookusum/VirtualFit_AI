import { brands } from "@/constants/brands";
import Features from "./Features";
export default function TrustedBrands() {
    return (
         <section className="bg-slate-950 py-20">

    <div>

        <div className="text-center">

            <h2 className="text-3xl font-bold text-white">
                Trusted by innovative fashion brands
            </h2>

            <p className="mt-4 text-slate-400">
                Our AI technology is built for the future of digital fashion.
            </p>

        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">

            {brands.map((brand) => (
                <div
                key={brand}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-violet-500 hover:bg-slate-800"
>
                <p className="text-lg font-semibold text-slate-300">
                    {brand}
                </p>
            </div>
            ))}

        </div>

    </div>

</section>
    );
    
}