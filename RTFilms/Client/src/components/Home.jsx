import React from "react"
import "./Home.css"
import Bestsellers from "./home/Bestsellers"
import FeaturedProduct from "./home/FeaturedProduct"
import FeaturedTwo from "./home/FeatureTwo"
import AboutUs from "./home/AboutUs"
import Incentives from "./home/Incentives"

export default function Home() {
  return (
    <>
      <section class="picture max-h-70 bg-center bg-no-repeat bg-[#ece4da] bg-blend-multiply">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Canada's Number One Vintage Camera Retailer
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48"></p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#a47f5a] hover:bg-black focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Shop now
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Bestsellers />
      <FeaturedTwo />
      <FeaturedProduct />
      <AboutUs />
      <Incentives />
    </>
  )
}
