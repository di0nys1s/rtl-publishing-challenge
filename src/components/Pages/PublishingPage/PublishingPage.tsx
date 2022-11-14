import { PagePreviewCard } from "../../PagePreviewCard";
import { PageLayout } from "../../PageLayout";
import { Spinner } from "../../Spinner";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { CoverLink } from "../../CoverLink";
import { CardList } from "../../CardList";

import { publishingPageConstants } from "./PublishingPage.constants";

// import InfiniteScroll from "react-infinite-scroll-component";

import { PublishingPageProps } from "./PublishingPage.interfaces";

import cx from "classnames";

import { useGetPublishing, useGetScreenSize } from "../../../hooks";

import "./PublishingPage.css";
import { ListItemCard } from "../../ListItemCard";

const PublishingPage = ({ additionalClassNames }: PublishingPageProps) => {
  const { publishing: publishingData, loading: isLoading } = useGetPublishing();

  const { minimumScreenSizeForSliceCards } = publishingPageConstants;

  const { screenSize } = useGetScreenSize();

  const handleGetCardItems = (type: string) => {
    const Component = type === "list" ? ListItemCard : PagePreviewCard;

    let slicedDataStart = 0;
    let slicedDataEnd = 0;
    if (type === "list") {
      slicedDataEnd = Number(publishingData?.bundleItems.length);
      if (screenSize > minimumScreenSizeForSliceCards) {
        slicedDataStart = 3;
      } else {
        slicedDataStart = 2;
      }
    } else {
      slicedDataStart = 0;

      if (screenSize > minimumScreenSizeForSliceCards) {
        slicedDataEnd = 3;
      } else {
        slicedDataEnd = 2;
      }
    }

    const publishingCardItems = publishingData?.bundleItems
      .slice(slicedDataStart, slicedDataEnd)
      .map(
        ({
          id,
          urlAlias,
          titel,
          afbeelding: { crops },
          lead,
          aangemaaktDatum: { formatted },
          labelValue,
        }) => {
          return (
            <Component
              key={id}
              coverLink={<CoverLink href={urlAlias} supportiveText={titel} />}
              contentTitle={titel}
              size={
                screenSize < minimumScreenSizeForSliceCards ? "small" : "medium"
              }
              contentDescription={lead}
              image={{
                altText: "page preview",
                src: crops[1].path,
              }}
              subTitle={`${formatted}`}
              title={labelValue}
              supportiveText={titel}
            />
          );
        }
      );

    return publishingCardItems;
  };

  return (
    <div className="c-publishing-page">
      <Spinner isLoading={isLoading} />

      {!isLoading && (
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
                    href="https://github.com/di0nys1s/rtl-publishing-challenge"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Burak Seyhan
                  </a>
                </div>
              }
              companyName="RTL"
            />
          }
          header={<Header />}
        >
          <main className="c-page-layout__main">
            <div className="c-publishing-page__banner">
              <img
                className="c-publishing-page__banner-image"
                src={publishingData?.image.imageUrl}
                alt={publishingData?.image.type}
              />
            </div>

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
                <CardList items={handleGetCardItems("preview")} />
                <CardList items={handleGetCardItems("list")} />
              </div>
            </div>
          </main>
        </PageLayout>
      )}
    </div>
  );
};

export { PublishingPage };
