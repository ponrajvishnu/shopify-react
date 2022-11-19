import './App.css';
import { useState } from 'react';
import NavBar from './component/NavBar';
import Header from './component/Header';
import Footer from './component/Footer';
import Rating from '@mui/material/Rating';

function App() {
  let [count,setCount] = useState(0); // count - statevariable;setCount - statefunction
  let [toggle,setToggle] = useState(true);
  let [toggleTwo,setToggleTwo] = useState(true);
  let [toggleThree,setToggleThree] = useState(true);
  let [toggleFour,setToggleFour] = useState(true);
  let [toggleFive,setToggleFive] = useState(true);
  let [toggleSix,setToggleSix] = useState(true);
  let [toggleSeven,setToggleSeven] = useState(true);
  let [toggleEight,setToggleEight] = useState(true);
  //let count = 0;
  return <>
    <NavBar data={{count,setCount}}/>
    <Header />
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Fancy Product</h5> $40.00 - $80.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="size-small" defaultValue={3} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                        { 
                          toggle ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                            setCount(++count); 
                            setToggle(!toggle)
                          }}>Add to Cart</button>
                          :
                          <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                            setCount(--count); 
                            setToggle(!toggle)
                          }}>Remove</button>
                        }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Special Item</h5> <span class="text-muted text-decoration-line-through">$20.00</span> $18.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="half-rating" defaultValue={2.5} precision={0.5} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                       { 
                          toggleTwo ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                            setCount(++count); 
                            setToggleTwo(!toggleTwo)
                          }}>Add to Cart</button>
                          :
                          <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                            setCount(--count); 
                            setToggleTwo(!toggleTwo)
                          }}>Remove</button>
                        }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Auto Product</h5><span class="text-muted text-decoration-line-through">$50.00</span> $25.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      { 
                        toggleThree ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(++count); 
                          setToggleThree(!toggleThree)
                        }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(--count); 
                          setToggleThree(!toggleThree)
                        }}>Remove</button>
                      }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Popular Item</h5> $40.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="size-medium" defaultValue={4} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      { 
                        toggleFour ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(++count); 
                          setToggleFour(!toggleFour)
                        }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(--count); 
                          setToggleFour(!toggleFour)
                        }}>Remove</button>
                      }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Sale Item</h5> <span class="text-muted text-decoration-line-through">$30.00</span> $20.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="size-medium" defaultValue={4} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      { 
                        toggleFive ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(++count); 
                          setToggleFive(!toggleFive)
                        }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(--count); 
                          setToggleFive(!toggleFive)
                        }}>Remove</button>
                      }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Fancy Product</h5> $120.00 - $180.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="size-medium" defaultValue={3} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      { 
                        toggleSix ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(++count); 
                          setToggleSix(!toggleSix)
                        }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(--count); 
                          setToggleSix(!toggleSix)
                        }}>Remove</button>
                      }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Special Item</h5> <span class="text-muted text-decoration-line-through">$20.00</span> $18.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="size-medium" defaultValue={2} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      { 
                        toggleSeven ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(++count); 
                          setToggleSeven(!toggleSeven)
                        }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(--count); 
                          setToggleSeven(!toggleSeven)
                        }}>Remove</button>
                      }
                      </div>
                  </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center"><h5 className="fw-bolder">Popular Item</h5> $40.00 </div>
                  </div>
                  <div className="rating-section"><Rating name="size-medium" defaultValue={4} /></div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      <div className="text-center">
                      { 
                        toggleEight ? <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(++count); 
                          setToggleEight(!toggleEight)
                        }}>Add to Cart</button>
                        :
                        <button className="btn btn-outline-dark mt-auto" onClick={() =>{ 
                          setCount(--count); 
                          setToggleEight(!toggleEight)
                        }}>Remove</button>
                      }
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </section>
  <Footer />
  </> 
  
}

export default App;
