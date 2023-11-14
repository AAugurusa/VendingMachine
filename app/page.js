import Image from 'next/image'
import styles from './page.module.css'
import BrandInfoComponent from "@/components/BrandInfoComponent";
import LoginHeader from "@/components/LoginHeader";
import LoginForm from "@/components/LoginForm";


export default function Home() {
  return (
      <div className={styles.pageContainer}>
        <div className={styles.wrapperLeft}>
          <LoginHeader/>
          <LoginForm/>
        </div>
        <div className={styles.wrapperRight}>
          <BrandInfoComponent/>
          </div>
      </div>
  );
}
