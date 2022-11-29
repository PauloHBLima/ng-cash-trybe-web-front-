interface HomeProps {
  usuarios: string;
}

import Image from "next/image";
import Logo from "../assets/logo_ng.png";
import { IconPerfil, IconLock } from "../components/icons";


export default function Home(props: HomeProps) {
  return (
    <div className="flex justify-start items-center h-screen w-screen bg-no-repeat bg-cover bg-[url('../assets/background.jpg')]">
      <div className="flex justify-center items-center flex-col w-1/4 h-screen bg-preto-transparente">
      <Image
            className="mix-blend-lighten"
            src={Logo}
            alt="Picture of the author"
            width={240}
            height={240}
          />
        <div className="flex flex-col w-full h-[40%]">
          
          <form className="flex flex-col w-full items-center gap-2">
            <span className="flex  border-gray-300 border-b-2 ">
              <input
                className="bg-transparent placeholder:text-white pb-2 outline-none text-white"
                type="text"
                name="nome"
                placeholder="Usuário"
              />
              {IconPerfil}
            </span>
            <span className="flex border-b-2 border-gray-300"> 
            <input
              className="bg-transparent placeholder:text-white pb-2 outline-none text-white"
              type="password"
              name="senha"
              placeholder="Senha"
            />
            {IconLock}
            </span>

            <button
              className="bg-white w-44 rounded-lg mt-8 hover:bg-slate-300 p-1"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

/* export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3001/users')
  const data = await response.json()
  return {
    props: { 
      data

    }
  }
} */
