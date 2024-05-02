import Logo from "./images/Logo.png";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ImEyeBlocked } from "react-icons/im";
import { LuUser2 } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import { TbWorld } from "react-icons/tb";
import { RiStarSLine } from "react-icons/ri";


function Login() {
    return(
        <section className="container forms">
            <div className="form login">
            <div className="form-content">
            
            
             <div className='header'><img src={Logo} style={{ width: '70px',margin:'center', }}  alt="" />
             
             <b>Cassdoor</b>
             
             <RiStarSLine size="0.6em" color="orange" style={{ marginLeft: '-123px',position: 'relative', marginBottom: '32px'  }}  />
             
             <TbWorld size="0.7em" style={{color: '#000000e0', position: 'absolute', marginLeft: '92px', marginTop: '20px'}}  />
             </div>
                
                <br />
                <div className="container">
                <div className="text1">Password</div>
                <div className="text2">WebAuth</div>

                </div>
                <div className="line"></div>
                <form action="#">
                    <div className="input-field" >
                        
                        <input type="email" className="input"  placeholder="username, Email or phone " required /><LuUser2 size="0.8em" style={{ bottom: '60px', position: 'relative', paddingLeft: '6%'}} />
                        
                        <input type="password" className="input"  placeholder="Password" required />
                        <RiLockPasswordLine size="0.8em" style={{ bottom: '60px', position: 'relative', paddingLeft: '6%' }}/>
                        <ImEyeBlocked size="0.8em" style={{ color: 'gray', position: 'relative', bottom: '90px', paddingLeft: '100%'
                          }}/>                        
                        
                        <div className="login-center-options">
                        
                    <div className="remember-div">
                      <input type="checkbox" id="remember-checkbox" />
                      <label htmlFor="remember-checkbox">
                        Auto sign in
                      </label>                  
                    </div>

                    <a href="#" className="forgot-pass-link">
                      Forgot password?
                    </a> 
                    </div>
                  <div className="login-center-buttons">             <div>     
                    <button type="button" style={{ color:'#fff', background: '#5734D3', display: 'flex', paddingbottom: '15px', width: '115%', height: '50px', fontSize: '0.8em', borderRadius: '5px', border: 'none', justifyContent: 'center', paddingTop: '12px' }} >Sign In</button>  </div>                 
                    
                  </div>
                  
                  </div>   
                </form>
                
                </div>
                <p className="login-bottom-p">
                No account? <a style={{ textDecoration: 'none'}}  href="#">sign up now</a>
              </p> 

              <div className='react-icons'> 
                 <FcGoogle size="1.5em" />
                 <FaGithub size="1.5em" />
              </div>   
              <div className="line1"></div>
              <div className='Footer'>Powered by<img src={Logo} style={{ width: '25px' }}  alt="" /> <b>Cassdoor</b>  

              </div>
          

             </div>
            
             


             
             

             
                    

            
            

        

            
        </section>
        
    )

        
       
        
    
}

export default Login;