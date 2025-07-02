import React, {useRef,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

const OtpInput = ({length=4, onOtpSubmit = () => {}}) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const navigate = useNavigate();
    const inputRefs = useRef([]);

    useEffect(() =>{
      if(inputRefs.current[0]){
          inputRefs.current[0].focus();
      }
    },[]);

    const handleChange = (index, e)=>{
        const value = e.target.value;
        if(isNaN(value)) return; //if entered otp is not a number returns ntg
        const newOtp = [...otp];
        //allow only one input
        newOtp[index] = value.substring(value.length-1);
        setOtp(newOtp);
        //submit trigger
        // const combinedOtp = newOtp.join("");
        //  if(combinedOtp.length===4) onOtpSubmit(combinedOtp);
         
         if(value && index<length-1 && inputRefs.current[index+1]){ //move to next i/p if cur field filled
          inputRefs.current[index+1].focus();
         }
    };
    const handleClick = (index)=>{
      inputRefs.current[index].setSelectionRange(1,1);
      
    };
    const handleKeyDown = (index,e)=>{
      if(e.key==="Backspace" && !otp[index] && index>0 && inputRefs.current[index+1]){
          inputRefs.current[index-1].focus();
      }
    };
    const handleVerifyClick = () => {
    const combinedOtp = otp.join('');
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
      // console.log("otp entered");
      navigate('/');
    } else {
      alert('Please enter complete OTP.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-4">
      <div className="flex gap-3 mt-4">
      {
          otp.map((value, index) => {
            return (
            <input 
                key={index} 
                type="text" 
                ref={(input) => (inputRefs.current[index]=input)} 
                value={value} 
                onChange ={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index,e)}
                className = "w-12 h-12 text-xl text-center border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              );
          })
        }
      </div>
        <button
            className="mt-6 bg-sky-600 text-white px-6 py-2 rounded hover:bg-sky-800"
            onClick={handleVerifyClick}>
            Verify OTP
        </button>
    </div>
  )
}

export default OtpInput
