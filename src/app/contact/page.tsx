import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import styles from './page.module.css';

export default function ContactPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>ติดต่อสอบถาม</h1>
          <p className={styles.subtitle}>
            หากคุณมีข้อสงสัยหรือต้องการสอบถามข้อมูลเพิ่มเติม สามารถติดต่อเราได้ตามช่องทางต่างๆ ด้านล่าง
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          
          <div className={styles.infoContainer}>
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={24} />
              </div>
              <div className={styles.infoContent}>
                <h3>ที่อยู่โรงเรียน</h3>
                <p>123 ถนนตัวอย่าง ตำบลในเมือง<br />อำเภอเมือง จังหวัดกรุงเทพมหานคร 10100</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Phone size={24} />
              </div>
              <div className={styles.infoContent}>
                <h3>เบอร์โทรศัพท์</h3>
                <p>โทร: 02-123-4567<br />มือถือ: 081-123-4567</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Mail size={24} />
              </div>
              <div className={styles.infoContent}>
                <h3>อีเมลติดต่อ</h3>
                <p>ฝ่ายธุรการ: info@dusitwit.ac.th<br />ฝ่ายรับสมัคร: admission@dusitwit.ac.th</p>
              </div>
            </div>
            
            <div className={styles.infoItem}>
              <div className={styles.iconWrapper}>
                <Clock size={24} />
              </div>
              <div className={styles.infoContent}>
                <h3>เวลาทำการ</h3>
                <p>จันทร์ - ศุกร์: 07:30 - 16:30 น.<br />เสาร์ (เฉพาะผู้ปกครองติดต่องาน): 08:30 - 12:00 น.</p>
              </div>
            </div>
          </div>
          
          <div className={styles.formContainer}>
            <h2 className={styles.formTitle}>ส่งข้อความถึงเรา</h2>
            <form>
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="name">ชื่อ-นามสกุล</label>
                <input type="text" id="name" className={styles.formInput} placeholder="กรอกชื่อและนามสกุลของคุณ" required />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="email">อีเมล</label>
                <input type="email" id="email" className={styles.formInput} placeholder="example@email.com" required />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="subject">เรื่องที่ต้องการติดต่อ</label>
                <input type="text" id="subject" className={styles.formInput} placeholder="ระบุหัวข้อที่ต้องการสอบถาม" required />
              </div>
              
              <div className={styles.formGroup}>
                <label className={styles.formLabel} htmlFor="message">ข้อความ</label>
                <textarea id="message" className={styles.formTextarea} placeholder="พิมพ์ข้อความที่ต้องการติดต่อ..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                <Send size={18} /> ส่งข้อความ
              </button>
            </form>
          </div>
          
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15502.59569720377!2d100.5489!3d13.7388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQ0JzE5LjciTiAxMDDCsDMyJzU2LjAiRQ!5e0!3m2!1sen!2sth!4v1620000000000!5m2!1sen!2sth" 
              className={styles.map}
              allowFullScreen={false} 
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
