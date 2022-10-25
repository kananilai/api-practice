import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header>
        <div>
          <Image
            src="/img/headerIcon/menu.png"
            alt="menu icon"
            loading="eager"
            width={35}
            height={35}
            priority
          />
        </div>
        <h1>
          <Link href="#">
            <a>
              <span>Simple</span>
              <span>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </div>
  );
};
