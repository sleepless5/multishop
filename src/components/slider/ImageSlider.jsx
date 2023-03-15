import styles from "./ImageSlider.module.css"
import Slider from "react-slick"
import sofa from "../../assets/images/double-sofa-01.png"
import phone from "../../assets/images/phone-03.png"
import watch from "../../assets/images/watch-01.jpg"
const ImageSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 3000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
  }
  return (
    <Slider {...settings} className={styles.slaida}>
      <div className={styles.slider}>
        <div className={styles.slider_box}>
          <div className={styles.left}>
            <h2>Modern furniture</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              repudiandae. Recusandae eum quas illum tempore nesciunt officiis
              iste, quaerat omnis commodi expedita totam unde nihil ad, iure
              provident sapiente optio.
            </p>
            <button className='buy_btn'>Shop now</button>
          </div>
          <div className={styles.right}>
            <img src={sofa} alt='' />
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slider_box}>
          <div className={styles.left}>
            <h2>Mobile Phones</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              repudiandae. Recusandae eum quas illum tempore nesciunt officiis
              iste, quaerat omnis commodi expedita totam unde nihil ad, iure
              provident sapiente optio.
            </p>
            <button className='buy_btn'>Shop now</button>
          </div>
          <div className={styles.right}>
            <img src={phone} alt='' />
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <div className={styles.slider_box}>
          <div className={styles.left}>
            <h2>Hand watches</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              repudiandae. Recusandae eum quas illum tempore nesciunt officiis
              iste, quaerat omnis commodi expedita totam unde nihil ad, iure
              provident sapiente optio.
            </p>
            <button className='buy_btn'>Shop now</button>
          </div>
          <div className={styles.right}>
            <img src={watch} alt='' />
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default ImageSlider
