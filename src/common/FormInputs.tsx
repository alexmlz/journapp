function Error({ errors, inputType }: any) {
  if (errors) {
    return <div className="error">{errors[inputType]}</div>;
  }
  return null;
}

function RemainingErrors({ errors, input }: any) {
  if (errors) {
    return Object.keys(errors).map((type) => {
      if (!(type in input)) {
        return <Error errors={errors} inputType={type} />;
      }
      return null;
    });
  }
  return null;
}

function FormInput({ input, setInput, inputType, errors }: any) {
  const handleChange = (newValue: string) => {
    setInput({
      ...input,
      [inputType]: newValue,
    });
  };
  return (
    <>
      <h2>{inputType}</h2>
      <input
        value={input[inputType]}
        onChange={(e) => handleChange(e.target.value)}
      />
      <Error errors={errors} inputType={inputType} />
    </>
  );
}

function FormInputs({ input, setInput, errors }: any) {
  return (
    <>
      <RemainingErrors errors={errors} input={input} />
      {Object.keys(input).map((type, key) => (
        <FormInput
          key={key}
          input={input}
          setInput={setInput}
          inputType={type}
          errors={errors}
        />
      ))}
    </>
  );
}

export default FormInputs;
