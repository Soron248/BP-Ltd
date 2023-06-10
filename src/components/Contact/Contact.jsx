import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center items-center lg:block">
        <div className="w-3/6 md:h-96 md:ml-52 mt-16">
          <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
          <p className="leading-9">
            If you want to contact us: you can send an email to{" "}
            <a
              href="mailto:contact.deshcareer@gmail.com"
              className="text-blue-500 hover:underline"
            >
              contact.deshcareer@gmail.com
            </a>{" "}
            <br />
            If you want to meet with us, you can come to our office based on an
            appointment.
            <br /> Our Office address: <br /> House: 13/3, <br />
            Road: 2,
            <br /> Shyamoly, Dhaka-1207
            <br /> +8801880811047
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
