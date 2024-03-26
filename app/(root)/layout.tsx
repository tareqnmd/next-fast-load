import { ReactNode } from 'react';

import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default layout;
