function Section({ children, className, id }) {
  return (
    <section id={id} className={`lg:py-[100px] md:py-20 py-[60px] ${className ? className : ""}`}>
      {children}
    </section>
  );
}

export default Section;
