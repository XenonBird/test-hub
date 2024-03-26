import Footer from '@/components/footer';
import Header from '@/components/header';

export default function UserPageLayout({ children }) {
  const links = [
    {
      text: 'Dashboard',
      address: '/student/',
    },
    {
      text: 'Exams',
      address: '/student/exams',
    },
    // {
    //   text: 'Create Exam',
    //   address: '/student/exams/create',
    // },
    {
      text: 'Take exam',
      address: '/student/exams/12345',
    },
    {
      text: 'Profile',
      address: '/student/profile',
    },
  ];
  return (
    <>
      <Header links={links} />
      {children}
      <Footer />
    </>
  );
}
