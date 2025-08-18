import React from 'react'
import image1 from './me2.jpg'
import image2 from './instagram.png'
import image3 from './linkedin.png'
import image4 from './twitter.png'

const Profile = () => {
  return (
    <div style={{backgroundColor:"black"}}>
        <div style={{color:"whitesmoke", padding:"50px",paddingLeft:"950px",fontSize:"20px",fontFamily:"sans-serif",fontWeight:"bolder"}}>
        <a href="#" style={{marginRight:"80px",textDecorationLine:"none",color:"white"}}>Home</a>
        <a href="#" style={{marginRight:"80px",textDecorationLine:"none",color:"white"}}>About</a>
        <a href="#" style={{marginRight:"80px",textDecorationLine:"none",color:"white"}}>Portfolio</a>
        <a href="#" style={{marginRight:"80px",textDecorationLine:"none",color:"white"}}>Contact</a>
        </div>
        <h1 style={{color:"wheat",marginTop:"-40px"}}>__________________________________________________________________________________________________________________</h1>
        <div>
            <div>
              <img src={image1} style={{width:"300px",height:"350px",marginTop:"150px",marginLeft:"1150px",borderRadius:"30px"}}></img>
             <div style={{color:"white",marginTop:"-350px",marginLeft:"200px"}}>
               <h1 style={{color:"white"}}>HELLO,<a style={{color:"gold"}}> I AM PRIYAN K</a></h1>
               <h2 style={{color:"rgba(103, 217, 255, 0.901)"}}>Front End Developer</h2>
               <h3 style={{display:"inline-grid", width:"700px"}}>As an enthusiastic sophomore front-end developer, I have a solid foundation in
 web development technologies and a growing understanding of user experience
 design. Proficient in HTML, CSS, and JavaScript, I have experience with popular
 frameworks like React and Angular, and I'm familiar with version control using Git
 and responsive design principles. I'm eager to learn and stay updated with
 industry trends.</h3>
                     
               </div><br></br>
               <div style={{paddingBottom:"150px"}}>
               <a href="https://www.instagram.com/__p_r_i_y_a_n__16/"><img src={image2} style={{width:"30px",height:"30px",marginLeft:"200px",marginTop:"10px"}}></img></a>
               <a href="https://www.linkedin.com/in/priyan-kamalanathan-3994a1290/"><img src={image3} style={{width:"30px",height:"30px",marginLeft:"50px",marginTop:"10px"}}></img></a>
               <a href="https://x.com/priyankavin00"><img src={image4} style={{width:"30px",height:"30px",marginLeft:"50px",marginTop:"10px"}}></img></a>
            </div></div>
        </div>
       
</div>
  )
}

export default Profile