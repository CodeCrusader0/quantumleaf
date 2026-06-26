import Logo from './Logo';

export default function Nav() {
  return (
    <nav id="nav">
      <a href="#" className="brand">
        <Logo variant="nav" />
        <span className="bname">Quantum<em>Leaf</em></span>
      </a>
      <ul className="navlinks">
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#process">Process</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="#contact" className="navcta">Let&apos;s Talk</a>
    </nav>
  );
}
