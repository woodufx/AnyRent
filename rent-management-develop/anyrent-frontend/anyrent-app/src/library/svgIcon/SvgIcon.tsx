import { type } from "os";
import "./svgIcon.less";

import "../../assets/styles/common/mixins.less";
import "../../assets/styles/common/colors.less";

export interface SvgIconProps {
  id?: string;
  hover?: "default" | "hover";
  size?: "mini" | "default";
  userIsFocus?: boolean;
  homeIsFocus?: boolean;
  starIsFocus?: boolean;
  favIsFocus?: boolean;
  messagesIsFocus?: boolean;
  newrentIsFocus?: boolean;
  notificationIsFocus?: boolean;
}

export const SvgIcon = (props: SvgIconProps) => {
  switch (props.id) {
    case 'logo':
      let sizeIcon: string = '42';
      if (props.size === "mini") {
        sizeIcon = '36';
      }
      return (
        <svg className={`${props.hover} logotype`} width={`${sizeIcon}`} height={`${sizeIcon}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_110_153)">
            <path className="logotype__backgound" d="M44.9511 2H19.0489C10.7376 2 4 8.7376 4 17.0489V42.9511C4 51.2624 10.7376 58 19.0489 58H44.9511C53.2624 58 60 51.2624 60 42.9511V17.0489C60 8.7376 53.2624 2 44.9511 2Z" fill="#F5F6F8" />
            <path d="M11.8665 29.191V19.9674C11.8665 19.8217 11.9239 19.6819 12.0264 19.5782C12.1288 19.4746 12.268 19.4155 12.4137 19.4138L17.4519 19.339C17.5253 19.3381 17.5982 19.3517 17.6663 19.3791C17.7344 19.4066 17.7964 19.4473 17.8487 19.4989C17.901 19.5504 17.9425 19.6119 17.9708 19.6797C17.9991 19.7474 18.0137 19.8201 18.0137 19.8936V24.545C18.0135 24.6218 17.9972 24.6978 17.9658 24.7678C17.9344 24.8379 17.8885 24.9006 17.8313 24.9518L12.794 29.6033C12.7146 29.6761 12.6156 29.7241 12.5092 29.7415C12.4028 29.7588 12.2937 29.7447 12.1952 29.701C12.0967 29.6572 12.0132 29.5856 11.9548 29.495C11.8964 29.4045 11.8657 29.2988 11.8665 29.191Z" fill="#6B64DD" />
            <path d="M32.4889 33.2697C32.5317 33.3181 32.5597 33.3779 32.5695 33.4418C32.5794 33.5056 32.5707 33.571 32.5444 33.6301C32.5182 33.6892 32.4756 33.7395 32.4216 33.775C32.3676 33.8106 32.3045 33.8299 32.2399 33.8306L26.6627 33.8689V47.1648C26.6627 47.5296 26.5178 47.8794 26.2598 48.1373C26.0019 48.3953 25.6521 48.5402 25.2873 48.5402H21.8078C21.4692 48.5402 21.1444 48.4057 20.9049 48.1662C20.6655 47.9267 20.5309 47.602 20.5309 47.2633V32.9113C20.5309 32.7828 20.5575 32.6557 20.609 32.538C20.6605 32.4202 20.7357 32.3144 20.8301 32.2272L26.079 27.3842C26.1299 27.3376 26.1933 27.3068 26.2615 27.2955C26.3296 27.2842 26.3996 27.2929 26.4629 27.3207C26.5261 27.3484 26.58 27.3939 26.6179 27.4516C26.6558 27.5094 26.6761 27.5769 26.6764 27.646V28.3866C26.6764 28.4988 26.7209 28.6065 26.8003 28.6858C26.8797 28.7652 26.9873 28.8098 27.0995 28.8098H28.1356C28.2247 28.8096 28.3129 28.8281 28.3944 28.8641C28.4759 28.9001 28.549 28.9527 28.609 29.0186L32.4889 33.2697Z" fill="#3C3AA4" />
            <path d="M53.2819 48.5812L47.6107 48.5192C47.4803 48.5179 47.3517 48.4896 47.2327 48.4363C47.1137 48.3829 47.0071 48.3056 46.9194 48.2091L39.9741 40.516L28.3181 27.7427L27.3148 26.692C27.1685 26.5323 26.9707 26.429 26.756 26.4002C26.5414 26.3713 26.3234 26.4188 26.1401 26.5342L25.9759 26.6573L20.5319 31.6627V31.6417L11.3202 40.1138C10.71 40.6747 9.78699 40.4722 9.79155 39.6431L9.75598 33.6482C9.75656 33.5178 9.78408 33.3889 9.83682 33.2696C9.88955 33.1504 9.96636 33.0433 10.0624 32.9551L20.531 23.3329L25.9823 18.3257L25.9905 18.3184C26.1755 18.152 26.4185 18.065 26.6671 18.0761C26.9157 18.0872 27.1499 18.1955 27.3194 18.3777C27.3194 18.3777 40.9363 32.9779 40.9299 32.9797L53.9869 46.9852C54.1134 47.1211 54.1972 47.2912 54.228 47.4743C54.2588 47.6575 54.2352 47.8456 54.1602 48.0155C54.0852 48.1854 53.962 48.3295 53.8059 48.4301C53.6497 48.5306 53.4675 48.5832 53.2819 48.5812Z" fill="#6B64DD" />
            <path d="M20.5309 21.9001V11.561C20.5309 11.2708 20.6462 10.9924 20.8515 10.7871C21.0567 10.5819 21.3351 10.4666 21.6254 10.4666H34.8848C48.8392 10.4666 48.177 22.2138 48.177 22.2138C48.177 22.2138 48.5364 29.544 41.9897 32.5537C41.8767 32.6051 41.7504 32.6197 41.6287 32.5955C41.5069 32.5713 41.3958 32.5095 41.3111 32.4188L37.9502 28.8307C37.9084 28.7867 37.8782 28.733 37.8624 28.6744C37.8467 28.6158 37.8457 28.5542 37.8598 28.4951C37.8738 28.4361 37.9024 28.3815 37.9428 28.3362C37.9833 28.291 38.0344 28.2566 38.0916 28.2361C42.2989 26.64 41.9833 22.2594 41.9833 22.2594C41.9833 22.2594 42.4922 15.7081 34.3567 15.7081H27.074C27.0218 15.7081 26.97 15.7184 26.9218 15.7384C26.8736 15.7584 26.8297 15.7877 26.7928 15.8246C26.7559 15.8615 26.7266 15.9054 26.7066 15.9536C26.6866 16.0019 26.6763 16.0536 26.6763 16.1058V16.4633C26.6762 16.599 26.6479 16.7332 26.5933 16.8573C26.5387 16.9815 26.4589 17.093 26.3589 17.1848L20.9961 22.1098C20.9567 22.1485 20.9066 22.1745 20.8523 22.1842C20.798 22.1939 20.742 22.1869 20.6916 22.1643C20.6413 22.1416 20.5991 22.1042 20.5704 22.057C20.5417 22.0099 20.5279 21.9552 20.5309 21.9001Z" fill="#3C3AA4" />
          </g>
          <defs>
            <filter id="filter0_d_110_153" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_110_153" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_110_153" result="shape" />
            </filter>
          </defs>
        </svg>
      );

    case 'logo-default':
      return (
        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M31.4446 0H11.5554C5.17352 0 0 5.17352 0 11.5554V31.4446C0 37.8265 5.17352 43 11.5554 43H31.4446C37.8265 43 43 37.8265 43 31.4446V11.5554C43 5.17352 37.8265 0 31.4446 0Z" fill="#F5F6F8" />
          <path d="M6.04031 20.8788V13.7964C6.0403 13.6845 6.08442 13.5771 6.16308 13.4975C6.24174 13.418 6.34861 13.3726 6.4605 13.3713L10.3291 13.3139C10.3855 13.3131 10.4415 13.3236 10.4938 13.3447C10.5461 13.3657 10.5937 13.397 10.6338 13.4366C10.674 13.4762 10.7058 13.5234 10.7276 13.5754C10.7493 13.6275 10.7605 13.6833 10.7605 13.7397V17.3113C10.7604 17.3703 10.7479 17.4286 10.7237 17.4824C10.6996 17.5362 10.6644 17.5844 10.6204 17.6237L6.75254 21.1954C6.69152 21.2513 6.61551 21.2881 6.53383 21.3014C6.45216 21.3148 6.36837 21.304 6.29275 21.2704C6.21713 21.2367 6.15296 21.1818 6.10812 21.1122C6.06327 21.0427 6.03971 20.9616 6.04031 20.8788Z" fill="#6B64DD" />
          <path d="M21.8754 24.0107C21.9082 24.0478 21.9297 24.0937 21.9373 24.1428C21.9449 24.1918 21.9382 24.242 21.918 24.2874C21.8979 24.3328 21.8652 24.3714 21.8237 24.3987C21.7822 24.426 21.7338 24.4408 21.6842 24.4414L17.4017 24.4708V34.6801C17.4017 34.9602 17.2904 35.2288 17.0924 35.4269C16.8943 35.6249 16.6257 35.7362 16.3456 35.7362H13.6739C13.4138 35.7362 13.1644 35.6329 12.9806 35.449C12.7967 35.2652 12.6934 35.0158 12.6934 34.7557V23.7354C12.6934 23.6368 12.7138 23.5392 12.7533 23.4488C12.7928 23.3584 12.8507 23.2771 12.9231 23.2102L16.9535 19.4915C16.9926 19.4556 17.0413 19.432 17.0936 19.4233C17.146 19.4146 17.1997 19.4213 17.2483 19.4426C17.2969 19.4639 17.3382 19.4989 17.3673 19.5432C17.3964 19.5876 17.412 19.6394 17.4122 19.6925V20.2611C17.4122 20.3473 17.4464 20.43 17.5074 20.4909C17.5683 20.5518 17.651 20.5861 17.7372 20.5861H18.5327C18.6011 20.586 18.6688 20.6002 18.7314 20.6278C18.794 20.6554 18.8502 20.6958 18.8962 20.7464L21.8754 24.0107Z" fill="#3C3AA4" />
          <path d="M37.8414 35.7678L33.4868 35.7201C33.3867 35.7191 33.2879 35.6974 33.1965 35.6565C33.1052 35.6155 33.0233 35.5561 32.9559 35.482L27.6229 29.5748L18.6728 19.7667L17.9024 18.9599C17.7901 18.8373 17.6382 18.758 17.4734 18.7359C17.3085 18.7137 17.1411 18.7501 17.0004 18.8388L16.8743 18.9333L12.6941 22.7767V22.7606L5.62081 29.2659C5.1523 29.6966 4.44357 29.5412 4.44707 28.9046L4.41975 24.3013C4.4202 24.2012 4.44133 24.1022 4.48182 24.0106C4.52232 23.919 4.5813 23.8368 4.65506 23.7691L12.6934 16.3806L16.8793 12.5358L16.8856 12.5302C17.0276 12.4025 17.2142 12.3357 17.4051 12.3442C17.5959 12.3527 17.7758 12.4359 17.9059 12.5758C17.9059 12.5758 28.3618 23.7866 28.3569 23.788L38.3828 34.5422C38.4799 34.6466 38.5443 34.7772 38.5679 34.9178C38.5916 35.0584 38.5735 35.2029 38.5159 35.3333C38.4582 35.4638 38.3636 35.5744 38.2438 35.6517C38.1239 35.7289 37.984 35.7692 37.8414 35.7678Z" fill="#6B64DD" />
          <path d="M12.6934 15.2804V7.34149C12.6934 7.1186 12.7819 6.90485 12.9396 6.74724C13.0972 6.58964 13.3109 6.5011 13.5338 6.5011H23.7151C34.4301 6.5011 33.9217 15.5213 33.9217 15.5213C33.9217 15.5213 34.1976 21.1498 29.1707 23.4609C29.0839 23.5003 28.9869 23.5115 28.8935 23.493C28.8 23.4744 28.7147 23.4269 28.6496 23.3572L26.0689 20.6022C26.0368 20.5684 26.0137 20.5271 26.0015 20.4821C25.9894 20.4371 25.9887 20.3898 25.9995 20.3444C26.0103 20.2991 26.0322 20.2572 26.0633 20.2224C26.0944 20.1877 26.1336 20.1613 26.1775 20.1455C29.4081 18.92 29.1658 15.5563 29.1658 15.5563C29.1658 15.5563 29.5565 10.5259 23.3096 10.5259H17.7175C17.6774 10.5259 17.6377 10.5338 17.6007 10.5491C17.5636 10.5645 17.53 10.587 17.5016 10.6153C17.4733 10.6437 17.4508 10.6773 17.4354 10.7144C17.4201 10.7514 17.4122 10.7911 17.4122 10.8312V11.1057C17.4121 11.2099 17.3904 11.3129 17.3485 11.4083C17.3065 11.5036 17.2452 11.5892 17.1685 11.6597L13.0506 15.4415C13.0204 15.4712 12.9819 15.4911 12.9402 15.4985C12.8985 15.506 12.8555 15.5007 12.8168 15.4832C12.7782 15.4658 12.7457 15.4371 12.7237 15.4009C12.7017 15.3647 12.6911 15.3227 12.6934 15.2804Z" fill="#3C3AA4" />
        </svg>
      );

    case 'logo-mini':
      return (
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M26.3257 0H9.67427C4.33132 0 0 4.33132 0 9.67427V26.3257C0 31.6687 4.33132 36 9.67427 36H26.3257C31.6687 36 36 31.6687 36 26.3257V9.67427C36 4.33132 31.6687 0 26.3257 0Z" fill="#F5F6F8" />
          <path d="M5.05689 17.4799V11.5505C5.05689 11.4568 5.09382 11.3669 5.15968 11.3003C5.22554 11.2336 5.31501 11.1957 5.40869 11.1946L8.64751 11.1465C8.69472 11.1459 8.74158 11.1547 8.78537 11.1723C8.82917 11.1899 8.86902 11.2161 8.90262 11.2493C8.93622 11.2824 8.9629 11.3219 8.98111 11.3655C8.99931 11.409 9.00869 11.4558 9.00868 11.503V14.4932C9.00858 14.5426 8.99809 14.5914 8.97789 14.6365C8.95768 14.6815 8.92822 14.7218 8.89142 14.7547L5.65318 17.745C5.60209 17.7918 5.53846 17.8226 5.47008 17.8338C5.4017 17.8449 5.33155 17.8359 5.26824 17.8077C5.20493 17.7796 5.1512 17.7336 5.11366 17.6754C5.07612 17.6171 5.05639 17.5492 5.05689 17.4799Z" fill="#6B64DD" />
          <path d="M18.3142 20.102C18.3417 20.1331 18.3597 20.1715 18.366 20.2126C18.3724 20.2536 18.3668 20.2957 18.3499 20.3336C18.333 20.3716 18.3056 20.404 18.2709 20.4268C18.2362 20.4497 18.1957 20.4621 18.1541 20.4625L14.5688 20.4872V29.0345C14.5688 29.269 14.4756 29.4939 14.3098 29.6597C14.144 29.8255 13.9191 29.9187 13.6846 29.9187H11.4478C11.2301 29.9187 11.0213 29.8322 10.8674 29.6783C10.7134 29.5243 10.627 29.3156 10.627 29.0978V19.8715C10.6269 19.7889 10.644 19.7072 10.6771 19.6316C10.7102 19.5559 10.7586 19.4879 10.8193 19.4318L14.1935 16.3184C14.2263 16.2885 14.2671 16.2686 14.3109 16.2614C14.3547 16.2541 14.3997 16.2598 14.4403 16.2776C14.481 16.2954 14.5156 16.3246 14.54 16.3618C14.5644 16.3989 14.5774 16.4423 14.5776 16.4867V16.9628C14.5776 17.035 14.6062 17.1042 14.6573 17.1552C14.7083 17.2062 14.7775 17.2349 14.8496 17.2349H15.5157C15.573 17.2348 15.6296 17.2467 15.682 17.2698C15.7345 17.2929 15.7814 17.3268 15.82 17.3691L18.3142 20.102Z" fill="#3C3AA4" />
          <path d="M31.6811 29.9451L28.0354 29.9052C27.9516 29.9044 27.8688 29.8862 27.7924 29.8519C27.7159 29.8176 27.6473 29.7679 27.591 29.7059L23.1261 24.7603L15.633 16.5489L14.988 15.8734C14.8939 15.7708 14.7668 15.7044 14.6288 15.6858C14.4908 15.6673 14.3507 15.6978 14.2328 15.772L14.1273 15.8512L10.6276 19.0689V19.0554L4.70573 24.5017C4.31349 24.8623 3.72013 24.7321 3.72306 24.1992L3.7002 20.3453C3.70057 20.2615 3.71826 20.1786 3.75216 20.1019C3.78606 20.0252 3.83544 19.9564 3.8972 19.8997L10.627 13.714L14.1314 10.4951L14.1367 10.4904C14.2556 10.3835 14.4118 10.3275 14.5716 10.3347C14.7314 10.3418 14.882 10.4114 14.9909 10.5285C14.9909 10.5285 23.7447 19.9143 23.7406 19.9155L32.1343 28.919C32.2157 29.0064 32.2695 29.1158 32.2894 29.2335C32.3092 29.3512 32.294 29.4722 32.2458 29.5814C32.1975 29.6906 32.1183 29.7833 32.018 29.8479C31.9176 29.9125 31.8005 29.9463 31.6811 29.9451Z" fill="#6B64DD" />
          <path d="M10.627 12.7929V6.14639C10.627 5.95979 10.7011 5.78083 10.833 5.64889C10.965 5.51694 11.1439 5.44281 11.3305 5.44281H19.8545C28.8251 5.44281 28.3995 12.9946 28.3995 12.9946C28.3995 12.9946 28.6305 17.7068 24.4219 19.6417C24.3492 19.6747 24.2681 19.6841 24.1898 19.6685C24.1115 19.653 24.0401 19.6132 23.9857 19.5549L21.8251 17.2483C21.7982 17.2201 21.7788 17.1855 21.7687 17.1478C21.7585 17.1102 21.7579 17.0705 21.7669 17.0326C21.776 16.9946 21.7943 16.9595 21.8203 16.9304C21.8464 16.9014 21.8792 16.8792 21.9159 16.8661C24.6206 15.84 24.4178 13.0239 24.4178 13.0239C24.4178 13.0239 24.7449 8.81239 19.515 8.81239H14.8332C14.7996 8.81239 14.7664 8.819 14.7354 8.83185C14.7044 8.84469 14.6762 8.86352 14.6525 8.88726C14.6287 8.911 14.6099 8.93918 14.597 8.97019C14.5842 9.00121 14.5776 9.03445 14.5776 9.06802V9.29786C14.5775 9.38507 14.5593 9.47132 14.5242 9.55115C14.4891 9.63098 14.4378 9.70266 14.3735 9.76164L10.926 12.9278C10.9007 12.9526 10.8685 12.9693 10.8336 12.9755C10.7986 12.9818 10.7626 12.9773 10.7303 12.9627C10.698 12.9482 10.6708 12.9241 10.6523 12.8938C10.6339 12.8635 10.6251 12.8283 10.627 12.7929Z" fill="#3C3AA4" />
        </svg>
      );
    default:
      return <svg></svg>
      break;
  }
}

export default SvgIcon;