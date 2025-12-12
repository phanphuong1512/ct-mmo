import Image, { type ImageProps } from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";
import styles from "./page.module.css";

type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};

export default function Home() {
 const products = [
  { id: 1, name: "GPT Business 1 tháng", price: "50.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 2, name: "GPT Go 3 tháng", price: "60.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 3, name: "GPT Go 1 năm", price: "120.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 4, name: "Express VPN 1 tháng", price: "20.000đ", img: "/shine/expressvpn.png", status: "Còn hàng" },
  { id: 5, name: "Canva 1 tháng (tài khoản cấp)", price: "10.000đ", img: "/shine/canva.png", status: "Còn hàng" },
  { id: 6, name: "Canva 1 năm", price: "90.000đ", img: "/shine/canva.png", status: "Tạm thời không có hàng" },
  { id: 7, name: "Perplexity 1 năm (chính chủ)", price: "250.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 8, name: "Ariva Security & VPN 3 tháng", price: "60.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 9, name: "Spotify", price: "—", img: "/shine/spotify.png", status: "Tạm thời không có hàng" },
  { id: 10, name: "Youtube", price: "—", img: "/shine/youtube.png", status: "Tạm thời không có hàng" },
  { id: 11, name: "Figma Edu 1 năm", price: "90.000đ", img: "/shine/figma.png", status: "Tạm thời không có hàng" },
  { id: 12, name: "Intellij 1 năm Edu", price: "90.000đ", img: "/shine/default.png", status: "Tạm thời không có hàng" },
  { id: 13, name: "Quizlet 1 tháng", price: "9.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 14, name: "Cursor trial 7 ngày", price: "20.000đ", img: "/shine/default.png", status: "Tạm thời không có hàng" },
  { id: 15, name: "Google AI Pro 1 tháng (AI + 2TB Drive)", price: "20.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 16, name: "Google AI Pro 1 năm (AI + 2TB Drive)", price: "160.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 17, name: "Google AI Pro 6 tháng (AI + 2TB Drive)", price: "80.000đ", img: "/shine/default.png", status: "Còn hàng" },
  { id: 18, name: "Dịch vụ thiết kế Website trọn gói", price: "Thương lượng", img: "/shine/default.png", status: "Cần mua lại" },
  { id: 19, name: "Dịch vụ làm ứng dụng trọn gói", price: "Thương lượng", img: "/shine/default.png", status: "Cần mua lại" },
];


  return (
    <div className={styles.page}>
      <Header />

      {/* Product Grid */}
      <div className={styles.grid}>
        {products.map((p) => (
          <ProductCard key={p.id} {...p} />
        ))}
      </div>

      <Footer />  
    </div>
  );
}
