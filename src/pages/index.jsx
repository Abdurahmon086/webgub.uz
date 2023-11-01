import { Inter } from 'next/font/google'
import Head from 'next/head'
import hero from '../../public/image/hero.png'
import Image from 'next/image'
import amazon from '../../public/icon/amazon.svg'
import najot from '../../public/icon/najot.svg'
import amd from '../../public/icon/amd.svg'
import legitech from '../../public/icon/legitech.svg'
import uzum from '../../public/icon/uzum.svg'
import megabox from '../../public/icon/megabox.svg'
import border from '../../public/icon/border.svg'
import Card from '@/components/Card/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next app</title>
      </Head>
      <main className={`${inter.className}`}>
        <section className='mt-[119px] hero-bg w-full' style={{ background: "linear-gradient(257deg, rgba(4, 1, 108, 0.80) 0.69%, rgba(74, 22, 189, 0.80) 100%)" }}>
          <div className="container mx-auto bg-[url('../../public/image/room.png')] bg-no-repeat bg-[center_bottom_-4rem] flex justify-between ">
            <div className="left mt-[145px]">

              <p>Successful coaches are visionaries</p>
              <h1>Good <span className='text-[#4BE5CA]'> coaching </span>is good teaching & nothing else.
                InshaaAlloh</h1>
              <a href="#">Coureses</a>
              <form>
                <input type="text" name="text" />
                <button><img src="" alt="" /> Search</button>
              </form>
            </div>
            <div className="right mt-[145px] bg-[url('../../public/icon/shape.svg')] bg-[length:800px_700px] bg-no-repeat bg- ">
              <Image src={hero} alt="hero image" className='w-[591px] h-[769px]' />
            </div>
          </div>
        </section>
        <section style={{ background: "linear-gradient(180deg, #084FC7 0%, rgba(8, 79, 199, 0.00) 172.16%)" }}>
          <ul className="container mx-auto flex items-center justify-between py-8">
            <li><Image src={amazon} /></li>
            <li><Image src={amd} /></li>
            <li><Image src={megabox} /></li>
            <li><Image src={najot} /></li>
            <li><Image src={legitech} /></li>
            <li><Image src={uzum} /></li>
          </ul>
        </section>
        <section style={{ background: "linear-gradient(180deg, #D9ECFF 0%, rgba(240, 243, 255, 0.00) 127.78%)" }}>
          <div className="container mx-auto">
            <h4>Featured <span> Course</span></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>
            <div className="grid grid-cols-3 gap-11">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
            <button> Explore courses</button>
          </div>
        </section>
        <section style={{ background: "linear-gradient(72deg, rgba(8, 79, 199, 0.90) 26.49%, rgba(127, 86, 217, 0.90) 85.53%)" }}>
          <div className="container mx-auto">
            <h4>Why <span> learn</span> with our courses?</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>
            <ul className='flex'>
              <li> <img src="" alt="" /> <h5>01. Learn</h5> <p>Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.</p></li>
              <li><Image src={border} /></li>
              <li> <img src="" alt="" /> <h5>02. Graduate</h5> <p>Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.</p></li>
              <li><Image src={border} /></li>
              <li> <img src="" alt="" /> <h5>03. Work</h5> <p>Lorem ipsum dolor sit amet, consectetur
                dolorili adipiscing elit. Felis donec
                massa aliqua.</p></li>

            </ul>
          </div>
        </section>
        <section style={{ background: "linear-gradient(180deg, #D9ECFF 0%, rgba(217, 236, 255, 0.00) 100%)" }}>
          <div className="container mx-auto">
            <h4>Top <span> Categories</span></h4>
            <p>12,000+ unique online course list designs</p>
            <ul>
              <li>
                <div className=""><img src="" alt="" /></div>
                <h5>Digtal Marketing</h5>
                <p>25 Courses</p>
              </li>
              <li>
                <div className=""><img src="" alt="" /></div>
                <h5>Web
                  Development</h5>
                <p>16 Courses</p>
              </li>
              <li>
                <div className=""><img src="" alt="" /></div>
                <h5>Art &
                  Humanities</h5>
                <p>76 Courses</p>
              </li>
              <li>
                <div className=""><img src="" alt="" /></div>
                <h5>Personal
                  Development</h5>
                <p>22 Courses</p>
              </li>
              <li>
                <div className=""><img src="" alt="" /></div>
                <h5>IT and
                  Software</h5>
                <p>110 Courses</p>
              </li>
              <li>
                <div className=""><img src="" alt="" /></div>
                <h5>Graphic
                  Design</h5>
                <p>85 Courses</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container mx-auto">
            <div className="flex">
              <Image />
              <div className="">
                <h5>The number one factor in <span>  relevance drives out resistance.</span></h5>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button>Learn More</button>
              </div>
            </div>
            <Image />
          </div>
        </section>
        <section style={{ fill: "linear-gradient(180deg, #DBEDFF 0%, rgba(219, 237, 255, 0.00) 100%)" }}>
          <div className="container mx-auto">
            <h4>Services</h4>
            <p>What our student say about us</p>
            <ul className='flex'>
              <li><Card/></li>
              <li><Card/></li>
              <li><Card/></li>
            </ul>
          </div>
        </section>
      </main >
    </>
  )
}
