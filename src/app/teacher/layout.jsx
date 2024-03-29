import Footer from '@/components/footer';
import Header from '@/components/header';

export default function UserPageLayout({ children }) {
  const links = [
    {
      text: 'Dashboard',
      address: '/teacher/',
    },
    {
      text: 'Exams',
      address: '/teacher/exams',
    },
    {
      text: 'Create Exam',
      address: '/teacher/exams/create',
    },
    {
      text: 'Students',
      address: '/teacher/students',
    },
    {
      text: 'Profile',
      address: '/teacher/profile',
    },
    {
      text: 'Be Student',
      address: '/student',
    },
  ];
  return (
    <>
      <div>
        <Header links={links} logoutButton={true} />
        {children}
        <Footer />
      </div>
    </>
  );
}
