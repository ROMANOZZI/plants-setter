import React from "react";

const NavIcon = ({ link, picture, id, name, page, setPage }) => {
  const [chosen, setChosen] = React.useState(false);
  React.useEffect(() => {
    if (name == page) {
      setChosen(true);
    } else setChosen(false);
  }, [page]);

  return (
    <div
      className={`pageContainer ${chosen && "chosenContainer"}`}
      onClick={(e) => {
        setPage(name);
      }}
      id={id}
    >
      <img
        src={picture}
        alt={""}
        className={`icon ${chosen && "chosen"}`}
      ></img>
    </div>
  );
};

export default NavIcon;
