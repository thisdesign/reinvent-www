type SVGtype = React.FC<React.SVGProps<SVGSVGElement>>;
export const ArrowDown: SVGtype = (props) => {
  return (
    <svg width="16" height="20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g stroke="#000" strokeWidth="1.5" fill="none" fillRule="evenodd">
        <path d="M8 0v18M15.071 11L8 18.071.929 11" />
      </g>
    </svg>
  );
};

export const ArrowRight: SVGtype = (props) => (
  <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="#000" strokeWidth="1.5" fill="none" fillRule="evenodd">
      <path d="M.5 8.5h18M11.5 1.429L18.571 8.5 11.5 15.571" />
    </g>
  </svg>
);

export const ArrowLeft: SVGtype = (props) => (
  <svg width="20" height="17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g stroke="#000" strokeWidth="1.5" fill="none" fillRule="evenodd">
      <path d="M19.5 8.5h-18M8.5 15.571L1.429 8.5 8.5 1.429" />
    </g>
  </svg>
);

export default ArrowDown;
