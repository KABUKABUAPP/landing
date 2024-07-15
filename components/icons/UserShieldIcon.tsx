import React, { FC } from "react";

interface Props {
  width?: number;
  height?: number;
}

const UserShieldIcon: FC<Props> = ({ height = 15, width = 15 }) => {
  return (
    <svg
      width={`${width}`}
      height={`${height}`}
      viewBox="0 0 24 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0241 0.666016C9.03742 2.14735 6.66667 3.33268 0 4.66602C0 6.18202 0 10.9352 0 12.5179C0 21.4072 7.556 25.8513 12 27.3327C16.444 25.8513 24 21.4072 24 12.5179C24 10.8846 24 6.25802 24 4.66602C17.3333 3.33268 14.9628 2.14735 12.0241 0.666016ZM12.0081 7.99935C13.5895 7.99935 14.8747 9.28455 14.8747 10.8659C14.8747 12.4472 13.5881 13.7327 12.0081 13.7327C10.4281 13.7327 9.14258 12.4472 9.14258 10.8659C9.14258 9.28455 10.4268 7.99935 12.0081 7.99935ZM16.6667 19.3327C16.6667 19.7007 16.368 19.9993 16 19.9993H8C7.632 19.9993 7.33333 19.7007 7.33333 19.3327V18.9287C7.33333 17.142 8.64121 15.3327 11.1439 15.3327H12.8548C15.3575 15.3327 16.6654 17.1407 16.6654 18.9287V19.3327H16.6667Z"
        fill="#9A9A9A"
      />
    </svg>
  );
};

export default UserShieldIcon;