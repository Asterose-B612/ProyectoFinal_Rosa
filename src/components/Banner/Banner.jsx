
import { Typography, Container } from '@mui/material';

const Banner = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '5vh',
    position: 'relative',
    backgroundImage: `url('https://edwps.com/wp-content/uploads/2015/12/AdobeStock_85721347.jpeg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)',
    marginTop: '10vh'
  }

  const overlayStyle = {
    content: '',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
  };

  const textStyle = {
    color: 'white', 
    position: 'relative', 
    zIndex: 1,
    };

  return (
    <div style={containerStyle}>

      <div style={overlayStyle}></div>

      <Container maxWidth="md">

        <Typography sx={{ ...textStyle, fontSize: '5vh', fontWeight: 800 }}>
          RECIBIMOS ESTA PRIMAVERA CON TODO!
        </Typography>

        <Typography sx={{ ...textStyle, fontSize: '2.5vh', marginBottom: '6vh' }}>
          Hasta <strong style={{ color: '#AB0C0C', fontWeight: 'bold', fontSize: '7vh' }}> 6 </strong>cuotas sin interés
        </Typography>

        <img
          src="https://elife.wiki/wp-content/uploads/2020/07/d09tastvvn0fqovy95kg.png"
          alt="ICBC"
          style={textStyle}/>

        <Typography sx={{ ...textStyle, color: 'white' }}>
          En productos seleccionados con todas las tarjetas Visa y Master del Banco ICBC
        </Typography>
        
      </Container>
    </div>
  );
};

export default Banner;
