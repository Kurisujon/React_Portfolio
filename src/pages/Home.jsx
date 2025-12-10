import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import Contact from "../components/contact/Contact";
import Main from "../layouts/Main";

const Home = () => {
  return (
    <Main>
      <div className="relative">
        <div className="introduction-profile-background">
          <div className="content">
            <Introduction />
            <Profile />
          </div>
        </div>
        <div className="bg-soft-white pt-30">
          <WorkProcess />
        </div>
        <Portfolio />
        <div className="blog-background">
          <Blog />
        </div>
        <div className="bg-soft-white">
          <Profession />
        </div>
        <Contact />
      </div>
    </Main>
  );
};

export default Home;
