import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [isDarkMode, setIsDarkMode] = React.useState(false);
	const isMobile = useIsMobile();

	React.useEffect(() => {
		// Check for dark mode preference
		const isDark =
			localStorage.getItem('darkMode') === 'true' ||
			(window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches);
		setIsDarkMode(isDark);
		if (isDark) {
			document.documentElement.classList.add('dark');
		}
	}, []);

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
		if (isDarkMode) {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('darkMode', 'false');
		} else {
			document.documentElement.classList.add('dark');
			localStorage.setItem('darkMode', 'true');
		}
	};

	const navItems = [
		{ name: 'Home', href: '#home' },
		{ name: 'About', href: '#about' },
		{ name: 'Projects', href: '#projects' },
		{ name: 'Contact', href: '#contact' },
	];

	return (
		<nav className="fixed w-full py-2 bg-background/80 backdrop-blur-md z-50 border-b border-border">
			<div className="container mx-auto flex justify-between items-center py-4">
				<a
					href="#home"
					className="text-xl font-inter font-bold text-cloud-dark-blue dark:text-white flex items-center"
				>
					<span className="text-cloud-bright-blue mr-1">&lt;</span>
					Cloud Dev
					<span className="text-cloud-bright-blue ml-1">&gt;</span>
					<span className="text-cloud-azure"> Daily</span>
				</a>

				{/* Desktop Navigation */}
				<div className="hidden md:flex items-center space-x-6">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className="font-inter transition-colors hover:text-cloud-bright-blue"
						>
							{item.name}
						</a>
					))}
					<Button
						variant="ghost"
						size="icon"
						onClick={toggleDarkMode}
						className="ml-2"
					>
						{isDarkMode ? (
							<Sun className="h-5 w-5 text-yellow-400" />
						) : (
							<Moon className="h-5 w-5 text-cloud-dark-blue" />
						)}
					</Button>
					<Button className="cloud-button">Resume</Button>
				</div>

				{/* Mobile Navigation Toggle */}
				<div className="flex md:hidden items-center space-x-2">
					<Button variant="ghost" size="icon" onClick={toggleDarkMode}>
						{isDarkMode ? (
							<Sun className="h-5 w-5 text-yellow-400" />
						) : (
							<Moon className="h-5 w-5 text-cloud-dark-blue" />
						)}
					</Button>
					<Button
						variant="ghost"
						size="icon"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</Button>
				</div>
			</div>

			{/* Mobile Navigation Menu */}
			<div
				className={cn(
					'fixed inset-0 z-40 bg-background transform transition-transform duration-300 ease-in-out',
					isOpen ? 'translate-x-0' : 'translate-x-full',
					'md:hidden flex flex-col pt-20'
				)}
			>
				<div className="flex flex-col space-y-6 p-8">
					{navItems.map((item) => (
						<a
							key={item.name}
							href={item.href}
							onClick={() => setIsOpen(false)}
							className="text-xl font-inter font-medium transition-colors hover:text-cloud-bright-blue"
						>
							{item.name}
						</a>
					))}
					<Button
						className="cloud-button mt-4"
						onClick={() =>
							window.open(
								'https://drive.google.com/file/d/1KHXrNaOJQbnlQxlPZUcCxJ5ZTLn7Q7vJ/view?usp=drive_link',
								'_blank',
								'noopener,noreferrer'
							)
						}
					>
						Resume
					</Button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
