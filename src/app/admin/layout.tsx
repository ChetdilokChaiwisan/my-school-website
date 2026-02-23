'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Newspaper, 
  Users, 
  Image as ImageIcon, 
  Calendar, 
  Settings,
  LogOut
} from 'lucide-react';
import styles from './admin.module.css';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const navItems = [
    { name: 'แดชบอร์ด', path: '/admin', icon: LayoutDashboard },
    { name: 'จัดการข่าวสาร', path: '/admin/news', icon: Newspaper },
    { name: 'บุคลากร', path: '/admin/personnel', icon: Users },
    { name: 'แบนเนอร์/รูปภาพ', path: '/admin/banners', icon: ImageIcon },
    { name: 'ปฏิทินกิจกรรม', path: '/admin/calendar', icon: Calendar },
    { name: 'ตั้งค่าระบบ', path: '/admin/settings', icon: Settings },
  ];

  return (
    <div className={styles.adminContainer}>
      <aside className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <div className={styles.sidebarTitle}>ระบบหลังบ้าน (CMS)</div>
        </div>
        
        <nav className={styles.navMenu}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path || (pathname?.startsWith(item.path) && item.path !== '/admin');
            
            return (
              <Link 
                key={item.path} 
                href={item.path} 
                className={styles.navLink}
                data-active={isActive}
              >
                <Icon size={20} className={styles.navIcon} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        
        <div className={styles.logoutBtn}>
          <Link href="/" className={styles.logoutLink}>
            <LogOut size={20} />
            ออกจากระบบ
          </Link>
        </div>
      </aside>
      
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
}
