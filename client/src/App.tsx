import { BrowserRouter, Route, Routes } from "react-router";

import LandingPage from './pages/LandingPage';
import PortalPage from './pages/PortalPage';
import NotFound from "./pages/NotFound";
import ScheduleDemo from "./pages/ScheduleDemo";
import EventPage from "./pages/EventPage";
import AllEvents from "./pages/AllEvents";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/portal" element={<PortalPage />} />
        <Route path="/demo" element={<ScheduleDemo />} />
        <Route path="/events" element={<AllEvents />} />
        <Route path="/events/:type/:slug" element={<EventPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </BrowserRouter>
  )
}

export default App
