import Button from "../Button/Button";

const AllButtons = () => {
  return (
    <>
      <Button className="btn btn--main-primary" text="Login" />
      <Button className="btn btn--main-secondary" text="Register" />
      <Button className="btn btn--big-link" text="Link" />
      <Button className="btn btn--header" text="Sign In" />
      <Button className="btn btn--small-primary" text="Edit" />
      <Button className="btn btn--small-secondary" text="Go" />
    </>
  );
};

export default AllButtons;
