"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { SendHorizonalIcon } from 'lucide-react'
import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function page() {
  const services = [
    {
      id: 1,
      title: "Aadhar Card",
      img: "https://paytmblogcdn.paytm.com/wp-content/uploads/2023/08/Blog_Paytm_How-To-Get-Duplicate-Aadhar-Card.jpg"
    },
    {
      id: 2,
      title: "PAN Card",
      img: "https://www.jansatta.com/wp-content/uploads/2022/07/PAN-Card-1-1.jpg"
    },
    {
      id: 3,
      title: "Voting Card",
      img: "https://images.deccanherald.com/deccanherald%2Fimport%2Fsites%2Fdh%2Ffiles%2Farticleimages%2F2023%2F02%2F09%2Fvoter-id-istock-1163736-1668846564-1189536-1675946524.jpg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2"
    },
    {
      id: 5,
      title: "Provident Fund",
      img: "https://www.credencecorpsolutions.com/assets/uploads/service/1645160436_pf.jpg"
    }
  ]

  const ref = useRef();
  const ref2 = useRef();

  const sendEmail = (e: Event) => {
    try {
      e.preventDefault();

      emailjs
        .sendForm('service_qb5qws5', 'template_i4iv8gb', ref.current, {
          publicKey: 'w33t9a3FXSNG3MgFN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } catch (error) {
      console.log(error.message);
    }
  }

  const sendQuery = (e) => {
    try {
      e.preventDefault();

      emailjs
        .sendForm('service_qb5qws5', 'template_u9h4ql5', ref.current, {
          publicKey: 'w33t9a3FXSNG3MgFN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <div className='flex flex-col h-screen justify-center items-center'>
        <div className='p-10 rounded-lg w-3/4 flex flex-col gap-5 justify-center items-center'>
          <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='text-5xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tighter'>Documents creation made easy 🚀</h1>
            <p className='w-3/4 text-sm text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus ipsam officiis animi libero maiores? Hic, eligendi repudiandae. Ullam possimus nam, quis neque, alias, consectetur rem temporibus quia ad consequuntur facere!</p>
          </div>
          <form ref={ref2} onSubmit={sendQuery} className='flex justify-center gap-1 items-center w-full'>
            <Input className='w-1/2' placeholder='write to us' name='message' />
            <Button><SendHorizonalIcon /></Button>
          </form>
        </div>
      </div>
      <div id='services' className='h-screen flex p-5 justify-center items-center'>
        <div className='flex gap-10 justify-center items-center'>
          <div>
            <h1 className='text-6xl text-white text-center md:text-4xl lg:text-6xl xl:text-6xl font-bold tracking-tighter'>Services <br />Offered <br /><span className='text-[100px] text-center'>🤝🏻</span></h1>
          </div>
          <div className='p-5 rounded-lg w-1/2'>
            <ul className='text-2xl grid grid-cols-2 tracking-tighter font-light gap-5'>
              {
                services.map(el => <li key={el.title} className='flex backdrop-blur-sm flex-col gap-2 bg-white/50 p-3 rounded-lg'>
                  <img className='rounded-lg h-[150px] w-[600px] object-cover' src={el.img} />
                  <div className='flex gap-1 justify-between items-center'>
                    <p className='text-xl tracking-tighter'>{el.title}</p>
                    <Button size={"sm"}>get now</Button>
                  </div>
                </li>)
              }
            </ul>
          </div>
        </div>
      </div>
      <div id='contact' className='h-screen flex justify-center items-center'>
        <div className='p-10 h-full w-3/4 xl:w-[60%] rounded-lg flex justify-between items-center'>
          <div className='w-1/2 bg-white/50 h-3/4 p-10 flex rounded-s-lg justify-center items-center'>
            <h1 className='w-3/4 text-5xl md:text-4xl lg:text-5xl xl:text-5xl font-bold tracking-tighter '>Reach us <br />out &nbsp;<span className='text-5xl'>☎️</span></h1>
          </div>
          <form ref={ref} onSubmit={sendEmail} className='flex flex-col gap-3 w-full h-3/4 justify-center rounded-e-lg bg-white p-10'>
            <div className='flex flex-col gap-1'>
              <h1 className='m-0 text-2xl font-bold tracking-tighter'>Connect with us</h1>
              <p className='m-0 text-sm text-gray-500'>Reach us directly at our Inbox!!!</p>
            </div>
            <div>
              <Label className='text-sm'>Name</Label>
              <Input className='text-sm' placeholder='John Doe' name='to_name' />
            </div>
            <div>
              <Label className='text-sm'>Email</Label>
              <Input className='text-sm' type='email' name='to_email' placeholder='johndoe@123.com' />
            </div>
            <div>
              <Label className='text-sm'>Name</Label>
              <Textarea className='text-sm' name='message' placeholder='We want to create...'></Textarea>
            </div>
            <Button type='submit'>send</Button>
          </form>
        </div>
      </div>
    </div>
  )
}
