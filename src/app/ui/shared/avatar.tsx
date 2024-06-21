import Image from "next/image";

export default function Avatar() {
  return (
    <Image src="/avatar.jpg" alt="Avatar photo" width={150} height={150} />
  );
}
