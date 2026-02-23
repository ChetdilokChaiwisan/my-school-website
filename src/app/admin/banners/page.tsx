import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit, Trash2, Image as ImageIcon, Eye, EyeOff } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminBannersPage() {
  const banners = await prisma.banner.findMany({
    orderBy: { order: 'asc' },
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)' }}>จัดการรูปภาพแบนเนอร์</h1>
        <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> อัปโหลดแบนเนอร์
        </button>
      </div>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        
        <p style={{ color: 'var(--foreground)', opacity: 0.7, marginBottom: '2rem' }}>
          เพิ่มและจัดการรูปภาพแบนเนอร์สไลด์ที่แสดงผลบนหน้าแรกของเว็บไซต์ (ควรใช้ขนาด 1920x800 พิกเซล)
        </p>

        {banners.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--foreground)', opacity: 0.6, border: '2px dashed var(--border)', borderRadius: 'var(--radius-md)' }}>
            <ImageIcon size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <p>ยังไม่มีรูปภาพแบนเนอร์ในระบบ</p>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {banners.map((banner, index) => (
              <div key={banner.id} style={{ 
                border: '1px solid var(--border)', 
                borderRadius: 'var(--radius-md)', 
                overflow: 'hidden',
                background: 'var(--background)'
              }}>
                <div style={{ width: '100%', aspectRatio: '21/9', background: 'var(--surface)', position: 'relative' }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={banner.imageUrl} alt={banner.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: banner.isActive ? 1 : 0.4 }} />
                  
                  {!banner.isActive && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.5)', color: 'white', fontWeight: 700 }}>
                      ซ่อนการแสดงผล
                    </div>
                  )}
                  
                  <div style={{ position: 'absolute', top: '0.5rem', right: '0.5rem', background: 'white', borderRadius: 'var(--radius-full)', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--foreground)' }}>
                    ลำดับที่ {banner.order}
                  </div>
                </div>
                
                <div style={{ padding: '1.25rem' }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.5rem', color: 'var(--foreground)' }}>{banner.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--foreground)', opacity: 0.6, marginBottom: '1.5rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    ลิงก์: {banner.linkUrl || 'ไม่มีลิงก์'}
                  </p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                    <button style={{ 
                      display: 'flex', alignItems: 'center', gap: '0.5rem', 
                      background: 'none', border: 'none', 
                      color: banner.isActive ? 'var(--foreground)' : 'var(--primary)', 
                      opacity: banner.isActive ? 0.6 : 1,
                      cursor: 'pointer', fontSize: '0.85rem', fontWeight: 600 
                    }}>
                      {banner.isActive ? <EyeOff size={16} /> : <Eye size={16} />}
                      {banner.isActive ? 'ซ่อน' : 'แสดง'}
                    </button>
                    
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', border: 'none', cursor: 'pointer' }}>
                        <Edit size={16} />
                      </button>
                      <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-sm)', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', border: 'none', cursor: 'pointer' }}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
