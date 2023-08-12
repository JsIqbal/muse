"use client";

import Hero from "@/app/components/hero";
import About from "./components/about";
import Product1 from "./products/components/product-1";
import Product2 from "./products/components/product-2";
import Testimonials from "./components/testimonials";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10 w-screen">
            <Hero />
            <About />
            <Testimonials />
        </div>
    );
}
