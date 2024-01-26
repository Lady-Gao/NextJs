 function Page() {
  // Render data...
  return <div>ere
    <img src="https://www.baidu.com/img/flexible/logo/pc/result.png" />
    r</div>
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://www.baidu.com/sugrec?&prod=pc_his&from=pc_web&json=1&sid=40079_40125_40156_39996&hisdata=%5B%7B%22time%22%3A1706235430%2C%22kw%22%3A%22npm%20err!%20code%20eneedauth%22%7D%2C%7B%22time%22%3A1706235659%2C%22kw%22%3A%22npm%20login%22%7D%2C%7B%22time%22%3A1706237352%2C%22kw%22%3A%22vanilla%22%7D%2C%7B%22time%22%3A1706237464%2C%22kw%22%3A%22nuxt%22%7D%2C%7B%22time%22%3A1706237605%2C%22kw%22%3A%22quasar%22%7D%2C%7B%22time%22%3A1706237696%2C%22kw%22%3A%22npm%20err!%20code%201%22%7D%2C%7B%22time%22%3A1706238803%2C%22kw%22%3A%22nuxt%20quasar%22%7D%2C%7B%22time%22%3A1706245653%2C%22kw%22%3A%22localhost%3A3000about%22%7D%2C%7B%22time%22%3A1706246279%2C%22kw%22%3A%22nextjs%22%7D%2C%7B%22time%22%3A1706246347%2C%22kw%22%3A%22nextjs%20%2Fabout404%22%7D%5D&_t=1706247435383&req=2&csor=0`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default Page