import { CalendarDays, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './page.module.css';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>ข่าวสารและกิจกรรม</h1>
          <p className={styles.subtitle}>
            อัปเดตข้อมูลข่าวสาร ประกาศสำคัญ และเรื่องราวความเคลื่อนไหวล่าสุดของโรงเรียน
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.filterContainer}>
            <button className={styles.filterBtn} data-active="true">ทั้งหมด</button>
            <button className={styles.filterBtn}>ประกาศทั่วไป</button>
            <button className={styles.filterBtn}>ข่าววิชาการ</button>
            <button className={styles.filterBtn}>กิจกรรมโรงเรียน</button>
            <button className={styles.filterBtn}>รับสมัครงาน</button>
          </div>
          
          <div className={styles.newsGrid}>
            {/* News Item 1 */}
            <article className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                  alt="News 1" 
                  className={styles.newsImage} 
                />
                <span className={styles.newsCategory} data-type="general">ประกาศทั่วไป</span>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <CalendarDays size={16} />
                  <span>24 กุมภาพันธ์ 2026</span>
                </div>
                <h3 className={styles.newsTitle}>ประกาศรับสมัครนักเรียนใหม่ ปีการศึกษา 2569</h3>
                <p className={styles.newsExcerpt}>
                  โรงเรียนดุสิตวิทยาเปิดรับสมัครนักเรียนใหม่ตั้งแต่ระดับชั้นอนุบาลถึงมัธยมศึกษาตอนปลาย ผ่านระบบรับสมัครออนไลน์และที่ห้องธุรการโรงเรียน โดยมีกำหนดรับสมัครตั้งแต่ 1-28 กุมภาพันธ์
                </p>
                <Link href="#" className={styles.newsReadMore}>
                  อ่านเพิ่มเติม <ArrowRight size={18} />
                </Link>
              </div>
            </article>

            {/* News Item 2 */}
            <article className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                  alt="News 2" 
                  className={styles.newsImage} 
                />
                <span className={styles.newsCategory} data-type="academic">ข่าววิชาการ</span>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <CalendarDays size={16} />
                  <span>20 กุมภาพันธ์ 2026</span>
                </div>
                <h3 className={styles.newsTitle}>ความสำเร็จของนักเรียนในการแข่งขันวิชาการระดับชาติ</h3>
                <p className={styles.newsExcerpt}>
                  ขอแสดงความยินดีกับตัวแทนนักเรียนที่คว้า 5 เหรียญทองและ 3 เหรียญเงิน ในการแข่งขันตอบปัญหาวิทยาศาสตร์และคณิตศาสตร์ระดับประเทศ ประจำปี 2568 พร้อมรับถ้วยรางวัลเกียรติยศยอดเยี่ยมจากการประกวดโครงงาน
                </p>
                <Link href="#" className={styles.newsReadMore}>
                  อ่านเพิ่มเติม <ArrowRight size={18} />
                </Link>
              </div>
            </article>

            {/* News Item 3 */}
            <article className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop" 
                  alt="News 3" 
                  className={styles.newsImage} 
                />
                <span className={styles.newsCategory} data-type="activity">กิจกรรมโรงเรียน</span>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <CalendarDays size={16} />
                  <span>15 กุมภาพันธ์ 2026</span>
                </div>
                <h3 className={styles.newsTitle}>ภาพบรรยากาศวันกีฬาสีประจำปี และการแสดงพลังสามัคคี</h3>
                <p className={styles.newsExcerpt}>
                  ประมวลภาพความสนุกสนานและความประทับใจจากการแข่งขันกีฬาสีประจำปีการศึกษา 2568 ภายใต้แนวคิด "Spirti of Dusit" เพื่อส่งเสริมความสามัคคี รู้แพ้ รู้ชนะ รู้อภัย
                </p>
                <Link href="#" className={styles.newsReadMore}>
                  อ่านเพิ่มเติม <ArrowRight size={18} />
                </Link>
              </div>
            </article>
            
            {/* News Item 4 */}
            <article className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" 
                  alt="News 4" 
                  className={styles.newsImage} 
                />
                <span className={styles.newsCategory} data-type="job">รับสมัครงาน</span>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <CalendarDays size={16} />
                  <span>10 กุมภาพันธ์ 2026</span>
                </div>
                <h3 className={styles.newsTitle}>ประกาศรับสมัครครูผู้สอน สาขาวิชาภาษาอังกฤษ 2 ตำแหน่ง</h3>
                <p className={styles.newsExcerpt}>
                  โรงเรียนดุสิตวิทยามีความประสงค์รับสมัครบุคลากรครู ผู้มีคุณสมบัติเหมาะสมเพื่อปฏิบัติหน้าที่สอนในรายวิชาภาษาอังกฤษ ระดับมัธยมศึกษาตอนต้น สามารถส่งประวัติและเข้าสัมภาษณ์ได้ตั้งแต่วันนี้
                </p>
                <Link href="#" className={styles.newsReadMore}>
                  อ่านเพิ่มเติม <ArrowRight size={18} />
                </Link>
              </div>
            </article>
            
            {/* News Item 5 */}
            <article className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1544367567-0f2fcb0e2dec?q=80&w=2080&auto=format&fit=crop" 
                  alt="News 5" 
                  className={styles.newsImage} 
                />
                <span className={styles.newsCategory} data-type="general">ประกาศทั่วไป</span>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <CalendarDays size={16} />
                  <span>5 กุมภาพันธ์ 2026</span>
                </div>
                <h3 className={styles.newsTitle}>กำหนดการประชุมผู้ปกครองภาคเรียนที่ 2/2568</h3>
                <p className={styles.newsExcerpt}>
                  ขอเชิญชวนท่านผู้ปกครองทุกระดับชั้นเข้าร่วมประชุม เพื่อรับทราบผลสัมฤทธิ์ทางการเรียนของบุตรหลาน นโยบายการศึกษา และร่วมปรึกษาหารือกับครูประจำชั้นในวันเสาร์ที่ 14 มีนาคม เวลา 08:30 น.
                </p>
                <Link href="#" className={styles.newsReadMore}>
                  อ่านเพิ่มเติม <ArrowRight size={18} />
                </Link>
              </div>
            </article>
            
            {/* News Item 6 */}
            <article className={styles.newsCard}>
              <div className={styles.newsImageWrapper}>
                <img 
                  src="https://images.unsplash.com/photo-1588196749597-9ff046da6480?q=80&w=2070&auto=format&fit=crop" 
                  alt="News 6" 
                  className={styles.newsImage} 
                />
                <span className={styles.newsCategory} data-type="activity">กิจกรรมโรงเรียน</span>
              </div>
              <div className={styles.newsContent}>
                <div className={styles.newsDate}>
                  <CalendarDays size={16} />
                  <span>1 กุมภาพันธ์ 2026</span>
                </div>
                <h3 className={styles.newsTitle}>ทัศนศึกษาเปิดโลกกว้าง แหล่งเรียนรู้ทางประวัติศาสตร์และวัฒนธรรม</h3>
                <p className={styles.newsExcerpt}>
                  ประมวลภาพกิจกรรมทัศนศึกษาบูรณาการ 3 กลุ่มสาระ ของนักเรียนชั้นประถมศึกษาปีที่ 5 ณ อุทยานประวัติศาสตร์อยุธยา เพื่อเรียนรู้เรื่องโบราณสถานควบคู่กับการอนุรักษ์ธรรมชาติ
                </p>
                <Link href="#" className={styles.newsReadMore}>
                  อ่านเพิ่มเติม <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          </div>
          
          <div className={styles.pagination}>
            <button className={styles.pageBtn} disabled><ChevronLeft size={20} /></button>
            <button className={styles.pageBtn} data-active="true">1</button>
            <button className={styles.pageBtn}>2</button>
            <button className={styles.pageBtn}>3</button>
            <span style={{ display: 'flex', alignItems: 'center', margin: '0 0.5rem' }}>...</span>
            <button className={styles.pageBtn}>8</button>
            <button className={styles.pageBtn}><ChevronRight size={20} /></button>
          </div>
        </div>
      </section>
    </>
  );
}
