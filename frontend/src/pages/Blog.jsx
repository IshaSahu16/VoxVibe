import React, { useEffect, useState } from "react";
import axios from 'axios';
import Blogmodel from '../components/Blogmodel';
import Footer from '../components/Footer';

const Blog = () => {
  const [datas, setData] = useState([]);
  async function getData() {
    await axios
      .get("http://localhost:3001/blog")
      .then((result) => {
        setData(result.data);
        console.log(datas);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="pt-20 pb-10 lg:pt-[70px] lg:pb-20 bg-white dark:bg-dark drop-shadow-md">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center -mx-4">
            <div className=" px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <span className="block mb-2 text-lg font-semibold text-primary">
                  Our Blogs
                </span>
                <h2
                  className="mb-4 text-3xl font-bold text-[#4346fa] sm:text-4xl md:text-[40px]"
                >
                  Our Recent News
                </h2>
                <p className="text-base text-body-color dark:text-dark-6">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some form.
                </p>
              </div>
            </div>
          </div>

          <div className=" grid grid-cols-3 gap-1">
            {datas.map((data, key) => {
              console.log(data);
              return <Blogmodel data={data} key={key + 1} />;
            })}
          </div>
          {/* <Blogmodel /> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Blog