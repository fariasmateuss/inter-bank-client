import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn } from '../pages/SignIn';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}
