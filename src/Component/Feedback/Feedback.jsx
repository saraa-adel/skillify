// import React, { useEffect } from 'react'
// import feedback1 from '../../Assets/images/feedback/istockphoto-1220705406-640_adpp_is.mp4'
// import feedback2 from '../../Assets/images/feedback/istockphoto-1308698683-640_adpp_is.mp4'
// import feedback3 from '../../Assets/images/feedback/istockphoto-1332969352-640_adpp_is.mp4'
// import feedback from '../../Assets/images/Giving-Workplace-Feedback-by-Aptitude-Management-768x432.png.webp'
// import $ from 'jquery'
// import Plyr from 'plyr'

// export default function Feedback() {

//     useEffect(() => {
//         const carousels = document.querySelectorAll('.owl-carousel');

// // Loop through each carousel element
// carousels.forEach(carousel => {
//     // Initialize Owl Carousel options
//     const options = {
//         stagePadding: 200,
//             loop:true,
//             margin:10,
//             items:1,
//             nav:true,
//         responsive: {
//             0: {
//                 items: 1,
//                 stagePadding: 60
//             },
//             600: {
//                 items: 1,
//                 stagePadding: 100
//             },
//             1000: {
//                 items: 1,
//                 stagePadding: 200
//             },
//             1200: {
//                 items: 1,
//                 stagePadding: 250
//             },
//             1400: {
//                 items: 1,
//                 stagePadding: 300
//             },
//             1600: {
//                 items: 1,
//                 stagePadding: 350
//             },
//             1800: {
//                 items: 1,
//                 stagePadding: 400
//             }
//         }
//     };
    
// });

        
//         var playerSettings = {
//               controls : ['play-large'],
//               fullscreen : { enabled: false},
//               resetOnEnd : true,
//               hideControls  :true,
//           clickToPlay:true,
//               keyboard : false,
//             }
        
//         const players = Plyr.setup('.js-player', playerSettings);
        
//          players.forEach(function(instance,index) {
//                     instance.on('play',function(){
//                         players.forEach(function(instance1,index1){
//                           if(instance != instance1){
//                                 instance1.pause();
//                             }
//                         });
//                     });
//                 });
        
//         $('.video-section').on('translated.owl.carousel', function (event) {
//           players.forEach(function(instance,index1){
//                           instance.pause();
//                         });
//         });
//     }, [])
    
    
//   return <>
//   <div className="owl-carousel video-section">
//     <div className="item">
//       <div>
//     <video className="js-player" crossorigin playsinline>
// 			<source src={feedback1} type="video/mp4" size="720"/>
//         </video>
// </div>
//   </div>
//       <div className="item">
//       <div>
//       <video className="js-player" crossorigin playsinline>
// 			<source src={feedback1} type="video/mp4" size="720"/>
//         </video>
//       </div>
//   </div>
//       <div className="item">
//       <div>
//       <video className="js-player" crossorigin playsinline>
// 			<source src={feedback1} type="video/mp4" size="720"/>
//         </video>
//       </div>
//   </div>
// </div>
//   </>
// }
