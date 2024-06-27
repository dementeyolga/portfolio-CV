import Button from '@ui/shared/button/button';
import classes from './header.module.scss';
import clsx from 'clsx';

export default function Header() {
  return (
    <header className={classes.header}>
      <div className={clsx('wrapper', classes.header__wrapper)}>
        <Button href={'/'}>Main</Button>
        <Button href={'/cv'}>CV</Button>
        <Button href={'/portfolio'}>Porfolio</Button>
      </div>
    </header>
  );
}
