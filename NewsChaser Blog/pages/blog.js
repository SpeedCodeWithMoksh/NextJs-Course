import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const blog = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden mx-24">
  <div className="container px-5 py-24 mx-auto">
    <div className="-my-8 divide-y-2 divide-gray-100">
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mx-4">
          <Image src="/news-1.jpg" alt="" width={140} height={140} />
          <span className="font-semibold title-font text-gray-700">INTERNET</span>
          <span className="mt-1 text-gray-500 text-sm">15 Jun 2022</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Full Web</h2>
          <p className="leading-relaxed">blog, in full Web log or Weblog, online journal where an individual, group, or corporation presents a record of activities, thoughts, or beliefs. Some blogs operate mainly as news filters...</p>
          <Link href={'/blogpost/[slug].js'}><a className="text-indigo-500 inline-flex items-center mt-4 cursor-pointer">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a></Link>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mx-4">
            <Image src="/news-2.jpg" alt="" width={140} height={140}/>
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"> Hand sanitizers can be used often</h2>
          <p className="leading-relaxed">An alcohol-based sanitizer does not create antibiotic resistance. Unlike other antiseptics and antibiotics, pathogens (harmful germs) do not seem to develop resistance to alcohol-based sanitizers...</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col mx-4">
            <Image src="/news-3.jpg" alt="" width={140} height={140}/>
          <span className="font-semibold title-font text-gray-700">CATEGORY</span>
          <span className="text-sm text-gray-500">12 Jun 2019</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">How to make a website without writing a code</h2>
          <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer...</p>
          <a className="text-indigo-500 inline-flex items-center mt-4">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default blog