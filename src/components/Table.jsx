import React from 'react'

const Table = () => {

    const TableData = [
        {
            id: 1,
            o_id: 281209,
            status: 'Successful',
            t_id: 131634495747,
            date_time: 'Today, 08:45 PM',
            amount: '₹1,125.00'
        },
        {
            id: 2,
            o_id: 281208,
            status: 'Processing',
            t_id: 131634495747,
            date_time: 'Yesterday, 3:00 PM',
            amount: '₹1,125.00'
        },
        {
            id: 3,
            o_id: 281208,
            status: 'Successful',
            t_id: 131634495747,
            date_time: '12 Jul 2023, 03:00 PM',
            amount: '₹1,125.00'
        },
        {
            id: 4,
            o_id: 281208,
            status: 'Successful',
            t_id: 131634495747,
            date_time: '12 Jul 2023, 03:00 PM',
            amount: '₹1,125.00'
        },
        {
            id: 5,
            o_id: 281208,
            status: 'Successful',
            t_id: 131634495747,
            date_time: '12 Jul 2023, 03:00 PM',
            amount: '₹1,125.00'
        },
        {
            id: 6,
            o_id: 281208,
            status: 'Successful',
            t_id: 131634495747,
            date_time: '12 Jul 2023, 03:00 PM',
            amount: '₹1,125.00'
        },

    ]

    return (
        <div className='overflow-y-auto'>
            <div className='table-auto w-full' style={{ width: '100%' }}>
                <div className='flex justify-between py-[14px] px-[12px] bg-[#F2F2F2] mt-[12px] w-full rounded-[4px] '>
                    <div className='text-[#4D4D4D] w-1/5'>
                        Order ID
                    </div>
                    <div className='text-[#4D4D4D] w-1/5'>
                        Status
                    </div>
                    <div className='text-[#4D4D4D] w-1/5'>
                        Transaction ID
                    </div>
                    <div className='text-[#4D4D4D] w-1/5'>
                        Refund date
                    </div>
                    <div className='text-[#4D4D4D] w-1/5 text-right'>
                        Order amount
                    </div>
                </div>

                <div className='p-[10px]'>
                    {
                        TableData.map((data, index) => (
                            <div>
                                <div className='flex justify-between w-full py-[14px] px-[12px]' key={data.id}>
                                    <div className='text-[#146EB4] w-1/5'>
                                        #{data.o_id}
                                    </div>
                                    <div className='flex items-center gap-[6px] w-1/5'>
                                        {data.status === 'Successful' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                                <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
                                                <circle cx="5.33594" cy="5" r="5" fill="#999999" />
                                            </svg>
                                        )}
                                        <span> {data.status} </span>
                                    </div>
                                    <div className='w-1/5'>
                                        {data.t_id}
                                    </div>
                                    <div className='flex justify-start w-1/5'>
                                        <div>
                                            {data.date_time}
                                        </div>
                                    </div>
                                    <div className='w-1/5 text-right'>
                                        {data.amount}
                                    </div>

                                </div>
                                <div>
                                    {index !== TableData.length - 1 && <hr className="border-gray-300  w-full" />}
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Table