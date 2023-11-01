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
import software from '../../public/icon/software.svg'
import phone from '../../public/image/phone.png'
import Card from '@/components/Card/Card'
import MiniCard from '@/components/Card/MiniCard'
import Header from '@/components/Header/header'
import Footer from '@/components/Footer/footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Next app</title>
      </Head>
      <header className='fixed top-0 left-0 w-full bg-white'>
        <Header />
      </header>
      <main className={`${inter.className}`}>
        {/* <section className='mt-[119px] hero-bg w-full' style={{ background: "linear-gradient(257deg, rgba(4, 1, 108, 0.80) 0.69%, rgba(74, 22, 189, 0.80) 100%)" }}>
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
            <div className="right mt-[145px] bg-[url('../../public/icon/shape.svg')] bg-[length:800px_700px] bg-no-repeat  ">
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
        </section> */}
        <section style={{ background: "linear-gradient(0deg, #D9ECFF 0%, rgba(217, 236, 255, 0.00) 100%)" }} className='mt-36 pt-[101px] pb-[155px] max-md:mt-24 max-md:pt-[50px] max-md:pb-[50px]'>
          <div className="container mx-auto">
            <h4 className="text-[45px] font-bold text-center leading-[30px] font-['Rowdies'] max-sm:text-3xl">Top <span className='text-[#2AAA94]'> Categories</span></h4>
            <p className='mt-[42px] text-[#4E596B] text-[25px] font-medium text-center max-sm:text-lg max-sm:mt-[20px]'> 12,000+ unique online course list designs</p>
            <ul className='flex justify-center gap-[20px] mt-[100px] max-2xl:flex-wrap '>
              <li>
                <MiniCard />
              </li>
              <li className='bg-white flex flex-col items-center py-[37px] px-[29px] w-[253px] rounded-[20px]'>
                <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#5AB48E] rounded-[8px]"><Image src={software} alt='Web Development icon' /></div>
                <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>Web Development</h5>
                <p className='text-[#4F547B] font-medium mt-[40px]'>16 Courses</p>
              </li>
              <li className='bg-white flex flex-col items-center py-[37px] px-[29px] w-[253px] rounded-[20px]'>
                <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#7F56D9] rounded-[8px]"><Image src={software} alt='Art & Humanities icon' /></div>
                <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>Art & Humanities</h5>
                <p className='text-[#4F547B] font-medium mt-[40px]'>76 Courses</p>
              </li>
              <li className='bg-white flex flex-col items-center py-[37px] px-[29px] w-[253px] rounded-[20px]'>
                <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#FAB437] rounded-[8px]"><Image src={software} alt='Personal Development icon' /></div>
                <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>Personal Development</h5>
                <p className='text-[#4F547B] font-medium mt-[40px]'>22 Courses</p>
              </li>
              <li className='bg-white flex flex-col items-center py-[37px] px-[29px] w-[253px] rounded-[20px]'>
                <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#2AAA94] rounded-[8px]"><Image src={software} alt='IT and Software  icon' /></div>
                <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>IT and Software</h5>
                <p className='text-[#4F547B] font-medium mt-[40px]'>110 Courses</p>
              </li>
              <li className='bg-white flex flex-col items-center py-[37px] px-[29px] w-[253px] rounded-[20px]'>
                <div className="w-[90px] h-[90px] flex justify-center items-center bg-[#2CD182] rounded-[8px]"><Image src={software} alt='Graphic Design icon' /></div>
                <h5 className='mt-[50px] text-[25px] text-[#324361] font-semibold text-center leading-[35px]'>Graphic Design</h5>
                <p className='text-[#4F547B] font-medium mt-[40px]'>85 Courses</p>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <div className="container mx-auto">
            <div className="flex justify-center items-center gap-[146px] bg-[url('../../public/icon/green_shape.svg')] bg-no-repeat bg-right-bottom max-lg:flex-col-reverse max-lg:mt-[50px]	">
              <Image src={phone} alt='phone image' width={375} height={758} className='max-md:mt-[-100px]' />
              <div className="max-w-[775px]  max-md:text-center">
                <h5 className="text-[#1D1D45] text-[45px] font-bold leading-[60px] font-['Rowdies'] ">The number one factor in <span className='text-[#2AAA94]'>  relevance drives out resistance.</span></h5>
                <p className='mt-[52px] text-[#4E596B]'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button style={{ background: " linear-gradient(95deg, #083F9B 0%, #7F56D9 102.25%)" }} className='rounded-[10px] py-[16px] px-[30px] text-white mt-[48px]'>Learn More</button>
              </div>
            </div>
          </div>
        </section>
        <section style={{ background: "linear-gradient(0deg, #DBEDFF 0%, rgba(219, 237, 255, 0.00) 100%)" }} >
          <div className="container mx-auto pb-[72px] max-lg:pb-12">
            <iframe className='w-full h-[727px] rounded-[68px] mt-[80px]' src="https://www.youtube.com/embed/X16_CEHd6Ec" title="Tartiblanmagan vaqt, jilovlanmagan ot kabidir" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
            <div className="bg-[url('../../public/icon/half-rounded.svg')] bg-no-repeat bg-left-top">
              <h4 className="mt-[132px] text-center text-[#2AAA94] text-[45px] leading-[55px] font-bold font-['Rowdies'] max-lg:mt-[80px] max-sm:text-3xl">Services</h4>
              <p className='text-[#4E596B] text-center mt-[42px] max-lg:mt-[20px] max-sm:text-lg'>What our student say about us</p>
              <ul className='grid grid-cols-3 mt-[20px] gap-[67px] max-lg:grid-cols-2 max-md:grid-cols-1 '>
                <li><Card /></li>
                <li><Card /></li>
                <li><Card /></li>
              </ul>
            </div>
          </div>
        </section>
      </main >
      <footer style={{ background: "linear-gradient(95deg, #331DA8 0%, #865AEF 100.96%)" }}>
        <Footer />
      </footer >
    </>
  )
}
