
import React from "react";
import { Server, Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cloud-dark-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <a 
              href="#home" 
              className="text-xl font-inter font-bold flex items-center"
            >
              <span className="text-cloud-bright-blue mr-1">&lt;</span>
              DevOps
              <span className="text-cloud-bright-blue ml-1">&gt;</span>
              <span className="text-cloud-azure">Pro</span>
            </a>
          </div>
          
          <div className="flex space-x-8">
            <a href="#home" className="hover:text-cloud-bright-blue transition-colors">Home</a>
            <a href="#about" className="hover:text-cloud-bright-blue transition-colors">About</a>
            <a href="#projects" className="hover:text-cloud-bright-blue transition-colors">Projects</a>
            <a href="#contact" className="hover:text-cloud-bright-blue transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Cloud DevOps Portfolio. All rights reserved.
            </p>
            
            <div className="flex items-center text-sm text-gray-400">
              <p className="flex items-center">
                Built with <Heart className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
