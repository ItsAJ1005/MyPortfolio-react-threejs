import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { styles } from "../styles"
import { EarthCanvas } from "./canvas"
import { SectionWrapper } from "../hoc"
import { slideIn } from "../utils/motion"
import { LinkedIn, git, github, instagramLogo, reactjs } from "../assets"



const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "AJ Harsh Vardhan",
          from_email: form.email,
          to_email: "ajharshvardhan123@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`mt-6 xl:mt-12 flex xl:flex-row flex-col-reverse gap-6 xl:gap-10 overflow-hidden px-4 sm:px-6 lg:px-0`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-4 sm:p-6 md:p-8 rounded-2xl w-full'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={6}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What you want to say?'
              className='bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-sm sm:text-base'
            />
          </label>

          <div className="flex flex-wrap gap-3 sm:gap-4">

          <button
            type='submit'
            className='bg-tertiary py-3 px-6 sm:px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>   

            
          <a href='https://www.linkedin.com/in/jaya-harsh-vardhan-alagadapa-143960263'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tertiary py-3 px-4 sm:px-6 rounded-xl text-white font-bold shadow-md shadow-primary flex-shrink-0'>
            <img src={LinkedIn} width={30}/>
          </a>

          <a href='https://github.com/ItsAJ1005'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tertiary py-3 px-4 sm:px-6 rounded-xl text-white font-bold shadow-md shadow-primary flex-shrink-0'>
            <img src={github} width={30} />
          </a>   

          <a href='https://instagram.com/everlastingmoments.oz?igshid=YTQwZjQ0NmI0OA=='
            target='_blank'
            rel='noopener noreferrer'
            className='bg-tertiary py-3 px-4 sm:px-6 rounded-xl text-white font-bold shadow-md shadow-primary flex-shrink-0'>
            <img className="rounded-xl" src={instagramLogo} width={30} />
          </a>   
          </div>
        </form>

        
        
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[300px] sm:h-[350px] w-full'
      >
        <EarthCanvas />
      </motion.div>    

    </div>
    
  )
}

export default SectionWrapper(Contact, "contact")
