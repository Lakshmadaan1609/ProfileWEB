import { Link } from "react-router-dom";
import { StarBackground } from "@/components/StarBackground";
import perPhoto from "@/assets/per_photo11.jpg";

export const MusicPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <StarBackground />
            <div className="container mx-auto px-4 py-8">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold">
                        My <span className="text-yellow-600">Music</span>
                    </h1>
                    <Link 
                        to="/"
                        className="text-foreground hover:text-yellow-600 transition-colors"
                    >
                        ← Back to Portfolio
                    </Link>
                </div>
                
                {/* Spotify Integration Section */}
                <div className="grid gap-8">
                    {/* Artist Profile Embed */}
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-600/20">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-600">🎧 LXSHH on Spotify</h2>
                        <div className="rounded-xl overflow-hidden shadow-lg">
                            <iframe
                                src="https://open.spotify.com/embed/artist/56ivvjwmCNBuf3aFP9kewk?utm_source=generator&theme=0"
                                width="100%"
                                height="352"
                                frameBorder="0"
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>

                    {/* Full Profile Section */}
                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-600/20">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-600">About LXSHH</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <div className="mb-6">
                                    <img 
                                        src={perPhoto}
                                        alt="LXSHH"
                                        className="w-64 h-64 rounded-full object-cover mx-auto mb-4 border-2 border-yellow-600/20"
                                    />
                                </div>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    LXSHH, a 21-year-old hip-hop artist from Faridabad, is redefining storytelling through music. 
                                    Bursting onto the scene in 2023, LXSHH crafts raw, authentic narratives that resonate with listeners worldwide.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4 text-yellow-600">Popular Releases</h3>
                                <div className="space-y-4">
                                    <div className="bg-white/5 p-4 rounded-lg">
                                        <h4 className="font-medium">BAAZI</h4>
                                        <p className="text-sm text-gray-400">Latest Release • Album • 2024</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg">
                                        <h4 className="font-medium">Cheetay Set</h4>
                                        <p className="text-sm text-gray-400">Single • 2024</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg">
                                        <h4 className="font-medium">NO SHIT</h4>
                                        <p className="text-sm text-gray-400">Single • 2024</p>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-lg">
                                        <h4 className="font-medium">Laid back flow</h4>
                                        <p className="text-sm text-gray-400">Single • 2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-yellow-600/20">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-600">FOLLOW LXSHH ON YOUR FAVOURITE PLATFORM</h2>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a 
                                href="https://open.spotify.com/artist/56ivvjwmCNBuf3aFP9kewk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors flex items-center justify-center"
                                aria-label="Spotify"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://instagram.com/lxshh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors flex items-center justify-center"
                                aria-label="Instagram"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://youtube.com/@lxshh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center justify-center"
                                aria-label="YouTube"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                                </svg>
                            </a>
                            <a 
                                href="https://music.apple.com/artist/lxshh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 bg-red-400 text-white rounded-full hover:bg-gray-800 transition-colors flex items-center justify-center"
                                aria-label="Apple Music"
                            >
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}; 