"use client";

import React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

type SliderProps = {
  className?: string;
  min: number;
  max: number;
  step: number;
  hideValue?: boolean;
  formatLabel?: (value: number) => string;
  value?: number[] | readonly number[];
  onValueChange?: (values: number[]) => void;
};

const RangeSlider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      min,
      max,
      step,
      hideValue = false,
      formatLabel,
      value,
      onValueChange,
      ...props
    }: SliderProps,
    ref,
  ) => {
    const initialValue = Array.isArray(value) ? value : [min, max];
    const [localValues, setLocalValues] = React.useState(initialValue);

    React.useEffect(() => {
      if (value !== undefined) {
        setLocalValues(Array.isArray(value) ? value : [min, max]);
      }
    }, [value, min, max]);

    const handleValueChange = (newValues: number[]) => {
      setLocalValues(newValues);
      if (onValueChange) {
        onValueChange(newValues);
      }
    };

    return (
      <SliderPrimitive.Root
        ref={ref}
        min={min}
        max={max}
        step={step}
        value={localValues}
        onValueChange={handleValueChange}
        className={cn(
          "relative flex w-full touch-none select-none mb-5 items-center",
          className,
        )}
        {...props}
      >
        <SliderPrimitive.Track className="h-1 grow overflow-hidden rounded-full bg-primary/20">
          <SliderPrimitive.Range className="absolute h-full bg-primary" />
        </SliderPrimitive.Track>
        {localValues.map((value, index) => (
          <React.Fragment key={index}>
            {!hideValue && (
              <div
                className="absolute text-center"
                style={{
                  left: `calc(${((value - min) / (max - min)) * 100}%)`, // Центрируем по thumb
                  top: `15px`,
                  transform: `translateX(${index === 0 ? "-100%" : "0"})`, // Левое значение сдвигаем влево
                }}
              >
                <span className="text-sm">
                  {formatLabel ? formatLabel(value) : value}
                </span>
              </div>
            )}
            <SliderPrimitive.Thumb className="block cursor-pointer hover:bg-primary h-4 w-4 rounded-full border border-primary bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
          </React.Fragment>
        ))}
      </SliderPrimitive.Root>
    );
  },
);

RangeSlider.displayName = "RangeSlider";

export { RangeSlider };
