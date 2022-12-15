import { DivContato, FooterStyled } from "./Styled."
import {BsWhatsapp} from "react-icons/bs"
import {HiOutlineMail} from "react-icons/hi"
import {RiLinkedinFill} from "react-icons/ri"
import {FiGithub} from "react-icons/fi"

export const Footer = () =>{
    return(
        <FooterStyled>
            <DivContato>
                <a href="mailto:brunacarvalho260697@gmail.com" target="_blank" rel="noreferrer"><p><HiOutlineMail size="30px" /> </p></a>
                <a href="https://github.com/BrunadeCarvalho" target="_blank" rel="noreferrer"><p><FiGithub size="30px" /></p></a>
                <a href="https://www.linkedin.com/in/bruna-carvalho-dev/" target="_blank" rel="noreferrer"><p><RiLinkedinFill size="30px" /></p></a>
            </DivContato>
        </FooterStyled>
    )
}