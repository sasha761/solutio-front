<template>
  <div class="default-layout">
    <Header />
    <div class="wrapper">
      <main class="p-main">
        <div class="u-container">
          <section class="l-banner">
            <div class="c-banner">
              <div class="c-banner__img">
                <video :src="bannerMain" poster="/bannerMain.jpg" autoplay muted loop playsinline></video>
              </div>
              <div class="c-banner__breadcrumbs">Digital Agency /// Canada / Ukraine / Poland / Worldwide</div>
              <div class="c-banner__content">
                <h1 class="u-h1">We Create Products That Make a Difference</h1>
                <p>Your strong online presence matters for your business, and it’s time to recognize that.</p>
                <NuxtLink to="/contact" class="u-btn is-white">
                  <span>Lets Talk</span>
                  <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7426 5.85865L13.576 4.02516C13.902 3.69914 14.4315 3.69914 14.7575 4.02516L15.9779 5.24554C16.3028 5.57039 16.3028 6.09622 15.9779 6.42107L14.1415 8.25755L11.7426 5.85865ZM10.8587 6.74254L4.29014 13.3111C4.21213 13.3891 4.16832 13.4948 4.16832 13.605V15.835L6.39096 15.835C6.50179 15.835 6.60806 15.791 6.68633 15.7127L13.2576 9.14143L10.8587 6.74254ZM7.57245 16.5944C7.25938 16.9075 6.83429 17.0834 6.39097 17.0834L3.33394 17.0834C3.10353 17.0834 2.91675 16.8971 2.91675 16.6672V13.605C2.91675 13.1643 3.09198 12.7415 3.40402 12.4295L12.6899 3.1435C13.5049 2.32846 14.8286 2.32847 15.6436 3.14352L16.864 4.36389C17.6761 5.17603 17.6762 6.49059 16.864 7.30272L7.57245 16.5944Z"/>
                    </svg>
                  </div>
                </NuxtLink>
              </div>
            </div>
          </section>
          <section class="l-text">
            <div class="c-section-text">
              <div class="c-section-text__box col-lg-5" data-aos="fade-right" data-aos-delay="100" data-aos-offset="-200">
                <h2 class="u-h1">Who We Are?</h2>
                <p>Our work has already generated over $2 million for our clients. Are you ready to take your business to the next level?</p>
              </div>
              <div class="c-section-text__box col-lg-6" data-aos="fade-left" data-aos-delay="200" data-aos-offset="-200">
                <p class="c-section-text__text">Since 2022, we’ve provided top solutions for startups and enterprises alike. We specialise in a full cycle digital projects, offering SEO and marketing services to enhance online presence.</p>
              </div>
            </div>
          </section>
          <section class="l-about-us">
            <div class="row">
              <div class="col-lg-4 col-md-4 col-6 u-col" data-aos="fade-up" data-aos-delay="100">
                <About-us 
                  number="01"
                  title="$2.1M+"
                  subtitle="in net growth for our clients"
                />
              </div>
              <div class="col-lg-4 col-md-4 col-6 u-col" data-aos="fade-up" data-aos-delay="200">
                <About-us 
                  number="02"
                  title="96"
                  subtitle="Success Projects"
                />
              </div>
              <div class="col-lg-4 col-md-4 col-6 u-col" data-aos="fade-up" data-aos-delay="300">
                <About-us 
                  number="03"
                  title="2022"
                  subtitle="Company founded"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-6 u-col" data-aos="fade-up" data-aos-delay="400">
                <About-us 
                  number="04"
                  title="+65%"
                  subtitle="Increase retention rate"
                />
              </div>
              <div class="col-lg-6 col-md-6 col-12 u-col" data-aos="fade-up" data-aos-delay="400">
                <About-us 
                  number="05"
                  title="Exceptional for Remarkable"
                  subtitle="From user research to scalable design system we’ve got you covered."
                />
              </div>
            </div>
          </section>
          <section class="l-text">
            <div class="c-section-text">
              <div class="c-section-text__box col-lg-5" data-aos="fade-right" data-aos-delay="100">
                <h5 class="u-h5">Explore our works here</h5>
              </div>
              <div class="c-section-text__box col-lg-6" data-aos="fade-left" data-aos-delay="200">
                <p class="c-section-text__text">Our portfolio showcases a variety of designs essential for modern business growth. We feature work created for early-stage startups and established companies at various stages of their development. From mobile apps to marketing and promotions, our work have helped businesses increase user engagement by up to 40%, boost conversion rates by 25%, and enhance brand recognition. We are here to support your success and drive measurable results!</p>
              </div>
            </div>
          </section>
          <section class="l-our-works" id="our-works">
            <div class="row">
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 u-col" data-aos="fade-up" data-aos-delay="100" data-aos-offset="-100">
                <Post
                  image="/Cyberbay.jpg"
                  title="Cyberbay"
                  text="Introducing our cutting-edge project in the gaming and crypto industry, focused on Dota 2. We’ve crafted an exceptional web service with stunning design, seamless front-end and back-end development, and strategic marketing research. Experience optimized performance and engage with your audience like never before."
                  :tags="[
                    { name: 'Gaming crypto platform', link: '/' },
                    { name: 'UI/UX Design', link: '/' },
                    { name: 'UX Analysis', link: '/' },
                    { name: 'Front & Back-end dev', link: '/' },
                    { name: 'Marketing', link: '/' },
                    { name: 'SEO', link: '/' }
                  ]"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 u-col" data-aos="fade-up" data-aos-delay="200" data-aos-offset="-100">
                <Post
                  image="/Fortinet.jpg"
                  title="Fortinet"
                  text="We collaborated with our client to create an engaging game that builds a memorable brand. Our approach included captivating gameplay, a strong brand identity, intuitive design, and effective marketing research. The result is a standout game that players love. "
                  :tags="[
                    { name: 'Game development', link: '/' },
                    { name: 'Brand creation', link: '/' },
                    { name: 'Brand strategy', link: '/' },
                    { name: 'UI/UX Design', link: '/' },
                    { name: 'Marketing research', link: '/' },
                    { name: 'Copywriting', link: '/' }
                  ]"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 u-col" data-aos="fade-up" data-aos-delay="300" data-aos-offset="-100">
                <Post
                  image="/SpaceForFuture.jpg"
                  title="SpaceForFuture"
                  text="We transformed our client’s real estate website through a complete redesign and development. With a focus on engaging UI/UX, strong branding, and SEO, we created a standout site that highlights their unique offerings."
                  :tags="[
                    { name: 'Real Estate Web dev', link: '/' },
                    { name: 'UI/UX Design', link: '/' },
                    { name: 'Brand stratedy', link: '/' },
                    { name: 'SEO', link: '/' },
                    { name: 'Marketing analysis', link: '/' },
                    { name: 'Content creation', link: '/' }
                  ]"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 u-col" data-aos="fade-up" data-aos-delay="400" data-aos-offset="-100">
                <Post
                  image="/Agrsale.jpg"
                  title="Agrsale Marketplace"
                  text="Unveiling our innovative marketplace in the agriculture sector, where farmers can easily buy and sell top-quality equipment. Our platform features a sleek design, engaging content, and strategic market insights. With a strong brand identity and optimization efforts, we are transforming how the agricultural community connects."
                  :tags="[
                    { name: 'Agriculture Marketplace', link: '/' },
                    { name: 'UI/UX Design', link: '/' },
                    { name: 'Marketing research', link: '/' },
                    { name: 'SEO strategy', link: '/' },
                    { name: 'Brand creation', link: '/' }
                  ]"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 u-col" data-aos="fade-up" data-aos-delay="500" data-aos-offset="-100">
                <Post
                  image="/Protocol_One.jpg"
                  title="Protocol One"
                  text="Introducing a groundbreaking crypto project aimed at transforming video streaming investments. With a sleek UI/UX design, a powerful admin panel, and a platform in development, we’re creating a seamless experience for both investors and creators. Protocol One is set to redefine the future of digital content and investment."
                  :tags="[
                    { name: 'Investment portal', link: '/' },
                    { name: 'UI/UX Design', link: '/' },
                    { name: 'Brand creation', link: '/' },
                    { name: 'Content creation', link: '/' },
                    { name: 'SEO strategy', link: '/' },
                    { name: 'Marketing research', link: '/' }
                  ]"
                />
              </div>
              <div class="col-lg-4 col-md-6 col-sm-6 col-12 u-col" data-aos="fade-up" data-aos-delay="600" data-aos-offset="-100">
                <Post
                  image="/Stello_App.jpg"
                  title="Stello App"
                  text="Presenting Stello, an innovative app that enables seamless online consultations between psychologists and patients, offering medical care anytime, anywhere. The app stands out with its automation of processes, requiring minimal user input, and its scalable AI-driven system, ensuring a seamless experience for both therapists and patients. Stello is revolutionizing mental health care with convenience and cutting-edge technology."
                  :tags="[
                    { name: 'Psychology APP dev', link: '/' },
                    { name: 'UI/UX Design', link: '/' },
                    { name: 'Brand strategy', link: '/' },
                    { name: 'Marketing strategy', link: '/' },
                    { name: 'Startup dev', link: '/' },
                    { name: 'Production', link: '/' }
                  ]"
                />
              </div>
            </div>
          </section>
          <div class="c-contact-section" id="services">
            <div class="c-contact-section__title">Elevate Your Brand Today</div>
            <NuxtLink to="/contact" class="u-btn is-white">
              Get an Estimate
            </NuxtLink>
          </div>
          <section class="l-our-services">
            <div class="row">
              <div class="col-lg-6 col-md-6 u-col">
                <div class="c-service is-vertical">
                  <h2 class="c-service__title u-h1">Explore Our Services</h2>
                  <!-- <div class="c-service__img" style="background-image: url('/img.jpg');"></div> -->
                  <div class="c-service__img" v-lazy-background="serviceBgImg"></div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 u-col">
                <div class="c-service" data-aos="fade-left" data-aos-delay="100" data-aos-offset="-50">
                  <h3 class="c-service__title u-h3">UX/UI Design</h3>
                  <div class="c-service__content">
                    <div class="c-service__content-text">Ensuring Intuitive & Delightful User Experiences</div>
                    <!-- <div class="c-service__content-arrow c-arrow is-black">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7722 6.50024H10.3332V5.00024H18.3329C18.8852 5.00024 19.3329 5.44796 19.3329 6.00024V14H17.8329V7.5609L6.39562 18.9982L5.33496 17.9375L16.7722 6.50024Z" fill="black" />
                      </svg>
                    </div> -->
                  </div>
                </div>
                <div class="c-service" data-aos="fade-left" data-aos-delay="250" data-aos-offset="-50">
                  <h3 class="c-service__title u-h3">SEO</h3>
                  <div class="c-service__content">
                    <div class="c-service__content-text">Reaching Your SERP Bold Goals in a Short Period</div>
                    <!-- <div class="c-service__content-arrow c-arrow is-black">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7722 6.50024H10.3332V5.00024H18.3329C18.8852 5.00024 19.3329 5.44796 19.3329 6.00024V14H17.8329V7.5609L6.39562 18.9982L5.33496 17.9375L16.7722 6.50024Z" fill="black" />
                      </svg>
                    </div> -->
                  </div>
                </div>
                <div class="c-service" data-aos="fade-left" data-aos-delay="400" data-aos-offset="-50">
                  <h3 class="c-service__title u-h3">Web & App Development</h3>
                  <div class="c-service__content">
                    <div class="c-service__content-text">Ensuring High Quality & Useful Products </div>
                    <!-- <div class="c-service__content-arrow c-arrow is-black">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7722 6.50024H10.3332V5.00024H18.3329C18.8852 5.00024 19.3329 5.44796 19.3329 6.00024V14H17.8329V7.5609L6.39562 18.9982L5.33496 17.9375L16.7722 6.50024Z" fill="black" />
                      </svg>
                    </div> -->
                  </div>
                </div>
                <div class="c-service" data-aos="fade-left" data-aos-delay="550" data-aos-offset="-50">
                  <h3 class="c-service__title u-h3">Branding Creation</h3>
                  <div class="c-service__content">
                    <div class="c-service__content-text">Crafting Unique & Memorable Brand Identities</div>
                    <!-- <div class="c-service__content-arrow c-arrow is-black">
                      <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7722 6.50024H10.3332V5.00024H18.3329C18.8852 5.00024 19.3329 5.44796 19.3329 6.00024V14H17.8329V7.5609L6.39562 18.9982L5.33496 17.9375L16.7722 6.50024Z" fill="black" />
                      </svg>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="l-text">
            <div class="c-section-text">
              <div class="c-section-text__box col-lg-6" data-aos="fade-right" data-aos-delay="100">
                <p class="c-section-text__text">We deliver high-quality solutions tailored to your needs. With accurate estimates and a focus on client satisfaction, we bring your vision to life. Partner with us for a standout digital experience!</p>
              </div>
            </div>
          </section>
          <section class="l-banner is-link">
            <div class="c-banner">
              <div class="c-banner__img">
                <video :src="bannerLink" autoplay muted loop playsinline></video>
              </div>
              <NuxtLink to="/contact" class="c-banner__arrow c-arrow is-big is-white" data-aos="zoom-in">
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M45.7562 6.0011H20V0.00109863H51.9988C54.208 0.00109863 55.9988 1.79196 55.9988 4.0011V36H49.9988V10.2437L4.24972 55.9928L0.00708008 51.7501L45.7562 6.0011Z" fill="white" />
                </svg>
              </NuxtLink>
              <div class="c-banner__content">
                <h2 class="u-h1" data-aos="fade-up" data-aos-delay="100">Have a Concept in Mind?</h2>
                <div data-aos="fade-up" data-aos-delay="200">
                  <p>Share your project idea with us! <br /> We're glad to furnish you with valuable insights that could prove beneficial.</p>
                </div>
              </div>
            </div>
          </section> 
        </div>
      </main>
      <Footer />
    </div>
  </div>
