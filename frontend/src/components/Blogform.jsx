import { useState, React } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Blogform = () => {

    const [writename, setname] = useState();
    const [title, settitle] = useState();
    const [imgurl, seturl] = useState();

    const [content, setcontent] = useState();
    const navigate = useNavigate();

    //   setInterval(() => {
    //     updatedtime(date.getFullYear().toString())
    //     console.log(date.getFullYear().toString())
    //     console.log(date.getMonth().toString())
    //     console.log(date.getDate().toString())
    //   }, 1000);

    const handleSubmit = (e) => {

        // console.log(typeof(url))
        // console.log(typeof(content))
        // console.log(typeof(title))
        console.log(title)
        if (writename == undefined || title == undefined || imgurl == undefined || content == undefined || writename === "" || title === "" || imgurl === "" || content === "") {
            e.preventDefault();
            // toast("All fields are required")
        }
        else {
            axios
                .post("http://localhost:3001/Blog", { imgurl, writename, title, content })
                .then((result) => {
                    console.log(result);
                    navigate("/Blog")

                })
                .catch((err) => {
                    console.log(err);

                });
        }
    };

    return (
        <div>
            <section className="bg-white drop-shadow-md">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#4346fa]">Create Your Own Blog</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Unleash Your Thoughts: Share Your Passion, Knowledge, and Stories with the World: Start Blogging Today!</p>
                    <form action="#" className="space-y-8" onClick={handleSubmit}>
                        <div>
                            <label htmlFor="text" className="block mb-2 text-sm font-medium text-[#505050]">Add Image</label>
                            <input type="text" id="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                             focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Image URL" required onChange={(e) => {
                                    seturl(e.target.value);
                                }}
                            />{" "}
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#505050]">Name of writer</label>
                            <input type="text" id="subject" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Write your name" required onChange={(e) => {
                                    setname(e.target.value);
                                }}
                            />{" "}
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-[#505050]">Title of Blog</label>
                            <input type="text" id="subject" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"  placeholder="Title of Blog" required onChange={(e) => {
                                    settitle(e.target.value);
                                }}
                            />{" "}
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#505050]">Content</label>
                            <textarea id="message" rows="6" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
                              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Upload Your Blog Content" onChange={(e) => {
                                setcontent(e.target.value);
                              }}></textarea>
                        </div>
                        <button  type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-[#f7ce3b] sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Blog</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Blogform
