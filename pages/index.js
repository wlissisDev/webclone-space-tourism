import NavBar from "../components/NavBar";
import style from "../styles/home.module.css";

export default function Home() {
  return (
    <div className={style.container}>
      <NavBar />
      <div className={style.content}>
        <div className={style.info}>
          <h1>
            so, you want to travel to</h1>
            <strong>SPACE</strong>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className={style.explore}>
          <h2>EXPLORE </h2>
        </div>
      </div>
    </div>
  );
}
