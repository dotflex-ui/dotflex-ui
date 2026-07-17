type HeadingProps = {
  data: {
    title: string;
    subtitle: string;
    badge: string;
  };
};

export default function Heading({ data }: HeadingProps) {
  return (
    <section>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
    </section>
  );
}