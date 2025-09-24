
import * as React from "react";

interface NoDataProps extends React.SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const NoData = ({
  width = 20,
  height = 20,
  color = "currentColor",
  ...props
}: NoDataProps) => (
  <svg
    viewBox="0 0 20 20"
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M51.0949 89.0014C72.492 89.0014 89.8378 71.6556 89.8378 50.2585C89.8378 28.8614 72.492 11.5156 51.0949 11.5156C29.6978 11.5156 12.3521 28.8614 12.3521 50.2585C12.3521 71.6556 29.6978 89.0014 51.0949 89.0014Z" fill={color || "currentColor"}/>
<path d="M71.9967 20.5312H29.0778C26.4026 20.5312 24.2339 22.6999 24.2339 25.3751H76.8406C76.8406 22.6999 74.6719 20.5312 71.9967 20.5312Z" fill={color || "currentColor"}/>
<path d="M24.2339 25.2422H76.8406V65.3083C76.8406 67.0897 76.1329 68.7981 74.8733 70.0577C73.6137 71.3173 71.9053 72.025 70.1239 72.025H30.9505C29.1692 72.025 27.4608 71.3173 26.2011 70.0577C24.9415 68.7981 24.2339 67.0897 24.2339 65.3083V25.2422Z" fill={color || "currentColor"}/>
<path d="M67.7979 30.3008H33.2938C32.5752 30.3008 31.9927 30.8827 31.9927 31.6005C31.9927 32.3183 32.5752 32.9001 33.2938 32.9001H67.7979C68.5165 32.9001 69.099 32.3183 69.099 31.6005C69.099 30.8827 68.5165 30.3008 67.7979 30.3008Z" fill={color || "currentColor"}/>
<path d="M67.7979 41.3438H33.2938C32.5752 41.3438 31.9927 41.9256 31.9927 42.6434C31.9927 43.3612 32.5752 43.9431 33.2938 43.9431H67.7979C68.5165 43.9431 69.099 43.3612 69.099 42.6434C69.099 41.9256 68.5165 41.3438 67.7979 41.3438Z" fill={color || "currentColor"}/>
<path d="M67.7979 52.3906H33.2938C32.5752 52.3906 31.9927 52.9725 31.9927 53.6903C31.9927 54.4081 32.5752 54.99 33.2938 54.99H67.7979C68.5165 54.99 69.099 54.4081 69.099 53.6903C69.099 52.9725 68.5165 52.3906 67.7979 52.3906Z" fill={color || "currentColor"}/>
<path d="M67.7979 63.4336H33.2938C32.5752 63.4336 31.9927 64.0155 31.9927 64.7333C31.9927 65.4511 32.5752 66.033 33.2938 66.033H67.7979C68.5165 66.033 69.099 65.4511 69.099 64.7333C69.099 64.0155 68.5165 63.4336 67.7979 63.4336Z" fill={color || "currentColor"}/>
<g filter="url(#filter0_d_21987_129743)">
<path d="M33.0601 50.0195H14.6872C13.2112 50.0195 12.0146 51.2161 12.0146 52.6921V78.9532C12.0146 80.4292 13.2112 81.6258 14.6872 81.6258H33.0601C34.5362 81.6258 35.7327 80.4292 35.7327 78.9532V52.6921C35.7327 51.2161 34.5362 50.0195 33.0601 50.0195Z" fill={color || "currentColor"}/>
</g>
<g filter="url(#filter1_d_21987_129743)">
<path d="M85.3618 9H65.0682C64.1226 9 63.356 9.7666 63.356 10.7123V20.2507C63.356 21.1964 64.1226 21.963 65.0682 21.963H85.3618C86.3074 21.963 87.074 21.1964 87.074 20.2507V10.7123C87.074 9.7666 86.3074 9 85.3618 9Z" fill={color || "currentColor"}/>
</g>
<path d="M31.0094 63.1562H16.7369C16.2563 63.1562 15.8667 63.5459 15.8667 64.0265V64.0293C15.8667 64.5099 16.2563 64.8995 16.7369 64.8995H31.0094C31.49 64.8995 31.8796 64.5099 31.8796 64.0293V64.0265C31.8796 63.5459 31.49 63.1562 31.0094 63.1562Z" fill={color || "currentColor"}/>
<path d="M31.0175 75.4258H16.8676C16.3911 75.4258 16.0049 75.8032 16.0049 76.2689V76.2716C16.0049 76.7372 16.3911 77.1146 16.8676 77.1146H31.0175C31.4939 77.1146 31.8802 76.7372 31.8802 76.2716V76.2689C31.8802 75.8032 31.4939 75.4258 31.0175 75.4258Z" fill={color || "currentColor"}/>
<path d="M31.0175 69.0078H16.8676C16.3911 69.0078 16.0049 69.3853 16.0049 69.8509V69.8536C16.0049 70.3192 16.3911 70.6967 16.8676 70.6967H31.0175C31.4939 70.6967 31.8802 70.3192 31.8802 69.8536V69.8509C31.8802 69.3853 31.4939 69.0078 31.0175 69.0078Z" fill={color || "currentColor"}/>
<path d="M21.9554 54.0742H17.7846C16.8608 54.0742 16.1118 54.8232 16.1118 55.747V56.9045C16.1118 57.8284 16.8608 58.5773 17.7846 58.5773H21.9554C22.8793 58.5773 23.6283 57.8284 23.6283 56.9045V55.747C23.6283 54.8232 22.8793 54.0742 21.9554 54.0742Z" fill={color || "currentColor"}/>
<path d="M68.3645 17.4488C69.4517 17.4488 70.333 16.5674 70.333 15.4802C70.333 14.3931 69.4517 13.5117 68.3645 13.5117C67.2773 13.5117 66.396 14.3931 66.396 15.4802C66.396 16.5674 67.2773 17.4488 68.3645 17.4488Z" fill={color || "currentColor"}/>
<path d="M75.3992 17.4488C76.4864 17.4488 77.3677 16.5674 77.3677 15.4802C77.3677 14.3931 76.4864 13.5117 75.3992 13.5117C74.312 13.5117 73.4307 14.3931 73.4307 15.4802C73.4307 16.5674 74.312 17.4488 75.3992 17.4488Z" fill={color || "currentColor"}/>
<path d="M82.4343 17.4488C83.5215 17.4488 84.4029 16.5674 84.4029 15.4802C84.4029 14.3931 83.5215 13.5117 82.4343 13.5117C81.3472 13.5117 80.4658 14.3931 80.4658 15.4802C80.4658 16.5674 81.3472 17.4488 82.4343 17.4488Z" fill={color || "currentColor"}/>
<path d="M65.7808 55.3014L70.8218 50.2492C71.2941 49.7493 71.5528 49.0851 71.5431 48.3975C71.5334 47.7099 71.2559 47.0533 70.7697 46.567C70.2834 46.0808 69.6268 45.8033 68.9392 45.7936C68.2516 45.7838 67.5874 46.0426 67.0875 46.5149L62.0353 51.5671L56.9943 46.5149C56.7517 46.2581 56.4601 46.0527 56.1367 45.9106C55.8134 45.7685 55.4648 45.6928 55.1116 45.6878C54.7585 45.6828 54.4079 45.7486 54.0806 45.8815C53.7534 46.0143 53.4561 46.2115 53.2063 46.4612C52.9566 46.711 52.7594 47.0083 52.6266 47.3355C52.4937 47.6628 52.4279 48.0134 52.4329 48.3665C52.4379 48.7197 52.5137 49.0683 52.6557 49.3916C52.7978 49.715 53.0033 50.0066 53.26 50.2492L58.3094 55.3014L53.26 60.3537C53.0033 60.5963 52.7978 60.8879 52.6557 61.2112C52.5137 61.5346 52.4379 61.8832 52.4329 62.2363C52.4279 62.5895 52.4937 62.9401 52.6266 63.2673C52.7594 63.5946 52.9566 63.8919 53.2063 64.1416C53.4561 64.3914 53.7534 64.5885 54.0806 64.7214C54.4079 64.8542 54.7585 64.9201 55.1116 64.9151C55.4648 64.9101 55.8134 64.8343 56.1367 64.6922C56.4601 64.5502 56.7517 64.3447 56.9943 64.088L62.0465 59.0357L67.0988 64.088C67.6034 64.5324 68.2584 64.7677 68.9304 64.7459C69.6024 64.7241 70.2408 64.4469 70.7155 63.9707C71.1902 63.4946 71.4655 62.8554 71.4853 62.1833C71.505 61.5112 71.2678 60.8569 70.8218 60.3537L65.7808 55.3014Z" fill={color || "currentColor"}/>
<g filter="url(#filter2_f_21987_129743)">
<ellipse cx="62.1281" cy="65.0376" rx="12.3913" ry="1.83053" fill="#EC5575" fill-opacity="0.56"/>
</g>
<path d="M47.295 79.3217C47.5998 78.0592 49.3955 78.0592 49.7002 79.3217C49.8091 79.7728 50.1614 80.1251 50.6125 80.234C51.8749 80.5387 51.8749 82.3344 50.6125 82.6392C50.1614 82.7481 49.8091 83.1003 49.7002 83.5515C49.3955 84.8139 47.5998 84.8139 47.295 83.5515C47.1861 83.1003 46.8339 82.7481 46.3827 82.6392C45.1203 82.3344 45.1203 80.5387 46.3827 80.234C46.8339 80.1251 47.1861 79.7728 47.295 79.3217Z" fill={color || "currentColor"}/>
<path d="M19.2599 14.4701C19.5646 13.2077 21.3603 13.2077 21.665 14.4701C21.774 14.9213 22.1262 15.2735 22.5773 15.3824C23.8398 15.6872 23.8398 17.4829 22.5773 17.7876C22.1262 17.8965 21.774 18.2488 21.665 18.6999C21.3603 19.9623 19.5646 19.9623 19.2599 18.6999C19.151 18.2488 18.7987 17.8965 18.3476 17.7876C17.0851 17.4829 17.0851 15.6872 18.3476 15.3824C18.7987 15.2735 19.151 14.9213 19.2599 14.4701Z" fill={color || "currentColor"}/>
<path fillRule="evenodd" clipRule="evenodd" d="M49.5503 12.741C50.2036 12.741 50.7331 12.2114 50.7331 11.5582C50.7331 10.9049 50.2036 10.3754 49.5503 10.3754C48.8971 10.3754 48.3676 10.9049 48.3676 11.5582C48.3676 12.2114 48.8971 12.741 49.5503 12.741ZM49.5503 13.628C50.6935 13.628 51.6202 12.7013 51.6202 11.5582C51.6202 10.415 50.6935 9.48828 49.5503 9.48828C48.4072 9.48828 47.4805 10.415 47.4805 11.5582C47.4805 12.7013 48.4072 13.628 49.5503 13.628Z" fill={color || "currentColor"}/>
<path d="M86.7088 46.7989C86.4276 45.696 87.4457 44.7024 88.5414 45.0103C89.6371 45.3182 89.9886 46.6967 89.1741 47.4917C88.3596 48.2866 86.99 47.9018 86.7088 46.7989Z" fill={color || "currentColor"}/>
<path d="M15.4949 40.6077C16.5981 40.3279 17.5905 41.3473 17.2812 42.4426C16.9718 43.5379 15.5928 43.8876 14.7989 43.0721C14.005 42.2566 14.3917 40.8874 15.4949 40.6077Z" fill={color || "currentColor"}/>
<path d="M71.9026 81.4788C73.0058 81.199 73.9982 82.2184 73.6889 83.3137C73.3796 84.409 72.0005 84.7587 71.2066 83.9432C70.4127 83.1276 70.7994 81.7585 71.9026 81.4788Z" fill={color || "currentColor"}/>
<path fillRule="evenodd" clipRule="evenodd" d="M89.0699 29.9675C89.7231 29.9675 90.2527 29.438 90.2527 28.7847C90.2527 28.1315 89.7231 27.6019 89.0699 27.6019C88.4166 27.6019 87.8871 28.1315 87.8871 28.7847C87.8871 29.438 88.4166 29.9675 89.0699 29.9675ZM89.0699 30.8546C90.213 30.8546 91.1398 29.9279 91.1398 28.7847C91.1398 27.6416 90.213 26.7148 89.0699 26.7148C87.9267 26.7148 87 27.6416 87 28.7847C87 29.9279 87.9267 30.8546 89.0699 30.8546Z" fill={color || "currentColor"}/>
<defs>
<filter id="filter0_d_21987_129743" x="0.0146484" y="42.0195" width="53.7183" height="61.6055" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="3" dy="7"/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.104618 0 0 0 0 0.465612 0 0 0 0 0.545833 0 0 0 0.15 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21987_129743"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21987_129743" result="shape"/>
</filter>
<filter id="filter1_d_21987_129743" x="56.356" y="0" width="49.7183" height="38.9648" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6" dy="4"/>
<feGaussianBlur stdDeviation="6.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.104618 0 0 0 0 0.465612 0 0 0 0 0.545833 0 0 0 0.09 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_21987_129743"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_21987_129743" result="shape"/>
</filter>
<filter id="filter2_f_21987_129743" x="28.8929" y="42.3631" width="66.4706" height="45.348" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="10.422" result="effect1_foregroundBlur_21987_129743"/>
</filter>
<linearGradient id="paint0_linear_21987_129743" x1="50.7963" y1="-1.10001" x2="51.5899" y2="134.959" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#FF9696"/>
</linearGradient>
<linearGradient id="paint1_linear_21987_129743" x1="50.5372" y1="20.5312" x2="50.5372" y2="25.3751" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint2_linear_21987_129743" x1="30.4233" y1="32.7929" x2="71.2938" y2="32.7929" gradientUnits="userSpaceOnUse">
<stop stop-color="#DF1313"/>
<stop offset="1" stop-color="#D2F7FF"/>
<stop offset="1" stop-color="#FF9E22"/>
</linearGradient>
<linearGradient id="paint3_linear_21987_129743" x1="30.4233" y1="43.8359" x2="71.2938" y2="43.8359" gradientUnits="userSpaceOnUse">
<stop stop-color="#DF1313"/>
<stop offset="1" stop-color="#D2F7FF"/>
<stop offset="1" stop-color="#FF9E22"/>
</linearGradient>
<linearGradient id="paint4_linear_21987_129743" x1="30.4233" y1="54.8828" x2="71.2938" y2="54.8828" gradientUnits="userSpaceOnUse">
<stop stop-color="#DF1313"/>
<stop offset="1" stop-color="#D2F7FF"/>
<stop offset="1" stop-color="#FF9E22"/>
</linearGradient>
<linearGradient id="paint5_linear_21987_129743" x1="30.4233" y1="65.9258" x2="71.2938" y2="65.9258" gradientUnits="userSpaceOnUse">
<stop stop-color="#DF1313"/>
<stop offset="1" stop-color="#D2F7FF"/>
<stop offset="1" stop-color="#FF9E22"/>
</linearGradient>
<linearGradient id="paint6_linear_21987_129743" x1="11.3025" y1="73.7204" x2="56.7622" y2="77.454" gradientUnits="userSpaceOnUse">
<stop stop-color="white"/>
<stop offset="1" stop-color="#FFD4D4"/>
</linearGradient>
<linearGradient id="paint7_linear_21987_129743" x1="33.738" y1="64.9515" x2="14.4849" y2="64.9515" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD7D7"/>
<stop offset="1" stop-color="#E63756"/>
</linearGradient>
<linearGradient id="paint8_linear_21987_129743" x1="33.7226" y1="77.165" x2="14.635" y2="77.165" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD7D7"/>
<stop offset="1" stop-color="#E63756"/>
</linearGradient>
<linearGradient id="paint9_linear_21987_129743" x1="33.7226" y1="70.747" x2="14.635" y2="70.747" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD7D7"/>
<stop offset="1" stop-color="#E63756"/>
</linearGradient>
<linearGradient id="paint10_linear_21987_129743" x1="28.8403" y1="58.534" x2="15.1605" y2="58.534" gradientUnits="userSpaceOnUse">
<stop offset="0.243799" stop-color="#FFD9D9"/>
<stop offset="1" stop-color="#FD6431"/>
</linearGradient>
<linearGradient id="paint11_linear_21987_129743" x1="72.2802" y1="55.3014" x2="52.4326" y2="55.3014" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9E22"/>
<stop offset="0.5" stop-color="#FF3333"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint12_linear_21987_129743" x1="48.4976" y1="74.3398" x2="48.4976" y2="88.5333" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint13_linear_21987_129743" x1="20.4625" y1="9.48828" x2="20.4625" y2="23.6817" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint14_linear_21987_129743" x1="49.5503" y1="9.48828" x2="49.5503" y2="13.628" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint15_linear_21987_129743" x1="86.0761" y1="44.3175" x2="90.2068" y2="48.5498" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint16_linear_21987_129743" x1="17.9771" y1="39.9782" x2="13.7395" y2="44.1034" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint17_linear_21987_129743" x1="74.3849" y1="80.8493" x2="70.1472" y2="84.9745" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
<linearGradient id="paint18_linear_21987_129743" x1="89.0699" y1="26.7148" x2="89.0699" y2="30.8546" gradientUnits="userSpaceOnUse">
<stop stop-color="#E50000"/>
<stop offset="1" stop-color="#CC0000"/>
</linearGradient>
</defs>
  </svg>
);

export default NoData;
