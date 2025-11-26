import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerImg from "../../assets/imgs/footer2.webp";
import logo from "../../assets/imgs/logo.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleDown, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Footer() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  {
    /* Regex */
  }
  const nameRegex = /^[a-zA-Z\s]+$/;
  const phoneRegex = /^(?:\+20|0)?(10|11|12|15)\d{8}$/;

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(nameRegex, "Only letters are allowed")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(phoneRegex, "Invalid phone number")
      .required("Phone number is required"),
    treatment: Yup.string().required("Treatment selection is required"),
    date: Yup.string().required("Date is required"),
    time: Yup.string().required("Time is required"),
  });

  function handleSubmitting(values) {
    emailjs
      .send(
        "service_3vhdygo",
        "template_m48sphu",
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          treatment: values.treatment,
          date: values.date,
          time: values.time,
        },
        "hAzhSwHhlBEk3izpY"
      )

      .then(() => toast.success("Message sent successfully!"))
      .catch(() => toast.error("Failed to send message!"));
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      treatment: "",
      date: "",
      time: "",
    },
    validationSchema,
    onSubmit: handleSubmitting,
  });

  return (
    <>
      <section id="contact" className="relative bg-[#787D54]">
        <img
          src={footerImg}
          loading="lazy"
          className="max-h-120 w-full object-cover"
        />
        {/* Booking Card */}
        <div className="md:absolute max-w-full md:max-w-[700px] mx-auto md:mx-0 overflow-hidden top-20 left-20 py-10 px-8 bg-white rounded-4xl">
          <div className="space-y-5 mb-10">
            <h5 className="text-3xl md:text-7xl font-Cormorant font-bold">
              Book an <span className="italic">Appointment</span>
            </h5>

            <p className="text-lg md:text-2xl">
              Choose your ritual, and we'll prepare the rest.
            </p>
          </div>

          <form
            className="py-10 border-t-2 border-gray-200"
            onSubmit={formik.handleSubmit}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Ahmed Ali"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="youremail@example.com"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Telephone */}
              <div>
                <label htmlFor="phone">Telephone Number</label>
                <input
                  type="phone"
                  placeholder="e.g +20 1234 5678 90"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />

                {formik.touched.phone && formik.errors.phone && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.phone}
                  </p>
                )}
              </div>

              {/* Select */}
              <div>
                <label htmlFor="treatment">Treatment Type</label>

                <div className="relative text-gray-400 ">
                  <select
                    id="treatment"
                    className=" px-4 w-full"
                    name="treatment"
                    value={formik.values.treatment}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  >
                    <option value="">Select treatment</option>
                    <option value="botox">Botox</option>
                    <option value="filler">Dermal Filler</option>
                    <option value="dermapen">Dermapen / Microneedling</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="chemical_peel">Chemical Peel</option>
                    <option value="laser_hair">Laser Hair Removal</option>
                    <option value="skin_boost">Skin Boost / Mesotherapy</option>
                    <option value="prp">PRP Therapy</option>
                    <option value="other">Other</option>
                  </select>

                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="absolute top-1/2 -translate-y-1/2  md:text-xl right-4 pointer-events-none"
                  />
                </div>
                {formik.touched.treatment && formik.errors.treatment && (
                  <p className="text-red-500 text-sm mt-2">
                    {formik.errors.treatment}
                  </p>
                )}
              </div>

              {/* Date Picker */}
              <div>
                <div className="relative">
                  <label htmlFor="date">Date</label>
                  <DatePicker
                    id="date"
                    selected={formik.values.date}
                    onChange={(val) => formik.setFieldValue("date", val)}
                    placeholderText="Choose a preferred date"
                    className="border border-gray-300 rounded-full py-2 text-lg w-full m-0 px-4 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                    aria-label="Choose appointment date"

                  />

                  <FontAwesomeIcon
                    icon={faCalendar}
                    className="absolute top-1/2 translate-y-1/2 right-4 md:text-xl text-gray-400 pointer-events-none"
                  />
                </div>
                {formik.touched.date && formik.errors.date && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.date}
                  </p>
                )}
              </div>

              {/* Time Picker */}
              <div>
                <div className="relative">
                  <label className="mb-2 font-semibold md:text-lg">Date</label>
                  <DatePicker
                    id="time"
                    selected={formik.values.time}
                    onChange={(val) => formik.setFieldValue("time", val)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    timeCaption="Time"
                    dateFormat="h:mm aa"
                    placeholderText="Select a time"
                    className="border border-gray-300 rounded-full py-2 md:text-lg w-full m-0 px-4 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200"
                  />

                  <FontAwesomeIcon
                    icon={faAngleDown}
                    className="absolute top-1/2 right-4 translate-y-1/2 md:text-xl text-gray-400 pointer-events-none"
                  />
                </div>

                {formik.touched.time && formik.errors.time && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.time}
                  </p>
                )}
              </div>
            </div>

            {/* button */}
            <button type="submit" className="btn mt-10">
              Reserve My session
            </button>
          </form>
        </div>

        <div className="container py-14">
          <div className="hidden md:flex items-center gap-2 mb-8 justify-end  text-white">
            <img
              src={logo}
              loading="lazy"
              alt="Licensed skincare clinic interior"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between mt-15 md:0 space-y-8 md:space-y-0">
            {/* Social */}
            <div>
              <p className="text-2xl text-white mb-8 max-w-[330px]">
                Personalized aesthetic and wellness treatments tailored to you.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-5 *:hover:scale-105 trnsition-transform duration-300 ease-in-out">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-12 rounded-full p-2 border border-white/25 text-white"
                >
                  <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
                </a>

                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-12 rounded-full p-2 border border-white/25 text-white"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-12 rounded-full p-2 border border-white/25 text-white"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center size-12 rounded-full p-2 border border-white/25 text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                </a>
              </div>
            </div>

            {/* Navigations */}
            <div className="space-y-5">
              <h5 className="text-2xl font-Cormorant text-white font-bold">
                Navigations
              </h5>
              <ul className="*:text-[#D8DAC0] *:text-lg *:mb-3">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#unique-value" className="hover:text-white">
                    Unique Value
                  </a>
                </li>
                <li>
                  <a href="#treatments" className="hover:text-white">
                    Treatments
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>

            {/* Adress & Email */}
            <div className="space-y-10">
              <div>
                <h5 className="text-2xl font-Cormorant text-white font-bold mb-5">
                  Address
                </h5>
                <p className="text-[#D8DAC0] text-lg">
                  34582 shawkat, Gleem, Alexandria
                </p>
              </div>

              <div>
                <h5 className="text-2xl font-Cormorant text-white font-bold mb-5">
                  Email
                </h5>
                <a
                  href="mailto:hello@lumere.beauty"
                  className="text-[#D8DAC0] text-lg hover:text-white"
                >
                  hello@lumere.beauty
                </a>
              </div>
            </div>

            {/* Subscribe NewsLetter */}
            <div className="space-y-5">
              <h5 className="text-2xl font-Cormorant text-white font-bold">
                Subscribe newsletter
              </h5>

              <div className="space-y-5 max-w-[330px]">
                <label id="phone" className="text-[#D8DAC0] font-normal">
                  Stay updated with the latest news and offers!
                </label>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email adress"
                    className="text-white"
                  />

                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="absolute text-white top-1/2 -translate-1/2 right-2 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
