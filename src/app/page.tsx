import Image from "next/image";
import perfil from "../../public/encarregado2.jpg"
import { IoChatbubblesSharp } from "react-icons/io5";
import { IoNotifications } from "react-icons/io5";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdAutoDelete } from "react-icons/md";
import { IoRocketSharp } from "react-icons/io5";
import { Coment } from "./components/Coments";
import { IoClose } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex  justify-center ">
      <header className="w-[400px] h-[400px]  mt-20 justify-center items-center flex flex-col">
        <main className="w-[350px] mt-[-132px] border-b-[1.5px] border-b-gray-800 h-[70px] flex justify-between items-center">
          <div className="flex felx-col gap-5">
            <figure className="w-[50px] h-[50px] shadow-2xl rounded-full overflow-hidden">
              <Image 
               src={perfil}
               alt="img perfil"
               className="w-[50px] h-[50px] object-cover"
              />
            </figure>
            <div className="py-1">
              <h1 className="text-[13px] font-medium">Filipa Cardoso</h1>
              <p className="text-[10px] text-gray-400 font-normal">Anfitrian do workpash</p>
            </div>
          </div>
          <div className="w-[30px] h-[30px] bg-blue-950 shadow-2xl rounded-full flex justify-center items-center">
            <div className="absolute w-[15px] h-[15px] top-[163px] left-[805px] bg-rose-700 rounded-full text-[8px] flex justify-center items-center">
               5
            </div>
          <IoNotifications className="text-red-500"/>
          </div>
        </main>
        <div className="w-[350px] h-[20px] mt-10">
           
          <Coment.Root>
            <Coment.Icon icon={IoRocketSharp}/>
            <Coment.Text text="Aceita a nossa chamada filipa "/>
            <Coment.Action>
            <Coment.IconAction icon={MdAutoDelete} color="red"/>
              <Coment.IconAction icon={IoCheckmarkSharp} color="green"/>
             
            </Coment.Action>
          </Coment.Root>

          <Coment.Root>
            <Coment.Icon icon={IoRocketSharp}/>
            <Coment.Text text="Aceita o pedido do Romeu "/>
            <Coment.Action>
            <Coment.IconAction icon={MdAutoDelete} color="red"/>
              <Coment.IconAction icon={IoCheckmarkSharp} color="green"/>
             
            </Coment.Action>
          </Coment.Root>

         
          <Coment.Root>
            <Coment.Icon icon={IoRocketSharp}/>
            <Coment.Text text="Seja bem vindo Lorrys Code"/>
            <Coment.Action>
            <Coment.IconAction icon={MdAutoDelete} color="red"/>
              <Coment.IconAction icon={IoClose} color="zinc"/>
            </Coment.Action>
          </Coment.Root>


          </div>
      </header>
      <div className="absolute top-[250px] opacity-10 text-[200px]">
          🚀
        </div>
    </div>
  );
}
