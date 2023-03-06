'use client'

import React, { useState } from 'react'


export default function Qform() {
    const [subject, setsubject] = useState("");


  return (
    <form className='flex flex-col m-4 w-1/4'> 
    <label htmlFor='subject'>Subject of the Course</label>
    <input value={subject} type="text" id='subject' placeholder='Please type the subject of the lesson' name='subject' className='border  border-5 border-gray-600 focus:outline-none mb-6'/>
    <label htmlFor='audience'>Target of the lesson</label>
    <input type="text" id='target' placeholder='Please type the target of the lesson' name='target' className='border  border-5 border-gray-600 focus:outline-none mb-6'/>
    <label htmlFor='audience'>Target audience</label>
    <input type="text" id='audience' placeholder='Please type the target audience of the lesson' name='audience' className='border  border-5 border-gray-600 focus:outline-none mb-6'/>
    <label htmlFor='focus'>What would you like to focus the questions on? (Optional)</label>
    <input type="text" id='focus' placeholder='what do you whant me to focus the question on?' name='focus' className='border  border-5 border-gray-600 focus:outline-none mb-6'/>
</form>
  )
}
