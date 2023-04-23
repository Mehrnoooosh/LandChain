import { BuildOutlined, HomeOutlined, OrderedListOutlined, UserOutlined } from "@ant-design/icons";
import { BreadCrumb } from "../components/BreadCrumb";
import Main from "../components/layout/Main";
import { Admins } from "../pages/admins/Index";
import { Listing } from "../pages/listing/Index";
import { SaveList } from "../pages/listing/Save";
import { Properties } from "../pages/properties/Index";
import { Realtors } from "../pages/realtors/Index";
import SignIn from "../pages/SignIn";
import ErrorPage from "./../pages/ErrorPage";
import Home from "./../pages/Home";
import Index from "./../pages/Index";

let routes = [
    {
        path: "/",
        element: <Index />,
        name: 'Home',
        icon: <HomeOutlined />,
        breadcrumb: <BreadCrumb />
    },
    {
        path: "/dashboard",
        element: <Main><Home /></Main>,
        name: 'Dashboard',
        icon: <HomeOutlined />,
        breadcrumb: <BreadCrumb />
    },
    {
        path: "*",
        element: <Main><ErrorPage /></Main>,
        no_menu: true
    },
    {
        path: "/sign-in",
        element: <SignIn />,
        no_menu: true
    },
    {
        path: "/admins",
        element: <Main><Admins /></Main>,
        name: 'Admins',
        icon: <UserOutlined />,
        breadcrumb: <BreadCrumb data={[{ name: 'Admins' }]} />
    },
    {
        path: "/realtors",
        element: <Main><Realtors /></Main>,
        name: 'Realtors',
        icon: <BuildOutlined />,
        breadcrumb: <BreadCrumb data={[{ name: 'Realtors' }]} />
    },
    {
        path: "/properties",
        element: <Main><Properties /></Main>,
        name: 'Properties',
        icon: <i className="fa fa-building"></i>,
        breadcrumb: <BreadCrumb data={[{ name: 'Properties' }]} />
    },
    {
        path: "/listing",
        element: <Main><Listing /></Main>,
        name: 'Listing',
        icon: <OrderedListOutlined />,
        breadcrumb: <BreadCrumb data={[{ name: 'Listing' }]} />
    },
    {
        path: "/listing/create",
        element: <Main><SaveList /></Main>,
        name: 'Add New Listing',
        icon: <OrderedListOutlined />,
        breadcrumb: <BreadCrumb data={[{ name: 'Listing', link: '/listing' }, { name: 'create' }]} />,
        no_menu: true
    },
];

export default routes;