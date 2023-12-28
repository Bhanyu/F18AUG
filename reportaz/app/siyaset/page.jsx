

// import 'bootstrap/dist/css/bootstrap.css';

import Link from 'next/link';



import { getNews } from '../libs/news';
const Politika = async () => {

const news = await getNews() 


  return (
    <section id="politic_news">
    <div className="container">
        <div className="row">
            <div className={`col-lg-12`}>
                <div className="page_title">
                    <h1>Siyaset</h1>
                </div>
                <div className="filter_news">
                    <ul>
                        <li><a href="#">MILLI MECLIS</a></li>
                        <li><a href="#">DAXILI SIYASET</a></li>
                        <li><a href="#">QARABAG</a></li>
                        <li><a href="#">XARICI SIYASET</a></li>
                        <li><a href="#">HERBI</a></li>
                        <li><a href="#">DIASPOR</a></li>
                    </ul>
                </div>
                <div className="news_list">
                    <div className="row load_container">

                        {news && news.map(item => {
                         
                            return (
                                <div  className={`col-lg-2`}>
                                    <div className='politic_card'>
                                        <div className="politic_img">
                                            <Link href={`/siyaset/post/${item.id}`}>
                                                <img src={item.imgP} alt="" />
                                            </Link>

                                        </div>
                                        <div className="politic_desc">
                                            <Link href={`/siyaset/post/${item.id}`} >
                                                <span>{item.descP}</span>
                                            </Link>
                                        </div>
                                        <div className="pnews_date">
                                            <span>{item.dateP}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}


                    </div>
                </div>
            </div>

        </div>

    </div>
</section>
 
  );
};
export default Politika;
