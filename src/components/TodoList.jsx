import cls from "../styles/forComponents/TodoList.module.scss";

const TodoList = () => {
    return (
        <>
                <h5 className={cls.head}>Your task today</h5>
            <div className={cls.todos}>
                <div className={cls.cols}>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/AlenaCurtis.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6> <span>Alena Curtis</span> - 06.06.2022  14:00PM</h6>
                                <p>
                                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM</p>
                            <a><i className="ri ri-check-line"></i> success</a>
                        </div>
                    </div>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/TheodoreGomez.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>Theodore Gomez</span> - 06.06.2022  14:00PM</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM  </p>
                            <a><i className="ri ri-check-line"></i> success</a>
                        </div>
                    </div>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/MarshallGraves.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>Marshall Graves</span> - 06.06.2022  14:00PM</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM  </p>
                            <a><i className="ri ri-check-line"></i> success</a>
                        </div>
                    </div>

                </div>
                <div className={cls.cols}>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/ArthurWatts.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>Arthur Watts</span> - 06.06.2022  14:00PM</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sem ipsum. Nam imperdiet erat id arcu congue, vel tristique sem aliquet. Ut volutpat purus sit amet dapibus fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra ultrices lectus, nec luctus lacus. Nullam quis varius justo, non bibendum.</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM  </p>
                            <a><i className="ri ri-check-line"></i> success</a>
                        </div>
                    </div>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/MarieStephens.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>Marie Stephens</span> - 06.06.2022  14:00PM</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM  </p>
                            <a className={cls.refuse}><i className="ri ri-close-line"></i> refuse</a>
                        </div>
                    </div>


                </div>
                <div className={cls.cols}>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/TanyaRice.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>Tanya Rice</span> - 06.06.2022  14:00PM</h6>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM  </p>
                            <a><i className="ri ri-check-line"></i>success</a>
                        </div>
                    </div>
                    <div className={cls.toodo}>
                        <div className={cls.body}>
                            <div className={cls.ava}>
                                <img src="/avatars/DianneBeck.png" alt="" />
                            </div>
                            <div className={cls.text}>
                                <h6><span>Dianne Beck</span> - 06.06.2022  14:00PM</h6>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed sem ipsum. Nam imperdiet erat id arcu congue, vel tristique sem aliquet. Ut volutpat purus sit amet dapibus fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra ultrices lectus, nec luctus lacus. Nullam quis varius justo, non bibendum.</p>
                            </div>
                        </div>
                        <div className={cls.status}>
                            <p><b>Expiration:</b> 02.07.2022 14:00PM  </p>
                            <a><i className="ri ri-check-line"></i>success</a>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default TodoList
