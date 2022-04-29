import { RoutesString } from 'Components/Modules/Constant';
import CompExam from 'Components/Pages/Main';
interface pagesType {
    path: string;
    element: JSX.Element;
}
const pages: pagesType[] = [
    {
        path: RoutesString.Main,
        element: <CompExam />,
    },
];
export default pages;
