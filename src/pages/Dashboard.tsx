import { Table } from "@/components/core/Table/Table";
import { useGetAccounts } from "@/hooks/useUser";
import { IUser } from "@/interfaces/user/users.interface";
import { useState } from "react";
import { UsersColumnsTable } from "./UserListColumn";

const Dashboard = () => {
  const { data, isLoading } = useGetAccounts();
  const handleAction = (key: string, _item: IUser) => {
    switch (key) {
      // case "update":
      //   navigate(`/application/${item.id}`);
      //   break;
      // case "detail":
      //   navigate(`/courses/${item.id}`);
      //   break;
      // case "delete":
      //   openModal(
      //     () => {
      //       onDeleteApplication(item.id);
      //     },
      //     ModalTypeEnum.CONFIRM,
      //     ICON_URL.ICON_TRASH,
      //     t("MODAL.CONFIRM_DELETE", { name: item.name }),
      //     t("MODAL.TITLE_DELETE", { name: item.name })
      //   );
      //   break;
      default:
    }
  };
  const [table, setTable] = useState({
    page: 1,
    take: 5,
  });
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h1>Dashboard</h1>
          <ul>
            {data?.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
          <Table
            paginate={{
              table,
              setTable,
              total: data?.length || 0,
              pageCount: 10,
            }}
            columns={UsersColumnsTable(handleAction, true)}
            dataSource={data}
          />
        </div>
      )}
    </>
  );
};

export default Dashboard;
