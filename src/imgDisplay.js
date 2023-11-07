import { Carousel } from 'flowbite-react';
export default function imgdisplay() {
  return (
    <div className="rounded-l">
      <Carousel>
        <img src="https://tinypic.host/images/2023/11/06/img1.png" style={{width:"auto", height:"auto"}} alt="..." />
        <img src="https://tinypic.host/images/2023/11/06/img2.png" style={{width:"auto", height:"auto"}} alt="..." />
        <img src="https://tinypic.host/images/2023/11/06/img3.png" style={{width:"auto", height:"auto"}} alt="..." />
        <img src="https://tinypic.host/images/2023/11/06/img4.png" style={{width:"auto", height:"auto"}} alt="..." />
        <img src="https://tinypic.host/images/2023/11/06/img5.png" style={{width:"auto", height:"auto"}} alt="..." />
        <img src="https://tinypic.host/images/2023/11/06/img6.png" style={{width:"auto", height:"auto"}} alt="..." />
      </Carousel>
    </div>
  );
}



