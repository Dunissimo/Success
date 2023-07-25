import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header border">
      <div className="container py-4 px-2">
        <h1 className="text-4xl">Дневник успехов</h1>
      </div>
    </header>
  );
};

export default Header;
