// import React from 'react';
// import './mentors.css';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';



// const data = [
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1Bk266gmynWUZmP2BZCY8s2NVoMemLTmQ',
//     alt: 'sir',
//     title: 'Shreyansh Shukla',
//     link: 'https://www.linkedin.com/in/shreyansh-shukla-38842b187',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB',
//     alt: 'maam',
//     title: `Sameeksha Agarwal`,
//     link: 'https://www.linkedin.com/in/shreyansh-shukla-38842b187',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO',
//     alt: 'sir',
//     title: 'Animesh Pokhriyal',
//     link: 'https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1cr9C3kducCWZsfvqJS6TgVg2Z9jMwvro',
//     alt: '',
//     title: 'Aarushi Rai',
//     link: 'https://www.linkedin.com/in/aarushi-rai-0a176a1a7/?originalSubdomain=in',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T',
//     alt: '',
//     title: 'Anishita Yadav',
//     link: 'https://www.linkedin.com/in/anshita-yadav-a4748a213/',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1eWdwx41DmlnRx-Nf5YQP1HK_hUs5LsNw',
//     alt: '',
//     title: 'Kunal Tyagi',
//     link: 'https://www.linkedin.com/in/kunal-tyagi-4042b217a/',
//   },
// ]


// const mentors = (props) => {
//   return (
//     <>
//       <div className="">
//       <div className='try '>
//       {data.map((item, index) => (
//             <div className='card__parent' key={index}>
//               {/* <div className='card-main'> */}
//                 <div className="cards">
//                   <img
//                     className='card-image'
//                     src={item.img}
//                     alt={item.alt}
//                   />
//                   <div className="card-content">
//                     <h2 className='card-heading'>{item.title}</h2>
//                     {/* <div> */}
//                     <a href={item.link} className="btn card-a">
//                       Find out more
//                       <span className="material-symbols-outlined"><LinkedInIcon /></span>
//                     </a>
//                   </div>
//                 </div>
//               {/* </div> */}
//               </div>
//           // </div>
//        ))}
//        </div>
//        </div>
//     </>
//   )
// }

// export default mentors;








import React from 'react';
import './mentors.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



// const data = [
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1Bk266gmynWUZmP2BZCY8s2NVoMemLTmQ',
//     alt: 'sir',
//     title: 'Shreyansh Shukla',
//     link: 'https://www.linkedin.com/in/shreyansh-shukla-38842b187',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB',
//     alt: 'maam',
//     title: `Sameeksha Agarwal`,
//     link: 'https://www.linkedin.com/in/shreyansh-shukla-38842b187',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO',
//     alt: 'sir',
//     title: 'Animesh Pokhriyal',
//     link: 'https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1cr9C3kducCWZsfvqJS6TgVg2Z9jMwvro',
//     alt: '',
//     title: 'Aarushi Rai',
//     link: 'https://www.linkedin.com/in/aarushi-rai-0a176a1a7/?originalSubdomain=in',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T',
//     alt: '',
//     title: 'Anishita Yadav',
//     link: 'https://www.linkedin.com/in/anshita-yadav-a4748a213/',
//   },
//   {
//     img: 'https://drive.google.com/uc?export=view&id=1eWdwx41DmlnRx-Nf5YQP1HK_hUs5LsNw',
//     alt: '',
//     title: 'Kunal Tyagi',
//     link: 'https://www.linkedin.com/in/kunal-tyagi-4042b217a/',
//   },
// ]


const mentors = (props) => {
  return (
    <>
      <div className="">
      <div className='try '>
      <div className='card__parent'>
              {/* <div className='card-main'> */}
                <div className="cards">
                  <img
                    className='card-image'
                    src={props.img}
                    alt=""
                  />
                  <div className="card-content">
                    <h2 className='card-heading'>{props.name}</h2>
                    {/* <div> */}
                    <a href={props.link} className="btn card-a">
                      Find out more
                      <span className="material-symbols-outlined"><LinkedInIcon /></span>
                    </a>
                  </div>
                </div>
              {/* </div> */}
              </div>
       </div>
       </div>
    </>
  )
}

export default mentors;



