import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import RiskMap from "./pages/RiskMap";
import EvacuationProcedure from "./pages/EvacuationProcedure";
import CampusFacilities from "./pages/CampusFacilities";
import About from "./pages/About";
import Improvements from "./pages/Improvements";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/risk-map"} component={RiskMap} />
      <Route path={"/evacuation-procedure"} component={EvacuationProcedure} />
      <Route path={"/campus-facilities"} component={CampusFacilities} />
      <Route path={"/improvements"} component={Improvements} />
      <Route path={"/about"} component={About} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
