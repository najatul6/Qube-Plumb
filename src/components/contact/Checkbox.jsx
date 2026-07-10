export default function Checkbox() {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        className="
          mt-1
          h-5
          w-5
          accent-yellow-400
        "
      />

      <span className="text-sm leading-7 text-white">
        I agree to 2nd City Gas, Plumbing and Heating
        contacting me on the details provided.
        We will never share your information with
        any third parties.
      </span>
    </label>
  );
}