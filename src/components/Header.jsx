import Link from "next/link";
import cls from "../styles/forComponents/Header.module.scss";

const Header = () => {
    return (
        <header className={cls.header}>
            <div className={cls.leftSide}>
                <Link href="/" className={cls.logo}>
                    <img src="/logo.svg" alt="" />
                    <h6><span>Todo</span>List</h6>
                </Link>
                <div className={cls.inp}>
                    <i className="ri ri-search-line"></i>
                    <input type="text" placeholder="Search for any training you want " />
                </div>
            </div>
            <div className={cls.user}>
                <i class="ri-notification-3-line"></i>
                <div className={cls.ava}>
                    <img src="/user.png" alt="" />
                </div>
            </div>

        </header>
    )
}
 
export default Header
