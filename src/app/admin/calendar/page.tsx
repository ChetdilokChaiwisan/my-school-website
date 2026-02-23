import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import { Plus, Edit, Trash2, Calendar as CalendarIcon, Clock } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default async function AdminCalendarPage() {
  const events = await prisma.event.findMany({
    orderBy: { date: 'asc' },
  });

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 0 2.5rem' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--foreground)' }}>จัดการปฏิทินกิจกรรม</h1>
        <button className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
          <Plus size={18} /> เพิ่มกิจกรรมใหม่
        </button>
      </div>

      <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius-lg)', padding: '2rem', border: '1px solid var(--border)', boxShadow: 'var(--glass-shadow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--foreground)' }}>รายการกิจกรรมที่กำลังจะมาถึง</h2>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <button className="btn btn-outline" style={{ padding: '0.4rem 1rem' }}>รายการทั้งหมด</button>
            <button className="btn btn-outline" style={{ padding: '0.4rem 1rem', background: 'var(--primary)', color: 'white', borderColor: 'var(--primary)' }}>เดือนนี้</button>
          </div>
        </div>

        {events.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--foreground)', opacity: 0.6 }}>
            <CalendarIcon size={48} style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
            <p>ยังไม่มีกิจกรรมในระบบ คลิกปุ่ม "เพิ่มกิจกรรมใหม่" เพื่อสร้างกิจกรรมแรก</p>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {events.map((event) => {
              const eventDate = new Date(event.date);
              
              return (
                <div key={event.id} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.5rem', 
                  padding: '1.5rem', 
                  background: 'var(--background)', 
                  borderRadius: 'var(--radius-md)', 
                  border: '1px solid var(--border)',
                  transition: 'var(--transition)'
                }}>
                  <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    background: 'rgba(168, 85, 247, 0.1)', 
                    color: 'var(--primary)', 
                    minWidth: '80px', 
                    height: '80px', 
                    borderRadius: 'var(--radius-md)' 
                  }}>
                    <span style={{ fontSize: '1.75rem', fontWeight: 800, lineHeight: 1 }}>{eventDate.getDate()}</span>
                    <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{eventDate.toLocaleString('th-TH', { month: 'short' })}</span>
                  </div>
                  
                  <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--foreground)' }}>{event.title}</h3>
                    <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--foreground)', opacity: 0.7, fontSize: '0.875rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <Clock size={14} />
                        <span>
                          {eventDate.toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.
                          {event.endDate ? ` - ${new Date(event.endDate).toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' })} น.` : ''}
                        </span>
                      </div>
                      {event.location && (
                        <div>
                          <span>📍 {event.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(14, 165, 233, 0.1)', color: '#0ea5e9', border: 'none', cursor: 'pointer' }}>
                      <Edit size={16} />
                    </button>
                    <button style={{ padding: '0.5rem', borderRadius: 'var(--radius-md)', background: 'rgba(244, 63, 94, 0.1)', color: '#f43f5e', border: 'none', cursor: 'pointer' }}>
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
