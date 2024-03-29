"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Layout, Menu, theme } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";
import background from "../../public/background.jpg";

const { Header, Content, Footer } = Layout;
const menuItems = ["Home", "My Cart", "Profile"];
const mainItems = menuItems.map((item, index) => ({
  key: index + 1,
  label: `${item}`,
}));
const loginMenu = ["Login", "Register"];
const loginitems = loginMenu.map((item, index) => ({
  key: index + 1,
  label: `${item}`,
}));

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();
  function menuClickHandler({ item, key, keyPath, domEvent }) {
    console.log(key);
    switch (key) {
      case "1":
        router.push("/");
        break;
      case "2":
        router.push("/cart");
        break;
      case "3":
        router.push("/profile");
        break;

      default:
        break;
    }
  }
  function loginMenuClickHandler({ item, key, keyPath, domEvent }) {
    console.log(key);
    switch (key) {
      case "1":
        router.push("/login");
        break;
      case "2":
        router.push("/register");
        break;

      default:
        break;
    }
  }

  return (
    <html lang="en">
      <body
        style={{ margin: 0, backgroundColor: "lightpink" }}
        className={inter.className}
      >
        <Layout>
          <Header
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div className="demo-logo" />
            <Image
              src={"/logo.png"}
              height={80}
              width={90}
              style={{ paddingTop: 20, paddingBottom: 10, marginRight: 20 }}
              alt="logo"
            ></Image>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={mainItems}
              style={{
                flex: 5,
                minWidth: 0,
              }}
              onClick={({ item, key, keyPath, domEvent }) => {
                menuClickHandler({ item, key, keyPath, domEvent });
              }}
            />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[null]}
              items={loginitems}
              style={{
                flex: 1,
                minWidth: 0,
              }}
              onClick={({ item, key, keyPath, domEvent }) => {
                loginMenuClickHandler({ item, key, keyPath, domEvent });
              }}
            />
          </Header>
          <Content
            style={{
              padding: "0 48px",
              backgroundImage: `url(${background})`,
              minHeight: "90vh",
            }}
          >
          
              {children}
          
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Younes Design ©{new Date().getFullYear()} Created by Ahmed Younes
            and Sondos Megahd
          </Footer>
        </Layout>
      </body>
    </html>
  );
}
