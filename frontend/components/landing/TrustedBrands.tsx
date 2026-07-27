import { brands } from "@/constants/brands";
import SectionHeading from "../common/SectionHeading";
export default function TrustedBrands() {
    return (
         <section className="bg-slate-950 py-20">

    <div>

        <SectionHeading
            title="Trusted by Innovative Fashion Brands"
            description="Our AI technology is built for the future of digital fashion."
/>
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