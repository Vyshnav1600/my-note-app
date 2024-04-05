
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <p> © {currentYear} Notes App</p>
    </footer>
  );
};

export default Footer;
