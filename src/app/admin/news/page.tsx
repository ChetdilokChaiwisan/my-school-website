import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminNewsPage() {
  const news = await prisma.news.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)' }}>จัดการข่าวสาร</h1>
        <Link href="/admin/news/new" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> เพิ่มข่าวใหม่
        </Link>
      </div>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--foreground)', opacity: 0.5 }} />
            <input 
              type="text" 
              placeholder="ค้นหาข่าว..." 
              style={{ 
                width: '100%', 
                padding: '0.5rem 1rem 0.5rem 2.5rem', 
                borderRadius: 'var(--radius-md)', 
                border: '1px solid var(--border)', 
                background: 'var(--background)' 
              }} 
            />
          </div>
          
          <select style={{ 
            padding: '0.5rem 1rem', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--border)', 
            background: 'var(--background)' 
          }}>
            <option value="">ทุกหมวดหมู่</option>
            <option value="general">ประกาศทั่วไป</option>
            <option value="academic">ข่าววิชาการ</option>
            <option value="activity">กิจกรรมโรงเรียน</option>
          </select>
        </div>

        {news.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--foreground)', opacity: 0.6 }}>
            ไม่มีข้อมูลข่าวสาร คลิกปุ่ม "เพิ่มข่าวใหม่" เพื่อสร้างข่าวแรก
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>หัวข้อข่าว</th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>หมวดหมู่</th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>วันที่สร้าง</th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, textAlign: 'right' }}>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {news.map(item => (
                  <tr key={item.id} style={{ borderBottom: '1px solid var(--border)', transition: 'background 0.2s', ':hover': { background: 'rgba(168, 85, 247, 0.05)' } } as any}>
                    <td style={{ padding: '1rem', fontWeight: 500 }}>{item.title}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        background: 'var(--background)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '1rem',
                        fontSize: '0.8rem',
                        color: 'var(--primary)',
                        border: '1px solid var(--border)'
                      }}>
                        {item.category}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontSize: '0.875rem' }}>
                      {new Date(item.createdAt).toLocaleDateString('th-TH')}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <Link href={`/admin/news/${item.id}/edit`} style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9' }}>
                          <Edit size={16} />
                        </Link>
                        <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', border: 'none', cursor: 'pointer' }}>
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
}
