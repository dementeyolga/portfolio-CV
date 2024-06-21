import Link from "next/link";
import Button from "./button/button";

export default function Header() {
  return (
    <div>
      <Button href={"/"}>Main</Button>
      <Button href={"/cv"}>CV</Button>
      <Button href={"/portfolio"}>Porfolio</Button>
    </div>
  );
}
