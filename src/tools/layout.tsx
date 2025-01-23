import {Outlet} from "react-router";
import styles from './layout.module.scss'

export default function ToolsLayout() {
    return <div>
        <div className={styles.navToolbar}>小工具导航栏</div>
        <Outlet/>
    </div>
}
