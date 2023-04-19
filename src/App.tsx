import { lazy, Suspense } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./Home'));
const NavbarMustKnowHooks = lazy(() =>
  import('./Home').then((module) => ({ default: module.NavbarMustKnowHooks }))
);
const NavbarLesserKnownHooks = lazy(() =>
  import('./Home').then((module) => ({
    default: module.NavbarLesserKnownHooks,
  }))
);
const UseStateComponent = lazy(() => import('./components/UseStateComponent'));
const UseEffectComponent = lazy(
  () => import('./components/UseEffectComponent')
);
const UseContextComponent = lazy(
  () => import('./components/UseContextComponent')
);

function App() {
  return (
    <>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mustKnowHooks" element={<NavbarMustKnowHooks />}>
              <Route path="useState" element={<UseStateComponent />} />
              <Route path="useEffect" element={<UseEffectComponent />} />
              <Route path="useContext" element={<UseContextComponent />} />
            </Route>
            <Route
              path="/lesserKnownHooks"
              element={<NavbarLesserKnownHooks />}
            >
              <Route path="useRef" element={<div>useRef</div>} />
              <Route path="useMemo" element={<div>useMemo</div>} />
              <Route path="useCallback" element={<div>useCallback</div>} />
              <Route path="useReducer" element={<div>useReducer</div>} />
              <Route path="useTransition" element={<div>useTransition</div>} />
              <Route
                path="useDeferredValue"
                element={<div>useDeferredValue</div>}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
