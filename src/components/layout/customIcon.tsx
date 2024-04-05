import type { FC } from "react";
import { ReactComponent as DashboardSvg } from "../../assets/menu/ic_dashboard.svg";
import { ReactComponent as UserSvg } from "../../assets/menu/ic_user.svg";

interface CustomIconProps {
  type: string;
}

const iconsComponents: Record<string, FC> = {
  dashboard: DashboardSvg,
  user: UserSvg,
};

export const CustomIcon: FC<CustomIconProps> = ({ type }) => {
  const IconComponent = iconsComponents[type] || DashboardSvg;
  return (
    <span className='anticon' style={{ fontSize: "23px" }}>
      <IconComponent />
    </span>
  );
};
