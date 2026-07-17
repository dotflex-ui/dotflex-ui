type CTAProps = {
  data: {
    title: string;
    buttonText: string;
  };
};

export default function CTA({ data }: CTAProps) {
  return (
    <section style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2>{data.title}</h2>
      <button style={{ padding: '10px 20px' }}>{data.buttonText}</button>
    </section>
  );
}