import Link from 'next/link';
import classes from './button.module.scss';

export default function Button({
  href,
  children,
}: {
  href?: string;
  children: string;
}) {
  return (
    <Link href={href || ''} className={classes.button}>
      {children}
    </Link>
  );
}
