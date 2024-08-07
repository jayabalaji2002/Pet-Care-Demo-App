import React from 'react'
import blog from "./Blog.module.css"
import blogImg1 from "../../Assets/img/blog/single_blog_1.png"
import blogImg2 from "../../Assets/img/blog/single_blog_2.png"
import blogImg3 from "../../Assets/img/blog/single_blog_3.png"
import blogImg4 from "../../Assets/img/blog/single_blog_4.png"
import blog_insta_img_1 from "../../Assets/img/blog/blog_1.png"
// import blog_insta_img_2 from "../../Assets/img/blog/blog_2.png"
// import blog_insta_img_3 from "../../Assets/img/blog/blog_3.png"
// import blog_insta_img_4 from "../../Assets/img/blog/blog_4.png"
import blog_insta_post1 from "../../Assets/img/post/post_1.png"
// import blog_insta_post2 from "../../Assets/img/post/post_2.png"
// import blog_insta_post3 from "../../Assets/img/post/post_3.png"
// import blog_insta_post4 from "../../Assets/img/post/post_4.png"
// import blog_insta_post5 from "../../Assets/img/post/post_5.png"
import { FaUser } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function Blog() {
  return (
    <div className={blog.blog}>

      <div className={blog.header_txt}>
        <div className={blog.htxt_background}>
          <h1 className={blog.text_h1_header}>Blog</h1>
        </div>
      </div>

      {/* Start Blog page*/}
      <div className={blog.blog_page}>
        <div className={blog.blog_container}>

          {/* Left ctr */}
          <div className={blog.blog_ctr_left}>
            
            <div className={blog.left_card_ctr}>

              {/* Box 1 */}
              <div className={blog.card_ctr_box}>

                <div className={blog.img_ctr}>
                  <div className={blog.img_ctr__img}>
                    <img src={blogImg1} alt="blogImg1" className={blog.img__img} />
                  </div>
                  <div className={blog.img_ctr__date}>
                    <p className={blog.img__date}>15</p>
                    <p className={blog.img__month}>Jan</p>
                  </div>
                </div>

                {/* text ctr */}
                <div className={blog.txt_ctr}>
                  <h3 className={blog.txt_ctr_h3}>Google inks pact for new 35-storey office</h3>
                  <p className={blog.txt_ctr_p}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

                  <ul className={blog.txt_ctr_ul}>
                    <li className={blog.ul__li_1}>
                      <FaUser  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>Travel, Lifestyle</p>
                    </li>
                    <li className={blog.ul__li_1}>
                      <FaComment  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>03 Comments</p>
                    </li>
                    
                  </ul>

                </div>
              </div>

              {/* Box 2 */}
              <div className={blog.card_ctr_box}>

                <div className={blog.img_ctr}>
                  <div className={blog.img_ctr__img}>
                    <img src={blogImg2} alt="blogImg1" className={blog.img__img} />
                  </div>
                  <div className={blog.img_ctr__date}>
                    <p className={blog.img__date}>15</p>
                    <p className={blog.img__month}>Jan</p>
                  </div>
                </div>

                {/* text ctr */}
                <div className={blog.txt_ctr}>
                  <h3 className={blog.txt_ctr_h3}>Google inks pact for new 35-storey office</h3>
                  <p className={blog.txt_ctr_p}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

                  <ul className={blog.txt_ctr_ul}>
                    <li className={blog.ul__li_1}>
                      <FaUser  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>Travel, Lifestyle</p>
                    </li>
                    <li className={blog.ul__li_1}>
                      <FaComment  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>03 Comments</p>
                    </li>
                    
                  </ul>

                </div>
              </div>

              {/* Box 3 */}
              <div className={blog.card_ctr_box}>

                <div className={blog.img_ctr}>
                  <div className={blog.img_ctr__img}>
                    <img src={blogImg3} alt="blogImg1" className={blog.img__img} />
                  </div>
                  <div className={blog.img_ctr__date}>
                    <p className={blog.img__date}>15</p>
                    <p className={blog.img__month}>Jan</p>
                  </div>
                </div>

                {/* text ctr */}
                <div className={blog.txt_ctr}>
                  <h3 className={blog.txt_ctr_h3}>Google inks pact for new 35-storey office</h3>
                  <p className={blog.txt_ctr_p}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

                  <ul className={blog.txt_ctr_ul}>
                    <li className={blog.ul__li_1}>
                      <FaUser  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>Travel, Lifestyle</p>
                    </li>
                    <li className={blog.ul__li_1}>
                      <FaComment  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>03 Comments</p>
                    </li>
                    
                  </ul>

                </div>
              </div>

              {/* Box 4 */}
              <div className={blog.card_ctr_box}>

                <div className={blog.img_ctr}>
                  <div className={blog.img_ctr__img}>
                    <img src={blogImg4} alt="blogImg1" className={blog.img__img} />
                  </div>
                  <div className={blog.img_ctr__date}>
                    <p className={blog.img__date}>15</p>
                    <p className={blog.img__month}>Jan</p>
                  </div>
                </div>

                {/* text ctr */}
                <div className={blog.txt_ctr}>
                  <h3 className={blog.txt_ctr_h3}>Google inks pact for new 35-storey office</h3>
                  <p className={blog.txt_ctr_p}>That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>

                  <ul className={blog.txt_ctr_ul}>
                    <li className={blog.ul__li_1}>
                      <FaUser  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>Travel, Lifestyle</p>
                    </li>
                    <li className={blog.ul__li_1}>
                      <FaComment  className={blog.li_1__icon}/>
                      <p className={blog.li_1__p}>03 Comments</p>
                    </li>
                    
                  </ul>

                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className={blog.left_pagination}>
              <p>Previous</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>1</p>
              <p>Next</p>

            </div>
          </div>
          
          
          {/* Right ctr */}
          <div className={blog.blog_ctr_right}>

            <div className={blog.right_ctr}>

              {/* Search Ctr */}
              <div className={blog.rctr_search}>
                <form className={blog.sctr_form}>
                  <div className={blog.form_inp}>
                    <input type='text' placeholder='Search Keyword' className={blog.form__inp}/>
                    <button className={blog.from__btn}>
                      <FaSearch className={blog.btn_icon}/>
                    </button>
                  </div >
                  <button className={blog.form_search}>SEARCH</button>
                </form>
              </div>

              {/* Category ctr */}
              <div className={blog.rctr_category}>
                <h4 className={blog.cat_h4}>Category</h4>
                <ul className={blog.cat_ul}>
                  <li className={blog.ul_li}>
                    <p className={blog.li_txt_p}> Resaurant food</p>
                    <p className={blog.li_txt_num}> (30)</p>
                  </li>
                  <li className={blog.ul_li}>
                    <p className={blog.li_txt_p}> Resaurant food</p>
                    <p className={blog.li_txt_num}> (30)</p>
                  </li>
                  <li className={blog.ul_li}>
                    <p className={blog.li_txt_p}> Resaurant food</p>
                    <p className={blog.li_txt_num}> (30)</p>
                  </li>
                  <li className={blog.ul_li}>
                    <p className={blog.li_txt_p}> Resaurant food</p>
                    <p className={blog.li_txt_num}> (30)</p>
                  </li>
                </ul>
              </div>

              {/* Recent post */}
              <div className={blog.rctr_recent_post}>

                {/* Blog post 1 */}
                <div className={blog.post_ctr}>
                  <h3 className={blog.post_ctr_h3}>Recent Post</h3>
                  <div className={blog.post_ctr_img}>
                    <img src={blog_insta_img_1} alt='blog_insta_img' className={blog.pcimg__img}/>
                    <div className={blog.pcimg_ctr}>
                      <p className={blog.pcimg_ctr_p1}>From life was you fish...</p>
                      <p className={blog.pcimg_ctr_p2}>January 12, 2019</p>
                    </div>
                  </div>
                </div>

                {/* Blog post 2 */}
                <div className={blog.post_ctr}>
                  <h3 className={blog.post_ctr_h3}>Recent Post</h3>
                  <div className={blog.post_ctr_img}>
                    <img src={blog_insta_img_1} alt='blog_insta_img' className={blog.pcimg__img}/>
                    <div className={blog.pcimg_ctr}>
                      <p className={blog.pcimg_ctr_p1}>From life was you fish...</p>
                      <p className={blog.pcimg_ctr_p2}>January 12, 2019</p>
                    </div>
                  </div>
                </div>

                {/* Blog post 3 */}
                <div className={blog.post_ctr}>
                  <h3 className={blog.post_ctr_h3}>Recent Post</h3>
                  <div className={blog.post_ctr_img}>
                    <img src={blog_insta_img_1} alt='blog_insta_img' className={blog.pcimg__img}/>
                    <div className={blog.pcimg_ctr}>
                      <p className={blog.pcimg_ctr_p1}>From life was you fish...</p>
                      <p className={blog.pcimg_ctr_p2}>January 12, 2019</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Tags */}
              <div className={blog.rctr_tags}>
                <h3 className={blog.tags_h3}>Tag Clouds</h3>
                <div className={blog.tags_ul_ctr}>
                  <ul className={blog.tags__ul}>
                    <li className={blog.tags__ul_li}>project</li>
                    <li className={blog.tags__ul_li}>love</li>
                    <li className={blog.tags__ul_li}>illustration</li>
                    <li className={blog.tags__ul_li}>technology</li>
                    <li className={blog.tags__ul_li}>project</li>
                    <li className={blog.tags__ul_li}>love</li>
                    <li className={blog.tags__ul_li}>illustration</li>
                  </ul>
                </div>
              </div>

              {/* Insta feeds */}
              <div className={blog.rctr_instafeeds}>
                <h3 className={blog.ifeeds_h3}>Instagram Feeds</h3>
                <div className={blog.ifeeds_img_ctr}>
                  <img src={blog_insta_post1} alt='insta feeds 1' className={blog.ifeeds__imgs}/>
                  <img src={blog_insta_post1} alt='insta feeds 1' className={blog.ifeeds__imgs}/>
                  <img src={blog_insta_post1} alt='insta feeds 1' className={blog.ifeeds__imgs}/>
                  <img src={blog_insta_post1} alt='insta feeds 1' className={blog.ifeeds__imgs}/>
                  <img src={blog_insta_post1} alt='insta feeds 1' className={blog.ifeeds__imgs}/>
                  <img src={blog_insta_post1} alt='insta feeds 1' className={blog.ifeeds__imgs}/>
                </div>
              </div>


              {/* News Letter */}
              <div className={blog.rctr_newsletter}>
                <input type='email' placeholder='Enter Email' className={blog.nl_inp} />
                <button className={blog.nl_btn}>SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog