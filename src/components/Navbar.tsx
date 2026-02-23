'use client';

import Link from 'next/link';
import { School, Menu } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={`${styles.header} glass`}>
      <div className="container">
        <nav className={styles.nav}>
          <Link href="/" className={styles.logo}>
            <School size={32} color="var(--primary)" />
            <span>โรงเรียนดุสิตวิทยา</span>
          </Link>
          
          <ul className={styles.menu}>
            <li><Link href="/" className={styles.link}>หน้าแรก</Link></li>
            <li><Link href="/about" className={styles.link}>เกี่ยวกับโรงเรียน</Link></li>
            <li><Link href="/academics" className={styles.link}>หลักสูตร</Link></li>
            <li><Link href="/admissions" className={styles.link}>รับสมัครนักเรียน</Link></li>
            <li><Link href="/news" className={styles.link}>ข่าวสาร/กิจกรรม</Link></li>
            <li><Link href="/contact" className={styles.link}>ติดต่อเรา</Link></li>
          </ul>
          
          <div className={styles.actions}>
            <Link href="/admin" className="btn btn-outline">
              บุคลากร
            </Link>
            <Link href="/admissions" className="btn btn-primary">
              สมัครเรียน
            </Link>
          </div>
          
          <button className={styles.mobileMenuBtn} aria-label="Toggle Menu">
            <Menu />
          </button>
        </nav>
      </div>
    </header>
  );
}
