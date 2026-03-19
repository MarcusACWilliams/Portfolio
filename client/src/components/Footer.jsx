import React, { useEffect, useState } from 'react';

function Footer() {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <p><span id="year">&copy; {year}</span> Marcus Williams</p>
      </div>
    </footer>
  );
}

export default Footer;
