import Link from "next/link";

type Props = {
  menu: string[];
};

const Header = ({ menu = ["Why Us", "Digital workers", "Contact"] }: Props) => {
  return (
    <div className="w-full h-max flex justify-between items-center px-5 py-7 bg-slate-50">
      <Link
        href="#"
        className="w-max font-medium text-muted-foreground text-md leading-none cursor-pointer"
      >
        The <br />
        Avatar <br /> Factory
      </Link>
      <div className="w-max flex gap-x-6">
        {menu.map((item, index) => (
          <Link
            href={`#${item.toLocaleLowerCase().split(" ").join("_")}`}
            className="font-medium text-muted-foreground text-md hover:text-black transition-all delay-100"
            key={index}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
