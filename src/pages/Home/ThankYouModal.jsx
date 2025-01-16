import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ThankYouModal = ({ open, setOpen }) => {
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Dialog open={open} handler={handleOpen} className="!min-w-[auto] md:!max-w-[500px]">
        {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}
        <DialogBody className="px-10 py-14">
          <div className="relative flex-1 flex justify-center items-center">
            {/* <div className="fixed h-full w-full">
              <img className="h-full w-full object-cover" src={hero} alt="" />
            </div> */}
            <div className="container px-0">
              <div className="relative bg-lightGray">
                <h2 className="mb-5">Thank You!</h2>
                <p className="mb-5">
                  Thank you for your inquiry! We've received your message and
                  our team is actively reviewing it. We'll get back to you
                  shortly with the information you need.
                </p>
                <button onClick={handleOpen} className="underline">
                  close
                </button>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default ThankYouModal;
