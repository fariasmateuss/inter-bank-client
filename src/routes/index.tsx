import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SignIn } from '@pages/SignIn';
import { Dashboard } from '@pages/Dashboard';
import { SignUp } from '@pages/SignUp';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
