export interface ButtonModel {
  buttonText: string;
  href?: string;
  variant?: "primary" | "secondary";
  target?: "_self" | "_blank";
}

export interface HeadingModel {
  title: string;
  href?: string;
  variant?: "primary" | "secondary";
  target?: "_self" | "_blank";
}