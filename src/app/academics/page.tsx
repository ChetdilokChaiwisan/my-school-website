import { CheckCircle2, FlaskConical, Globe, BookOpen, Trophy, Star, Medal } from 'lucide-react';
import styles from './page.module.css';

export default function AcademicsPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>หลักสูตรและการเรียนการสอน</h1>
          <p className={styles.subtitle}>
            เราจัดการศึกษาครอบคลุมตั้งแต่ระดับปฐมวัยถึงมัธยมศึกษาตอนปลาย ด้วยหลักสูตรที่ทันสมัยและตอบโจทย์อนาคต
          </p>
        </div>
      </header>

      {/* Levels of Education */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>ระดับชั้นที่เปิดสอน</h2>
            <div style={{ width: '80px', height: '4px', background: 'var(--primary)', margin: '0 auto', borderRadius: '2px' }}></div>
          </div>
          
          <div className={styles.levelGrid}>
            <div className={styles.levelCard}>
              <img src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?q=80&w=2070&auto=format&fit=crop" alt="Kindergarten" className={styles.levelImage} />
              <div className={styles.levelContent}>
                <h3 className={styles.levelTitle}>ระดับปฐมวัย (อนุบาล 1-3)</h3>
                <p className={styles.levelDesc}>
                  เน้นการเรียนรู้ผ่านการเล่น (Play-Based Learning) เพื่อพัฒนาการทางด้านร่างกาย อารมณ์ สังคม และสติปัญญา เตรียมความพร้อมสู่ระดับประถมศึกษา
                </p>
                <div className={styles.levelFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>ทักษะ EF (Executive Functions)</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>ภาษาอังกฤษเพื่อการสื่อสารระดับพื้นฐาน</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>กิจกรรมส่งเสริมความคิดสร้างสรรค์</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.levelCard}>
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Primary School" className={styles.levelImage} />
              <div className={styles.levelContent}>
                <h3 className={styles.levelTitle}>ระดับประถมศึกษา (ป.1-6)</h3>
                <p className={styles.levelDesc}>
                  สร้างรากฐานความรู้ที่แข็งแกร่งใน 8 กลุ่มสาระการเรียนรู้ เน้นการอ่านออก เขียนได้ คิดเลขเป็น และทักษะการแก้ปัญหาในศตวรรษที่ 21 
                </p>
                <div className={styles.levelFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>Active Learning Classroom</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>หลักสูตร Coding เบื้องต้น</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>ค่ายส่งเสริมศักยภาพทางวิชาการ</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.levelCard}>
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop" alt="Secondary School" className={styles.levelImage} />
              <div className={styles.levelContent}>
                <h3 className={styles.levelTitle}>ระดับมัธยมศึกษา (ม.1-6)</h3>
                <p className={styles.levelDesc}>
                  เตรียมความพร้อมสู่อุดมศึกษาด้วยหลักสูตรบูรณาการ สนับสนุนการค้นหาตัวตน และพัฒนาความเป็นเลิศทางวิชาการตามความถนัด
                </p>
                <div className={styles.levelFeatures}>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>ระบบแนะนำแนวการศึกษาต่อ</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>ภาษาที่ 3 (จีน/ญี่ปุ่น)</span>
                  </div>
                  <div className={styles.featureItem}>
                    <CheckCircle2 size={18} className={styles.featureIcon} />
                    <span>ชมรมอิสระที่นักเรียนบริหารจัดการเอง</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs */}
      <section className={`${styles.section} ${styles.programSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="text-gradient">โปรแกรมพิเศษ (Special Programs)</h2>
            <p className={styles.subtitle}>เพิ่มทางเลือกในการเรียนรู้เพื่อตอบสนองศักยภาพของผู้เรียนแต่ละบุคคล</p>
          </div>
          
          <div className={styles.programGrid}>
            <div>
              <div className={styles.programCard}>
                <div className={styles.programCardIcon}>
                  <Globe size={32} />
                </div>
                <div className={styles.programContent}>
                  <h3>English Program (EP)</h3>
                  <p>เรียนภาษาอังกฤษกับครูเจ้าของภาษา (Native Speaker) ในรายวิชาหลัก เน้นการใช้ภาษาในสถานการณ์จริง พร้อมค่ายภาษาอังกฤษภาคฤดูร้อน</p>
                </div>
              </div>
              
              <div className={styles.programCard}>
                <div className={styles.programCardIcon}>
                  <FlaskConical size={32} />
                </div>
                <div className={styles.programContent}>
                  <h3>ห้องเรียนพิเศษวิทยาศาสตร์ (SMTE)</h3>
                  <p>ส่งเสริมอัจฉริยภาพทางวิทยาศาสตร์และเทคโนโลยีร่วมกับมหาวิทยาลัยชั้นนำ มีการทำโครงงานวิทยาศาสตร์และทัศนศึกษานอกสถานที่</p>
                </div>
              </div>
              
              <div className={styles.programCard}>
                <div className={styles.programCardIcon}>
                  <BookOpen size={32} />
                </div>
                <div className={styles.programContent}>
                  <h3>ห้องเรียนพิเศษคณิตศาสตร์ (Gifted Math)</h3>
                  <p>มุ่งเน้นกระบวนการคิดวิเคราะห์ แก้ไขปัญหาทางคณิตศาสตร์ในระดับสูง พร้อมติวเข้มเพื่อการแข่งขันระดับชาติ</p>
                </div>
              </div>
            </div>
            
            <div className={styles.programImage} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--glass-shadow)' }}>
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop" alt="Students studying" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <Trophy size={48} style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} />
            <h2>ผลงานและรางวัลที่ภาคภูมิใจ</h2>
          </div>
          
          <div className={styles.achievementGrid}>
            <div className={styles.achieveCard}>
              <Star size={40} className={styles.achieveIcon} />
              <div className={styles.achieveValue}>100%</div>
              <div className={styles.achieveLabel}>นักเรียน ม.6 สอบติดมหาวิทยาลัยรัฐ</div>
            </div>
            
            <div className={styles.achieveCard}>
              <Medal size={40} className={styles.achieveIcon} />
              <div className={styles.achieveValue}>50+</div>
              <div className={styles.achieveLabel}>เหรียญทองการแข่งขันวิชาการ</div>
            </div>
            
            <div className={styles.achieveCard}>
              <Trophy size={40} className={styles.achieveIcon} />
              <div className={styles.achieveLabel} style={{ marginTop: '1rem' }}>โรงเรียนพระราชทานประจำปีการศึกษา 2565</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
