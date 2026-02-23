import { ClipboardList, CalendarClock, UserCheck, FileText, ChevronDown, Download } from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>รับสมัครนักเรียนใหม่</h1>
          <p className={styles.subtitle}>
            เปิดรับสมัครนักเรียนใหม่ ประจำปีการศึกษา 2569 ตั้งแต่ระดับอนุบาลจนถึงมัธยมศึกษาตอนปลาย
          </p>
        </div>
      </header>

      {/* Qualifications & Info */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <CalendarClock size={32} />
              </div>
              <h3>ช่วงเวลาจำหน่ายระเบียบการ</h3>
              <p>สามารถซื้อใบสมัครได้ตั้งแต่วันที่ 1-28 กุมภาพันธ์ ของทุกปี หรือกรอกใบสมัครออนไลน์ผ่านระบบเว็บไซต์โรงเรียน</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <ClipboardList size={32} />
              </div>
              <h3>การสอบคัดเลือก</h3>
              <p>นักเรียนระดับ ป.1 ถึง ม.4 ต้องผ่านการทดสอบวัดความประสงค์ทางการเรียน (Math, Science, English) และการสัมภาษณ์</p>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.iconWrapper}>
                <UserCheck size={32} />
              </div>
              <h3>คุณสมบัติผู้สมัคร</h3>
              <p>ระดับปฐมวัยต้องมีอายุครบ 3 ขวบบริบูรณ์ ในขณะที่ระดับอื่นๆ ต้องจบหลักสูตรก่อนหน้าและมีผลการเรียนเฉลี่ยไม่ต่ำกว่า 2.50</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">อัตราค่าธรรมเนียมการศึกษา</h2>
            <p className={styles.subtitle}>ประมาณการค่าธรรมเนียมการศึกษาประจำปี (รวมค่าธรรมเนียมแรกเข้า)</p>
          </div>
          
          <div className={styles.tableWrapper}>
            <table className={styles.feesTable}>
              <thead>
                <tr>
                  <th>ระดับชั้น / โปรแกรม</th>
                  <th>หลักสูตรปกติ (บาท/เทอม)</th>
                  <th>หลักสูตรพิเศษ EP (บาท/เทอม)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ระดับปฐมวัย (อ.1 - อ.3)</td>
                  <td className={styles.price}>25,000</td>
                  <td className={styles.price}>45,000</td>
                </tr>
                <tr>
                  <td>ระดับประถมศึกษา (ป.1 - ป.6)</td>
                  <td className={styles.price}>30,000</td>
                  <td className={styles.price}>55,000</td>
                </tr>
                <tr>
                  <td>ระดับมัธยมศึกษาตอนต้น (ม.1 - ม.3)</td>
                  <td className={styles.price}>35,000</td>
                  <td className={styles.price}>60,000</td>
                </tr>
                <tr>
                  <td>ระดับมัธยมศึกษาตอนปลาย (ม.4 - ม.6)</td>
                  <td className={styles.price}>40,000</td>
                  <td className={styles.price}>65,000</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p style={{ marginTop: '1.5rem', fontSize: '0.875rem', opacity: 0.7, textAlign: 'center' }}>
            * อัตรานี้เป็นเพียงการประมาณการ อาจมีการเปลี่ยนแปลง ติดต่อสอบถามรายละเอียดเพิ่มเติมได้ที่ฝ่ายธุรการ
          </p>
        </div>
      </section>

      {/* Downloads */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <FileText size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h2>ดาวน์โหลดเอกสาร</h2>
          </div>
          
          <div className={styles.downloadGrid}>
            <a href="#" className={styles.downloadCard}>
              <Download className={styles.downloadIcon} size={28} />
              <div className={styles.downloadInfo}>
                <div className={styles.downloadTitle}>ระเบียบการรับสมัคร ปีการศึกษา 2569</div>
                <div className={styles.downloadSize}>PDF • 2.4 MB</div>
              </div>
            </a>
            
            <a href="#" className={styles.downloadCard}>
              <Download className={styles.downloadIcon} size={28} />
              <div className={styles.downloadInfo}>
                <div className={styles.downloadTitle}>ใบสมัครระดับปฐมวัย - ประถมศึกษา</div>
                <div className={styles.downloadSize}>PDF • 1.1 MB</div>
              </div>
            </a>
            
            <a href="#" className={styles.downloadCard}>
              <Download className={styles.downloadIcon} size={28} />
              <div className={styles.downloadInfo}>
                <div className={styles.downloadTitle}>ใบสมัครระดับมัธยมศึกษา</div>
                <div className={styles.downloadSize}>PDF • 1.2 MB</div>
              </div>
            </a>
            
            <a href="#" className={styles.downloadCard}>
              <Download className={styles.downloadIcon} size={28} />
              <div className={styles.downloadInfo}>
                <div className={styles.downloadTitle}>หนังสือมอบอำนาจ (สำหรับผู้ปกครอง)</div>
                <div className={styles.downloadSize}>PDF • 450 KB</div>
              </div>
            </a>
          </div>
          
          <div className="flex-center" style={{ marginTop: '3rem' }}>
            <Link href="#" className="btn btn-primary">
              เข้าสู่ระบบรับสมัครออนไลน์
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">ถาม-ตอบ (FAQ)</h2>
            <p className={styles.subtitle}>ข้อสงสัยที่พบบ่อยเกี่ยวกับการรับสมัครนักเรียนใหม่</p>
          </div>
          
          <div className={styles.faqContainer}>
            <details className={styles.faqItem} open>
              <summary className={styles.faqQuestion}>
                ทางโรงเรียนมีบริการรถรับ-ส่งนักเรียนหรือไม่?
                <ChevronDown className={styles.faqIcon} size={20} />
              </summary>
              <div className={styles.faqAnswer}>
                โรงเรียนมีบริการรถตู้ปรับอากาศรับ-ส่งนักเรียนตามเส้นทางหลักในรัศมี ไม่เกิน 20 กิโลเมตร โดยคิดค่าบริการตามระยะทาง กรุณาติดต่อฝ่ายธุรการเพื่อตรวจสอบเส้นทางเดินรถและค่าใช้จ่าย
              </div>
            </details>
            
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                มีโควตาสำหรับนักเรียนเก่าที่ต้องการศึกษาต่อในระดับที่สูงขึ้นหรือไม่?
                <ChevronDown className={styles.faqIcon} size={20} />
              </summary>
              <div className={styles.faqAnswer}>
                มีครับ นักเรียนเดิมที่กำลังศึกษาในระดับ อ.3, ป.6 และ ม.3 ที่มีผลการเรียนเฉลี่ยและพฤติกรรมผ่านเกณฑ์ที่โรงเรียนกำหนด จะได้รับสิทธิ์โควตาศึกษาต่อโดยไม่ต้องสอบคัดเลือกแข่งขันกับนักเรียนภายนอก และจะได้รับส่วนลดค่าธรรมเนียมแรกเข้า
              </div>
            </details>
            
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                กรณีเป็นนักเรียนโอนย้ายระหว่างชั้นปี โรงเรียนรับหรือไม่?
                <ChevronDown className={styles.faqIcon} size={20} />
              </summary>
              <div className={styles.faqAnswer}>
                ทางโรงเรียนรับสมัครนักเรียนโอนย้ายทุกระดับชั้น (ยกเว้น ม.3 และ ม.6) โดยมีเงื่อนไขว่าต้องมีที่นั่งว่างในห้องเรียนนั้นๆ และนักเรียนต้องผ่านการสอบข้อเขียนเพื่อวัดระดับความรู้ให้เทียบเท่ากับหลักสูตรของโรงเรียน
              </div>
            </details>
            
            <details className={styles.faqItem}>
              <summary className={styles.faqQuestion}>
                นักเรียนในโปรแกรมภาษาอังกฤษ (EP) สอนโดยครูต่างชาติกี่เปอร์เซ็นต์?
                <ChevronDown className={styles.faqIcon} size={20} />
              </summary>
              <div className={styles.faqAnswer}>
                ในโปรแกรม EP นักเรียนจะได้เรียนกับครูเจ้าของภาษา (Native Speakers) ในสัดส่วน 70% ของเวลาเรียนทั้งหมด โดยครอบคลุมวิชา คณิตศาสตร์ วิทยาศาสตร์ สังคมศึกษา และภาษาอังกฤษพื้นฐาน ส่วนวิชาภาษาไทยและบางวิชาจะเรียนกับครูไทย
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
