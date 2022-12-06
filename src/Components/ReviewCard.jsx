import React from 'react'

const ReviewCard = ({profileImage, name, date, rating, review}) => {
  return (
    <div className="w-full bg-secondary rounded-lg py-3 px-3 mb-3">
      <div className="flex items-center">
        <img className="h-12 rounded-full object-contain" src="https://img.freepik.com/premium-vector/people-happy-face-man-icon_24640-19226.jpg?w=2000" alt="" />
        <div className="ml-2">
          <h1 className="text-sm font-semibold">Joshua Tauro</h1>
          <p className="text-xs text-gray-500">posted on 4th December, 2022</p>
        </div>
      </div>
      <p className="text-sm text-gray-700 mt-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam debitis ipsam totam et velit laborum modi non rerum ad, ex exercitationem nesciunt dolorem natus cum, ratione at necessitatibus vel commodi?</p>
    </div>
  )
}

export default ReviewCard