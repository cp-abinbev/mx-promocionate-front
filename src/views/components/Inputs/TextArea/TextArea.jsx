import { Controller } from "react-hook-form";
import useViews from "../../..";

const TextArea = ({ name, control, errors, text, className }) => {
  const { useComponents } = useViews();
  const { Typography } = useComponents();

  return (
    <>
      <Controller
        id={name}
        name={name}
        control={control}
        defaultValue=""
        render={({ field: { onChange, name, value } }) => (
          <textarea
            className={className}
            name={name}
            placeholder={text}
            onChange={onChange}
            value={value}
            maxLength={255}
          />
        )}
      />
      <Typography variant="error" className="absolute">
        {errors[name]?.message}
      </Typography>
    </>
  );
};

export default TextArea;
