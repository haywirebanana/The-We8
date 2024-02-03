'use client'

interface DropdownFieldProps {
  labelName?: string;
  fieldValue?: string;
  options: Array<string>;
  onChange: (value: string) => void;
}

export default function DropdownField({ labelName, fieldValue, options, onChange }: DropdownFieldProps) {
  
  
  const handleChange = (e: any) => {
    onChange(e.target.value);
    console.log(`storing this value: ${e}`)
  }

  return (
    <div className=" w-full my-2">
      <label className="block text-sm font-medium text-gray-900">
        {labelName}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
          <select
            onChange={handleChange}
            id="currency"
            name="currency"
            value={fieldValue}
            className="w-full rounded-md border-0 py-1.5"
          >
            <option value='placeholder'>Select</option>
            {(options).map((selection, index) => <option key={index}>{selection}</option>)}
          </select>
      </div>
    </div>
  )
}