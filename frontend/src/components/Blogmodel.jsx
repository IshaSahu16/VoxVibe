import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogmodel = ({ data }) => {
    const navigate = useNavigate();

    return (
        <div>
            <div>
                <section className="pt-10  bg-white dark:bg-dark ">
                    <div className=" flex container ">
                        <div>
                            <div className="w-full px-4">
                                {console.log(data.imgurl)}
                                <div className="w-full mb-10">
                                    <div className="mb-4 overflow-hidden rounded">
                                        <img
                                            src={data.imgurl}
                                            alt="image"
                                            className="w-full"
                                        />
                                    </div>
                                    <div>
                                        <span
                                            className="inline-block px-4 py-1 mb-3 text-xs font-semibold leading-loose text-center text-white rounded bg-[#4345fa]"
                                        >
                                            ~ {data.writename}
                                        </span>
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
                                            >
                                                {data.title}
                                            </a>
                                        </h3>
                                        <button className="text-gray-700 bg-transparent text-lg rounded-xl my-2">
                                            Read more..
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}


export default Blogmodel
