'use client';
import React, { Component } from 'react'

export class example extends Component {
  render() {
    return (
    <div>
    <h1 className="mt-10 mb-2 text-center capitalize text-4xl">News Services</h1>
<hr className="w-1/5 mx-auto" />

{/* <!-- Cards --> */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center px-4">
  
  {/* <!-- Card 1 --> */}
  <div className="py-10">
    <div className="rounded overflow-hidden shadow-lg max-w-sm">
      <img src="https://content.api.news/v3/images/bin/8f87873bcf0fbdd49ce8f0ea4d40c1c2" alt="mountain" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi, quaerat numquam veniam deleniti impedit quis ea dolores corporis error iste.</p>
      </div>
      <div className="grid grid-flow-col gap-2 px-6 pb-4">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#photography</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#travel</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#winter</span>
      </div>
    </div>
  </div>

  {/* <!-- Card 2 --> */}
  <div className="py-10">
    <div className="rounded overflow-hidden shadow-lg max-w-sm">
      <img src="https://content.api.news/v3/images/bin/8f87873bcf0fbdd49ce8f0ea4d40c1c2" alt="mountain" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi, quaerat numquam veniam deleniti impedit quis ea dolores corporis error iste.</p>
      </div>
      <div className="grid grid-flow-col gap-2 px-6 pb-4">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#photography</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#travel</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#winter</span>
      </div>
    </div>
  </div>

  {/* <!-- Card 3 --> */}
  <div className="py-10">
    <div className="rounded overflow-hidden shadow-lg max-w-sm">
      <img src="https://content.api.news/v3/images/bin/8f87873bcf0fbdd49ce8f0ea4d40c1c2" alt="mountain" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis commodi, quaerat numquam veniam deleniti impedit quis ea dolores corporis error iste.</p>
      </div>
      <div className="grid grid-flow-col gap-2 px-6 pb-4">
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#photography</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#travel</span>
        <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-base">#winter</span>
      </div>
    </div>
  </div>

</div>

    </div>
    )
  }
}

export default example