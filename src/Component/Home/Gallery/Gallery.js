import React from 'react'
import gallery from "./Gallery.module.css"
import Gallery_img1 from "../../../Assets/img/gallery/gallery1.png"
import Gallery_img2 from "../../../Assets/img/gallery/gallery2.png"
import Gallery_img3 from "../../../Assets/img/gallery/gallery3.png"
import Gallery_img4 from "../../../Assets/img/gallery/gallery4.png"

function Gallery() {
    return (
        <div className={gallery.gallery_section}>

            <div className={gallery.gallery_container}>

                <div className={gallery.gallery_text_container}>
                    <p className={gallery.tc_txt1}>Our Recent Photos</p>
                    <p className={gallery.tc_txt2}>Pets Photo Gallery</p>
                </div>

                {/* Image Container */}
                <div className={gallery.gallery_grid_gallery}>

                    {/* Box1 */}
                    <div className={gallery.ggg_grid_item}>
                        <img src={Gallery_img1} alt='gallery images' />
                    </div>
                    <div className={gallery.ggg_grid_item}>
                        <img src={Gallery_img2} alt='gallery images' />
                    </div>

                    {/* Box 2 */}
                    {/* <div className={gallery.gic_box1}>
                        <div className={gallery.ggg_grid_item}>
                            <img src={Gallery_img3} alt='gallery images' />
                        </div>
                        <div className={gallery.ggg_grid_item}>
                            <img src={Gallery_img4} alt='gallery images' />
                        </div>
                    </div> */}


                </div>
            </div>
        </div>
    )
}

export default Gallery
