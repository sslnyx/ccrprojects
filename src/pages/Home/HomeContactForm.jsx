import React, { useEffect } from "react";
import useSubmitForm from "../../hooks/useSubmitForm";
import ThankYouModal from "./ThankYouModal";

const HomeContactForm = () => {
  const fields = [
    { id: "first_name", label: "First Name*", require: true, type: "text" },
    { id: "last_name", label: "Last Name*", require: true, type: "text" },
    { id: "email", label: "E-mail*", require: true, type: "email" },
    { id: "phone", label: "Phone", require: false, type: "tel" },
  ];

  const [open, setOpen] = React.useState(false);

  const tyProps = { open, setOpen };

  const [submitForm, loading, error, data] = useSubmitForm(
    import.meta.env.VITE_API_URL + "/api/register"
  );

  const submitHandler = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    submitForm(formData);
  };

  useEffect(() => {
    if (data) {
      //   console.log(data);
      setOpen(true);
      //   navigate("/register/thank-you");
    }
    if (error) {
      console.log(error);
    }
  }, [data, error]);

  return (
    <section id="contact" className="mb-10">
      <div
        className="container"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="2000"
      >
        <h3 className="uppercase">Contact Us</h3>

        <form onSubmit={submitHandler}>
          <div className="flex flex-wrap -mx-5 mb-10">
            {fields.map(({ id, label, type, require }) => (
              <div className="basis-full md:basis-1/2 p-5 relative" key={id}>
                <input
                  type={type}
                  name={id}
                  className="border-b border-black placeholder:text-black/50 py-3 w-full"
                  placeholder={label}
                  required={require}
                />
                {error && error[id] && (
                  <span className="absolute -bottom-1 left-5 text-red-400">
                    {error[id]}
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mb-5">
            <textarea
              name="message"
              cols="30"
              rows="5"
              maxLength="250"
              className="bg-blue/10 w-full p-5 placeholder:text-black/50"
              placeholder="Message"
            />
          </div>

          <div className="mb-10">
            <label className="flex gap-2">
              <div className="flex mt-1 md:mt-0 md:items-center">
                <input
                  name="subscribe"
                  type="checkbox"
                  className="w-[20px] h-[20px]"
                  defaultChecked
                />
              </div>

              <span>
                Yes, I would like to receive emails on properties and updates
                from CCR Projects. I can unsubscribe at any time.
              </span>
            </label>
          </div>

          <div className="flex justify-center relative h-[50px] items-center">
            {loading ? (
              <span className="relative flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-blue"></span>
              </span>
            ) : (
              <button className="px-20 py-3 border border-blue text-blue uppercase hover:bg-blue font-bold hover:text-white">
                submit
              </button>
            )}
          </div>
        </form>
      </div>
      <ThankYouModal {...tyProps} />
    </section>
  );
};

export default HomeContactForm;
