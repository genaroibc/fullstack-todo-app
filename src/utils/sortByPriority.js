const sortingValues = {
  low: 0,
  medium: 1,
  high: 2
};

export function sortByPriority({ items = [], ascending = false }) {
  const sortedItems = items.sort((leftItem, rigthItem) => {
    return sortingValues[leftItem.priority] - sortingValues[rigthItem.priority];
  });

  const sort = ascending ? sortedItems : sortedItems.reverse();

  return sort;
}
