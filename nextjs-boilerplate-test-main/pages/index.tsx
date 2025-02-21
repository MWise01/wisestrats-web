// pages/index.tsx

export default function Home() {
    return (
        <div style={{ paddingTop: '60px' }}>
            <section className="w-full bg-cover bg-center h-[400px] relative" style={{ backgroundImage: `url('/images/moderntech.png')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-5xl text-white font-bold">Modern Investing</h1>
                    <p className="text-lg text-white mt-4">Experience empowered with technology - the new leverage for private markets</p>
                    <a href="https://www.wisestrats.com/contact-us" class="inline-block px-12 py-3 bg-[#f06449] uppercase text-white rounded hover:bg-[#d9533f]">
                    Connect
                    </a>
                </div>
                </div>
            </section>

            <section class="flex flex-col lg:flex-row items-center justify-between p-8 h-128">
                <div class="lg:w-1/2 p-6">
                    <h2 class="text-3xl mb-6">Invest with confidence</h2>
                    <p class="mt-6 text-xl">Why partner with us?</p>
                    <p class="mt-1 text-xl">We don’t try to stand out in a crowded space by using the same antiquated approach.</p>
                    <p class="mt-1 text-xl">We achieve leverage in deal making by applying technology practically. We invest with conviction because we look at deals differently than the competition with visibility into target company performance. We identify and capture value where other teams don’t think to look or simply can’t.</p>
                    <p class="mt-1 text-xl">Transparency enables our team and partners to uncover opportunities, capture value with actionable data and insight, and to validate results with monitoring and reporting.</p>
                </div>
                <div class="lg:w-1/2 flex justify-center items-center">
                    <img src="/images/yellowtree.jpg" alt="Differentiation" class="w-auto h-auto max-w-full max-h-[600px]" />
                </div>
                </section>

            <section class="flex flex-col lg:flex-row items-center justify-between p-8">
                <div class="lg:w-full p-8">
                    <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
                    <form class="space-y-4">
                    <div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <input type="text" placeholder="First Name" class="w-full p-3 border border-gray-300 rounded" />
                        <input type="text" placeholder="Last Name" class="w-full p-3 border border-gray-300 rounded" />
                    </div>
                    <input type="email" placeholder="Email" class="w-full p-3 border border-gray-300 rounded" />
                    <textarea placeholder="Message" class="w-full p-3 border border-gray-300 rounded h-32"></textarea>
                    <button type="submit" class="w-full bg-[#f06449] text-white py-3 rounded hover:bg-[#d9533f]">Send Message</button>
                    </form>
                </div>
            </section>

        </div>
    );
  }
  