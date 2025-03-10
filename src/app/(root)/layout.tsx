import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

function PageLayout({ children }: { children: React.ReactNode; }) {
    return (
            <main>
                <Navbar />
                {children}
                <Footer />
            </main>
    );
}

export default PageLayout;