</template>

<script setup>
useHead({
  link: [
    {
      rel: 'preload',
      as: 'image',
      href: '/bannerMain.jpg'
    }
  ]
});

const svgCode = `
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7426 5.85865L13.576 4.02516C13.902 3.69914 14.4315 3.69914 14.7575 4.02516L15.9779 5.24554C16.3028 5.57039 16.3028 6.09622 15.9779 6.42107L14.1415 8.25755L11.7426 5.85865ZM10.8587 6.74254L4.29014 13.3111C4.21213 13.3891 4.16832 13.4948 4.16832 13.605V15.835L6.39096 15.835C6.50179 15.835 6.60806 15.791 6.68633 15.7127L13.2576 9.14143L10.8587 6.74254ZM7.57245 16.5944C7.25938 16.9075 6.83429 17.0834 6.39097 17.0834L3.33394 17.0834C3.10353 17.0834 2.91675 16.8971 2.91675 16.6672V13.605C2.91675 13.1643 3.09198 12.7415 3.40402 12.4295L12.6899 3.1435C13.5049 2.32846 14.8286 2.32847 15.6436 3.14352L16.864 4.36389C17.6761 5.17603 17.6762 6.49059 16.864 7.30272L7.57245 16.5944Z"/>
  </svg>
`;
const serviceBgImg = '/img.jpg';
const bannerMain = '/video-2.mp4';
const bannerLink = '/video-3.mp4';
</script>