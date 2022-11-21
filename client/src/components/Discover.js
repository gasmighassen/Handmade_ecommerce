import React, { useState } from 'react'
import "./style/discover.css"
const Discover = () => {
    const [show, setShow] = useState(false)
  return (
    <div className='discover-container'>
        <h1>Discover unique hand-picked items</h1>
<div className='discover-title'>
      <button onClick={()=>setShow(!show)}>Boho Decor</button>  
        <button onClick={()=>setShow(!show)}>Minimalist</button>
        </div>
        {
        show&&   <div className='img-discover'>
            <img src="https://i.etsystatic.com/24357979/r/il/f102ff/2511369782/il_680x540.2511369782_gopn.jpg" className='imga'/>
            <div className='ftwo'>
            <img src="https://i.etsystatic.com/9072787/r/il/8a0c73/1426175448/il_340x270.1426175448_g9mv.jpg" className='imgb'/>
            <img src="https://i.etsystatic.com/14474067/c/1996/1586/0/648/il/c5ddc2/2320986892/il_340x270.2320986892_q5wj.jpg" className='imgc'/>
            </div>
            <img src="https://i.etsystatic.com/16290374/c/2059/1637/492/220/il/d38757/3602413338/il_680x540.3602413338_38jy.jpg" className='imgd'/>
            <div className='ftwo'>
            <img src="https://i.etsystatic.com/7704307/c/2398/1906/297/71/il/c614eb/4403970965/il_340x270.4403970965_21mm.jpg" className='imge'/>
            <img src="https://i.etsystatic.com/13148455/r/il/7eb8e3/2558367141/il_340x270.2558367141_kn0p.jpg" className='imgf'/>
            </div>
            </div>
            }
{!show &&
            <div className='img-discoverr'>
            <img src="https://i.etsystatic.com/30705237/r/il/851ac0/3375850656/il_680x540.3375850656_pt0y.jpg" className='imga'/>
            <div className='ftwo'>
            <img src="https://i.etsystatic.com/6554212/r/il/a65c7f/1535818154/il_340x270.1535818154_aep7.jpg" className='imgb'/>
            <img src="https://i.etsystatic.com/7692988/c/2301/1829/78/491/il/92d998/2947393611/il_340x270.2947393611_5gpd.jpg" className='imgc'/>
            </div>
            <img src="https://i.etsystatic.com/21062628/c/754/602/165/155/il/af8a58/3504966229/il_680x540.3504966229_o2og.jpg" className='imgd'/>
            <div className='ftwo'>
            <img src="https://i.etsystatic.com/28867808/c/577/458/76/357/il/ba400d/4332920958/il_340x270.4332920958_95vu.jpg" className='imge'/>
            <img src="https://i.etsystatic.com/13178544/r/il/db6936/3814539379/il_340x270.3814539379_5elm.jpg" className='imgf'/>
            </div>


       
        </div>
        }
         <h1>Shop our popular gift categories</h1>
        <div className='shop-container'>
            <div className='mo'>
            <img src="https://i.etsystatic.com/11486790/r/il/09528c/2809353368/il_794xN.2809353368_l0rq.jpg"/>
            <h3>Anniversary gifts</h3>
            </div>
            <div className='mo'>
            <img src="https://i.etsystatic.com/13138913/r/il/4852a1/3609932256/il_794xN.3609932256_tvsr.jpg"/>
            <h3>Gifts for him</h3>
            </div>
            <div className='mo'>
            <img src="https://i.etsystatic.com/15999839/r/il/0c1b04/2074808724/il_794xN.2074808724_rbws.jpg"/>
            <h3>Gifts for her</h3>
            </div>
            <div className='mo'>
            <img src="https://i.etsystatic.com/19483987/r/il/42cd8d/2512481731/il_794xN.2512481731_8gz7.jpg"/>
            <h3>Personalized gift ideas</h3>
            </div>
            <div className='mo'>
            <img src="https://i.etsystatic.com/29628060/r/il/61f230/3920326950/il_794xN.3920326950_8yxs.jpg"/>
            <h3>Wedding gifts</h3>
            </div>
            </div>
    </div>
  )
}

export default Discover