import { Suspense } from 'react';

function App() {
  return (
    <Suspense fallback={null}>
      <div>
        <h1>Hub</h1>
      </div>
    </Suspense>
  );
}

export default App;
