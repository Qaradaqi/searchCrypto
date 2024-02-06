import Search from "../../Components/Search";
import { Style } from "./style";

export default function Home() {
  return (
    <Style className="flex flex-column align-center gap-10">
      <div className="logo">
        <img src="asset/image/logo.svg" alt="codedotdev"/>
      </div>
      <Search />
    </Style>
  );
}
