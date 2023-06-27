export const onInputChange = (e, inputsSetter) => {
    const change = { [e.target.name]: e.target.value };
    inputsSetter((inp) => new Object({ ...inp, ...change }));
  };