"use client";

import styles from "../page.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        HADE <span className={styles.shop}>STORE</span>
      </div>

      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          placeholder="Tìm kiếm sản phẩm... (Alt + S)"
        />
      </div>

      <div className={styles.headerRight}>
        <button className={styles.filterBtn}>Bộ lọc</button>
        <button className={styles.menuBtn}>☰</button>
      </div>
    </header>
  );
}
