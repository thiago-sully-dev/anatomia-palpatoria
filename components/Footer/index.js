import Link from 'next/link';
import { FooterBottom, FooterContainer, FooterTop } from './styles';

function Footer(){
  return (
    <FooterContainer>
      <FooterTop>
        <Link href="/terms#politica"><a>Política de privacidade</a></Link>
        <Link href="/terms#termos"><a>Termos de uso</a></Link>
        <Link href="/terms#aviso"><a>Aviso legal</a></Link> 
      </FooterTop>
      <FooterBottom>
        <p>© 2022 <strong>Anatomia Palpatória Avançada</strong> - Desenvolvido por <strong>Eagle</strong>.</p>
      </FooterBottom>
    </FooterContainer>
  )
};

export default Footer;