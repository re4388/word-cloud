const searchTerm = document.getElementById('searchTerm');



const getSearchTerm  = () => {
  /* get google sheet value */
  const result = 'qq'
  searchTerm.innerText = `search term from Twitter: ${result}`
}


export {getSearchTerm}