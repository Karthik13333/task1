import React from 'react';
// import axios from 'axios';
import booksss from './images/booksss.jpg';
import { Link } from 'react-router-dom';


function Home() {


    return (
        <div className=''>
            
            <div >
                <h2 id='h2'>LEARNING </h2>
                <h3 >Never stop learning because life  never stops teachings</h3>
            </div>
            <div>
                <div className="alert alert-success">
                    <strong>Success!</strong> Indicates a successful or positive action.
                </div>
                <Link to="booklogo" className="booklogo">
                    <img src={booksss} className="img-fluid" alt="booksss"></img>
                </Link>

                <div className="card-body">
                    <br></br>
                    <h1 className="card-title" id='leftside'>INTRODUCTION</h1>
                    <br></br>
                    <div className="input-group mb-3">
                    <input type="text" id='search' className="form-control" placeholder="Search" />
                    <button className="btn btn-success" type="submit">Go</button>
                </div>
                    <p className="card-text"> Throughout your educational journey, it’s likely that you’ll look for sources of motivation. Since you’ll be tasked with a lot and will have your fair share of responsibilities, these quotes by famous educators and other notable people are a great place to turn to.

                        Educational quotes and quotes related to education may offer the boost of energy you need to keep powering through when you need it most.</p>
                    <h1 id='leftside'>Education-Related Quotes</h1>
                    <h3>Now, it’s time to get to inspirational quotes. Have a look:</h3>
                    <p>There’s no doubt that the cost of education is on the rise. The financial concerns of earning your education should never stop you from doing so because, as Benjamin Franklin once said, this investment in yourself will pay you back with interest over your entire lifetime. Additionally, you can earn your education in a cost-effective way. Check out the University of the People’s degree programs that are all tuition-free.</p>
                    <h4 id='leftside'>“Education is the passport to the future, for tomorrow belongs to those who prepare for it today.” – Malcolm X</h4>
                    <p>While it’s safe to say that no one knows what will happen tomorrow, having an education under your belt will open the door to more opportunities. These job opportunities are also likely to pay more with more education, so what you do today in terms of education will surely prepare you for what’s yet to come.

                    </p>
                    <h4 id='leftside'>“Live as if you were to die tomorrow. Learn as if you were to live forever.” ― Mahatma Gandhi</h4>
                    <p>The great thing about learning is that you never have to stop! There’s no limit as to the amount of knowledge you can obtain. So, rip a page from Gandhi’s book and keep on learning while you’re living

                    </p>
                    <h4 id='leftside'>“Education is one thing no one can take away from you.” —Elin Nordegren</h4>
                    <p>Perhaps you’ve heard this important lesson from the philosopher Maimonides before. The main message here is that you can do something for someone and it will be of help at the time, but if you don’t teach them how to do it themselves, they will forever be dependent. That’s one of the most beautiful things about teaching and education– once you share knowledge or obtain knowledge, there is power and capability gained forever.</p>

                </div>

            </div>



        </div>
      
    )
}

export default Home