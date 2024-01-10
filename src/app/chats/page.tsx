import Image from 'next/image';

export default function Chats() {
  const a = [1, 2, 3, 4, 5, 6, 7, 8, 8 ,9, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  console.log(a);
  return (
    <main className="flex justify-stretch">
      <aside className=" w-[20%]">
        <h2>Сообщения</h2>
        {a.map((item, index) => (
          <div key={index} className='flex bg-emerald-500 h-12'>
            <p>Юляша</p>
            <Image src='' alt='Юля'/>
          </div>
        ))}
      </aside>
      <section className='w-[80%] flex flex-col h-screen'>
        <div>О собеседнике</div>
        <div className='flex-grow'>чат</div>
        <div>Поле для отправки</div>
      </section>
    </main>
  )
}
