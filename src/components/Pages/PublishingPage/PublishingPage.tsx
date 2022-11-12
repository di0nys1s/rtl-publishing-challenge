import { Card } from "../../Card";
import { PageLayout } from "../../PageLayout";
import { Spinner } from "../../Spinner";
import { Footer } from "../../Footer";
import { Header } from "../../Header";
import { PublishingPageProps } from "./PublishingPage.interfaces";

import cx from "classnames";

const PublishingPage = ({
  additionalClassNames,
  children,
}: PublishingPageProps) => {
  return (
    <div className="c-publishing-page">
      <PageLayout
        additionalClassNames={cx(
          "c-page-layout-template",
          additionalClassNames
        )}
        footer={<Footer />}
        header={<Header />}
      >
        <Spinner isLoading={false} />

        <main className="c-page-layout-template__main">
          <div className="c-container">{children}</div>
        </main>
      </PageLayout>
    </div>
  );
};

export { PublishingPage };
