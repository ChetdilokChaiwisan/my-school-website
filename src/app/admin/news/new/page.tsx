'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Save, Image as ImageIcon, Paperclip } from 'lucide-react';

export default function NewNewsPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'ประกาศทั่วไป',
    content: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // In a real app we'd call an API route here
      // Placeholder simulating network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/admin/news');
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        <Link href="/admin/news" style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--border)', display: 'flex' }}>
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)', margin: 0 }}>สร้างข่าวสารใหม่</h1>
      </div>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>หัวข้อข่าว <span style={{ color: '#f43f5e' }}>*</span></label>
            <input 
              type="text" 
              required
              value={formData.title}
              onChange={(e) => setFormData({...formData, title: e.target.value})}
              style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} 
              placeholder="กรอกหัวข้อข่าวสาร..."
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>หมวดหมู่ <span style={{ color: '#f43f5e' }}>*</span></label>
              <select 
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }}
              >
                <option value="ประกาศทั่วไป">ประกาศทั่วไป</option>
                <option value="ข่าววิชาการ">ข่าววิชาการ</option>
                <option value="กิจกรรมโรงเรียน">กิจกรรมโรงเรียน</option>
                <option value="รับสมัครงาน">รับสมัครงาน</option>
              </select>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>วันที่เผยแพร่ (เป็นค่าเริ่มต้นคือวันนี้)</label>
              <input 
                type="date" 
                style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem' }} 
              />
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>รูปภาพหน้าปก</label>
            <div style={{ 
              border: '2px dashed var(--border)', 
              borderRadius: 'var(--radius-md)', 
              padding: '2rem', 
              textAlign: 'center',
              background: 'var(--background)',
              cursor: 'pointer'
            }}>
              <ImageIcon size={48} style={{ margin: '0 auto 1rem', color: 'var(--primary)', opacity: 0.5 }} />
              <p style={{ margin: 0, fontWeight: 500 }}>คลิกหรือลากรูปภาพมาวางที่นี่เพื่ออัปโหลด</p>
              <p style={{ margin: '0.5rem 0 0', fontSize: '0.85rem', opacity: 0.6 }}>รองรับไฟล์ JPG, PNG ขนาดไม่เกิน 5MB</p>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>เนื้อหาข่าว <span style={{ color: '#f43f5e' }}>*</span></label>
            <textarea 
              required
              value={formData.content}
              onChange={(e) => setFormData({...formData, content: e.target.value})}
              style={{ width: '100%', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', background: 'var(--background)', fontSize: '1rem', minHeight: '300px', resize: 'vertical' }} 
              placeholder="พิมพ์เนื้อหาข่าวสารที่นี่..."
            ></textarea>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 600 }}>ไฟล์แนบ (PDF, Word, Excel)</label>
            <button type="button" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              <Paperclip size={18} /> อัปโหลดไฟล์แนบ
            </button>
          </div>

          <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
            <Link href="/admin/news" className="btn btn-outline">
              ยกเลิก
            </Link>
            <button type="submit" className="btn btn-primary" disabled={isSubmitting} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Save size={18} />
              {isSubmitting ? 'กำลังบันทึก...' : 'บันทึกเผยแพร่'}
            </button>
          </div>

        </form>
      </div>
    </>
  );
}
