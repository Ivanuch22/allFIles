//@ts-nocheck

import Head from 'next/head';
import DefaultLayout from '@/components/layouts/default';
import { useEffect, useState } from 'react';
import { server } from '@/http';
import Script from 'next/script';
import { useRouter } from 'next/router';
import $t from '@/locale/global';
import Link from 'next/link';
import { PaginationControl } from 'react-bootstrap-pagination-control';
import getHeaderFooterMenus from '@/utils/getHeaderFooterMenus';
import DefaultLayoutContext from '@/contexts/DefaultLayoutContext';

export interface Contacts {
  location: string;
  phone_number: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
export interface StrapiContacts {
  data: {
    id: number;
    attributes: Contacts;
  };
  meta: {};
}

export const initialContacts: Contacts = {
  location: '',
  phone_number: '',
  email: '',
  createdAt: '',
  updatedAt: '',
  publishedAt: '',
};

export default function Home({
  tags,
  pagination,
  menu,
  allPages,
  footerMenus,
  footerGeneral,
  socialData,
}) {
  const router = useRouter();
  const locale = router.locale === 'ua' ? 'uk' : router.locale;

  const { query } = router;
  const { perPage } = query;

  const [paginationPage, setPaginationPage] = useState(pagination.page);

  const goToPage = n =>
    router.push(`/services?page=${n}&perPage=${perPage ? perPage : ''}`);

  return (
    <>
      <Head>
        <title>{$t[locale].services.seo_title}</title>
        <meta
          name="description"
          content={$t[locale].services.seo_description}
        />
        <meta name="keywords" content={$t[locale].services.seo_keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></Script>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <DefaultLayoutContext.Provider
            value={{
              footerMenus,
              footerGeneral,
              allPages,
              menu,
              socialData,
            }}
          >
            <DefaultLayout>
              <div className="container-xxl position-relative p-0">
                <div className="container-xxl py-5 bg-primary hero-header mb-5">
                  <div className="container mb-5 mt-5 py-2 px-lg-5 mt-md-1 mt-sm-1 mt-xs-0 mt-lg-5">
                    <div className="row g-5 pt-1">
                      <div
                        className="col-12 text-center text-lg-start"
                        style={{ marginTop: '40px', marginBottom: '50px' }}
                      >
                        <h1 className="display-4 text-white animated slideInLeft">
                          {$t[locale].menu.services}
                        </h1>
                        <nav aria-label="breadcrumb">
                          <ol className="breadcrumb justify-content-center justify-content-lg-start animated slideInLeft">
                            <li className="breadcrumb-item">
                              <a className="text-white" href="#">
                                {$t[locale].menu.main}
                              </a>
                            </li>
                            <li className="breadcrumb-item">
                              <a className="text-white" href="#">
                                {$t[locale].menu.services}
                              </a>
                            </li>
                          </ol>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="container-xxl py-5 service-items"
                style={{ maxWidth: '90%', margin: '0 auto' }}
              >
                <main id="content" className="col-md-8 col-content">
                <div className="post block-in-loop post-2257307 type-post status-publish format-standard has-post-thumbnail category-novini category-soft tag-apple-ua">
      <div className="row">
        <div className="col-xs-4 col-img">
          <div className="col-img-in">
            <span className="cat part">
              <a href="https://itc.ua/ua/novini/" className="itc-cat novini a-not-img" rel="category">Новини</a>
            </span>
            <a href="https://itc.ua/ua/novini/apple-vyluchyla-telegram-whatsapp-ta-signal-z-app-store-v-kytayi-na-vymogu-mistsevoyi-vlady/" className="thumb-responsive lazy-load a-not-img lazy-loaded" style={{ backgroundImage: 'url("https://itc.ua/wp-content/uploads/2024/04/Depositphotos_194597948_L-450x300.jpg")' }}></a>
          </div>
        </div>
        <div className="col-xs-8 col-txt">
          <h2 className="entry-title text-uppercase">
            <a href="https://itc.ua/ua/novini/apple-vyluchyla-telegram-whatsapp-ta-signal-z-app-store-v-kytayi-na-vymogu-mistsevoyi-vlady/" rel="bookmark" className="a-not-img">Apple вилучила Telegram, WhatsApp та Signal з App Store в Китаї на вимогу місцевої влади</a>
          </h2>
          <div className="hidden-sm hidden-xs">
            <div className="entry-header" style={{ clear: 'both' }}>
              <div>
                <span className="category-color category-color-779184" style={{ paddingRight: '10px' }}>
                  <a href="https://itc.ua/ua/soft/" style={{ fontWeight: '600' }} className="a-not-img">Софт</a>
                </span>
                <span className="date part">
                  19.04.2024 о 10:47
                </span>
                <span className="comments part">
                  <a href="https://itc.ua/ua/novini/apple-vyluchyla-telegram-whatsapp-ta-signal-z-app-store-v-kytayi-na-vymogu-mistsevoyi-vlady/#itc-comments" className="a-not-img">
                    <img src="https://itc.ua/wp-content/themes/ITC_6.0/images/comment_outline_24.svg" height="24" width="24" alt="comment" />
                    <span className="disqus-comment-count" data-disqus-url="https://itc.ua/ua/novini/apple-vyluchyla-telegram-whatsapp-ta-signal-z-app-store-v-kytayi-na-vymogu-mistsevoyi-vlady/" data-disqus-identifier="2257307 https://itc.ua/?p=2257307">2</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="visible-sm visible-xs">
            <div className="entry-header" style={{ clear: 'both' }}>
              <div>
                <span className="category-color category-color-779184" style={{ paddingRight: '10px' }}>
                  <a href="https://itc.ua/ua/soft/" style={{ fontWeight: '600' }} className="a-not-img">Софт</a>
                </span>
                <span className="date part">
                  19.04.2024 о 10:47
                </span>
                <span className="comments part">
                  <a href="https://itc.ua/ua/novini/apple-vyluchyla-telegram-whatsapp-ta-signal-z-app-store-v-kytayi-na-vymogu-mistsevoyi-vlady/#itc-comments" className="a-not-img">
                    <img src="https://itc.ua/wp-content/themes/ITC_6.0/images/comment_outline_24.svg" height="24" width="24" alt="comment" />
                    <span className="disqus-comment-count" data-disqus-url="https://itc.ua/ua/novini/apple-vyluchyla-telegram-whatsapp-ta-signal-z-app-store-v-kytayi-na-vymogu-mistsevoyi-vlady/" data-disqus-identifier="2257307 https://itc.ua/?p=2257307">2</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>
        {`
          .block-in-loop .logo_from { display: none !important; }
          .entry-header { position: relative; }
          .logo_from {
              display: inline-block;
              margin-left: 10px;
          }
          .logo_from_hl img { height: 12px; }
          .logo_from_mc img { height: 28px; position: relative; top: -2px; }
          @media (max-width: 768px) {
              .logo_from {
                  position: static;
                  margin-top: 10px;
                  margin-left: 0;
              }
          }
        `}
      </style>

</main>


                <div>
                  {tags.map(tag => {
                    return (
                      <Link
                        href={`/service${tag.attributes.url}`}
                        className="mx-1 badge bg-primary service-item"
                        key={tag.id}
                      >
                        {tag.attributes.page_title}
                      </Link>
                    );
                  })}
                </div>
              </div>
              <div className="d-flex justify-content-center">
                {pagination.pageCount > 1 && (
                  <PaginationControl
                    page={paginationPage}
                    between={4}
                    total={pagination.total}
                    limit={pagination.pageSize}
                    changePage={page => {
                      setPaginationPage(page);
                      goToPage(page);
                    }}
                    ellipsis={1}
                  />
                )}
              </div>
            </DefaultLayout>
          </DefaultLayoutContext.Provider>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps({ query, locale }: Query) {
  const { page = 1, perPage = 100 } = query;

  try {
    const res = await server.get(
      `/page-seos?locale=${
        locale === 'ua' ? 'uk' : locale
      }&pagination[page]=${page}&pagination[pageSize]=${perPage}`
    );

    const tags = res.data.data;
    const pagination = res.data.meta.pagination;

    const strapiLocale = locale === 'ua' ? 'uk' : locale;

    const { menu, allPages, footerMenus, footerGeneral } =
      await getHeaderFooterMenus(strapiLocale);

    const socialRes = await server.get('/social');
    const socialData = socialRes.data.data.attributes;

    if (page > pagination.pageCount) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        tags,
        pagination,
        menu,
        allPages,
        footerMenus,
        footerGeneral,
        socialData: socialData ?? null,
      },
    };
  } catch (error) {
    return {
      notFound: true,
      allPages: [],
      footerMenus: {
        about: { title: '', items: [] },
        services: { title: '', items: [] },
        contacts: {},
      },
      footerGeneral: {},
      socialData: socialData ?? null,
    };
  }
}
