import { prisma } from '@/lib/prisma';
import { Plus, Edit, Trash2, Shield, Settings as SettingsIcon } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminSettingsPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)' }}>ตั้งค่าระบบ</h1>
      </div>

      {/* System Settings */}
      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)', marginBottom: '3rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(168, 85, 247, 0.1)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <SettingsIcon size={24} />
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>ข้อมูลพื้นฐานโรงเรียน</h2>
        </div>
        
        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ชื่อโรงเรียน</label>
            <input type="text" defaultValue="โรงเรียนดุสิตวิทยา" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)' }} />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ปีการศึกษาปัจจุบัน</label>
            <input type="text" defaultValue="2568" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)' }} />
          </div>
          <div style={{ gridColumn: '1 / -1' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ที่อยู่</label>
            <textarea defaultValue="123 ถนนตัวอย่าง ตำบลในเมือง อำเภอเมือง จังหวัดกรุงเทพมหานคร 10100" style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', minHeight: '80px', resize: 'vertical' }}></textarea>
          </div>
          <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
            <button type="button" className="btn btn-primary">บันทึกข้อมูลพื้นฐาน</button>
          </div>
        </form>
      </div>

      {/* User Roles */}
      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: 'var(--radius-md)', background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Shield size={24} />
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>ผู้ดูแลระบบ (Admin Users)</h2>
          </div>
          
          <button className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem' }}>
            <Plus size={16} /> สร้างบัญชีใหม่
          </button>
        </div>
        
        {users.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '2rem 0', color: 'var(--foreground)', opacity: 0.6 }}>
            ไม่พบข้อมูลผู้ดูแลระบบ
          </div>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '600px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border)', textAlign: 'left' }}>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>ชื่อผู้ใช้ (Username)</th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>สิทธิ์การใช้งาน (Role)</th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600 }}>วันที่สร้าง</th>
                  <th style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontWeight: 600, textAlign: 'right' }}>จัดการ</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} style={{ borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{user.username}</td>
                    <td style={{ padding: '1rem' }}>
                      <span style={{ 
                        background: user.role === 'SUPERADMIN' ? 'rgba(168, 85, 247, 0.1)' : 'rgba(14, 165, 233, 0.1)', 
                        padding: '0.25rem 0.75rem', 
                        borderRadius: '1rem',
                        fontSize: '0.8rem',
                        color: user.role === 'SUPERADMIN' ? 'var(--primary)' : '#0ea5e9',
                        fontWeight: 600
                      }}>
                        {user.role}
                      </span>
                    </td>
                    <td style={{ padding: '1rem', color: 'var(--foreground)', opacity: 0.8, fontSize: '0.875rem' }}>
                      {new Date(user.createdAt).toLocaleDateString('th-TH')}
                    </td>
                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem' }}>
                        <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', border: 'none', cursor: 'pointer' }}>
                          <Edit size={16} />
                        </button>
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
