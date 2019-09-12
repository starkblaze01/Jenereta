import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="container" style={{display: 'flex', justifyContent:'space-between'}}>
        <p></p>
        <p>Copyright &copy; {new Date().getFullYear()} <a href="https://github.com/starkblaze01/Jenereta#team-members">CS08</a></p>
        <p><a href="https://github.com/starkblaze01/Jenereta"><i class="fa fa-star" aria-hidden="true"></i>Star Me</a></p>
      </div>
    </div>
  );
}

export default Footer;
