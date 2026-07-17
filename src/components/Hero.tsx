import { ButtonModel } from "../models/interfaces";
import { HeadingModel } from "../models/interfaces";
import Button from "./shared/Button";
import Heading from "./shared/Heading";

interface HeroProps {
  data: {
    heading: HeadingModel;
    button: ButtonModel;
  };
}

export default function Hero({ data }: HeroProps) {
  return (
    <section>
      <Heading data={data.heading} />

      <Button data={data.button} />
    </section>
  );
}