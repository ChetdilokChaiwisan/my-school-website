import { Target, Lightbulb, Users } from 'lucide-react';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <h1 className={`${styles.title} text-gradient`}>เกี่ยวกับโรงเรียน</h1>
          <p className={styles.subtitle}>
            รู้จักกับโรงเรียนดุสิตวิทยา ประวัติความเป็นมา วิสัยทัศน์ และทีมผู้บริหารของเรา
          </p>
        </div>
      </header>

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={`${styles.imageWrapper} animate-fade-in`}>
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop" 
              alt="School Campus" 
              className={styles.image}
            />
          </div>
          <div className={`${styles.content} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            <h2>ประวัติความเป็นมา</h2>
            <p>
              โรงเรียนดุสิตวิทยาก่อตั้งขึ้นเมื่อปี พ.ศ. 2510 ด้วยความมุ่งมั่นที่จะสร้างสถานศึกษาที่ให้ความสำคัญกับการพัฒนาผู้เรียนแบบองค์รวม ไม่เพียงแต่วิชาการที่เข้มข้นเท่านั้น แต่ยังปลูกฝังคุณธรรม จริยธรรม และทักษะชีวิตที่จำเป็นสำหรับอนาคต
            </p>
            <p>
              กว่าครึ่งศตวรรษที่เราได้ผลิตบุคลากรที่มีคุณภาพออกสู่สังคม โดยมีการพัฒนาหลักสูตร รูปแบบการเรียนการสอน และสิ่งอำนวยความสะดวกอย่างต่อเนื่อง เพื่อให้สอดคล้องกับการเปลี่ยนแปลงของโลกยุคใหม่
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.bgLight}`}>
        <div className="container">
          <div className={styles.personnelHeader}>
            <h2 className="text-gradient">วิสัยทัศน์และพันธกิจ</h2>
            <p className={styles.subtitle}>เข็มทิศนำทางสู่ความเป็นเลิศในการจัดการศึกษาของเรา</p>
          </div>
          
          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <Lightbulb className={styles.cardIcon} size={40} />
              <h3 className={styles.cardTitle}>วิสัยทัศน์ (Vision)</h3>
              <p className={styles.cardText}>
                โรงเรียนดุสิตวิทยา มุ่งมั่นเป็นสถาบันการศึกษาชั้นนำที่จัดการศึกษาในระดับมาตรฐานสากล พัฒนาผู้เรียนให้เป็นพลเมืองโลกที่มีความรู้คู่คุณธรรม มีทักษะในศตวรรษที่ 21 และมีความรับผิดชอบต่อสังคม
              </p>
            </div>
            
            <div className={styles.card}>
              <Target className={styles.cardIcon} size={40} />
              <h3 className={styles.cardTitle}>พันธกิจ (Mission)</h3>
              <p className={styles.cardText}>
                1. จัดการศึกษาที่เน้นผู้เรียนเป็นสำคัญ ส่งเสริมความเป็นเลิศทางวิชาการ<br/>
                2. บูรณาการเทคโนโลยีและนวัตกรรมใหม่ๆ เข้ากับการเรียนการสอน<br/>
                3. ปลูกฝังค่านิยมอันดีงาม จริยธรรม และจิตสาธารณะ<br/>
                4. พัฒนาศักยภาพครูและบุคลากรทางการศึกษาอย่างต่อเนื่อง
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.personnelHeader}>
            <Users style={{ color: 'var(--primary)', margin: '0 auto 1rem' }} size={48} />
            <h2 className="text-gradient">ทำเนียบผู้บริหาร</h2>
            <p className={styles.subtitle}>ทีมงานผู้บริหารที่เปี่ยมด้วยวิสัยทัศน์และประสบการณ์</p>
          </div>
          
          <div className={styles.personGrid}>
            <div className={styles.personCard}>
              <div className={styles.personImageWrapper}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" alt="Director" className={styles.personImage} />
              </div>
              <div className={styles.personInfo}>
                <h4 className={styles.personName}>ดร.สมชาย มุ่งมั่นศึกษา</h4>
                <p className={styles.personRole}>ผู้อำนวยการโรงเรียน</p>
                <p className={styles.personBio}>ผู้มีวิสัยทัศน์ในการนำเทคโนโลยีมาประยุกต์ใช้ในการบริหารและจัดการเรียนการสอน</p>
              </div>
            </div>
            
            <div className={styles.personCard}>
              <div className={styles.personImageWrapper}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop" alt="Vice Director" className={styles.personImage} />
              </div>
              <div className={styles.personInfo}>
                <h4 className={styles.personName}>นางสาววิลัย อุตสาหะ</h4>
                <p className={styles.personRole}>รองผู้อำนวยการฝ่ายวิชาการ</p>
                <p className={styles.personBio}>ผู้เชี่ยวชาญด้านการพัฒนาหลักสูตรและการจัดการเรียนรู้แบบ Active Learning</p>
              </div>
            </div>
            
            <div className={styles.personCard}>
              <div className={styles.personImageWrapper}>
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop" alt="Head of Student Affairs" className={styles.personImage} />
              </div>
              <div className={styles.personInfo}>
                <h4 className={styles.personName}>นายสุชาติ จิตอาสา</h4>
                <p className={styles.personRole}>รองผู้อำนวยการฝ่ายกิจการนักเรียน</p>
                <p className={styles.personBio}>ดูแลงานส่งเสริมทักษะชีวิต การทำกิจกรรม และสร้างระเบียบวินัยเชิงบวก</p>
              </div>
            </div>
            
            <div className={styles.personCard}>
              <div className={styles.personImageWrapper}>
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop" alt="Head of Administration" className={styles.personImage} />
              </div>
              <div className={styles.personInfo}>
                <h4 className={styles.personName}>นางพรทิพย์ บริหารวิทย์</h4>
                <p className={styles.personRole}>รองผู้อำนวยการฝ่ายบริหารทั่วไป</p>
                <p className={styles.personBio}>เชี่ยวชาญการบริหารจัดการทรัพยากร อาคารสถานที่ และความเป็นอยู่ของนักเรียน</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
