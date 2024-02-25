import React, { useState } from "react";
import Container from "../Container";
import Subtitle from "./Subtitle";
import Title from "./Title";
import SocialIcon from "./SocialIcon";
import { contact } from "../../assets/getImage";

const ContactMe = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmali] = useState("");
  const [subject, setSubject] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = () => {
    console.log(userName);
    console.log(phone);
    console.log(email);
    console.log(subject);
    console.log(messages);
    setUserName("");
    setPhone("");
    setEmali("");
    setSubject("");
    setMessages("");
  };
  return (
    <section name="contact" className="px-4">
      <Container className="border-b border-black ">
        <div className="flex flex-col items-center">
          <Subtitle title="CONTACT " />
          <Title title="Contact With Me" />
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
              <p className="text-3xl text-white font-bold">Nevine Acotanza</p>
              <p className="text-base font-medium">Chief Operating Officer</p>
              <p className="text-lg font-medium">
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div>
                <p className="text-lg font-medium">
                  Phone :{" "}
                  <span className="text-white hover:text-designColor hover:underline duration-500">
                    +88-01843471410
                  </span>
                </p>
                <p className="text-lg font-medium">
                  Email :{" "}
                  <span className="text-white  hover:text-designColor hover:underline duration-500">
                    adoffsolution@gmail.com
                  </span>
                </p>
              </div>
              <p className="text-lg font-medium">Find with me</p>
              <SocialIcon />
            </div>
          </div>

          <div className=" w-full md:w-2/3 lg:w-2/3 bg-primaryColor shadow-md shadow-black p-10 rounded-lg flex flex-col gap-7">
            <div className="flex flex-col md:flex-row justify-between gap-10">
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm uppercase">Your name : </p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="inputStyle"
                  onChange={(e) => setUserName(e.target.value)}
                  value={userName}
                />
              </div>
              <div className="flex flex-1 flex-col gap-1">
                <p className="text-sm uppercase">Phone Number : </p>
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="inputStyle"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                />
              </div>
            </div>

            <div className="flex  flex-col gap-1">
              <p className="text-sm uppercase">Email : </p>
              <input
                type="text"
                placeholder="Enter your email"
                className="inputStyle"
                required
                onChange={(e) => setEmali(e.target.value)}
                value={email}
              />
            </div>

            <div className="flex  flex-col gap-1">
              <p className="text-sm uppercase">Subject : </p>
              <input
                type="text"
                placeholder="Enter your subject"
                className="inputStyle"
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
              />
            </div>

            <div className="flex  flex-col gap-1">
              <p className="text-sm uppercase">Your Message </p>
              <textarea
                type="text"
                placeholder="Enter your messages"
                className="inputStyle"
                cols={1}
                rows={6}
                onChange={(e) => setMessages(e.target.value)}
                value={messages}
              />
            </div>

            <button
              onClick={handleSubmit}
              className="border-[1px] border-gray-500 py-2 rounded-md hover:border-designColor duration-300 uppercase hover:text-white"
            >
              Send Message
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
