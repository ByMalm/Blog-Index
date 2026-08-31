export function isWebsiteSortsOld(
  websiteSorts: WebsiteSort[],
  websiteItems: WebsiteItem[]
): websiteSorts is WebsiteSortOld[] {
  const isWebsiteSortOld = websiteSorts.every(
    (sort) =>
      (sort as WebsiteSortOld).id !== undefined &&
      !(sort as WebsiteSortNew).sites
  );

  const hasWebsiteItems =
    websiteItems instanceof Array &&
    websiteItems.length > 0 &&
    websiteItems.every((item) => item.sortId !== undefined);

  return isWebsiteSortOld && hasWebsiteItems;
}
