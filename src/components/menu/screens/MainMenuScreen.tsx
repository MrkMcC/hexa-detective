import { ReactNode } from "react";
import Title from "../Title";

interface Props {
  className: string;
  leftColumn?: ReactNode;
  children?: ReactNode;
  rightColumn?: ReactNode;
}

const MainMenuScreen = ({
  className,
  leftColumn,
  children,
  rightColumn,
}: Props) => {
  return (
    <div className="main-menu">
      <div className={className}>
        <div className="column">{leftColumn}</div>
        <div className="column">
          <Title />
          {children}
        </div>
        <div className="column">{rightColumn}</div>
      </div>
    </div>
  );
};

export default MainMenuScreen;
