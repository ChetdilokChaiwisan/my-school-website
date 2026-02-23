import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, BookOpen, Calendar, Users, Trophy } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBg}></div>
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} animate-fade-in`}>โรงเรียนดุสิตวิทยา</h1>
          <p className={`${styles.heroSubtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            มุ่งมั่นความเป็นเลิศทางวิชาการ ปลูกฝังคุณธรรม สร้างผู้นำแห่งอนาคต ด้วยสภาพแวดล้อมที่เอื้อต่อการเรียนรู้แบบบูรณาการ
          </p>
          <div className={`${styles.heroActions} animate-fade-in`} style={{ animationDelay: '0.4s' }}>
            <Link href="/admissions" className={styles.heroPrimaryBtn}>
              สมัครเรียนออนไลน์
            </Link>
            <Link href="/about" className={styles.heroBtn}>
              รู้จักโรงเรียน
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className={styles.quickLinks}>
        <div className={styles.quickLinksGrid}>
          <Link href="/admissions" className={`${styles.card} glass`}>
            <div className={styles.iconWrapper}>
              <BookOpen size={28} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>การรับสมัคร</h3>
              <p className={styles.cardText}>ข้อมูลและระเบียบการรับสมัครนักเรียนใหม่ประจำปีการศึกษา</p>
            </div>
          </Link>
          
          <Link href="/calendar" className={`${styles.card} glass`}>
            <div className={styles.iconWrapper}>
              <Calendar size={28} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>ปฏิทินการศึกษา</h3>
              <p className={styles.cardText}>กำหนดการและกิจกรรมสำคัญตลอดปีการศึกษา</p>
            </div>
          </Link>
          
          <Link href="/student-portal" className={`${styles.card} glass`}>
            <div className={styles.iconWrapper}>
              <Users size={28} />
            </div>
            <div>
              <h3 className={styles.cardTitle}>ระบบตรวจสอบผลการเรียน</h3>
              <p className={styles.cardText}>สำหรับนักเรียนและผู้ปกครองตรวจสอบผลการเรียน</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="section-padding container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>ข่าวสารและ <span className="text-gradient">กิจกรรมล่าสุด</span></h2>
          <p className={styles.sectionSubtitle}>ติดตามอัปเดต กิจกรรม ความเคลื่อนไหว และประกาศสำคัญจากทางโรงเรียน</p>
        </div>
        
        <div className={styles.newsGrid}>
          {/* Dummy News Item 1 */}
          <article className={styles.newsCard}>
            <div className={styles.newsImageWrapper}>
              {/* Note: In a real app we'd use next/image with the remote URL pattern configured */}
              <img 
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2070&auto=format&fit=crop" 
                alt="School Activity" 
                className={styles.newsImage}
              />
              <span className={styles.newsCategory}>ประกาศ</span>
            </div>
            <div className={styles.newsContent}>
              <span className={styles.newsDate}>24 กุมภาพันธ์ 2026</span>
              <h3 className={styles.newsTitle}>ประกาศรับสมัครนักเรียนใหม่ ปีการศึกษา 2569</h3>
              <Link href="/news/1" className={styles.newsReadMore}>
                อ่านเพิ่มเติม <ArrowRight size={16} />
              </Link>
            </div>
          </article>
          
          {/* Dummy News Item 2 */}
          <article className={styles.newsCard}>
            <div className={styles.newsImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" 
                alt="Classroom" 
                className={styles.newsImage}
              />
              <span className={styles.newsCategory}>วิชาการ</span>
            </div>
            <div className={styles.newsContent}>
              <span className={styles.newsDate}>20 กุมภาพันธ์ 2026</span>
              <h3 className={styles.newsTitle}>ความสำเร็จของนักเรียนในการแข่งขันวิชาการระดับชาติ</h3>
              <Link href="/news/2" className={styles.newsReadMore}>
                อ่านเพิ่มเติม <ArrowRight size={16} />
              </Link>
            </div>
          </article>
          
          {/* Dummy News Item 3 */}
          <article className={styles.newsCard}>
            <div className={styles.newsImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1511629091441-ee46146481b6?q=80&w=2070&auto=format&fit=crop" 
                alt="Sports Event" 
                className={styles.newsImage}
              />
              <span className={styles.newsCategory}>กิจกรรม</span>
            </div>
            <div className={styles.newsContent}>
              <span className={styles.newsDate}>15 กุมภาพันธ์ 2026</span>
              <h3 className={styles.newsTitle}>ภาพบรรยากาศวันกีฬาสีประจำปี และการแสดงพลังสามัคคี</h3>
              <Link href="/news/3" className={styles.newsReadMore}>
                อ่านเพิ่มเติม <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        </div>
        
        <div className="flex-center" style={{ marginTop: '3rem' }}>
          <Link href="/news" className="btn btn-outline">
            ดูข่าวสารทั้งหมด
          </Link>
        </div>
      </section>

      {/* Director's Message Section */}
      <section className="container" style={{ paddingBottom: '5rem' }}>
        <div className={styles.messageSection}>
          <div className={styles.messageContent}>
            <p className={styles.quote}>
              "เราเชื่อว่าเด็กทุกคนมีศักยภาพที่ไร้ขีดจำกัด หน้าที่ของเราคือการสร้างสภาพแวดล้อมที่เหมาะสม เพื่อให้พวกเขาได้ค้นพบพรสวรรค์ของตนเองและเติบโตเป็นพลเมืองที่มีคุณภาพของสังคมโลก"
            </p>
            <div>
              <p className={styles.author}>ดร. สมชาย มุ่งมั่นศึกษา</p>
              <p style={{ color: 'var(--foreground)', opacity: 0.7, fontSize: '0.875rem' }}>ผู้อำนวยการโรงเรียนดุสิตวิทยา</p>
            </div>
          </div>
          <div className={styles.messageImage}></div>
        </div>
      </section>
    </>
  );
}
