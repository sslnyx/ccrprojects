import React, { useState } from "react";
// import jsCookie from "js-cookie";

const useSubmitForm = (url, method = "POST") => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const submitForm = async (formData) => {
    setLoading(true);
    setError(null);
    setData(null);

    try {
      // const token = jsCookie.get("XSRF-TOKEN");
      const response = await fetch(url, {
        method,
        // headers: {
        //   "X-XSRF-TOKEN": token,
        // },
        body: formData,
        // credentials: "include",
      });

      const responseData = await response.json();

      if (!response.ok) {
        setError(responseData?.errors || "An error occurred");
      } else {
        setData(responseData);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [submitForm, loading, error, data];
};

export default useSubmitForm;
