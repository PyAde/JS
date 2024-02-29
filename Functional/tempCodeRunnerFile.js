const greatAuthors = books.filter((books) => books.sales > 1000000).map(books => `
${books.author} adalah penulis buku ${books.title} yang sangat hebat` )