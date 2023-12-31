import Header from "./components/header/header";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="font-montserrat">
          <Header />
          <main></main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
