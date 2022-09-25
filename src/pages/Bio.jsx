import Headshot from "../images/amelinckx-headshot.jpg";
import SocialMedia from "../components/SocialMedia";

const Bio = () => {
  return (
    <div className="container-lg flex flex-col md:flex-row space-y-5 sm:space-y-0 sm:space-x-8 sm:items-center">
      <div className="relative sm:w-1/3">
        <img src={Headshot} alt="Andrew Amelinckx" />

        <div className="absolute bottom-1 right-3 text-[10px] text-gray-200">
          <a
            class="hover:text-primary text-background"
            href="https://www.bschneckphoto.com/"
          >
            Photo: Beth Schneck
          </a>
        </div>
      </div>
      <div className="sm:w-2/3 flex flex-col space-y-5">
        <h1>Bio</h1>
        <p>
          Andrew Amelinckx is a freelance journalist who has previously written
          three historical true-crime books. He held down a variety of jobs,
          from bartending in New Orleans to burlesque dancing in New York City,
          before spending a decade as an award-winning investigative crime
          reporter for several news organizations, including the Pulitzer
          Prize-winning <em>Berkshire Eagle.</em> His work has appeared in{" "}
          <em>Insider,</em> <em>Smithsonian.com</em>, <em>Men’s Journal</em>,{" "}
          <em>Modern Farmer</em>, and elsewhere. He has an MFA with distinction
          in painting from Pratt Institute. Andrew lives with his wife, Kara,
          and dog, Dashiell, in New York’s Hudson Valley.
        </p>
        <p>
          Check out Andrew’s freelance writing work on{" "}
          <a
            href="https://muckrack.com/theamelinckx/portfolio"
            target="_blank"
            rel="noreferrer noopener"
          >
            Muck Rack.
          </a>
        </p>
        <div className="h-3"></div>
        <p className="ml-auto">
          <SocialMedia />
        </p>
      </div>
    </div>
  );
};

export default Bio;
