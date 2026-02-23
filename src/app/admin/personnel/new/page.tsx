'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, User as UserIcon } from 'lucide-react';

export default function NewPersonnelPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    category: 'Teacher',
    subject: '',
    bio: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/admin/personnel');
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', margin: '0 0 2.5rem' }}>
        <Link href="/admin/personnel" style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex' }}>
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>เพิ่มบุคลากรใหม่</h1>
      </div>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {/* Top Section with Image and Basic Info */}
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 3fr', gap: '2rem', alignItems: 'start' }}>
            
            {/* Photo Upload area */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600, textAlign: 'center' }}>รูปถ่ายบุคลากร</label>
              <div style={{ 
                width: '100%', 
                aspectRatio: '3/4', 
                border: '2px dashed var(--border)', 
                borderRadius: 'var(--radius-md)', 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--background)',
                cursor: 'pointer',
                padding: '1rem'
              }}>
                <UserIcon size={48} style={{ color: 'var(--primary)', opacity: 0.5, marginBottom: '0.5rem' }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600 }}>อัปโหลดรูปถ่าย</span>
              </div>
            </div>

            {/* Basic Info Fields */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ชื่อ-นามสกุล <span style={{ color: '#f43f5e' }}>*</span></label>
                <input 
                  type="text" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} 
                  placeholder="เช่น นายสมชาย รักดี"
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>กลุ่มบริหาร/หมวดหมู่ <span style={{ color: '#f43f5e' }}>*</span></label>
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }}
                  >
                    <option value="Administrator">คณะผู้บริหาร (Administrator)</option>
                    <option value="Teacher">คณะครูผู้สอน (Teacher)</option>
                    <option value="Staff">บุคลากรสายสนับสนุน (Staff)</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ตำแหน่ง <span style={{ color: '#f43f5e' }}>*</span></label>
                  <input 
                    type="text" 
                    required
                    value={formData.position}
                    onChange={(e) => setFormData({...formData, position: e.target.value})}
                    style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} 
                    placeholder="เช่น ผู้อำนวยการ, ครูประจำชั้น ป.6"
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>กลุ่มสาระการเรียนรู้ (เฉพาะครูผู้สอน)</label>
                <input 
                  type="text" 
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  disabled={formData.category !== 'Teacher'}
                  style={{ 
                    width: '100%', 
                    padding: '0.75rem 1rem', 
                    borderRadius: 'var(--radius-md)', 
                    border: '1px solid var(--border)', 
                    background: 'var(--background)', 
                    fontSize: '1rem',
                    opacity: formData.category !== 'Teacher' ? 0.6 : 1
                  }} 
                  placeholder="เช่น วิทยาศาสตร์, คณิตศาสตร์"
                />
              </div>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ประวัติและผลงาน (Bio)</label>
            <textarea 
              value={formData.bio}
              onChange={(e) => setFormData({...formData, bio: e.target.value})}
              style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem', minHeight: '150px', resize: 'vertical' }} 
              placeholder="ประวัติการศึกษา ประสบการณ์ทำงาน หรือผลงานที่โดดเด่น..."
            ></textarea>
          </div>
          
          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <Link href="/admin/personnel" className="btn btn-outline">
              ยกเลิก
            </Link>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Save size={18} />
              {isSubmitting ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
            </button>
          </div>

        </form>
      </div>
    </>
  );
}
