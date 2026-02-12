import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" pageDescription="Driving the future of urban mobility. Enhancing mass transit approachability, efficiency, and convenience for smarter cities worldwide. Auto rental, taxi, public & school transport, trading, service center & technology." />
      <HomeOne /> 
    </Wrapper>
  );
}
