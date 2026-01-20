import "react-phone-number-input/style.css";
import PhoneInputLib, { Country } from "react-phone-number-input";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  defaultCountry?: Country;
  className?: string;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ value, onChange, placeholder = "Enter your WhatsApp number", defaultCountry = "US", className }, ref) => {
    return (
      <PhoneInputLib
        international
        countryCallingCodeEditable={false}
        defaultCountry={defaultCountry}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          "phone-input-wrapper flex-1",
          className
        )}
        inputComponent={CustomInput}
      />
    );
  }
);

PhoneInput.displayName = "PhoneInput";

// Custom input component to match existing styling
const CustomInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <input
        {...props}
        ref={ref}
        className="flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground min-w-0 py-2"
      />
    );
  }
);

CustomInput.displayName = "CustomInput";

export { PhoneInput };
