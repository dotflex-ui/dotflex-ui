type ContactProps = {
  data: {
    title: string;
    email: string;
    phone: string;
  };
};

export default function Contact({ data }: ContactProps) {
  return (
    <section>
      <h2>{data.title}</h2>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
    </section>
  );
}