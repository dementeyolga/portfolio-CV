import Image from 'next/image';
import avatarImg from 'public/avatar.jpg';
import classes from './avatar.module.scss';

export default function Avatar() {
  return (
    <Image
      className={classes.avatar}
      src={avatarImg.src}
      alt="Avatar photo"
      priority
      width={150}
      height={150}
    />
  );
}
