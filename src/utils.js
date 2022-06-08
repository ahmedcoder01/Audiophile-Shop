//* UTILS

// function to get products with same category
export function filterProducts(term, arr) {
  let matchings = arr.filter((product) => product.category === term);
  // sorting by new products
  let sortedMatchings = matchings.sort((a, b) => b.new - a.new);
  return sortedMatchings;
}

//function to get a product by a slug
export function getProduct(slug, products) {
  return products.find((product) => product.slug === slug);
}

export function formatNum(num) {
  return new Intl.NumberFormat().format(num);
}
