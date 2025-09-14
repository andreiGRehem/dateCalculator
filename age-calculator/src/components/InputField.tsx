import type { FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  placeholder: string;
  register: any;
  error?: FieldError;
  ringColor: string; // Adicionamos essa nova propriedade
}

export function InputField({ label, placeholder, register, error, ringColor }: InputFieldProps) {
  return (
    <div className="relative flex flex-col">
      <label className={`text-xs font-semibold uppercase ${error ? 'text-red-500' : 'text-gray-500'}`}>{label}</label>
      <input
        type="number"
        placeholder={placeholder}
        {...register}
        className={`mt-1 px-3 py-2 text-lg font-bold border rounded-lg focus:outline-none focus:ring-2 focus:ring-${ringColor} caret-${ringColor} ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <span className="text-red-500 text-[0.65rem] italic mt-1">{error.message}</span>}
    </div>
  );
}