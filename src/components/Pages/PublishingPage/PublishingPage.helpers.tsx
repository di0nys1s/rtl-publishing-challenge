import { IBundleItem, useGetScreenSize } from "../../../hooks";
import { ListItemCard } from "../../ListItemCard";
import { PagePreviewCard } from "../../PagePreviewCard";
import { CoverLink } from "../../CoverLink";

const GetCardItems = (type: string, items: IBundleItem[] | undefined) => {
  const { screenSize } = useGetScreenSize();

  const Component = type === "list" ? ListItemCard : PagePreviewCard;

  if (!items) {
    return;
  }

  let slicedDataStart = 0;
  let slicedDataEnd = 0;
  if (type === "list") {
    slicedDataEnd = Number(items.length);
    if (screenSize > 1300) {
      slicedDataStart = 3;
    } else {
      slicedDataStart = 2;
    }
  } else {
    slicedDataStart = 0;

    if (screenSize > 1300) {
      slicedDataEnd = 3;
    } else {
      slicedDataEnd = 2;
    }
  }

  const publishingCardItems = items
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
            size={screenSize < 1300 ? "small" : "medium"}
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

export { GetCardItems };
