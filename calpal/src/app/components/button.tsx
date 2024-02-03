'use client'

interface ButtonProps {
  buttonText?: string;
  onSubmit: (value: string) => void;
}

export default function Button({ buttonText, onSubmit }: ButtonProps) {
  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSubmit(e.target.value);
  }

  return (
    <div className="my-2">
      <button type="button" className="text-white bg-clay hover:bg-sand focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{buttonText}</button>
    </div>
  )
}
