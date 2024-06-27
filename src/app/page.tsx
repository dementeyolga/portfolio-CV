import Avatar from '@/app/ui/shared/avatar/avatar';
import classes from './page.module.scss';
import clsx from 'clsx';

export default function MainPage() {
  return (
    <main className={clsx(classes.page, 'wrapper')}>
      <div>
        <Avatar />
      </div>
    </main>
  );
}
