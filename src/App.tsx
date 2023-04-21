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
const NavbarOptionalHooks = lazy(() =>
  import('./Home').then((module) => ({ default: module.NavbarOptionalHooks }))
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
const UseLayoutEffectComponent = lazy(
  () => import('./components/UseLayoutEffectComponent')
);
const UseDebugValueComponent = lazy(
  () => import('./components/UseDebugValueComponent')
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
            <Route path="/optionalHooks" element={<NavbarOptionalHooks />}>
              <Route
                path="useLayoutEffect"
                element={<UseLayoutEffectComponent />}
              />
              <Route
                path="useDebugValue"
                element={<UseDebugValueComponent />}
              />
              {/* <Route path="useImperativeHandle" element={<UseImperativeHandle />} />
              <Route path="useId" element={<UseId />} /> */}
            </Route>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
