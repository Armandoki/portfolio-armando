import Footer from "./components/footer";
import Main from "./components/main";
import Profile from "./components/profile";

export default function Home() {
  return (
    <main className="cursor-default">
      <Profile />
      <Main />
      <Footer/>
    </main>
  );
}
