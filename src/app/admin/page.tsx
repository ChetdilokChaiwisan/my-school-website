import { prisma } from '@/lib/prisma';
import styles from './admin.module.css';
import { Newspaper, Users, ImageIcon, Calendar } from 'lucide-react';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  // Fetch counts from database
  const [newsCount, personnelCount, bannerCount, eventCount] = await Promise.all([
    prisma.news.count(),
    prisma.personnel.count(),
    prisma.banner.count(),
    prisma.event.count()
  ]);

  // Fetch recent activities
  const recentNews = await prisma.news.findMany({
    orderBy: { createdAt: 'desc' },
    take: 5
  });

  return (
    <>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>ภาพรวมระบบ (Dashboard)</h1>
      </div>

      <div className={styles.statGrid}>
        <div className={styles.statCard}>
          <div className={styles.statIconWrapper} style={{ color: '#0ea5e9' }}>
            <Newspaper size={32} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>ข่าวสารและประกาศ</span>
            <span className={styles.statValue}>{newsCount}</span>
          </div>
        </div>
        
        <div className={styles.statCard}>
          <div className={styles.statIconWrapper} style={{ color: '#10b981' }}>
            <Users size={32} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>บุคลากรทั้งหมด</span>
            <span className={styles.statValue}>{personnelCount}</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrapper} style={{ color: '#f59e0b' }}>
            <ImageIcon size={32} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>แบนเนอร์ที่ใช้งาน</span>
            <span className={styles.statValue}>{bannerCount}</span>
          </div>
        </div>

        <div className={styles.statCard}>
          <div className={styles.statIconWrapper} style={{ color: '#8b5cf6' }}>
            <Calendar size={32} />
          </div>
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>กิจกรรมตามปฏิทิน</span>
            <span className={styles.statValue}>{eventCount}</span>
          </div>
        </div>
      </div>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>ข่าวสารล่าสุดที่เพิ่มในระบบ</h2>
          <Link href="/admin/news" className="btn btn-outline" style={{ padding: '0.4rem 1rem', fontSize: '0.875rem' }}>
            จัดการข่าว
          </Link>
        </div>
        
        {recentNews.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '3rem 0', color: 'var(--foreground)', opacity: 0.6 }}>
            ยังไม่มีข้อมูลข่าวสารในระบบ
          </div>
        ) : (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>หัวข้อข่าว</th>
                <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>หมวดหมู่</th>
                <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>วันที่สร้าง</th>
              </tr>
            </thead>
            <tbody>
              {recentNews.map(news => (
                <tr key={news.id} style={{ borderBottom: '1px solid var(--border)' }}>
                  <td style={{ padding: '1rem', fontWeight: 500 }}>{news.title}</td>
                  <td style={{ padding: '1rem' }}>
                    <span style={{ 
                      background: 'var(--background)', 
                      padding: '0.25rem 0.75rem', 
                      borderRadius: '1rem',
                      fontSize: '0.8rem',
                      color: 'var(--primary)'
                    }}>
                      {news.category}
                    </span>
                  </td>
                  <td style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontSize: '0.875rem' }}>
                    {new Date(news.createdAt).toLocaleDateString('th-TH')}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
