import Link from 'next/link';

export const Footer = () => {
  return (
<div className="footer">
  <div className="contain">
  <div className="col social">
    <ul>
      <li className="logo" style={{color:"White"}}><a href="#">&nbsp;UCOCAMP</a></li>
    </ul>
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
    <h1>&nbsp;Legal</h1>
    <ul>
      <li>&nbsp;&nbsp;Terminos de uso</li>
      <li>&nbsp;&nbsp;Seguridad</li>
    </ul>
  </div>
  <div className="col">
    <h1>Cuenta</h1>
    <ul>
      <li>Mi cuenta</li>
      <li>Colecciones</li>
    </ul>
  </div>
  <div className="col">
    <h1>Otros</h1>
    <ul>
      <li>Recursos</li>
      <li>Creadores</li>
    </ul>
  </div>
<div className="clearfix"></div>
</div>
</div>
  )
}