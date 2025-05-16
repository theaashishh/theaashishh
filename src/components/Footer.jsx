import React from 'react'

const Footer = () => {
  return (
     <footer className="bg-[#ffff00] text-black border-t-10 border-black  text-center py-4">
      <p>&copy; {new Date().getFullYear()} Aashish Sharma. All rights reserved.</p>
    </footer>
  )
}

export default Footer