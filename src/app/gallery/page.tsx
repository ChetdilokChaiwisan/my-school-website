import { ChevronLeft, ChevronRight, Image as ImageIcon, Calendar } from 'lucide-react';
import styles from './page.module.css';

export default function GalleryPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>ภาพกิจกรรมและปฏิทิน</h1>
          <p className={styles.subtitle}>
            รวมภาพความประทับใจจากกิจกรรมต่างๆ และปฏิทินการศึกษาของโรงเรียน
          </p>
        </div>
      </header>

      {/* Gallery Section */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <ImageIcon size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h2>แกลเลอรีภาพกิจกรรม</h2>
          </div>
          
          <div className={styles.galleryGrid}>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" alt="Gallery" className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryTitle}>กิจกรรมกีฬาสี ปี 2568</div>
                <div className={styles.galleryDate}>15 มกราคม 2568</div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Gallery" className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryTitle}>ค่ายวิทยาศาสตร์</div>
                <div className={styles.galleryDate}>20 กุมภาพันธ์ 2568</div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop" alt="Gallery" className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryTitle}>งานวิชาการประจำปี</div>
                <div className={styles.galleryDate}>5 มีนาคม 2568</div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop" alt="Gallery" className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryTitle}>พิธีมอบประกาศนียบัตรนักเรียน ม.6</div>
                <div className={styles.galleryDate}>30 มีนาคม 2568</div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1543165365-07232ed12fad?q=80&w=2070&auto=format&fit=crop" alt="Gallery" className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryTitle}>กิจกรรมเข้าค่ายลูกเสือ</div>
                <div className={styles.galleryDate}>10 เมษายน 2568</div>
              </div>
            </div>
            <div className={styles.galleryItem}>
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" alt="Gallery" className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <div className={styles.galleryTitle}>การประกวดวงโยธวาทิต</div>
                <div className={styles.galleryDate}>25 เมษายน 2568</div>
              </div>
            </div>
          </div>
          
          <div className="flex-center" style={{ marginTop: '3rem' }}>
            <button className="btn btn-outline">ดูอัลบั้มทั้งหมด</button>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Calendar size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h2 className="text-gradient">ปฏิทินกิจกรรมการศึกษา</h2>
          </div>
          
          <div className={styles.calendarContainer}>
            <div className={styles.calendarNav}>
              <button className={styles.navBtn}>
                <ChevronLeft size={20} />
              </button>
              <div className={styles.currentMonth}>มีนาคม 2569</div>
              <button className={styles.navBtn}>
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>03</span>
                  <span className={styles.eventMonth}>มี.ค.</span>
                </div>
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>สอบปลายภาคเรียนที่ 2/2568</h3>
                  <p className={styles.eventDesc}>ระดับชั้นประถมศึกษาปีที่ 1-6 และมัธยมศึกษาปีที่ 1-3 (วันที่ 1)</p>
                </div>
              </div>
              
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>15</span>
                  <span className={styles.eventMonth}>มี.ค.</span>
                </div>
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>วันประกาศผลสอบและรับสมุดพก</h3>
                  <p className={styles.eventDesc}>ผู้ปกครองสามารถเข้ารับสมุดรายงานผลการเรียนและพบครูประจำชั้นได้ตั้งแต่เวลา 08:30 - 12:00 น.</p>
                </div>
              </div>
              
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>31</span>
                  <span className={styles.eventMonth}>มี.ค.</span>
                </div>
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>วันปิดภาคเรียนที่ 2 ประจำปีการศึกษา 2568</h3>
                  <p className={styles.eventDesc}>เริ่มปิดภาคเรียนฤดูร้อนสำหรับนักเรียนทุกคนที่ไม่ได้ลงทะเบียนเรียนเสริม</p>
                </div>
              </div>
              
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <span className={styles.eventDay}>15</span>
                  <span className={styles.eventMonth}>พ.ค.</span>
                </div>
                <div className={styles.eventContent}>
                  <h3 className={styles.eventTitle}>วันเปิดภาคเรียนที่ 1 ประจำปีการศึกษา 2569</h3>
                  <p className={styles.eventDesc}>ปฐมนิเทศนักเรียนใหม่ และเริ่มการเรียนการสอนสำหรับภาคเรียนที่ 1</p>
                </div>
              </div>
            </div>
            
            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
              <a href="#" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.95rem' }}>ดาวน์โหลดปฏิทิน PDF เต็มปี</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
