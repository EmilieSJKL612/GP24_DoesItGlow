import Specimen from "./Specimen";

export default function Specimens({ label, specimen, specimens }) {
  return (
    <section className="specimens">
      <h2>{label}</h2>
      <ul>
        {specimens?.map((glow, i) => (
          <Specimen key={i} glow={glow} specimen={specimen} />
        ))}
      </ul>
    </section>
  );
}
