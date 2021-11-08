import styles from "./Card.module.css";

const Card = ({ monster }) => {
  return (
    <div className={styles["card-container"]}>
      <img
        src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
        alt={"monster"}
      />
      <h2>{monster.name}</h2>
      <p className={styles["monster__email"]}>{monster.email}</p>
    </div>
  );
};

export default Card;
