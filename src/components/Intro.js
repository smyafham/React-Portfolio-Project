const Intro = ({ Name, Desc }) => {
  return (
    <section class="py-5 text-center container">
      <div>
        <h1>{Name}</h1>
        <p>{Desc}</p>
        {/* <p>{Buttons}</p> */}
      </div>
    </section>
  );
};
export default Intro;
