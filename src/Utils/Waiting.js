const Waiting = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};

export default Waiting;
