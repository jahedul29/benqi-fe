function BottomArrow({className = "text-processCyan fill-white"} : {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="72.136"
      height="20"
      viewBox="0 0 72.136 20"
    //   color="#FF9100"
    //   fill="#00131A"
      className={className}
    >
      <g
        id="Group_6884"
        data-name="Group 6884"
        transform="translate(-765.296 -471)"
      >
        <path
          id="Path_195"
          data-name="Path 195"
          d="M35,6,70,25H0Z"
          transform="translate(836 496) rotate(180)"
          fill="var(--fill)"
        ></path>
        <g
          id="Path_194"
          data-name="Path 194"
          transform="translate(837.432 491) rotate(180)"
          fill="none"
        >
          <path d="M 36 0 L 72 20 M 0 20 L 36 0 Z" stroke="currentColor"></path>
        </g>
      </g>
    </svg>
  );
}

export default BottomArrow;
