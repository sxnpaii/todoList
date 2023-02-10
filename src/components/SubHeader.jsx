import cls from "../styles/forComponents/SubHeader.module.scss";

const SubHeader = ({ title }) => {
  return (
    <section className={cls.subHeader}>
      <h2 className={cls.heading}>{title}</h2>
      <div className={cls.btns}>
        <div className={`dropdown-center ${cls.dropdown}`}>
          <button className={` dropdown-toggle ${cls.dropBtn} `} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Your task today
          </button>
          <ul className={`dropdown-menu ${cls.menu}`}>
            <li><a className="dropdown-item" href="#">Action</a></li>
          </ul>
        </div>
        <a href={`${process.env.API_URL}`} className={cls.addNew}>
          <i class="ri-add-box-line"></i>
          Add New
        </a>
      </div>
    </section>
  )
}

export default SubHeader
