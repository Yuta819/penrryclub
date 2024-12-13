import Animation from "@/components/yosakoiList/irodori/Decorations/Animation";
import HeroSection from "@/components/yosakoiList/irodori/Sections/HeroSection";
import AboutSection from "@/components/yosakoiList/irodori/Sections/AboutSection";
import SuccessiveList from "@/components/yosakoiList/irodori/Sections/SuccessiveList";
import CreationList from "@/components/yosakoiList/irodori/Sections/CreationList";
import ClotingList from "@/components/yosakoiList/irodori/Sections/ClotingList";
import Blog from "@/components/yosakoiList/irodori/Sections/Blog";
import SNS from "@/components/yosakoiList/irodori/Sections/SNS";
import Movie from "@/components/yosakoiList/irodori/Sections/Movie";
import Header from "@/components/yosakoiList/irodori/Sections/Header";
import Footer from "@/components/yosakoiList/irodori/Sections/Footer";

export default function Home() {
  return (
    <>
      <Animation />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <CreationList />
        <ClotingList />
        <SuccessiveList />
        <Blog />
        <SNS />
        <Movie />
      </main>
      <Footer />
    </>
  );
}
