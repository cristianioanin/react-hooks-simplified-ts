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
const UseRefComponent = lazy(() => import('./components/UseRefComponent'));
const UseMemoComponent = lazy(() => import('./components/UseMemoComponent'));
const UseCallbackComponent = lazy(
  () => import('./components/UseCallbackComponent')
);
const UseReducerComponent = lazy(
  () => import('./components/UseReducerComponent')
);
const UseTransitionComponent = lazy(
  () => import('./components/UseTransitionComponent')
);
const UseDeferredValueComponent = lazy(
  () => import('./components/UseDeferredValueComponent')
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
              <Route path="useRef" element={<UseRefComponent />} />
              <Route path="useMemo" element={<UseMemoComponent />} />
              <Route path="useCallback" element={<UseCallbackComponent />} />
              <Route path="useReducer" element={<UseReducerComponent />} />
              <Route
                path="useTransition"
                element={<UseTransitionComponent />}
              />
              <Route
                path="useDeferredValue"
                element={<UseDeferredValueComponent />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
