import { Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#454444', color: '#948D8D', paddingTop: '3vh', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
     
      <Typography paragraph sx={{ fontSize: '2vh' }}>
      Síguenos en las redes para más novedades, ofertas y actualizaciones.
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Typography paragraph>
          <a href="https://es-la.facebook.com/"><FacebookIcon fontSize="large" sx={{ color: '#948D8D' }} /></a>
        </Typography>

        <Typography paragraph>
          <a href="https://twitter.com/"><TwitterIcon fontSize="large" sx={{ color: '#948D8D' }} /></a>
        </Typography>

        <Typography paragraph>
          <a href="https://www.instagram.com/"><InstagramIcon fontSize="large" sx={{ color: '#948D8D' }} /></a>
        </Typography>
      </div>

    </div>
  );
};

export default Footer;
