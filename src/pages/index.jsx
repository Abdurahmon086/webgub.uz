import Head from 'next/head'
import hero from '../../public/image/hero.png'
import Image from 'next/image'
import amazon from '../../public/icon/amazon.svg'
import najot from '../../public/icon/najot.svg'
import amd from '../../public/icon/amd.svg'
import legitech from '../../public/icon/legitech.svg'
import uzum from '../../public/icon/uzum.svg'
import megabox from '../../public/icon/megabox.svg'
import software from '../../public/icon/software.svg'
import phone from '../../public/image/phone.png'
import Card from '@/components/Card/Card'
import vue from '../../public/image/vue.png'
import react from '../../public/image/react.png'
import main from "../styles/main.module.scss";
import Title from '@/components/Title/Title'
import Text from '@/components/Text/Text'
import learn from "../../public/icon/learn.svg";
import graduate from "../../public/icon/graduate.svg";
import work from "../../public/icon/work.svg";

let dataArray = [
  {
    id: 0,
    img: amazon,
  },
  {
    id: 1,
    img: amd,
  },
  {
    id: 2,
    img: megabox,
  }
  , {
    id: 3,
    img: najot,
  }
  , {
    id: 4,
    img: legitech,
  }
  , {
    id: 5,
    img: uzum,
  }
]
import MiniCard from '@/components/Card/MiniCard'
import Footer from '@/components/Footer/footer'
import Header from '@/components/Header/header'
import { useFetch } from '@/hooks/useFetch'
import { useState } from 'react'
import CourseCreate from '@/components/Forms/CourseCreate'
import { Form } from 'antd'
import { sendData } from '@/service/common'


