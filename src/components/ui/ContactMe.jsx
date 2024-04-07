import React, { useState } from "react";
import Container from "../Container";
import Subtitle from "./Subtitle";
import Title from "./Title";
import SocialIcon from "./SocialIcon";
import { contact } from "../../assets/getImage";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { ColorRing, RotatingLines } from "react-loader-spinner";

const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmali] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [err, setErr] = useState("");

  const handleSubmit = () => {
    console.log(userName);
    console.log(phone);
    console.log(email);
    console.log(subject);
    console.log(message);

    if (userName == "") {
      setErr("Enter your username");
      toast.error("Enter your username");
    } else if (phone == "") {
      setErr("Please enter your phone number!");
      toast.error("Enter your phone");
    } else if (email == "") {
      setErr("Please enter your email!");
      toast.error("Enter your email");
    } else if (subject == "") {
      setErr("Please enter your subject");
      toast.error("Enter your subject");
    } else if (message == "") {
      setErr("Please enter your message");
      toast.error("Enter your message");
    } else {
      setLoading(true);
      axios
        .post("https://hera-contact-api.onrender.com/api/contact", {
          // Name: userName,
          // Phone: phone,
          // Email: email,
          // Subject: subject,
          // Message: messages,
          userName,
          phone,
          email,
          subject,
          message,
        })
        .then((res) => {
          if (res?.status === 200) {
            toast.success("Message send succesfully!");
            setErr("");
            setLoading(false);
            setSuccess(true);
            setUserName("");
            setPhone("");
            setEmali("");
            setSubject("");
            setMessage("");
          } else {
            console.log("Data submitting error from getform");
            setLoading(false);
          }
        });
    }
  };
  return (
    <section name="contact" className="px-4">
      <Container className="border-b border-black ">
        <div className="flex flex-col items-center">
          <Subtitle title="CONTACT " />
          <Title title="Contact With Me" className=" text-center" />
        </div>

        <div className="flex flex-col md:flex-row gap-10 pt-10">
          <div className="w-full md:w-1/3 bg-primaryColor shadow-md shadow-black p-10 rounded-lg group">
            <div className="overflow-hidden rounded-lg">
              <img
                src={contact}
                alt="contact-image"
                className="rounded-md group-hover:scale-110 duration-500"
              />
            </div>
            <div className="py-5 flex flex-col gap-5">
              <p className="text-3xl text-white font-bold">Lutfor Rahman</p>
              <p className="text-base font-medium">Full Stack Devoloper</p>
              <p className="text-lg font-medium">
                I am available for freelance work. Connect with me via and call
                in to my accounts.
              </p>
              <div>
                <p className="text-[16px] md:text-lg font-medium">
                  Phone :{" "}
                  <span className="text-white hover:text-designColor hover:underline duration-500">
                    +88-01843471410
                  </span>
                </p>
                <p className=" text-[16px] md:text-lg font-medium ">
                  Email :{" "}
                  <span className="text-white   hover:text-designColor hover:underline duration-500">
                    devlutfor@gmail.com
                  </span>
                </p>
              </div>
              <p className="text-lg font-medium">Find with me</p>
              <SocialIcon />
            </div>
          </div>

          <div className=" w-full md:w-2/3 lg:w-2/3 bg-primaryColor shadow-md shadow-black p-10 rounded-lg flex flex-col gap-7 ">
            {!loading && success && (
              <div className=" h-20 flex flex-col items-center justify-center mb-3">
                <p className="text-2xl text-center text-green-300 font-semibold mb-3">
                  {`Your messages sent successfully`}
                </p>
              </div>
            )}
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full">
                <RotatingLines
                  visible={true}
                  height="96"
                  width="96"
                  color="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
                <p className="text-xl font-semibold text-white">
                  Your messages is sending ...
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-10">
                {err && (
                  <div className="text-orange-600 bg-zinc-950 py-2 px-4 font-semibold">
                    <p>{err}</p>
                  </div>
                )}
                <div className="flex flex-col md:flex-row justify-between gap-7">
                  <div className="flex flex-1 flex-col gap-3 relative">
                    <p className="text-sm uppercase">Your name :</p>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="inputStyle"
                      onChange={(e) => setUserName(e.target.value)}
                      value={userName}
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-3 relative">
                    <p className="text-sm uppercase">Phone Number :</p>
                    <input
                      type="number"
                      placeholder="Enter your phone number"
                      className="inputStyle"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-3 relative">
                  <p className="text-sm uppercase">Email :</p>
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="inputStyle"
                    onChange={(e) => setEmali(e.target.value)}
                    value={email}
                  />
                </div>
                <div className="flex flex-col gap-3 relative">
                  <p className="text-sm uppercase">Subject :</p>
                  <input
                    type="text"
                    placeholder="Your a subject"
                    className="inputStyle"
                    onChange={(e) => setSubject(e.target.value)}
                    value={subject}
                  />
                </div>
                <div className="flex flex-col gap-3 relative">
                  <p className="text-sm uppercase">Your Message</p>
                  <textarea
                    type="text"
                    placeholder="Enter your messages..."
                    className="inputStyle"
                    cols={1}
                    rows={3}
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColor duration-300 uppercase hover:text-white"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
        <Toaster position="top-center" />
      </Container>
    </section>
  );
};

export default ContactMe;
