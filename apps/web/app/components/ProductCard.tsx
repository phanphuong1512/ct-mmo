import Image from "next/image";
import styles from "../page.module.css";

export default function ProductCard({ name, price, img, status }) {
  return (
    <div className={styles.card}>
      <Image
        src={img}
        alt={name}
        width={300}
        height={200}
        className={styles.cardImg}
      />

      <p className={styles.cardName}>{name}</p>
      <p className={styles.cardPrice}>chỉ từ {price}</p>

      {/* Status hiển thị dưới cùng */}
      {status && (
        <p className={styles.cardStatus}>
          {status}
        </p>
      )}
    </div>
  );
}