export default function Home() {
  let [more, setMore] = useState(true);
  let [show, setShow] = useState(false);
  const [form] = Form.useForm();
  const handleClose = () => {
    setShow(false);
    form.validateFields().then((values) => {
      delete values.confirm;
      // if (selected) {
      values.password || delete values.password;
      sendData(`/user/register`, values).then(() => {
        recall();
        setIsModalOpen(false);
      });
    });
  };
  const handleCancel = () => setShow(false);
  const handleShow = () => {
    setShow(true);

  };
  const { data, loading, error } = useFetch('https://api.webhub.uz/api/v1/course');
  const { data: service, loading: loading2 } = useFetch('https://api.webhub.uz/api/v1/service');
  if (loading || loading2) {
    return (
      <h1>Loading...</h1>
    )
  }
  if (error) {
    console.log(error);
  }
  if (data || service) {
    return (
      <>
        <Head>
          <title>Next app</title>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
            integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
            crossorigin="anonymous"
          />
        </Head>
        <header className="fixed top-0 left-0 w-full z-50 bg-white py-[30px]">
          <Header />
        </header>
        <main>
          <CourseCreate form={form} show={show} handleClose={handleClose} handleCancel={handleCancel} />
          <section className={`${main.main} relative mt-[119px] pt-[167px] hero-bg w-full`} style={{ background: "linear-gradient(257deg, rgba(4, 1, 108, 0.80) 0.69%, rgba(74, 22, 189, 0.80) 100%)" }}>
            <div className={`container mx-auto flex justify-between`}>
              <div className={`${main.home_left}`}>
                <p className='text-white-800 font-semibold leading-5 tracking-[3px] mb-[30px]'>Successful coaches are visionaries</p>
                <h1 style={{ fontFamily: 'Rowdies' }} className={`${main.title} max-w-[900px] text-[80px] leading-[90px] font-normal text-white`}>Good <span className='text-green-500'> coaching </span>is good teaching & nothing else.
                  InshaaAlloh</h1>
                <a href="#" className={`${main.btn} inline-block mt-[80px] mb-[80px] px-[30px] py-[15px] text-white border-[1px] border-white rounded-[10px]`}>Coureses</a>
                <form className='relative mb-10 w-full py-[10px] sm:w-[470px] md:w-[490px]'>
                  <input type="text" name="text" placeholder='What do you want to learn today?' className={`${main.input} absolute left-0 top-0 w-full py-[26px] pl-[35px] pr-[10px] rounded-[10px]`} />
                  <button className={`${main.submit} absolute py-[15px] px-[30px] right-[10px] flex items-center gap-x-3 bg-gradient-linear text-[15px] text-white rounded-[10px]`}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                    <g clipPath="url(#clip0_1_89)">
                      <path d="M16.4276 17.2033L14.0943 14.8033C14.9831 13.7366 15.5387 12.5366 15.7609 11.2033C15.9831 9.86994 15.872 8.55883 15.4276 7.26994C14.9831 5.98105 14.2498 4.86994 13.2276 3.9366C12.2054 3.00327 11.0276 2.39216 9.69425 2.10327C8.36092 1.81438 7.0387 1.84772 5.72759 2.20327C4.41648 2.55883 3.27203 3.22549 2.29425 4.20327C1.31648 5.18105 0.649808 6.32549 0.294253 7.6366C-0.0613027 8.94772 -0.094636 10.2699 0.194253 11.6033C0.483142 12.9366 1.09425 14.1144 2.02759 15.1366C2.96092 16.1588 4.07203 16.8922 5.36092 17.3366C6.64981 17.781 7.96092 17.8922 9.29425 17.6699C10.6276 17.4477 11.8276 16.8922 12.8943 16.0033L15.2943 18.3366C15.4276 18.5144 15.6165 18.6033 15.8609 18.6033C16.1054 18.6033 16.3054 18.5255 16.4609 18.3699C16.6165 18.2144 16.6943 18.0144 16.6943 17.7699C16.6943 17.5255 16.6054 17.3366 16.4276 17.2033ZM1.69425 9.86994C1.69425 8.71438 1.97203 7.65883 2.52759 6.70327C3.08314 5.74771 3.8387 4.99216 4.79425 4.4366C5.74981 3.88105 6.79425 3.60327 7.92759 3.60327C9.06092 3.60327 10.1054 3.88105 11.0609 4.4366C12.0165 4.99216 12.7831 5.74771 13.3609 6.70327C13.9387 7.65883 14.2276 8.70327 14.2276 9.8366C14.2276 10.9699 13.9387 12.0144 13.3609 12.9699C12.7831 13.9255 12.0165 14.681 11.0609 15.2366C10.1054 15.7922 9.06092 16.0699 7.92759 16.0699C6.79425 16.0699 5.74981 15.7922 4.79425 15.2366C3.8387 14.681 3.08314 13.9255 2.52759 12.9699C1.97203 12.0144 1.69425 10.981 1.69425 9.86994Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_89">
                        <rect width="20" height="20" fill="white" transform="matrix(1 0 0 -1 0 20.27)" />
                      </clipPath>
                    </defs>
                  </svg> Search</button>
                </form>
              </div>
              <div className={`${main.home_right} w-[591px] relative right z-20`}>
                <div className={`${main.bg_rounded} w-[740px] h-[692px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#005FFF] rounded-740px blur-[150px]`}></div>
                <Image src={vue} alt="vue image" className={`${main.vue_icon} w-[242px] h-[216px] absolute z-20 top-0 -right-[50px]`} />
                <Image src={react} alt="vue image" className={`${main.react_icon} w-[242px] h-[216px] absolute z-20 top-1/2 -translate-y-1/2 -left-[120px]`} />
                <Image src={hero} alt="hero image" className={`${main.main_image} w-full relative z-20`} />
              </div>
              <div className={`${main.gate_icon} w-[313px] h-[350px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10 bg-[url('../../public/image/room.png')] bg-no-repeat bg-[center_bottom_-4rem]`}></div>
            </div>
          </section>
          <section className={`${main.carusel_wrapper}`} style={{ background: "linear-gradient(180deg, #084FC7 0%, rgba(8, 79, 199, 0.00) 172.16%)" }}>
            <div className={`container ${main.slider}`}>
              <div className={`${main.carusel} ${main.slide_track}`}>
                {
                  dataArray.map((item, index) => {
                    return <div key={index} className={`${main.slide}`}>
                      <Image src={item.img} alt="img" />
                    </div>
                  })
                }
              </div>
            </div>
          </section>
          <section className='py-[50px] md:py-[70px] lg:py-[100px]' style={{ background: "linear-gradient(180deg, #D9ECFF 0%, rgba(240, 243, 255, 0.00) 127.78%)" }}>
            <div className="container mx-auto pb-[72px] max-lg:pb-12">
              <div className="bg-[url('../../public/icon/half-rounded.svg')] bg-no-repeat bg-left-top">
                <Title color={'black'}>Featured <span className='text-green-500'>courses</span></Title>
                <Text color={'black'} styles={'max-w-[729px] flex mx-auto mb-[115px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</Text>
                <ul className='grid grid-cols-3 mt-[20px] gap-[67px] max-lg:grid-cols-2 max-md:grid-cols-1 '>
                  {
                    data.courses.map((item, index) => {
                      if (more) {
                        if (index < 6) {
                          return <li key={index}><Card image={item.image} title={item.title} handleShow={handleShow} /></li>
                        }
                      } else {
                        return <li key={index}><Card image={item.image} title={item.title} handleShow={handleShow} /></li>
                      }
                    }
                    )
                  }

                </ul>
                <button onClick={() => setMore(!more)} className='rounded-[10px] bg-gradient-linear px-[20px] py-[17px] block text-white mx-auto mt-[90px]'>Explore courses</button>
              </div>
            </div>
          </section>
          <section style={{ background: "linear-gradient(72deg, rgba(8, 79, 199, 0.90) 26.49%, rgba(127, 86, 217, 0.90) 85.53%)", padding: '113px 0 144px' }} className='pt-60px] pb-[70px] md:pt-[113px] md:pb-[144px] '>
            <div className="container mx-auto">
              <Title color={'white'}>Why <span className='text-green-500'>learn</span> with our courses?</Title>
              <Text color={'white'} styles={'max-w-[729px] flex mx-auto mb-[115px]'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</Text>
              <ul className='flex flex-wrap lg:flex-nowrap'>
                <li className={`${main.learn_card}`}>
                  <Image src={learn} alt="image" />
                  <h5>01. Learn</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur
                    dolorili adipiscing elit. Felis donec
                    massa aliqua.</p>
                </li>
                <li className={`${main.learn_card}`}>
                  <Image src={graduate} alt="image" />
                  <h5>02. Graduate</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur
                    dolorili adipiscing elit. Felis donec
                    massa aliqua.</p>
                </li>
                <li className={`${main.learn_card}`}>
                  <Image src={work} alt="image" />
                  <h5>03. Work</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur
                    dolorili adipiscing elit. Felis donec
                    massa aliqua.</p>
                </li>

              </ul>
            </div>
          </section>
          <section style={{ background: "linear-gradient(0deg, #D9ECFF 0%, rgba(217, 236, 255, 0.00) 100%)" }} className='mt-36 pt-[101px] pb-[155px] max-md:mt-24 max-md:pt-[50px] max-md:pb-[50px]'>
            <div className="container mx-auto">
              <h4 className="text-[45px] font-bold text-center leading-[30px] font-['Rowdies'] max-sm:text-3xl">Top <span className='text-[#2AAA94]'> Categories</span></h4>
              <p className='mt-[42px] text-[#4E596B] text-[25px] font-medium text-center max-sm:text-lg max-sm:mt-[20px]'> 12,000+ unique online course list designs</p>
              <ul className='flex justify-center items-stretch gap-[20px] mt-[100px] max-2xl:flex-wrap '>
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
                <ul className='grid grid-cols-3 mt-[20px] gap-[67px] max-lg:grid-cols-2 max-md:grid-cols-1 pb-14 '>
                  {
                    service.services.map((item, index) => (
                      <li key={index}><Card image={'http://api.webhub.uz/' + item.image} title={item.title} handleShow={handleShow} /></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </section>
        </main >
        <footer style={{ background: "linear-gradient(95deg, #331DA8 0%, #865AEF 100.96%)" }}>
          <Footer />
        </footer >
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
      </>
    )
  }
}
