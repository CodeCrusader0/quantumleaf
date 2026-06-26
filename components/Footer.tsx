import Logo from './Logo';

export default function Footer() {
  return (
    <footer>
      <div className="ctr">
        <div className="ft-in">
          <div className="ft-brand">
            <Logo variant="footer" />
            <span className="ft-name">Quantum<em>Leaf</em></span>
          </div>
          <div className="ft-copy">
            &copy; 2025 QuantumLeaf &mdash; Ann Arbor, Michigan<br />
            You build houses. We build everything else.
          </div>
        </div>
      </div>
    </footer>
  );
}
