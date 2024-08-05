import React from 'react'
import blog from "./Blog.module.css"
import blogImg1 from "../../../Assets/img/gallery/blog1.png"
import blogImg2 from "../../../Assets/img/gallery/blog2.png"
import blogImg3 from "../../../Assets/img/gallery/blog3.png"

function Blog() {
    const blogData = [
        {
            id: 1,
            category: "Pet Food",
            Date: "Nov 30 2020",
            title: "Amazing Places To Visit In Summer",
            image: blogImg1
        },
        {
            id: 2,
            category: "Pet Food",
            Date: "Nov 30 2020",
            title: "Amazing Places To Visit In Summer",
            image: blogImg2
        },
        {
            id: 3,
            category: "Pet Food",
            Date: "Nov 30 2020",
            title: "Amazing Places To Visit In Summer",
            image: blogImg3
        },
    ]


    return (
        <div className={blog.blog_section}>
            <div className={blog.blog_container}>

                {/* text container */}
                <div className={blog.bcontainer_intro}>
                    <p className={blog.title_tag}>Our recent news</p>
                    <h2 className={blog.title_title}>Our Recent Blog</h2>
                </div>

                {/* blog pppost container */}
                <div className={blog.bcontainer_post}>

                    {/* Box 1 */}
                    <div className={blog.bcp_box}>

                        <div className={blog.bcp_img_container}>
                            <img src={blogImg3} alt='/imgs' className={blog.imgc_img} />
                        </div>

                        {/* text div */}

                        <div className={blog.bcp_txt_container}>

                            <div className={blog.txtctr_p}>
                                <p className={blog.txtc_cate}>Pet food</p>
                                <p className={blog.txtc_date}> Nov 30, 2020</p>
                            </div>


                            <h3 className={blog.txtc_title}>Amazing Places To Visit In Summer</h3>

                            <p className={blog.txtc_rm}>Read More</p>
                        </div>
                    </div>

                    {/* Box 2 */}
                    <div className={blog.bcp_box}>

                        <div className={blog.bcp_img_container}>
                            <img src={blogImg3} alt='/imgs' className={blog.imgc_img} />
                        </div>

                        {/* text div */}

                        <div className={blog.bcp_txt_container}>

                            <div className={blog.txtctr_p}>
                                <p className={blog.txtc_cate}>Pet food</p>
                                <p className={blog.txtc_date}> Nov 30, 2020</p>
                            </div>


                            <h3 className={blog.txtc_title}>Amazing Places To Visit In Summer</h3>

                            <p className={blog.txtc_rm}>Read More</p>
                        </div>
                    </div>

                    {/* Box 3 */}
                    <div className={blog.bcp_box}>

                        <div className={blog.bcp_img_container}>
                            <img src={blogImg3} alt='/imgs' className={blog.imgc_img} />
                        </div>

                        {/* text div */}

                        <div className={blog.bcp_txt_container}>

                            <div className={blog.txtctr_p}>
                                <p className={blog.txtc_cate}>Pet food</p>
                                <p className={blog.txtc_date}> Nov 30, 2020</p>
                            </div>


                            <h3 className={blog.txtc_title}>Amazing Places To Visit In Summer</h3>

                            <p className={blog.txtc_rm}>Read More</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Blog
