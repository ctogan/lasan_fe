export default (ctx) => {
  ctx.$axios.onError((error) => {
    console.log(error)
    const errorMsg = error.response ? error.response.data.message : 'Unknown error'
    const errorCode = error.response ? parseInt(error.response.status) : -1
    if (errorCode === 401) {
      console.log(errorCode + ' - ' + errorMsg)
      ctx.redirect('/')
    }else if(errorCode === 500){
      $route.push('404')
    } else {
      console.log(errorCode)
      throw new Error(error.message)
    }
  })
}