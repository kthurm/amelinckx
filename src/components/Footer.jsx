import SocialMedia from "../components/SocialMedia";

function Footer() {
  return (
    <div>
      <div className="bg-secondary text-background">
        <div className="container-lg !py-3 w-full flex justify-between mx-auto text-sm">
          <p className="opacity-70">
            &copy; {new Date().getFullYear()} Andrew Amelinkcx
          </p>
          <div>
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
