
export default function HowItWorks() {


    return (
        <>
            {/* How It Works */}
            <section id="how-it-works" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#4c2278] mb-4">How It Works</h2>
                        <p className="text-gray-600 max-w-xl mx-auto">Transform your media in just three simple steps</p>
                    </div>

                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center p-6 rounded-lg bg-[#f8f9fa] hover:bg-[#f0f8ff] transition">
                            <div className="bg-[#4c2278] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#4c2278]">Upload</h3>
                            <p className="text-gray-600">Drag & drop your file or browse from your device</p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center p-6 rounded-lg bg-[#f8f9fa] hover:bg-[#f0f8ff] transition">
                            <div className="bg-[#63cff5] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#4c2278]">Edit</h3>
                            <p className="text-gray-600">Use our tools to customize your media</p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center p-6 rounded-lg bg-[#f8f9fa] hover:bg-[#f0f8ff] transition">
                            <div className="bg-[#4c2278] text-white w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                                3
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-[#4c2278]">Download</h3>
                            <p className="text-gray-600">Save your file in the desired format</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}