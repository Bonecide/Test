import { Header } from "@/features/Header";
import { LearningProgress } from "@/features/Main/LearningProgress";
import { Tabs } from "@/features/Main/Tabs";
import { Actions } from "@/features/Main/Actions";
import { Footer } from "@/features/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <LearningProgress />
      <Tabs />
      <Actions />
      <Footer />
    </div>
  );
};

export default Home;
