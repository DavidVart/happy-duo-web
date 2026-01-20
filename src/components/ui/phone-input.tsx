import "react-phone-number-input/style.css";
import PhoneInputLib, { Country, getCountryCallingCode } from "react-phone-number-input";
import { parsePhoneNumber } from "react-phone-number-input";
import { forwardRef, useState, useEffect } from "react";
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
    const [country, setCountry] = useState<Country | undefined>(defaultCountry);

    // Detect country from the typed phone number value
    useEffect(() => {
      if (value) {
        try {
          const phoneNumber = parsePhoneNumber(value);
          if (phoneNumber?.country) {
            setCountry(phoneNumber.country);
          }
        } catch {
          // Invalid phone number, keep current country
        }
      }
    }, [value]);

    return (
      <PhoneInputLib
        international
        country={country}
        onCountryChange={setCountry}
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
