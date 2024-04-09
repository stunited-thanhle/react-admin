/* eslint-disable react-hooks/exhaustive-deps */
import { ConfigProvider, Spin, theme as antdTheme } from "antd";
import { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MenuChild, MenuList } from "./interfaces/layout/menu.interface";
import { setGlobalState, setMenuList } from "./redux/features/global/globalSlice";
import { RootState } from "./redux/store";
import Router from "./routes";
import { HistoryRouter, history } from "./routes/history";
import { menuList } from "./routes/menu";

const initMenuListAll = (menu: MenuList) => {
  const MenuListAll: MenuChild[] = [];

  menu.forEach((m) => {
    if (!m?.children?.length) {
      MenuListAll.push(m);
    } else {
      m?.children.forEach((mu) => {
        MenuListAll.push(mu);
      });
    }
  });

  return MenuListAll;
};

function App() {
  const { theme } = useSelector((state: RootState) => state.global);
  const dispatch = useDispatch();

  const setTheme = (dark = true) => {
    dispatch(
      setGlobalState({
        theme: dark ? "dark" : "light",
      }),
    );
  };

  const matchMode = (e: MediaQueryListEvent) => {
    setTheme(e.matches);
  };

  useEffect(() => {
    setTheme(theme === "dark");

    if (!localStorage.getItem("theme")) {
      const mql = window.matchMedia("(prefers-color-scheme: dark)");

      mql.addEventListener("change", matchMode);
    }
  }, []);

  useEffect(() => {
    dispatch(setMenuList(initMenuListAll(menuList)));
  }, []);

  return (
    <>
      <ConfigProvider
        componentSize='middle'
        theme={{
          components: {
            Typography: {
              colorPrimary: "black",
            },
            Table: {
              // colorBgContainer: theme === "dark" ? "rgb(22 28 36)" : "white",
              // headerBg: theme === "dark" ? "rgb(47 57 68)" : "#fafafa",
            },
            // Layout: {
            //   colorBgLayout: theme === "dark" ? "red" : "#f5f5f5",
            // },
          },
          token: { colorPrimary: "#13c2c2" },
          algorithm: theme === "dark" ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        }}
      >
        <HistoryRouter history={history}>
          <Suspense fallback={<Spin />}>
            <Router />
          </Suspense>
        </HistoryRouter>
      </ConfigProvider>
    </>
  );
}

export default App;
