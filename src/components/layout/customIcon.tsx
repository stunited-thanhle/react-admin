import type { FC } from "react";
import { ReactComponent as DashboardSvg } from "../../assets/menu/dashboard.svg";
import { ReactComponent as UserSvg } from "../../assets/menu/user.svg";

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
    <span className='anticon' style={{ fontSize: "20px" }}>
      <IconComponent />
    </span>
  );
};
