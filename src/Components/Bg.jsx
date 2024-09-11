import BG from "../assets/Animation - 1726047777260.json";
import Lottie from 'react-lottie';

function Bg()
{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: BG,
        // rendererSettings: {
        //   preserveAspectRatio: "xMidYMid slice"
        // }
      };


    return (   
        <Lottie 
        options={defaultOptions}
        height={400}
        // width={400}
        
       />

       
    );
}

export default Bg
