import { Manrope } from "next/font/google";
import { RunButton } from "./runButtons";
import { PanelLeftOpen, Settings } from "lucide-react";
import { Scheduler } from "./Scheduler";

const manrope = Manrope({
  subsets: ["latin"],
});

export function TopBar() {
  return (
    <div
      className={`${manrope.className} flex items-stretch space-x-6 border-b border-[#27272A] bg-[#09090B]`}
    >
      <span className="flex items-center gap-[9px] py-2 px-6  text-white">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.23804 8.81995C2.45089 12.1173 1.88058 18.6489 5.13462 24.2391C8.32202 29.7149 14.1069 32.4463 18.7951 30.9916C18.4048 31.3314 17.9803 31.6369 17.5223 31.9035C12.6207 34.7564 5.73727 32.0704 2.14788 25.904C-1.44151 19.7376 -0.37768 12.426 4.52401 9.57297C5.07297 9.25346 5.64678 9.00341 6.23804 8.81995Z"
            fill="url(#paint0_linear_6194_3782)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.104 5.9577C7.31685 9.25508 6.74653 15.7866 10.0006 21.3769C13.188 26.8527 18.9729 29.584 23.661 28.1294C23.2707 28.4692 22.8463 28.7747 22.3883 29.0412C17.4866 31.8942 10.6032 29.2081 7.01383 23.0418C3.42444 16.8754 4.48827 9.5637 9.38997 6.71072C9.93893 6.3912 10.5127 6.14116 11.104 5.9577Z"
            fill="url(#paint1_linear_6194_3782)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.0199 3.12608C12.2952 6.44251 11.7517 12.9283 14.9857 18.4843C18.5751 24.6506 25.1456 26.0699 30.0473 23.2169C30.9582 22.6867 31.8448 21.9896 32.6616 21.1663C31.3082 23.2538 29.6313 24.9703 27.9721 25.936C23.0704 28.789 15.591 26.3776 12.0016 20.2112C8.41224 14.0448 9.47607 6.73317 14.3778 3.88018C14.865 3.59662 15.4171 3.34438 16.0199 3.12608Z"
            fill="url(#paint2_linear_6194_3782)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5532 2.93486C17.4788 2.54601 18.4801 2.32451 19.5259 2.2793C20.9295 2.21861 22.3858 2.47671 23.8114 3.03884C25.2371 3.60098 26.6043 4.45614 27.835 5.55552C29.0488 6.63979 30.1063 7.94066 30.9489 9.38571L33.1203 8.13211C32.272 6.66287 31.202 5.34082 29.9713 4.24144C28.7406 3.14207 27.3734 2.2869 25.9477 1.72476C24.5221 1.16263 23.0658 0.904536 21.6622 0.96522C20.2586 1.0259 18.935 1.40418 17.7671 2.07844C17.3374 2.32654 16.9318 2.61291 16.5532 2.93486Z"
            fill="url(#paint3_linear_6194_3782)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.2753 5.58163C16.1829 5.08992 17.2128 4.83464 18.3119 4.82963C19.4688 4.82436 20.6798 5.09642 21.8758 5.63028C23.0717 6.16415 24.2293 6.94936 25.2823 7.94109C26.273 8.87405 27.1529 9.97258 27.8779 11.1807L29.5667 10.2057C28.8169 8.90707 27.889 7.72825 26.836 6.73653C25.7829 5.7448 24.6254 4.95959 23.4294 4.42572C22.2334 3.89186 21.0224 3.6198 19.8656 3.62507C18.7087 3.63034 17.6287 3.91285 16.6871 4.45646C16.1659 4.75735 15.6928 5.13497 15.2753 5.58163Z"
            fill="url(#paint4_linear_6194_3782)"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.5134 8.24091C15.1556 7.98229 15.8475 7.83543 16.5692 7.80602C17.5765 7.76496 18.6222 7.95348 19.6465 8.36082C20.6708 8.76816 21.6536 9.38634 22.539 10.1801C23.4172 10.9674 24.1824 11.9122 24.7916 12.9612L26.3712 12.0493C25.7596 10.99 24.9892 10.0363 24.1038 9.24253C23.2185 8.44881 22.2356 7.83063 21.2113 7.42329C20.187 7.01595 19.1413 6.82742 18.134 6.86848C17.1267 6.90954 16.1775 7.17938 15.3405 7.66259C15.0486 7.83112 14.7723 8.02444 14.5134 8.24091Z"
            fill="url(#paint5_linear_6194_3782)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_6194_3782"
              x1="4.47901"
              y1="21.6198"
              x2="15.0098"
              y2="42.2679"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_6194_3782"
              x1="4.66034"
              y1="20.9481"
              x2="14.352"
              y2="41.1172"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_6194_3782"
              x1="5.07838"
              y1="20.7474"
              x2="16.7087"
              y2="41.1247"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_6194_3782"
              x1="0.0777498"
              y1="1.4101"
              x2="25.4689"
              y2="36.3103"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.6" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint4_linear_6194_3782"
              x1="-0.147003"
              y1="1.73289"
              x2="24.3846"
              y2="36.7963"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.6" stop-color="white" />
            </linearGradient>
            <linearGradient
              id="paint5_linear_6194_3782"
              x1="14.5191"
              y1="8.26163"
              x2="25.5391"
              y2="12.4838"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" stop-opacity="0" />
              <stop offset="0.6" stop-color="white" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          width="92"
          height="24"
          viewBox="0 0 92 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.98121 23.1708C7.86584 23.1708 6.08991 22.7011 4.65342 21.7617C3.21694 20.8124 2.13466 19.5021 1.40657 17.831C0.678494 16.1598 0.314453 14.2315 0.314453 12.0461C0.314453 9.86071 0.678494 7.93243 1.40657 6.26125C2.13466 4.59007 3.21694 3.28477 4.65342 2.34535C6.08991 1.39604 7.86584 0.921387 9.98121 0.921387C12.4508 0.921387 14.453 1.56415 15.9879 2.84967C17.5326 4.13519 18.5804 5.85582 19.1314 8.01154L17.3752 8.44169C16.9226 6.65185 16.0764 5.23283 14.8367 4.18464C13.6069 3.12655 11.9884 2.59751 9.98121 2.59751C8.23972 2.59751 6.78847 2.998 5.62748 3.79898C4.47632 4.59996 3.60558 5.71243 3.01524 7.13639C2.43474 8.56036 2.13958 10.1969 2.12974 12.0461C2.11006 13.8953 2.39047 15.5318 2.97097 16.9558C3.5613 18.3699 4.44189 19.4824 5.61272 20.2932C6.78355 21.0942 8.23972 21.4947 9.98121 21.4947C11.9884 21.4947 13.6069 20.9657 14.8367 19.9076C16.0764 18.8495 16.9226 17.4305 17.3752 15.6505L19.1314 16.0807C18.5804 18.2364 17.5326 19.957 15.9879 21.2425C14.453 22.5281 12.4508 23.1708 9.98121 23.1708Z"
            fill="white"
          />
          <path
            d="M34.0383 22.7258V14.3897C34.0383 13.3811 33.935 12.4812 33.7284 11.6901C33.5316 10.899 33.2266 10.2266 32.8134 9.67283C32.41 9.11907 31.8984 8.6988 31.2785 8.41203C30.6685 8.12526 29.9453 7.98187 29.109 7.98187C28.2432 7.98187 27.4905 8.13515 26.851 8.44169C26.2213 8.73835 25.6998 9.15862 25.2866 9.7025C24.8832 10.2464 24.5782 10.8941 24.3716 11.6456C24.1748 12.3873 24.0764 13.1981 24.0764 14.0782L22.7334 13.9151C22.7334 12.1845 23.0236 10.7606 23.6041 9.64316C24.1945 8.51586 24.9865 7.68521 25.9802 7.15123C26.974 6.60735 28.0907 6.33542 29.3304 6.33542C30.2061 6.33542 30.9883 6.46397 31.677 6.72107C32.3755 6.97818 32.9806 7.34406 33.4923 7.81871C34.0039 8.28348 34.427 8.83724 34.7615 9.48C35.096 10.1129 35.342 10.81 35.4994 11.5714C35.6667 12.3329 35.7503 13.1289 35.7503 13.9596V22.7258H34.0383ZM22.3644 22.7258V1.36637H23.9141V13.7074H24.0764V22.7258H22.3644Z"
            fill="white"
          />
          <path
            d="M44.1776 23.1708C42.9477 23.1708 41.9245 22.9533 41.1078 22.5182C40.301 22.0831 39.6959 21.5095 39.2926 20.7975C38.8892 20.0757 38.6875 19.2945 38.6875 18.4539C38.6875 17.5442 38.8744 16.7828 39.2483 16.1697C39.632 15.5566 40.1387 15.0621 40.7684 14.6864C41.4079 14.3106 42.1114 14.0288 42.8788 13.8409C43.7545 13.6431 44.699 13.475 45.7125 13.3366C46.7259 13.1882 47.6901 13.0597 48.6051 12.9509C49.53 12.8421 50.2826 12.7482 50.8631 12.6691L50.2433 13.0399C50.2826 11.3094 49.958 10.0239 49.2692 9.18334C48.5903 8.33292 47.39 7.90771 45.6682 7.90771C44.458 7.90771 43.4593 8.18459 42.6722 8.73835C41.8949 9.28223 41.3489 10.1277 41.034 11.2748L39.2926 10.7853C39.6566 9.33167 40.3896 8.21426 41.4916 7.43305C42.5935 6.65185 44.0054 6.26125 45.7272 6.26125C47.1932 6.26125 48.4231 6.54802 49.4168 7.12156C50.4204 7.6951 51.1189 8.50103 51.5125 9.53933C51.6798 9.96454 51.7929 10.4639 51.852 11.0375C51.911 11.6011 51.9405 12.1697 51.9405 12.7433V22.7258H50.3909V18.5133L50.9664 18.6616C50.4843 20.1053 49.6431 21.2178 48.4428 21.999C47.2424 22.7802 45.8207 23.1708 44.1776 23.1708ZM44.2661 21.5985C45.3484 21.5985 46.2979 21.4057 47.1145 21.02C47.9311 20.6245 48.5903 20.0757 49.0921 19.3736C49.6038 18.6616 49.9284 17.826 50.0662 16.8668C50.1646 16.3328 50.2187 15.7543 50.2285 15.1314C50.2384 14.5084 50.2433 14.0486 50.2433 13.7519L50.9812 14.2265C50.3417 14.3057 49.5742 14.3897 48.6789 14.4787C47.7934 14.5677 46.8882 14.6765 45.9633 14.805C45.0385 14.9336 44.2022 15.0967 43.4544 15.2945C42.992 15.4231 42.5246 15.611 42.0524 15.8582C41.5899 16.0955 41.2013 16.4268 40.8865 16.852C40.5815 17.2772 40.4289 17.8161 40.4289 18.4688C40.4289 18.9533 40.547 19.4379 40.7831 19.9224C41.0291 20.4069 41.4325 20.8074 41.9933 21.1239C42.5542 21.4403 43.3118 21.5985 44.2661 21.5985Z"
            fill="white"
          />
          <path
            d="M55.7726 22.7258V1.36637H57.4846V14.4194L65.0261 6.70624H67.4022L59.5065 14.716L68.5239 22.7258H65.8821L57.4846 15.0127V22.7258H55.7726Z"
            fill="white"
          />
          <path
            d="M70.0122 22.7258V6.70624H71.5618V10.548L71.1781 10.0437C71.3552 9.58878 71.5766 9.16851 71.8422 8.78285C72.1177 8.38731 72.3981 8.06593 72.6834 7.81871C73.1065 7.42316 73.6034 7.12651 74.174 6.92873C74.7447 6.72107 75.3203 6.60241 75.9008 6.57274C76.4813 6.53319 77.0077 6.57769 77.4799 6.70624V8.32303C76.8502 8.1747 76.1812 8.14504 75.4728 8.23403C74.7644 8.32303 74.1003 8.62958 73.4804 9.15368C72.9393 9.62833 72.5457 10.1821 72.2997 10.815C72.0537 11.438 71.8963 12.0955 71.8275 12.7878C71.7586 13.4701 71.7241 14.1375 71.7241 14.7902V22.7258H70.0122Z"
            fill="white"
          />
          <path
            d="M84.2155 23.1708C82.9857 23.1708 81.9624 22.9533 81.1458 22.5182C80.339 22.0831 79.7339 21.5095 79.3305 20.7975C78.9271 20.0757 78.7254 19.2945 78.7254 18.4539C78.7254 17.5442 78.9123 16.7828 79.2862 16.1697C79.6699 15.5566 80.1766 15.0621 80.8063 14.6864C81.4459 14.3106 82.1493 14.0288 82.9168 13.8409C83.7924 13.6431 84.737 13.475 85.7504 13.3366C86.7638 13.1882 87.728 13.0597 88.643 12.9509C89.5679 12.8421 90.3206 12.7482 90.9011 12.6691L90.2812 13.0399C90.3206 11.3094 89.9959 10.0239 89.3072 9.18334C88.6283 8.33292 87.4279 7.90771 85.7061 7.90771C84.4959 7.90771 83.4973 8.18459 82.7102 8.73835C81.9329 9.28223 81.3868 10.1277 81.072 11.2748L79.3305 10.7853C79.6945 9.33167 80.4275 8.21426 81.5295 7.43305C82.6314 6.65185 84.0433 6.26125 85.7652 6.26125C87.2312 6.26125 88.461 6.54802 89.4548 7.12156C90.4583 7.6951 91.1569 8.50103 91.5504 9.53933C91.7177 9.96454 91.8309 10.4639 91.8899 11.0375C91.9489 11.6011 91.9784 12.1697 91.9784 12.7433V22.7258H90.4288V18.5133L91.0044 18.6616C90.5223 20.1053 89.6811 21.2178 88.4807 21.999C87.2803 22.7802 85.8586 23.1708 84.2155 23.1708ZM84.3041 21.5985C85.3864 21.5985 86.3358 21.4057 87.1524 21.02C87.9691 20.6245 88.6283 20.0757 89.1301 19.3736C89.6417 18.6616 89.9664 17.826 90.1041 16.8668C90.2025 16.3328 90.2566 15.7543 90.2665 15.1314C90.2763 14.5084 90.2812 14.0486 90.2812 13.7519L91.0191 14.2265C90.3796 14.3057 89.6122 14.3897 88.7168 14.4787C87.8313 14.5677 86.9261 14.6765 86.0013 14.805C85.0764 14.9336 84.2401 15.0967 83.4924 15.2945C83.0299 15.4231 82.5626 15.611 82.0903 15.8582C81.6279 16.0955 81.2392 16.4268 80.9244 16.852C80.6194 17.2772 80.4669 17.8161 80.4669 18.4688C80.4669 18.9533 80.585 19.4379 80.8211 19.9224C81.0671 20.4069 81.4705 20.8074 82.0313 21.1239C82.5921 21.4403 83.3497 21.5985 84.3041 21.5985Z"
            fill="white"
          />
        </svg>
      </span>
      <div className="flex flex-grow pr-16 justify-center items-center gap-6 ">
        <Scheduler />   
        <RunButton>RUN</RunButton>
      </div>
      <span className="flex items-center text-white px-4 gap-[6px]">
        <span className="border border-[#27272A] rounded-md p-[6px]  hover:text-white hover:bg-[#18181B] transition-all duration-200 group hover:cursor-pointer">
          <PanelLeftOpen className="w-[21px] h-[21px] text-[#52525B] group-hover:text-[#A1A1AA] transition-all duration-200" />
        </span>
        <span className="border border-[#27272A]  rounded-md p-[6px] transition-all duration-200 group hover:bg-[#18181B] hover:cursor-pointer">
          <Settings className="w-[21px] h-[21px] text-[#52525B] group-hover:text-[#A1A1AA] transition-all duration-200" />
        </span>
      </span>
    </div>
  );
}

