import React from 'react'

const LOTTTO_LIST = [
    "아파트 분양",
    "APT 무순위/잔여세대",
    "오피스텔"
]

function Category() {
  return (
    <div>{LOTTTO_LIST.map(data => (data))}</div>
  )
}

export default Category