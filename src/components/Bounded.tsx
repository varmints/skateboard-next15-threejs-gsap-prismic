import {
  CSSProperties,
  ElementType,
  ReactNode,
  ComponentPropsWithRef,
} from "react";
import clsx from "clsx";

type BoundedProps<T extends ElementType = "section"> = {
  as?: T;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
} & ComponentPropsWithRef<T>; // ✅ Teraz propsy są zgodne z dynamicznym komponentem

export function Bounded<T extends ElementType = "section">({
  as: Component = "section", // ✅ Bez rzutowania
  className,
  children,
  ...restProps
}: BoundedProps<T>) {
  return (
    <Component
      className={clsx(
        "px-6 ~py-10/16 [.header+&]:pt-44 [.header+&]:md:pt-32",
        className
      )}
      {...(restProps as ComponentPropsWithRef<T>)} // ✅ Poprawne przekazanie propsów
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Component>
  );
}
