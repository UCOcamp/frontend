import Link from 'next/link';

export const Navbar = () => {
  return (
  <div className="topnav">
    <a className="active" href="#home">Home</a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
  )
}