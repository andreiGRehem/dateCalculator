import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { Result } from "../components/Result";
import { useAgeCalculator } from "../hooks/useAgeCalculator";

type FormValues = {
  day: number;
  month: number;
  year: number;
};

export default function Home() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const { years, months, days, calculateAge } = useAgeCalculator();

  const onSubmit = (data: FormValues) => {
    calculateAge(data.day, data.month, data.year);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 font-poppins p-4">
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl w-full max-w-lg relative">
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4 border-b border-gray-300 pb-10">
          <InputField
            label="Dia"
            placeholder="DD"
            register={register("day", {
              required: "Obrigatório",
              min: { value: 1, message: "Dia inválido" },
              max: { value: 31, message: "Dia inválido" },
            })}
            error={errors.day}
            ringColor="blue-300"
          />
          <InputField
            label="Mês"
            placeholder="MM"
            register={register("month", {
              required: "Obrigatório",
              min: { value: 1, message: "Mês inválido" },
              max: { value: 12, message: "Mês inválido" },
            })}
            error={errors.month}
            ringColor="blue-500"
          />
          <InputField
            label="Ano"
            placeholder="YYYY"
            register={register("year", {
              required: "Obrigatório",
              min: { value: 1900, message: "Ano inválido" },
              max: { value: new Date().getFullYear(), message: "Ano inválido" },
            })}
            error={errors.year}
            ringColor="blue-700"
          />

          <button
            type="submit"
            className="absolute right-6 bottom-[-28px] w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-transform active:scale-95"
            
          >
            <span className="block w-5 h-5 bg-[url('/src/assets/icon-arrow.svg')] bg-center bg-no-repeat bg-contain"></span>
          </button>
        </form>

        <Result years={years} months={months} days={days} />
      </div>
    </main>
  );
}