import Indice from './Indice';

function Layout({ vistaAttiva, children }) {
  return (
    <div className="layout">
      <Indice vistaAttiva={vistaAttiva} />
      <div className="contenuto">
        {children}
      </div>
    </div>
  );
}

export default Layout;