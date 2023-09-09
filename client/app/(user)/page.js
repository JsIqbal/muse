"use client";

import Hero from "./components/hero";
import About from "./components/about";
import Testimonials from "./components/testimonials";

export default function Home() {
    return (
        <div className="flex flex-col gap-y-10 w-screen scroll-smooth">
            <Hero />
            <About />
            <Testimonials />
        </div>
    );
}
