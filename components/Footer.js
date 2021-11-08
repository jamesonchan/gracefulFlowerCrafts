import React from 'react'
import FooterPhoto from './FooterPhoto'

const urls = [
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585598472299-KJAWJL2Z04H64W7FK0F5/37.png?format=500w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688081418-22O07PFQ9RB7FNESRO5B/_U0A5852.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688063887-ZNQXOKQZUW0H7Q3DI7J8/_U0A5978.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688071810-0PFP2IB3ADCB5YVXMK2R/_U0A5844.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585598472299-KJAWJL2Z04H64W7FK0F5/37.png?format=500w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688081418-22O07PFQ9RB7FNESRO5B/_U0A5852.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688063887-ZNQXOKQZUW0H7Q3DI7J8/_U0A5978.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688071810-0PFP2IB3ADCB5YVXMK2R/_U0A5844.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585598472299-KJAWJL2Z04H64W7FK0F5/37.png?format=500w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688081418-22O07PFQ9RB7FNESRO5B/_U0A5852.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688063887-ZNQXOKQZUW0H7Q3DI7J8/_U0A5978.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688081418-22O07PFQ9RB7FNESRO5B/_U0A5852.jpg?format=300w'},
    {url:'https://images.squarespace-cdn.com/content/v1/5c5397960b77bdff51b7b3ab/1585688063887-ZNQXOKQZUW0H7Q3DI7J8/_U0A5978.jpg?format=300w'},

]

function Footer() {
    return (
        <div className='mt-5'>

            <div className='bg-red-50 p-5'>
                <div className='md:max-w-6xl mx-auto text-center'>
                    <p className='font-light text-gray-600'>Follow us on INSTAGRAM</p>
                </div>
            </div>

            <div className='flex space-x-2 mx-1'>
                {urls.map((url,index)=>(
                    <FooterPhoto 
                        key={index}
                        url={url.url}
                    />
               ))}        

            </div>           
        
            <div className='bg-red-50 p-8'>
                <div className='md:max-w-6xl mx-auto text-center'>
                    <p className='text-xs text-gray-600'>COPYRIGHT 2021</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
