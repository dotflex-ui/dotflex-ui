type AboutProps = {
  data: {
    title: string;
    description: string;
  };
};

export default function About({ data }: AboutProps) {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </section>
  );
}