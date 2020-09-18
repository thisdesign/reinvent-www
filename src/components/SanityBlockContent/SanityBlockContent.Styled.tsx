import styled from "styled-components";
import { size, colors, fontFamilies } from "style";
import mq from "style/mq";

const Wrapper = styled.div<{ serif: boolean }>`
  max-width: 35rem;
  /**
   *
   * Headings
   * 
   */
  h6 {
    font-size: ${size[-1]};
  }
  h5 {
    font-size: ${size[0]};
  }
  h4 {
    font-size: ${size[0]};
  }
  h3 {
    font-size: ${size[1]};
  }
  h2 {
    font-size: ${size[2]};
  }
  h1 {
    font-size: ${size[3]};
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding-top: ${size[2]};
  }
  /**
   *
   * Inline items
   * 
   */
  br {
    display: none;
    content: " ";
    &:first-child {
      display: block;
      margin-bottom: ${size.sm};
    }
  }
  p {
    font-family: ${fontFamilies.sansSerif};
    margin-bottom: ${size[-1]};
    line-height: 1.3;
    color: ${colors.grey};
  }
  strong {
    display: inline-block;
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  code {
    padding: 2px 4px;
    border-radius: ${size.xs};
    font-size: ${size[-1]};
  }

  blockquote {
    padding-left: ${size[0]};
    font-size: ${size[4]};
    @media ${mq.md} {
      margin: ${size[0]} calc(${size[6]} * -1);
    }
  }
  /**
   *
   * List items
   * 
   */
  ol,
  ul {
    padding: ${size.xs} 0;
    counter-reset: item;
  }
  li {
    margin-bottom: ${size.xs};
    position: relative;
    padding-left: ${size[2]};
    counter-increment: item;
    &:after {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
  ul li:after {
    content: "•";
  }
  ol li:after {
    content: counter(item);
  }
  /**Remove margin on last block */
  &:last-item {
    margin-bottom: 0;
  }
`;

export default {
  Wrapper,
};
