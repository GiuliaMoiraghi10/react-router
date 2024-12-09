import imageHome from '../assets/harryPotterHome.jpg'
import style from './HomePage.module.css'
import Card from '../Components/Card'

export default function HomePage() {

    return (
        <div>
            <h1 className={style.title}>La magia di Harry Potter</h1>
            <img className={style.imgHome} src={imageHome} alt="" />
            <h2>Scegli il personaggio</h2>
            <section className={style.container}>
                <div className={style.row}>
                    <div className={style.col_4}>
                        <Card />
                    </div>
                </div>
            </section>
        </div>
    )
}
