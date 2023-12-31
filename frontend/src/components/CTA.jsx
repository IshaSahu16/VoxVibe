import React from 'react'

const CTA = () => {
    return (
        <div>
            <div className="bg-white drop-shadow-md">
                <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-gray-800 sm:text-4xl">
                        <span className="block">
                            Want to be millionaire ?
                        </span>
                        <span className="block text-indigo-500">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className=" inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Get started
                            </button>
                        </div>
                        <div className="inline-flex ml-3 rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 focus:ring-offset-gray-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Invite friend
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
