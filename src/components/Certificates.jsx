import "../styles/certificates.css";

const certificates=[

"Infosys C++",

"Infosys Java",

"Infosys DSA",

"Python Bootcamp",

"Machine Learning",

"Deep Learning"

];

function Certificates(){

return(

<section className="certificates" id="certificates">

<p className="section-tag">

CERTIFICATIONS

</p>

<h2>Licenses & Certifications</h2>

<div className="certificate-grid">

{

certificates.map((item,index)=>(

<div className="certificate-card" key={index}>

🏆 {item}

</div>

))

}

</div>

</section>

)

}

export default Certificates;