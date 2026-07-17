import Link from "next/link";
import { ButtonModel } from "@/src/models/button"; 

interface ButtonProps {
  data: ButtonModel;
}

export default function Button({ data }: ButtonProps) {
  return (
    <Link href={data.href || "#"}>
      <button className={data.variant}>
        {data.buttonText}
      </button>
    </Link>
  );
}