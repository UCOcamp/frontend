import Link from 'next/link';

export const Navbar = () => {
  return (
    <nav>
      <ul className="menu">
        <li className="logo"><a href="/index.tsx">&nbsp;UCOCAMP</a></li>
        <li className="item"><a href="#"><img src="/calendar.png" alt="Logo"></img>&nbsp;&nbsp;&nbsp;</a></li>
        <li className="item"><a><img src="/message.png" alt="Logo"></img>&nbsp;&nbsp;&nbsp;</a></li>
        <li className="item"><a href="#">Marcos Rivera Gavilán&nbsp;&nbsp;</a></li>
        <li className="item"><a href="#"><img src="/profile.png" alt="Logo"></img>&nbsp;&nbsp;</a></li>
      </ul>
    </nav>
  )
}