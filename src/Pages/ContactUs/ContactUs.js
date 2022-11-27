import { Button, Card, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import jamie from "../../Assets/jamie.jpg";
import tyrion from "../../Assets/Tyrion.jpg";
import { AuthContext } from "../../Context/Context";
import useTitle from "../../Hooks/useTitle";
import "aos/dist/aos.css";
import AOS from "aos";
import toast from "react-hot-toast";

const ContactUs = () => {
  AOS.init({ duration: 500 });
  useTitle("Contact Us");
  const { user } = useContext(AuthContext);
  console.log(user);

  const handleSubmit = () => {
    toast.success("We've recieved your message!");
  };

  return (
    <div className="4/6 mx-auto my-20">
      <div className="flex justify-evenly flex-wrap">
        <div
          data-aos="fade-right"
          className="max-w-sm shadow-2xl dark:bg-gray-600 dark:text-white"
        >
          <Card>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 h-32 w-32 border-2 border-blue-500 rounded-full shadow-lg"
                src={jamie}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Jamie Lannister
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Owner
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <p>
                  Hi there! Welcome to the Phone Pocket Family! I am glad that
                  you are reading this email. I will be happy to help you grow
                  your business. As a thank you for joining us, I would like to
                  give you a gift. Get{" "}
                  <span className="text-red-500">
                    <Link to={"/register"}>Subscribed</Link>
                  </span>{" "}
                  now! You will find there Second hand and quality Google
                  Phones, iPhones and samsung phones.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div
          data-aos="fade-left"
          className="max-w-sm shadow-2xl  dark:bg-gray-600 dark:text-white"
        >
          <Card>
            <div className="flex flex-col items-center pb-10">
              <img
                className="mb-3 h-32 w-32 border-2 border-red-500 rounded-full shadow-lg"
                src={tyrion}
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                Tyrion Lannister
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Admin
              </span>
              <div className="mt-4 flex space-x-3 lg:mt-6">
                <p>
                  Hi, We appreciate your interest. We will do our best to notify
                  you about second hand good quality smartphones.Give us your
                  thoughts. Hope you find you desired smartphone. We are always
                  more than happy to serve and get honest feedback from our
                  customers. <span className="italic">Happy shopping!!!</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-20 mb-10">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-white text-center italic">
          Please fill up the form if you have to say something to us
        </h1>
      </div>

      <div
        data-aos="fade-up"
        className="w-1/2 mx-auto my-10 bg-gray-400 dark:bg-gray-600 p-8 rounded-2xl dark:text-white"
      >
        <form>
          <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Your Name" />
              </div>
              <TextInput
                placeholder="Your Name Here"
                defaultValue={user?.displayName}
                id="small"
                type="text"
                sizing="sm"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Your Email" />
              </div>
              <TextInput
                placeholder="Your Email Here"
                defaultValue={user?.email}
                id="base"
                type="text"
                sizing="md"
              />
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="w-32 my-10 mx-auto">
            <Button onClick={handleSubmit} gradientMonochrome="success">
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div data-aos="fade-down" className="w-2/5 mx-auto  ">
        <div className=" shadow-2xl rounded-2xl">
          <Card>
            <h1 className="text-2xl font-bold text-center italic">
              For further query
            </h1>
            <p className="text-center font-semibold">
              Email 1: admin@contact.com
            </p>
            <p className="text-center font-semibold">
              Email 2 : manager@contact.com
            </p>
            <p className="text-center font-semibold">
              Hotline 1 : +88012121212
            </p>
            <p className="text-center font-semibold">
              Hotline 2: +880232323232
            </p>
            <p className="text-center font-semibold">
              Our Headqauters: 57 street, New York, USA
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
