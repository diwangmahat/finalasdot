import "./HomeHeroStyles.css";


function Banner(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.heroImg} alt="heroImg" />
        <div className="hero-text">
          <h1>{props.title}</h1>
        </div>
      </div>
    </>
  );
}

export default Banner;
