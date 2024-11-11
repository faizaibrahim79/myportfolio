
import ProfileButton from "@/components/layout/ProfileButton";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-10">
      {/* Left Side - Image */}
      <div className="flex justify-center lg:justify-start">
        <Image 
          src="/about.png" 
          width={400} 
          height={400}  
          alt="hero" 
        />
      </div>

      {/* Right Side - About Me Content */}
      <div className="lg:w-1/2 space-y-6">
        <h4 className="text-sm font-medium text-white">About Me</h4>
        <h2 className="text-4xl font-bold">
          Who is <span className="text-yellow-500">Faiza Faizan?</span>
        </h2>
        <p className="text-white leading-relaxed">
          I&#39;m a dedicated <span className="font-semibold text-yellow-500">full stack web developer</span> with a strong focus on design and a commitment to crafting smooth, user-centered digital experiences. I excel at building responsive, intuitive interfaces that bring concepts to reality through clean, efficient code. With expertise in HTML, CSS, Tailwind CSS, TypeScript, JavaScript, and modern frameworks like Next.js, I bridge the gap between design and functionality, ensuring each project not only looks stunning but also runs seamlessly.
        </p>

        <div className="inline-block mt-4"><ProfileButton  text="Download CV" /></div>
      </div>
    </div>
  );
}
