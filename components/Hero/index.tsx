
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <div className="flex-grow mt-0 sm:mt-[60px] flex flex-col md:flex-row items-center">
            <div className="  mb-12 md:mb-0 flex mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className='mx-auto max-w-4xl text-center'>
                        <h1 className="text-4xl md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 leading-tight mb-6">
                        One Agent Kit to Support Every Protocol on Sui
                        </h1>

                    </div>
                    <p className="text-lg text-gray-300 mb-8 text-center mx-auto  max-w-4xl">
                        Universal Agent Kit lets you generate agents from live Sui smart contracts with no manual integration. Just paste a contract address, and let AI do the rest
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full max-w-xl">
  <input
    type="text"
    placeholder="Enter Sui contract address"
    className="flex-grow px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
  />
  <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all">
    Generate
  </button>
</div>

                    {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium hover:shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all">
                            Get Started
                        </button>
                        <button className="px-8 py-3 rounded-full border border-purple-500 text-white font-medium hover:bg-purple-500/10 transition-all">
                            Learn More
                        </button>
                    </div> */}
                </motion.div>
            </div>


        </div>
    )
}

export default Hero