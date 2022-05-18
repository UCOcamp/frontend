import Link from 'next/link';

export const Footer = () => {
  return (
<div className="footer">
  <div className="contain">
  <div className="col social">
    <li className="logo" style={{color:"White"}}><a href="#">UCOCAMP</a></li>
  </div>
  <div className="col social">
    <a>&nbsp;</a>
  </div>
  <div className="col">
    <h1>Acerca de</h1>
    <ul>
      <li>Nosotros</li>
      <li>UCO</li>
    </ul>
  </div>
  <div className="col">
    <h1>Recursos</h1>
    <ul>
      <li>Foros</li>
      <li>Blog</li>
    </ul>
  </div>
  <div className="col">
    <h1>Legal</h1>
    <ul>
      <li>Terminos de uso</li>
      <li>Seguridad</li>
    </ul>
  </div>
  <div className="col">
    <h1>Cuenta</h1>
    <ul>
      <li>Mi cuenta</li>
      <li>Colecciones</li>
    </ul>
  </div>
<div className="clearfix"></div>
</div>
</div>
  )
}