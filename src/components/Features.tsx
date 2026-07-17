type Feature = {
  title: string;
  description: string;
};

type FeaturesProps = {
  data: {
    title: string;
    items: Feature[];
  };
};

export default function Features({ data }: FeaturesProps) {
  return (
    <section>
      <h2>{data.title}</h2>

      {data.items.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}