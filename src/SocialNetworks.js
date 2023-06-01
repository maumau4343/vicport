import {FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa';
import './styles/SocialNetworks.css';

const socialNetworks = [
    { name: "linkedin", href:"https://www.linkedin.com/in/victor-henrique-duarte-cardoso-805240246/", icon: <FaLinkedinIn className= "linkedin"/> },
    { name: "github", href:"https://github.com/VickOdinoy?tab=overview&from=2023-03-01&to=2023-03-31", icon: <FaGithub className= "github"/> },
    { name: "instagram",href:"https://www.instagram.com/vhdc_2005/", icon: <FaInstagram className= "instagram"/> },
    { name: "Whatsapp",href:"https://api.whatsapp.com/send/?phone=5511998665165&text&type=phone_number&app_absent=0 ", icon: <FaWhatsapp className= "whatsapp"/> }

]


const SocialNetworks = () => {
    return(
        <section className='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.href} className="social-btn" id='network.name' key={network.name}>
                    {network.icon}
                </a>
            ))}
        </section>
    ) 
}
export default SocialNetworks