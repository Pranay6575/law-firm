import HeroSection from "./components/HeroSection/HeroSection";
// import NavBar from "./components/Navbar/NavBar";
import styles from "./App.module.css";
import Introduction from "./components/Introduction/Introduction";
function App() {
  return (
    <>
      <HeroSection />
      <div className={styles.SectionWrapper}>
      <Introduction />
      </div>
    </>
  );
}

export default App;