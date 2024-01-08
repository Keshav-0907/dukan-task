import React from 'react'

const Table2 = () => {

    return (
        <div className=''>
            <div className='overflow-y-auto w-full flex flex-col justify-center' >

                <div className='flex justify-between py-[14px] px-[12px] bg-[#F2F2F2] mt-[12px] w-full rounded-[4px] '>
                    <div className='text-[#4D4D4D] w-1/4'>
                        Order ID
                    </div>

                    <div className='text-[#4D4D4D] w-1/4 flex items-center gap-[4px]'>
                        <span> Order date  </span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M3.43025 6.23409L0.606918 2.3286C0.548707 2.24507 0.517907 2.15037 0.517581 2.05392C0.517255 1.95746 0.547415 1.86262 0.60506 1.77882C0.662705 1.69502 0.745826 1.62519 0.846154 1.57627C0.946481 1.52736 1.06052 1.50106 1.17692 1.5H6.82358C6.93998 1.50106 7.05402 1.52736 7.15435 1.57627C7.25468 1.62519 7.3378 1.69502 7.39544 1.77882C7.45309 1.86262 7.48325 1.95746 7.48292 2.05392C7.4826 2.15037 7.45179 2.24507 7.39358 2.3286L4.57025 6.23409C4.51083 6.31526 4.42716 6.38238 4.32732 6.42895C4.22747 6.47553 4.11483 6.5 4.00025 6.5C3.88567 6.5 3.77303 6.47553 3.67319 6.42895C3.57334 6.38238 3.48967 6.31526 3.43025 6.23409Z" fill="#4D4D4D" />
                        </svg>
                    </div>
                    <div className='text-[#4D4D4D] w-1/4 text-right'>
                        Order amount
                    </div>
                    <div className='text-[#4D4D4D] w-1/4 flex justify-end items-center gap-[4px]'>

                        <span> Transaction fees </span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <g clip-path="url(#clip0_39564_279138)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99995 1.63353C4.03602 1.63353 1.63328 4.03627 1.63328 7.0002C1.63328 9.96412 4.03602 12.3669 6.99995 12.3669C9.96388 12.3669 12.3666 9.96412 12.3666 7.0002C12.3666 4.03627 9.96388 1.63353 6.99995 1.63353ZM0.699951 7.0002C0.699951 3.5208 3.52056 0.700195 6.99995 0.700195C10.4793 0.700195 13.3 3.5208 13.3 7.0002C13.3 10.4796 10.4793 13.3002 6.99995 13.3002C3.52056 13.3002 0.699951 10.4796 0.699951 7.0002Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99995 6.62382C7.25768 6.62382 7.46662 6.83276 7.46662 7.09049L7.46663 9.44604C7.46663 9.70377 7.25769 9.9127 6.99996 9.9127C6.74223 9.9127 6.53329 9.70377 6.53329 9.44604L6.53329 7.09049C6.53328 6.83276 6.74222 6.62382 6.99995 6.62382Z" fill="#4D4D4D" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52777 4.75852C7.52777 5.05002 7.29146 5.28633 6.99997 5.28633C6.70847 5.28633 6.47216 5.05002 6.47216 4.75852C6.47216 4.46702 6.70847 4.23072 6.99997 4.23072C7.29146 4.23072 7.52777 4.46702 7.52777 4.75852Z" fill="#4D4D4D" />
                            </g>
                            <defs>
                                <clipPath id="clip0_39564_279138">
                                    <rect width="14" height="14" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>
                <div className='p-[10px] flex flex-col '>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>
                        <hr className="border-gray-300  w-full" />

                    </div>
                    <div>
                        <div className='flex justify-between w-full py-[14px] px-[12px]'>
                            <div className='text-[#146EB4] w-1/4'>
                                #281209
                            </div>

                            <div className='w-1/4'>
                                7 July, 2023
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹1,278.23
                            </div>

                            <div className='w-1/4 text-right'>
                                ₹22
                            </div>

                        </div>


                    </div>
                </div>
                <div className='w-full flex justify-center items-center text-[#4D4D4D] mt-[24px]'>
                    <div className='flex cursor-pointer'>
                        <div className='border-2 border-[#D9D9D9] pt-[6px] pr-[12px] pb-[6px] pl-[6px] flex items-center rounded-[4px]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7803 3.96967C11.4874 3.67678 11.0126 3.67678 10.7197 3.96967L6.21967 8.46967C6.07902 8.61032 6 8.80109 6 9C6 9.19891 6.07902 9.38968 6.21967 9.53033L10.7197 14.0303C11.0126 14.3232 11.4874 14.3232 11.7803 14.0303C12.0732 13.7374 12.0732 13.2626 11.7803 12.9697L7.81066 9L11.7803 5.03033C12.0732 4.73744 12.0732 4.26256 11.7803 3.96967Z" fill="#4D4D4D" />
                            </svg>
                            <div className=''>
                                Previous
                            </div>
                        </div>

                        <div className='flex gap-2 items-center px-[24px]'>
                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                1
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                ...
                            </div>

                            <div className='bg-[#146EB4] rounded-[4px] text-white py-[6px] px-[8px] cursor-pointer'>
                                10
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                11
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                12
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                13
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer] hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                14
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                15
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                16
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                17
                            </div>

                            <div className='py-[6px] px-[8px] cursor-pointer hover:bg-[#146EB4] hover:text-white rounded-[4px]'>
                                18
                            </div>

                        </div>

                        <div className='border-2 border-[#D9D9D9] pt-[6px] pr-[6px] pb-[6px] pl-[12px] gap-1.5 flex items-center rounded-[4px]'>
                            <div className='text-[#4D4D4D] pl-[6px]'>
                                Next
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 3.96967C6.51256 3.67678 6.98744 3.67678 7.28033 3.96967L11.7803 8.46967C11.921 8.61032 12 8.80109 12 9C12 9.19891 11.921 9.38968 11.7803 9.53033L7.28033 14.0303C6.98744 14.3232 6.51256 14.3232 6.21967 14.0303C5.92678 13.7374 5.92678 13.2626 6.21967 12.9697L10.1893 9L6.21967 5.03033C5.92678 4.73744 5.92678 4.26256 6.21967 3.96967Z" fill="#4D4D4D" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table2