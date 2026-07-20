import {Modal} from "./initModal"
import {ButtonCadProduto} from "../Button/Button"
import { useState } from "react";

export function ModalPag ({}) {
    const [open, setOpen] = useState(false);

 return(   
    <>
    <ButtonCadProduto onclick={() => setOpen(true)}>
        + Cadastra
    </ButtonCadProduto>

<Modal isOpen={open} onClose={() => setOpen(false)}>
   

</Modal>

</>
)}