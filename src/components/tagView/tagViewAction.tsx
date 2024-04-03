import type { FC } from "react";

import { SettingOutlined } from "@ant-design/icons";
import { Dropdown } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { useTranslation } from "react-i18next";
import { removeAllTag, removeOtherTag, removeTag } from "../../redux/features/tagView/tagViewSlice";
import { RootState } from "../../redux/store";

const TagsViewAction: FC = () => {
  const { activeTagId } = useSelector((state: RootState) => state.tagsView);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <Dropdown
      menu={{
        items: [
          {
            key: "0",
            onClick: () => dispatch(removeTag(activeTagId)),
            label: t("MENU.CLOSE_CURRENT"),
          },
          {
            key: "1",
            onClick: () => dispatch(removeOtherTag()),
            label: t("MENU.CLOSE_OTHER"),
          },
          {
            key: "2",
            onClick: () => dispatch(removeAllTag()),
            label: t("MENU.COLOSE_ALL"),
          },
          {
            key: "3",
            type: "divider",
          },
          {
            key: "4",
            onClick: () => dispatch(removeOtherTag()),
            label: t("MENU.DASHBOARD"),
          },
        ],
      }}
    >
      <span id='pageTabs-actions'>
        <SettingOutlined className='tagsView-extra' />
      </span>
    </Dropdown>
  );
};

export default TagsViewAction;
