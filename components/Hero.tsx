import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";


const HeroSection = () => {
    return (
        <section className="wrapper pt-28 mb-10 md:mb-16">
            <div className="library-hero-card bg-[#f3e4c7] rounded-3xl p-8 md:p-12">

                <div className="library-hero-content flex flex-col md:flex-row items-center justify-between gap-10">

                    {/* Left Part */}
                    <div className="library-hero-text flex-1 space-y-6 max-w-xl">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#212a3b]">
                            Your Library
                        </h1>

                        <p className="text-lg md:text-xl text-[#3d485e] leading-relaxed">
                            Convert your books into interactive AI conversations.
                            Listen, learn, and discuss your favorite reads.
                        </p>

                        <Link href="/books/new">
                            <Button
                                size="lg"
                                className="bg-white hover:bg-white/90 text-[#212a3b] font-serif font-semibold h-14 px-8 rounded-2xl shadow-sm flex items-center gap-2"
                            >
                                <Plus className="w-6 h-6" />
                                Add new book
                            </Button>
                        </Link>
                    </div>

                    {/* Center Part - Desktop */}
                    <div className="library-hero-illustration-desktop hidden md:flex flex-1 justify-center items-center relative h-[300px]">
                        <Image
                            src="/assets/hero-illustration.png"
                            alt="Vintage books and globe"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>

                    {/* Center Part - Mobile */}
                    <div className="library-hero-illustration md:hidden relative w-full h-[250px]">
                        <Image
                            src="/assets/hero-illustration.png"
                            alt="Vintage books and globe"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Part */}
                    <div className="library-steps-card min-w-[260px] max-w-[280px] z-10 shadow-soft-md bg-white rounded-2xl p-6 md:p-8 space-y-6">

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border-2 border-[#212a3b]/20 flex items-center justify-center font-medium">
                                1
                            </div>
                            <div>
                                <h3 className="font-bold text-[#212a3b]">Upload PDF</h3>
                                <p className="text-sm text-[#3d485e]">Add your book file</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border-2 border-[#212a3b]/20 flex items-center justify-center font-medium">
                                2
                            </div>
                            <div>
                                <h3 className="font-bold text-[#212a3b]">AI Processing</h3>
                                <p className="text-sm text-[#3d485e]">We analyze the content</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-8 h-8 rounded-full border-2 border-[#212a3b]/20 flex items-center justify-center font-medium">
                                3
                            </div>
                            <div>
                                <h3 className="font-bold text-[#212a3b]">Voice Chat</h3>
                                <p className="text-sm text-[#3d485e]">Discuss with AI</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;