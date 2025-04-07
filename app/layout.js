import './global.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'Kitchen Code LMS',
  description: 'Belajar percabangan pakai game',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
