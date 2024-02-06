import styled from "styled-components";
import { pallete } from "../../theme";

export const Style = styled.div`
  position: relative;
  .search-box {
    .box {
      width: 600px;
      height: 44px;
      background: ${pallete.searchBG};
      border-radius: ${pallete.defaultBR};
      padding: 0 16px;
      font-size: 1.2rem;
      color: ${pallete.searchTextColor};
      font-weight: 400;
      line-height: 2.17;
    }
  }
  .result-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    border: 1px solid ${pallete.grayColor};
    border-radius: ${pallete.defaultBR};
    background: ${pallete.whiteColor};
    box-shadow: 0 0 5px 0 rgba(239, 64, 86, 0.5);
    .result {
      max-height: 80vh;
      overflow: hidden;
      width: 600px;
      padding: 0 16px;
      overflow-y: scroll;
      scrollbar-color: ${pallete.grayColor} ${pallete.whiteColor};
      scrollbar-width: thin;
      .input-box {
        width: 100%;
        height: 44px;
        border-bottom: 1px solid ${pallete.borderColor};
        padding: 0 16px;
        font-size: 1.2rem;
        color: ${pallete.darkColor};
        font-weight: 400;
        line-height: 2.17;
        margin-bottom: 25px;
        .input {
          font-family: Sora, sans-serif;
          flex-grow: 1;
          background: transparent;
          padding: 0 5px;
          outline: none;
          border: none;
          font-size: 1.4rem;
          color: ${pallete.darkColor};
          height: 44px;
        }
      }
      .output {
        width: 100%;
        .loader {
          font-size: 1.6rem;
          color: ${pallete.primaryColor};
        }
        .items {
          .no-result {
            font-size: 1.8rem;
            font-weight: 700;
            color: ${pallete.primaryColor};
          }
          &:last-child {
            border-bottom: none;
          }
          .item {
            padding-bottom: 5px;
            margin-bottom: 5px;
            border-bottom: 1px solid ${pallete.grayColor};
            .left {
              .img {
                img {
                  width: 20px;
                  height: 20px;
                  border-radius: 50%;
                  border: 1px solid ${pallete.primaryColor};
                }
              }
              .title {
                font-size: 1.4rem;
                font-weight: 600;
                color: ${pallete.primaryColor};
              }
            }
            .right {
              .symbol {
                font-size: 1.2rem;
                color: ${pallete.darkColor};
                font-weight: 600;
              }
              .market-cap-rank {
                font-size: 1.2rem;
                color: ${pallete.darkColor};
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
`;
