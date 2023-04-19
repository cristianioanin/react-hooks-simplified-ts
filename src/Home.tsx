import { Link, Outlet } from 'react-router-dom';

function Home() {
  return (
    <>
      <NavbarMustKnowHooks />
      <NavbarLesserKnownHooks />
    </>
  );
}

export function NavbarMustKnowHooks() {
  return (
    <>
      <h1>Must Know Hooks</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/mustKnowHooks/useState">useState</Link>
        <Link to="/mustKnowHooks/useEffect">useEffect</Link>
        <Link to="/mustKnowHooks/useContext">useContext</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export function NavbarLesserKnownHooks() {
  return (
    <>
      <h1>Lesser Known Hooks</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/lesserKnownHooks/useRef">useRef</Link>
        <Link to="/lesserKnownHooks/useMemo">useMemo</Link>
        <Link to="/lesserKnownHooks/useCallback">useCallback</Link>
        <Link to="/lesserKnownHooks/useReducer">useReducer</Link>
        <Link to="/lesserKnownHooks/useTransition">useTransition</Link>
        <Link to="/lesserKnownHooks/useDeferredValue">useDeferredValue</Link>
      </nav>
      <Outlet></Outlet>
    </>
  );
}

export default Home;
