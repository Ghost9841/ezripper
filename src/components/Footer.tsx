
const Footer = () => {
  return (
    <div>
       {/* Footer */}
      <footer className="bg-[#4c2278] text-white py-8 mx-auto">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <span className="text-xl font-bold">Ez Ripper</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#78c3e3] transition">Privacy</a>
              <a href="#" className="hover:text-[#78c3e3] transition">Terms</a>
              <a href="#" className="hover:text-[#78c3e3] transition">Contact</a>
            </div>
          </div>
          <div className="mt-6 text-center text-sm text-[#d1cfd2]">
            © {new Date().getFullYear()} Ez Ripper. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
