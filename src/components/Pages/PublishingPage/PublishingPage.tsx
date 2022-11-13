import { useState, useEffect } from "react";

import { PagePreviewCard } from "../../PagePreviewCard";
import { PageLayout } from "../../PageLayout";
import { Spinner } from "../../Spinner";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { CoverLink } from "../../CoverLink";
import { CardList } from "../../CardList";

// import InfiniteScroll from "react-infinite-scroll-component";

import {
  IPublishingData,
  PublishingPageProps,
} from "./PublishingPage.interfaces";

import cx from "classnames";

import "./PublishingPage.css";

const PublishingPage = ({ additionalClassNames }: PublishingPageProps) => {
  const [publishingData, setPublishingData] = useState<IPublishingData>();
  const [dataStart] = useState<number>(0);
  const [dataEnd] = useState<number>(6);

  const getData = () => {
    fetch("http://localhost:3000/publishing")
      .then((response) => response.json())
      .then((json) => setPublishingData(json))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(publishingData?.bundleItems);

  const publishingCardItems = publishingData?.bundleItems
    .slice(dataStart, dataEnd)
    .map((card) => (
      <PagePreviewCard
        key={card.id}
        coverLink={
          <CoverLink href={card.urlAlias} supportiveText={card.titel} />
        }
        contentTitle={card.titel}
        contentDescription={card.lead}
        image={{
          altText: "page preview",
          src: card.afbeelding.crops[1].path,
        }}
        subTitle={`${card.aangemaaktDatum.formatted}`}
        title={card.labelValue}
      />
    ));

  console.log(publishingCardItems);

  return (
    <div className="c-publishing-page">
      <PageLayout
        containerAlignment="center"
        additionalClassNames={cx("c-page-layout", additionalClassNames)}
        childrenTopBanner={<div className="c-publishing-page__top-banner" />}
        footer={
          <Footer
            children={
              <div className="c-footer__text">
                Made with
                <img
                  className="c-footer-logo"
                  src="/images/passion.webp"
                  alt="passion"
                  loading="lazy"
                />
                by
                <a
                  className="c-footer__link"
                  href="creatorLink"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Burak Seyhan
                </a>
              </div>
            }
          />
        }
        header={<Header />}
      >
        <Spinner isLoading={false} />

        <main className="c-page-layout__main">
          <img
            className="c-publishing-page__banner-image"
            src={publishingData?.image.imageUrl}
            alt={publishingData?.image.type}
          />

          <div className="c-container">
            <div className="c-publishing-page__top-section">
              <span className="c-publishing-page__main-small-header">
                Best Read
              </span>
              <h1 className="c-publishing-page__main-header-title">
                {publishingData?.title}
              </h1>
              <p className="c-publishing-page__main-description">
                {publishingData?.description}
              </p>
            </div>

            {/* <div className="c-publishing-page__cards">
              {publishingCardItems && (
                <InfiniteScroll
                  dataLength={publishingCardItems.length}
                  next={getData}
                  hasMore={true}
                  refreshFunction={getData}
                  loader={<h4>Loading...</h4>}
                  pullDownToRefresh
                >
                  <CardList items={publishingCardItems} />
                </InfiniteScroll>
              )}
            </div> */}

            <div className="c-publishing-page__cards">
              {publishingCardItems && <CardList items={publishingCardItems} />}
            </div>
          </div>
        </main>
      </PageLayout>
    </div>
  );
};

export { PublishingPage };
