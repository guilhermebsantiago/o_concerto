import FrogScene from "./components/FrogScene";
import GitHubRedirect from "./components/GitHubRedirect";
import Header from "./components/Header";
import MusicPlayer from "./components/MusicPlayer";
import {
  FistStanza,
  SecondStanza,
  ThirdStanza,
  FourthStanza,
  FifthStanza,
  SixthStanza,
  SeventhStanza,
  EightStanza,
} from "./components/Stanzas";
import { Variants, motion } from "framer-motion";

const stanzaVariants: Variants = {
  offscreen: {
    opacity: 0.1,
    scale: 0.9,
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

function App() {
  const Stanzas: React.ReactNode[] = [
    <FistStanza />,
    <SecondStanza />,
    <ThirdStanza />,
    <FourthStanza />,
    <FifthStanza />,
    <SixthStanza />,
    <SeventhStanza />,
    <EightStanza />,
  ];
  return (
    <>
      <main className="w-full h-full bg-[#2B4D0C]">
        <div className="relative">
          <Header />
          <MusicPlayer />
          <GitHubRedirect />
        </div>
        <div className="flex flex-col sm:gap-4 gap-11 pb-14 sm:px-28 px-10 transition-all">
          {Stanzas.map((stanza, i) => (
            <motion.div
              key={i}
              className="card-container"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.8 }}
            >
              <motion.div variants={stanzaVariants}>{stanza}</motion.div>
            </motion.div>
          ))}
        </div>
        <FrogScene />
      </main>
    </>
  );
}

export default App;
