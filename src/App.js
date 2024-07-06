import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa6";

function App() {
  const [cpf, setCpf] = useState("");
  const [cpfOK, setCpfOK] = useState(false);
  const [finalCPF, setFinalCPF] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneOK, setPhoneOK] = useState(false);
  const [finalPHONE, setFinalPhone] = useState("");

  //Espressões Regulares
  const regexp = /\d+/g;

  //regexp CPF
  const regexpCPFInicialValidation =
    /^(\d){3}[.](\d){3}[.](\d){3}-(\d){2}$|^(\d){11}$/g; //captura o cpf com ou sem a pontuação
  const regexpCPFValidation = /^(\d){11}$/g; // valida se o cpf tem apenas os 11 numeros, sem a pontuação

  //regexp PHONE
  const regexpPhoneInicialValidation =
    /^[(](\d){2}[)](\d){4,5}[-](\d){4}$|^(\d){10,11}$/; // valida numero fixo ou de celular com ou sem pontuação
  const regexpPhoneValidation = /^(\d){10,11}$/g; // valida se é numero fixo ou de celular

  const reduceArr = (arr) => {
    return arr.reduce((acc, num) => acc + num);
  };

  useEffect(() => {
    if (cpf.match(regexpCPFInicialValidation)) {
      setCpfOK(true);
      return cpfTransform();
    }
    setFinalCPF("");
    setCpfOK(false);
    // eslint-disable-next-line
  }, [cpf]);

  useEffect(() => {
    if (phone.match(regexpPhoneInicialValidation)) {
      setPhoneOK(true);
      return phoneTransform();
    }
    setFinalPhone("");
    setPhoneOK(false);
    // eslint-disable-next-line
  }, [phone]);

  const cpfTransform = () => {
    //Função para transformação do cpf

    if (regexpCPFValidation.test(cpf)) {
      const cpfSeparated = cpf.split(""); //['1', '2', '3', '1', '2', '3', '1', '2', '3', '1', '2']

      cpfSeparated.splice(3, 0, ".");
      cpfSeparated.splice(7, 0, ".");
      cpfSeparated.splice(11, 0, "-");

      setFinalCPF(cpfSeparated.join("")); //seta o cpf com a pontuação
    } else {
      setFinalCPF(reduceArr(cpf.match(regexp))); //seta apenas os numeros
    }
  };

  const phoneTransform = () => {
    if (regexpPhoneValidation.test(phone)) {
      //validação do numero fixo ou de celular, sem pontuação

      const phoneSeparated = phone.split(""); //['8', '1', '9', '1', '2', '3', '4', '1', '2', '3', '4']
      if (phoneSeparated.length === 10) {
        //Se é numero de telefone fixo
        phoneSeparated.splice(0, 0, "(");
        phoneSeparated.splice(3, 0, ")");
        phoneSeparated.splice(8, 0, "-");
      } else if (phoneSeparated.length === 11) {
        //Se é numero de celular
        phoneSeparated.splice(0, 0, "(");
        phoneSeparated.splice(3, 0, ")");
        phoneSeparated.splice(9, 0, "-");
      }
      setFinalPhone(phoneSeparated.join(""));
    } else {
      setFinalPhone(reduceArr(phone.match(regexp)));
    }
  };

  const copiar = async (final) => {
    try {
      await navigator.clipboard.writeText(final);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center  min-h-screen bg-slate-600">
      <h1 className="mt-8 font-bold text-2xl">Cpf-Phone-Validator</h1>

      <div className="flex flex-col items-center w-full min-h-96">
        <div className="mt-8 w-11/12 h-48 flex flex-wrap items-center justify-around border-b-2 border-black">
          <label className="flex flex-col items-center">
            {cpf && <p className="font-bold">Digite o Cpf:</p>}
            <input
              type="text"
              placeholder="Digite o CPF"
              className="bg-zinc-900 flex p-2 my-2 w-32 text-white rounded-lg"
              onChange={(event) => setCpf(event.target.value)}
            />
            {!cpfOK && (
              <p className="text-red-500 font-bold text-sm">
                123.123.123-12 ou 12345678912
              </p>
            )}
          </label>
          <div className="bg-slate-700 flex flex-col items-center justify-center rounded-lg p-2 mx-2 mb-2 w-44">
            <p className="mx-4 font-bold">Resultado:</p>
            {finalCPF && (
              <p
                className="flex  items-center justify-around w-full mt-4  mx-4 font-bold cursor-pointer"
                onClick={() => copiar(finalCPF)}
              >
                {finalCPF} <FaRegCopy className="bg-slate-500 w-6 h-6 p-1 ml-1 rounded-md"/>
              </p>
            )}
          </div>
        </div>

        <div className=" mt-4 w-11/12 h-36 flex flex-wrap items-center justify-around ">
          <label className="flex flex-col items-center">
            {phone && <p className="font-bold">Digite o Telefone:</p>}
            <input
              type="text"
              placeholder="Digite o Telefone"
              className="bg-zinc-900 flex p-2 my-2 w-32 text-white rounded-lg"
              onChange={(event) => setPhone(event.target.value)}
            />
            {!phoneOK && (
              <>
                <p className="text-red-600 font-bold text-sm">
                  (81)1234-1234 ou (81)91234-1234
                </p>
                <p className="text-red-600 font-bold text-sm">
                  8112341234 ou 81912341234
                </p>
              </>
            )}
          </label>
          <div className="bg-slate-700 flex flex-col items-center justify-center rounded-lg p-2 mx-2 my-2 w-44">
            <p className="mx-4 font-bold">Resultado:</p>
            {finalPHONE && (
              <p
                className="flex  items-center justify-around w-full mt-4  mx-4 font-bold cursor-pointer"
                onClick={() => copiar(finalPHONE)}
              >
                {finalPHONE} <FaRegCopy className="bg-slate-500 w-6 h-6 p-1 ml-1 rounded-md"/>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
