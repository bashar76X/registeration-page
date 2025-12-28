import { useState } from "react";

interface PropsType {
  error?: any;
  register: any;
  label: string;
  type: string;
  name: string;
  placeholder: string;
}

function FormFeild({
  error,
  register,
  label,
  type,
  name,
  placeholder,
}: PropsType) {
  const [fieldType, setFieldType] = useState<string>(type);

  return (
    <div className="flex flex-col w-full">
      <label className="font-bold text-[#00509d]" htmlFor={name}>
        {label}
      </label>
      <div className="w-full relative">
        <input
          placeholder={placeholder}
          className={`w-full ${
            error
              ? "border-red-500 placeholder:text-red-600 focus-visible:ring-0"
              : " border-black/20"
          }  focus-visible:outline-none border focus-within:ring focus-within:ring-[#00509d] placeholder:text-sm placeholder:font-medium px-2 py-2 rounded-lg`}
          type={fieldType}
          id={name}
          {...register(name)}
        />
        {type === "password" && (
          <span
            onClick={() => {
              if (fieldType == "password") {
                setFieldType("text");
              } else setFieldType("password");
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
          >
            {fieldType === "password" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-.722-3.25" />
                <path d="M2 8a10.645 10.645 0 0 0 20 0" />
                <path d="m20 15-1.726-2.05" />
                <path d="m4 15 1.726-2.05" />
                <path d="m9 18 .722-3.25" />
              </svg>
            )}
          </span>
        )}
      </div>
      {error && <p className="text-sm text-red-600 mt-2">{error.message}</p>}
    </div>
  );
}

export default FormFeild;

/*





*/
