import "./MoreServiceListsStyle.css";
import ServiceListsData from "./ServiceListsData";
import app from "../assets/website/app.jpg";
import seo from "../assets/website/seo.jpg";
import social from "../assets/website/social-media.jpg";
import email from "../assets/website/email.jpg";
import content from "../assets/website/content.png";
import paidSocial from "../assets/website/paid-social.jpg";

function ServiceLists() {
  return (
    <div className="serviceList">
      <div className="serviceListcard">
        <ServiceListsData
          image={app}
          heading="App Designing & Development"
          text="Our app design and development services create innovative and user-friendly mobile applications. We specialize in developing apps for iOS and Android platforms, ensuring they are fast, secure, and intuitive, providing a seamless user experience that meets your business goals."
        />
        <ServiceListsData
          image={seo}
          heading="SEO"
          text="Our SEO services increase your online visibility and drive organic traffic to your website. We employ the latest techniques in keyword research, on-page and off-page optimization, and content creation to improve your search engine rankings and boost your digital presence."
        />
        <ServiceListsData
          image={paidSocial}
          heading="Paid social media marketing"
          text="Our paid social media marketing services boost your brand's visibility and engagement through targeted advertising campaigns. We design, manage, and optimize ads on platforms like Facebook, Instagram to reach your ideal audience. By leveraging data-driven strategies and creative ad formats, we maximize your ROI and ensure your marketing goals are met efficiently."
        />
        <ServiceListsData
          image={social}
          heading="Social media management"
          text="Our social media management services help you build a strong online presence. We manage your profiles across various platforms, create engaging content, and interact with your audience to foster community and grow your following, enhancing your brand’s social media impact."
        />
         <ServiceListsData
          image={email}
          heading="Email Marketing"
          text="Our email marketing services engage your audience directly in their inboxes. We design and execute effective email campaigns that deliver personalized content, promote your products or services, and drive customer engagement and retention. Our strategies ensure high open and click-through rates, maximizing your marketing ROI."
        />
        <ServiceListsData
          image={content}
          heading="Brand content & creative"
          text="Our brand content and creative team tells your brand’s story with originality and flair. We develop captivating content and creative strategies that highlight your brand's unique value, engage your audience, and build a consistent brand identity across all channels. From compelling copywriting to visual storytelling, we craft content that resonates and inspires."
        />
      </div>
    </div>
  );
}

export default ServiceLists;
