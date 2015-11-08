'use strict'

var searchBox = document.getElementById('searchBox')
var searchType = document.getElementById('searchType')
var searchButton = document.getElementById('searchButton')
var results = document.getElementById('results')

var getQueryAndSearchType = function () {
  return {
    query: searchBox.value,
    type: searchType.options[searchType.selectedIndex].value
  }
}

/**
 * Adds the indices, in which the given query is found, into the passed in array.
 */
var findQueryInDocuments = function (query) {
  var foundIn = []
  for (var i = 0; i < documentList.length; i++) {
    if (documentList[i].search(query) >= 0) {
      foundIn.push(i)
    }
  }
  return foundIn
}

var isInvalidInput = function (query) {
  return (query == null || query === '')
}

var union = function (arrays) {
  var output = [].concat.apply([], arrays)
  return output.sort().filter(function (item, pos, ary) {
    return !pos || item != ary[pos - 1]
  })
}

var intersection = function (arrays) {
  return arrays.shift().filter(function (v) {
    return arrays.every(function (a) {
      return a.indexOf(v) !== -1
    })
  })
}

/**
 * Creates a new row with the query, search type, and result. The row
 * is then appended to the results table.
 */
var addResults = function (args, result) {
  var row = document.createElement('tr')
  var queryTD = document.createElement('td')
  var typeTD = document.createElement('td')
  var resultTD = document.createElement('td')
  queryTD.innerText = args.query
  typeTD.innerText = args.type
  resultTD.innerText = result
  row.appendChild(queryTD)
  row.appendChild(typeTD)
  row.appendChild(resultTD)
  results.appendChild(row)
}

/**
 * Search method to be called when the search button is clicked.
 */
var search = function (args) {
  if (isInvalidInput(args.query)) {
    addResults(args, 'Invalid query. Unable to search.')
    return
  }
  // Split the input string over a space to varruct individual queries.
  var queries = args.query.split(' ')
  var foundIn = []
  for (var i = 0; i < queries.length; i++) {
    foundIn.push(findQueryInDocuments(queries[i]))
  }

  if (args.type === 'OR') {
    addResults(args, union(foundIn))
  } else {
    addResults(args, intersection(foundIn))
  }
}

// Add a click listener to perform a search.
searchButton.addEventListener('click', function () {
  search(getQueryAndSearchType())
})

//  The following are tests from the questtionaire. 
search({
  query: 'Care Quality Commission',
  type: 'OR'
})

search({
  query: 'September 2004',
  type: 'OR'
})

search({
  query: 'general population generally',
  type: 'OR'
})

search({
  query: 'Care Quality Commission admission',
  type: 'AND'
})

search({
  query: 'general population Alzheimer',
  type: 'AND'
})

// Edge cases. Bad queries.
search({
  query: '',
  type: 'AND'
})

search({
  query: undefined,
  type: 'AND'
})

search({
  query: null,
  type: 'AND'
})
