import Link from "next/link";
import s from "./button.module.scss";

export default function Button({
  href,
  children,
}: {
  href?: string;
  children: string;
}) {
  return (
    <Link href={href || ""} className={s.button}>
      {children}
    </Link>
  );
}
