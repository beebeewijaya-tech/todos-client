function Label(props) {
  const { label } = props;
  return (
    <section
      className="bg-primary inline-block px-5 py-1 mr-2 rounded-md"
      key={label.id}
    >
      <p className="text-white font-museoModerno text-sm">{label.title}</p>
    </section>
  );
}

export default Label;
