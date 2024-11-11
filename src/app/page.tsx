import ProfileButton from "@/components/layout/ProfileButton";
import WelcomeButton from "@/components/layout/WelcomButton";
import Image from "next/image";


export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mt-16 mx-10">
      <div className="lg:w-1/2">
        <div>
          <WelcomeButton />
        </div>
        
        <h2 className="text-bold text-5xl mt-2">Full-Stack Web Developer</h2>
        <h4 className="text-yellow-400">Creating seamless web experiences.</h4>
        <p className="w-auto">
          With expertise in both front-end and back-end development, I bring ideas to life through code. From crafting responsive interfaces to building robust back-end solutions, I&#39;m passionate about developing user-centered web applications that are both functional and visually engaging.
        </p>
           {/* ProfileButton below the paragraph */}
           <div className="inline-block mt-4"><ProfileButton  text="View My Profile" /></div>
      </div>
     


      <div className="mt-8 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
        <Image 
          src="/hero.jpeg" 
          className="rounded-full border-4 border-yellow-400"  // Move border classes here
          width={450} 
          height={450}  // Set height to match width for a circle
          alt="hero" 
        />
      </div>
    </div>
  );
}
