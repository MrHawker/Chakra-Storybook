import React from 'react';

const SpinningSVG = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg 
      width="28" 
      height="28" 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`animate-spin ${className}`} 
      {...props}
    >
      <g clipPath="url(#clip0_3114_30318)">
        <path d="M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723" stroke="#083344" strokeWidth="1.75" strokeLinecap="round"/>
      </g>
      <g clipPath="url(#clip1_3114_30318)">
        <path d="M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723" stroke="#083344" strokeWidth="1.75" strokeLinecap="round"/>
      </g>
      <g clipPath="url(#clip2_3114_30318)">
        <path d="M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723" stroke="#083344" strokeWidth="1.75" strokeLinecap="round"/>
      </g>
      <g clipPath="url(#clip3_3114_30318)">
        <path d="M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723" stroke="#083344" strokeWidth="1.75" strokeLinecap="round"/>
      </g>
      <g clipPath="url(#clip4_3114_30318)">
        <path d="M22.4584 14.0002C22.4584 12.6654 22.1425 11.3495 21.5365 10.1602C20.9305 8.97083 20.0517 7.94181 18.9718 7.15723" stroke="#083344" strokeWidth="1.75" strokeLinecap="round"/>
      </g>
      <defs>
        <clipPath id="clip0_3114_30318">
          <rect width="18.6667" height="18.6667" fill="white" transform="translate(4.66675 4.6665)"/>
        </clipPath>
        <clipPath id="clip1_3114_30318">
          <rect width="18.6667" height="18.6667" fill="white" transform="translate(4.66675 4.6665)"/>
        </clipPath>
        <clipPath id="clip2_3114_30318">
          <rect width="18.6667" height="18.6667" fill="white" transform="translate(4.66675 4.6665)"/>
        </clipPath>
        <clipPath id="clip3_3114_30318">
          <rect width="18.6667" height="18.6667" fill="white" transform="translate(4.66675 4.6665)"/>
        </clipPath>
        <clipPath id="clip4_3114_30318">
          <rect width="18.6667" height="18.6667" fill="white" transform="translate(4.66675 4.6665)"/>
        </clipPath>
      </defs>
    </svg>
  );
};

export default SpinningSVG;