import { useState } from "react";
import Waiting from "./../Utils/Waiting";

const useFetch = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getData = async (link) => {
    return await (await fetch(link)).json();
  };

  const preformFetch = async (link, delay) => {
    try {
      setLoading(true);
      await Waiting(delay);
      const response = await getData(link);
      if (response.Response === "True") {
        setError("");
      } else {
        setError(response.Error);
      }
      return response;
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return [loading, error, preformFetch];
};

export default useFetch;
