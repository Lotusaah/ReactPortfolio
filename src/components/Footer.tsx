import './Footer.css';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2025 VicPortfolio. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://github.com/Lotusaah" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2 transition-all underline-offset">Github</a>
          <a href="https://vdxavc.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2 transition-all underline-offset">Photography</a>
        </div>
      </div>
    </footer>
  );
};
