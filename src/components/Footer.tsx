import Link from 'next/link';
import { School, MapPin, Phone, Mail, Facebook, Youtube, Instagram } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>
              <School size={32} />
              <span>โรงเรียนดุสิตวิทยา</span>
            </Link>
            <p className={styles.description}>
              มุ่งมั่นพัฒนาวิชาการ ปลูกฝังคุณธรรม จริยธรรม สร้างผู้นำแห่งอนาคต ด้วยสภาพแวดล้อมที่เอื้อต่อการเรียนรู้แบบบูรณาการ
            </p>
          </div>
          
          <div className={styles.column}>
            <h3>ลิงก์ด่วน</h3>
            <ul className={styles.links}>
              <li><Link href="/about" className={styles.link}>เกี่ยวกับโรงเรียน</Link></li>
              <li><Link href="/academics" className={styles.link}>ระดับชั้นที่เปิดสอน</Link></li>
              <li><Link href="/admissions" className={styles.link}>รับสมัครนักเรียนใหม่</Link></li>
              <li><Link href="/news" className={styles.link}>ข่าวสารและกิจกรรม</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>สำหรับบุคลากร</h3>
            <ul className={styles.links}>
              <li><Link href="/admin" className={styles.link}>ระบบจัดการหลังบ้าน</Link></li>
              <li><Link href="#" className={styles.link}>ระบบปฏิทิน</Link></li>
              <li><Link href="#" className={styles.link}>เอกสารดาวน์โหลด</Link></li>
              <li><Link href="#" className={styles.link}>ข้อมูลสารสนเทศ</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3>ติดต่อเรา</h3>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <MapPin className={styles.contactIcon} size={20} />
                <span>123 ถนนตัวอย่าง ตำบลในเมือง อำเภอเมือง จังหวัดกรุงเทพมหานคร 10100</span>
              </div>
              <div className={styles.contactItem}>
                <Phone className={styles.contactIcon} size={20} />
                <span>02-123-4567, 081-123-4567</span>
              </div>
              <div className={styles.contactItem}>
                <Mail className={styles.contactIcon} size={20} />
                <span>contact@dusitwit.ac.th</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} โรงเรียนดุสิตวิทยา All rights reserved.</p>
          <div className={styles.social}>
            <a href="#" className={styles.socialIcon} aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" className={styles.socialIcon} aria-label="YouTube">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
