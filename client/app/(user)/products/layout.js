export const metadata = {
    meta: [{ name: "view-transition", content: "same-origin" }]
}

const Layout = ({ children }) => {
    return <div className="mt-28 w-full h-max flex justify-center items-center">{children}</div>
};

export default Layout;
