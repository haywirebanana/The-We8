"use client";

interface FieldProps {
  labelName?: string;
  fieldType: string;
  fieldValue?: string;
  onChange: (value: string) => void;
  placeholderText?: string;
}

export default function Field({
  labelName,
  fieldType,
  fieldValue,
  onChange,
  placeholderText,
}: FieldProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className=" w-full my-2">
      <label className="block text-sm font-medium text-gray-900">
        {labelName}
      </label>
      <div className="relative mt-1 rounded-md">
        <input
          type={fieldType}
          style={{ color: "black" }}
          name="label"
          value={fieldValue}
          onChange={handleChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
}
