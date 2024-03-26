import '@/styles/global.scss';
import type { Metadata } from 'next';
import { ReactNode } from 'react';

export const metadata: Metadata = {
	title: 'Tareqnmd',
	description: 'Tareqnmd',
	other: {
		'theme-color': '#0d1117',
		'color-scheme': 'dark only',
		'og:url': 'tareqnmd.com',
		'og:type': 'website',
	},
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className="min-h-screen bg-black-100 font-poppins">{children}</body>
		</html>
	);
}
