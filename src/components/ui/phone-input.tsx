import "react-phone-number-input/style.css";
import PhoneInputLib, { Country, getCountries, getCountryCallingCode } from "react-phone-number-input";
import { forwardRef, useState, useEffect, useMemo } from "react";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  id?: string;
  value: string;
  onChange: (value: string | undefined) => void;
  placeholder?: string;
  defaultCountry?: Country;
  className?: string;
  disabled?: boolean;
}

// Countries to prioritize for ambiguous calling codes (e.g. +1 -> US not Canada)
const PRIORITY_COUNTRIES: Country[] = [
  "US", "GB", "DE", "FR", "ES", "IT", "AU", "IN", "BR", "MX", "JP", "CN", "KR",
  "NL", "SE", "NO", "DK", "FI", "PT", "PL", "AT", "CH", "BE", "IE", "NZ",
  "SG", "HK", "AE", "SA", "ZA", "AR", "CL", "CO", "PE", "EG", "IL", "TR",
  "TH", "PH", "ID", "MY", "VN", "PK", "BD", "NG", "KE", "GH", "RU", "UA",
];

function buildCallingCodeToCountryMap(): Map<string, Country> {
  const map = new Map<string, Country>();
  // First pass: all countries
  for (const c of getCountries()) {
    try {
      const code = getCountryCallingCode(c);
      if (!map.has(code)) map.set(code, c);
    } catch { /* skip */ }
  }
  // Second pass: priority countries override ambiguous codes
  for (const c of PRIORITY_COUNTRIES) {
    try {
      const code = getCountryCallingCode(c);
      map.set(code, c);
    } catch { /* skip */ }
  }
  return map;
}

function detectCountryFromValue(
  value: string,
  codeMap: Map<string, Country>
): Country | undefined {
  if (!value || !value.startsWith("+")) return undefined;
  const digits = value.slice(1).replace(/\D/g, "");
  if (!digits) return undefined;
  // Try longest match first (calling codes can be 1-4 digits)
  for (let len = Math.min(digits.length, 4); len >= 1; len--) {
    const code = digits.slice(0, len);
    const country = codeMap.get(code);
    if (country) return country;
  }
  return undefined;
}

const PhoneInput = forwardRef<HTMLInputElement, PhoneInputProps>(
  ({ id, value, onChange, placeholder = "Enter your WhatsApp number", defaultCountry, className, disabled }, ref) => {
    const codeMap = useMemo(() => buildCallingCodeToCountryMap(), []);
    const [country, setCountry] = useState<Country | undefined>(defaultCountry);

    // Detect country from the dialing code as the user types
    useEffect(() => {
      if (value) {
        const detected = detectCountryFromValue(value, codeMap);
        if (detected) {
          setCountry(detected);
        }
      } else {
        setCountry(defaultCountry);
      }
    }, [value, codeMap, defaultCountry]);

    return (
      <PhoneInputLib
        id={id}
        international
        defaultCountry={defaultCountry}
        country={country}
        onCountryChange={(c) => {
          setCountry(c);
        }}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          "phone-input-wrapper flex-1",
          disabled && "opacity-50 cursor-not-allowed",
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
