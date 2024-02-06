import { useEffect, useRef, useState } from "react";
import { Style } from "./style";
import { api } from "../../utils/api/api";
import axios from "axios";

type Ref = HTMLDivElement;
interface Movies {
  coins: [
    {
      id: string;
      name: string;
      api_symbol: string;
      symbol: string;
      market_cap_rank: string;
      thumb: string;
      large: string;
    }
  ];
  exchanges: [
    {
      id: string;
      name: string;
      market_type: string;
      thumb: string;
      large: string;
    }
  ];
  icos: string[];
  categories: {
    id: string;
    name: string;
  };
  nfts: [
    {
      id: string;
      name: string;
      symbol: string;
      thumb: string;
    }
  ];
}
export default function Search() {
  const searchRef = useRef<Ref>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Movies>();
  const [search, setSearch] = useState<string>("");
  const onClickOutside = () => {
    setIsOpen(false);
  };
  function getApi(query: string, signal: AbortSignal) {
    setLoading(true);
    api
      .get("search", { params: { query: query }, signal: signal })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (!axios.isCancel(err)) {
          console.log(err);
        }
        setLoading(false);
      });
  }
  useEffect(() => {
    if (isOpen && search) {
      const controller = new AbortController();
      const signal = controller.signal;
      getApi(search, signal);
      return () => {
        controller.abort();
      };
    }
  }, [isOpen, search]);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    document.addEventListener("click", handleClickOutside, { capture: true });
    return () =>
      document.removeEventListener("click", handleClickOutside, {
        capture: true,
      });
  }, [isOpen]);
  const handleClickOutside = (event: any) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      onClickOutside && onClickOutside();
    }
  };
  const handleChange = (event: any) => {
    setSearch(event.target.value);
  };
  console.log(search);
  console.log(data);
  const renderFarm = () => {
    return (
      <ul className="items">
        {search && !data?.coins.length && (
          <div className="no-result flex align-center justify-center">
            No Result for "{search}"
          </div>
        )}
        {search &&
          data?.coins.map((item, id) => {
            return (
              <li key={id} className="item flex align-center justify-between">
                <div className="left flex align-center gap-10">
                  <div className="img">
                    <img src={item.thumb} alt={item.id} />
                  </div>
                  <div className="title">
                    <span>{item.id}</span>
                  </div>
                </div>
                <div className="right flex align-center gap-10">
                  <div className="symbol flex align-center gap-5">
                    <span>symbol: </span>
                    <span>{item.symbol}</span>
                  </div>
                  <div className="market-cap-rank ">
                    <span>market cap rank: </span>
                    <span>{item.market_cap_rank}</span>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    );
  };
  return (
    <Style className="flex align-center justify-center mtb-10">
      <div className="full-container">
        <div className="search-box flex align-center justify-center">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="box flex align-center justify-start gap-10"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
            <span>search</span>
          </div>
        </div>
        {isOpen && (
          <div className="result-box flex align-center justify-center">
            <div
              ref={searchRef}
              className="result flex flex-column align-start"
            >
              <div className="input-box flex align-center justify-start gap-10">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  ref={inputRef}
                  onChange={handleChange}
                  value={search}
                  className="input"
                  type="text"
                  placeholder="search"
                />
              </div>
              <div className="output ptb-10">
                {loading ? (
                  <div className="loader flex align-center justify-center">
                    Loading...
                  </div>
                ) : (
                  renderFarm()
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Style>
  );
}
