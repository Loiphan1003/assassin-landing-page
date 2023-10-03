import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import hero from './assets/hero.png';
import about from './assets/about.png';
import slider1 from './assets/slider_1.png';
import feature from './assets/feature.png';
import requirement from './assets/requirements.png';
import subscribe from './assets/subscribe.png';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography } from '@mui/material';


const features = [
  {
    header: "SURVIVE AT ALL COSTS",
    description: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper."
  },
  {
    header: "CREATE ALLIES AND ENEMIES",
    description: ""
  },
  {
    header: "IMPRESS THE AUDIENCE",
    description: ""
  }
]

const requirementsInfo = [
  {
    name: 'os',
    description: "Windows 7 64-bit only (No OSX support at this time)"
  },
  {
    name: 'PROCESSOR',
    description: "Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ"
  },
  {
    name: 'MEMORY',
    description: "8 GB RAM"
  },
  {
    name: 'storage',
    description: "8 GB available space"
  },
  {
    name: 'GRAPHICS',
    description: "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)"
  }
]


function App() {

  return (
    <main>

      <section
        className="mx-auto relative w-full
        h-[1113px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${hero})`
        }}
      >
        <Header />
        <div className='w-full relative z-10 h-[70%] md:h-[90%] flex flex-col justify-center items-end' >
          <div className="mx-auto md:w-[734px] h-fit" >
            <div className="text-white" >
              <h1
                className="text-[3rem] md:text-[5rem] text-center not-italic font-bold leading-normal 
                tracking-[3px] uppercase"
              >
                SURVIVE AT ALL COSTS
              </h1>

              <p
                className="mt-[15px] text-[1rem] md:text-[20px] text-center not-italic font-bold 
                leading-normal tracking-[2px]"
              >
                Experience new ASSASSIN’S CREED VALHALLA
              </p>
            </div>

            <div
              className="mx-auto mt-[79px] px-[45px] py-[20px] w-[337px] h-[78px] rounded-md border-solid border-[2px]
            border-main flex flex-row gap-[20px]"
              style={{
                background: "linear-gradient(195deg, rgba(158, 218, 209, 0.10) 11.27%, rgba(61, 179, 162, 0.10) 90.4%)"
              }}
            >
              <p className="text-[20px] text-main not-italic font-bold leading-normal" >Purchase Now</p>
              <div className='h-auto w-[2px] bg-main' />
              <p className="text-[20px] text-main not-italic font-bold leading-normal" >$14.99</p>
            </div>
          </div>

          <div className="mx-auto mt-[79px] mb-[4px] w-[86px] h-fit flex flex-col items-center gap-[10px]" >
            <p className="text-[16px] text-white not-italic font-bold leading-[22px] uppercase" >The story</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="16" viewBox="0 0 38 16" fill="none">
              <path d="M37 1H1L18.7985 15L37 1Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div
          className="absolute w-full h-full top-0"
          style={{
            background: "radial-gradient(310.48% 100% at 50% 0%, rgba(29, 35, 52, 0.47) 0%, rgba(36, 44, 68, 0.21) 54.9%, #08090A 99.74%)"
          }}
        />

        <div
          className="absolute w-full h-full top-0"
          style={{
            background: "radial-gradient(310.48% 100% at 50% 0%, rgba(0, 0, 0, 0.53) 5.96%, rgba(29, 35, 52, 0.47) 89.85%, #08090A 99.66%)"
          }}
        />

        <div className="w-full relative h-[125px] bg-[#080A0B] blur-[15px]" />
      </section>

      <section
        className="relative w-full py-7 h-fit xl:h-[1080px] md:py-0
        items-center bg-cover bg-no-repeat box-border"
        style={{
          backgroundImage: `url(${about})`
        }}
      >
        <div
          className="relative mx-auto z-10 w-fit h-fit px-[50px] py-[100px] flex flex-col 
          xl:flex-row gap-[40px] md:gap-[112px]"
        >
          <div className="mx-auto w-[300px] md:w-[711px] text-white" >
            <h1
              className="mx-auto w-full md:w-[625px] text-[2.5rem] md:text-[50px] text-center not-italic font-bold 
              leading-normal tracking-[3px] uppercase"
            >
              assassin’s creed valhalla
            </h1>

            <div className="w-full h-[3px] bg-white rounded" />

            <p
              className="mt-[34px] mx-auto lg:ml-[153px] w-[300px] md:w-[483px] text-[0.75rem] text-center
              md:text-[20px] not-italic font-normal leading-[30px]"
            >
              When focusing on the main objectives, Assassin's Creed Valhalla is about 59½ Hours in length. If you're a gamer that strives to see all aspects of the game, you are likely to spend around 136 Hours to obtain 100% completion.
              once you start getting comfortable with the world and the changes needed to play <span>stealthily.</span>
            </p>
          </div>

          <div className="flex justify-center" >
            <div
              className="w-[200px] h-[300px] md:w-[503px] md:h-[611px]
                    rounded-md 
                    bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${slider1})`
              }}
            />
          </div>
        </div>

        <div className="absolute w-full h-full top-0 left-0 bg-[#0F0F0F] opacity-90" />
        <div
          className="absolute w-full h-full top-0"
          style={{
            background: "radial-gradient(136.03% 54.57% at 50% 48.04%, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.00) 60.63%, #080A0B 99.74%)"
          }}
        />
      </section>

      <section
        className="w-full h-[1206px] flex flex-col  pb-[100px] box-border
          lg:flex-row gap-3 items-center"
      >
        <div
          className="relative w-full md:w-[65%] h-full bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${feature})`
          }}
        >
          <div
            className="absolute w-full h-full"
            style={{
              background: "radial-gradient(54.5% 54.61% at 46.16% 45.52%, rgba(0, 0, 0, 0.00) 0%, #000 88.51%)"
            }}
          />
        </div>

        <div>
          <div className="mx-auto w-[350px] md:w-auto" >
            <p
              className="text-white text-[1rem] md:text-[30px] not-italic font-bold 
              leading-normal tracking-[2px]"
            >
              Why so special?
            </p>

            <h1
              className="text-white text-[3rem] md:text-[100px] not-italic 
              font-bold leading-normal tracking-[3px] uppercase"
            >
              features
            </h1>
          </div>

          <div
            className='mx-auto w-[380px]'
          >
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {features.map((item) => (
                <TimelineItem
                  key={item.header}
                >
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector />
                  </TimelineSeparator>

                  <TimelineContent
                    sx={{
                      width: '483px'
                    }}
                  >
                    <Typography
                      // variant="h6"
                      // component="span"
                      className="text-[#3DB3A2] text-[1.5rem] md:text-[50px] not-italic 
                      font-bold leading-normal tracking-[2px]"
                    >
                      {item.header}
                    </Typography>
                    <Typography
                      className="mt-[11px] text-white text-[18px] not-italic font-normal leading-[26px]"
                    >
                      {item.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        </div>
      </section>

      <section
        className="relative w-full h-[1208px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${requirement})`
        }}
      >
        <div
          className="relative z-10 mx-auto pt-[120px] md:pt-[60px] 
          w-[350px] md:w-fit text-white" >
          <p
            className="text-[1rem] md:text-[1rem] text-center not-italic 
            font-bold leading-normal tracking-[2px]"
          >
            Can My Computer Run this game?
          </p>

          <h1
            className="text-[2.5rem] text-center md:text-[3rem] lg:text-[100px] not-italic font-bold 
            leading-normal tracking-[3px] uppercase"
          >
            system requirements
          </h1>
        </div>

        <div
          className="mt-[200px] md:mt-[107px] mx-auto md:ml-[132px] w-[80%] md:w-[573px] h-fit md:h-[400px] grid 
          grid-cols-2  md:grid-rows-3 relative z-10"
        >
          {requirementsInfo.map((item, index) => (
            <div
              key={item.name}
              className={`border border-[#979797] p-[15px]
              ${index === requirementsInfo.length - 1 ? 'col-span-2' : ''} `}
            >
              <h5
                className="text-main text-[1rem] md:text-[24px] not-italic
              font-bold leading-normal tracking-[2px] uppercase"
              >
                {item.name}:
              </h5>

              <p className="mt-[10px] text-white text-[0.8rem] md:text-[18px] not-italic font-normal leading-[22px]" >
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="absolute w-full h-full top-0 bg-black"
          style={{
            background: "radial-gradient(50% 49.23% at 64.32% 47.1%, rgba(255, 255, 255, 0.00) 3.36%, rgba(0, 0, 0, 0.00) 19.22%, #080A0B 99.74%)"
          }}
        />
      </section>

      <section
        className="mx-auto mt-[65px] mb-[200px] md:mb-[100px] lg:mb-[350px] xl:mb-[0px] max-w-[1416px] h-[1208px] flex 
        flex-col xl:flex-row lg:justify-center lg:items-center gap-[50px] lg:gap-[140px]"
      >
        <div
          className="relative mx-auto w-[80%] h-[600px] 
          md:w-[412px] md:h-[655px] bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(${subscribe})`
          }}
        >
          <div
            className="relative z-10 w-full h-full"
            style={{
              background: "radial-gradient(54.01% 45.54% at 50% 50%, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.00) 46.15%, #080A0B 99.74%)"
            }}
          />
        </div>

        <div className="mx-auto w-[80%] lg:w-[831px]lg:h-fit" >
          <div className="text-white" >
            <div>
              <p
                className="text-[1rem] md:text-[2rem] lg:text-[38px] not-italic font-bold 
                leading-normal tracking-[2px]"
              >
                Want to stay in touch?
              </p>

              <h1
                className="text-[2.5rem] md:text-[3rem] lg:text-[100px] not-italic font-bold 
                leading-normal tracking-[3px] uppercase"
              >
                newsletter SUBSCRIBE
              </h1>
            </div>

            <p
              className="mt-[23px] text-[0.9rem] md:text[1.5rem] lg:text-[24px] 
              not-italic font-normal leading-[36px]"
            >
              In order to start receiving our news, all you have to do is enter
              your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.
            </p>
          </div>

          <div className="mt-[50px] lg:mt-[100px] flex flex-col md:flex-row items-center gap-5" >
            <div
              className="w-fit h-fit px-[20px] py-[21px] rounded-[5px] bg-gray"
            >
              <input
                className="w-[324px] text-[14px] not-italic font-normal leading-normal 
                    opacity-50 bg-gray outline-none"
                type="email"
                placeholder='Your email address'
              />
            </div>

            <button
              className="w-fit h-fit px-[71px] py-[20px] rounded bg-main"
              type='submit'
            >
              Subscribe now
            </button>
          </div>
        </div>

      </section>

      <Footer />
    </main>
  )
}

export default App
