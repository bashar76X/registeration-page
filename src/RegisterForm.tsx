import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerSchema } from "./registerSchema";
import FormFeild from "./components/FormFeild";

function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <div className="container w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-white mb-10">Register</h1>
      <form
        className="bg-white w-2xl p-10 rounded-2xl space-y-5"
        onSubmit={handleSubmit((data) => alert(JSON.stringify(data, null, 2)))}
      >
        <FormFeild
          placeholder="Enter Your Name"
          label="Name"
          name="name"
          register={register}
          type="text"
          error={errors.name}
        />
        <FormFeild
          label="Email"
          name="email"
          placeholder="Enter Your Email"
          register={register}
          type="text"
          error={errors.email}
        />
        <FormFeild
          label="Password"
          name="password"
          placeholder="Enter Your password"
          register={register}
          type="password"
          error={errors.password}
        />
        <FormFeild
          placeholder="Confirm Your password"
          label="Passowrd confirmation"
          name="confirmPassword"
          register={register}
          type="password"
          error={errors.confirmPassword}
        />

        <button
          className="bg-[#00509d] transition-colors duration-300 cursor-pointer border-2 border-[#00509d] hover:bg-white hover:text-[#00509d] px-9 py-2 rounded hover: text-white font-bold"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
