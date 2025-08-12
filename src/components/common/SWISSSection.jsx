import React from 'react';
import './SWISSSection.css'; // Import the corresponding CSS file for styling

function SWISSection() {
  return (
    <div className='swiss-card'>
    <section id="swiss-section"  className="swiss-section-wrapper" style={{ background: 'pink', position: 'relative', overflow: 'hidden' }} >
     <div className="animation-container animate" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', height: '100%' ,marginTop:'40px'}}>
    
        {/* <img
          srcSet="
            https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_2x_png.jpg 2x,
            https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_png.jpg    1x
          "
          src="https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_png.jpg"
          alt="Los Patios Hostel card"
          className="card"
          loading="lazy"
          width="30%"
          height="30%"
          style={ {position: 'relative', zIndex: '1', marginLeft:'30px'}}
        /> */}
        <div>
            <div style={{zIndex: '2'}}>
            <img
              srcSet="
                https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_2x_png.jpg 2x,
                https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_png.jpg 1x
              "
              src="https://a.hwstatic.com/image/upload/f_auto/v1645010222/pwa/whosgoing/los-patios-card_png.jpg"
              alt="Los Patios Hostel card"
              style={{ transition: 'transform 0.3s ease' }}
              className="middle-image"
            />
            </div>
          <div className="avatar-usa aqua avatar" style={{ top: '20%', left: '50%' }}>
            <img
              src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/miser-mike.jpg"
              className="avatar-img"
              loading="lazy"
              width="72"
              height="72"
              alt="avatar"
              style={{marginLeft:'30vh' }}
            />
            <img
              src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/usa_png.png"
              className="flag"
              loading="lazy"
              width="24"
              height="24"
              style={{ bottom: '2px', right: '2px', marginRight:'40vh' }}
              alt="avatar flag"
            />
          </div>
          <div className="avatar-poland green avatar" style={{ top: '30%', left: '20%' }}>
            <img
              src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-anna.jpg"
              className="avatar-img"
              loading="lazy"
              width="64"
              height="64"
              alt="avatar"
              
            />
            <img
              src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/poland_png.png"
              className="flag"
              loading="lazy"
              width="24"
              height="24"
              style={{ bottom: '4px', right: '4px' }}
              alt="avatar flag"
            />
          </div>
          <div className="avatar-ireland blue avatar" style={{ top: '40%', left: '80%' }}>
            <img
              src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-eve.jpg"
              className="avatar-img"
              loading="lazy"
              width="108"
              height="108"
              alt="avatar"
            />
            <img
              src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/ireland_png.png"
              className="flag"
              loading="lazy"
              width="24"
              height="24"
              style={{ bottom: '7px', right: '4px' }}
              alt="avatar flag"
            />
          </div>
          <div className="avatar-brazil blue avatar" style={{ top: '30%', left: '5%' }}>
            <img
              src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-f-luiza.jpg"
              className="avatar-img"
              loading="lazy"
              width="162"
              height="162"
              alt="avatar"
              style={{marginTop:'10vh' }}
            />
            <img
              src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/brazil_png.png"
              className="flag"
              loading="lazy"
              width="24"
              height="24"
              style={{ bottom: '14px', right: '14px' }}
              alt="avatar flag"
            />
          </div>
          <div className="avatar-germany violet avatar" style={{ top: '70%', left: '70%' }}>
            <img
              src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-jenny.jpg"
              className="avatar-img"
              loading="lazy"
              width="120"
              height="120"
              alt="avatar"

            />
            <img
              src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/germany_png.png"
              className="flag"
              loading="lazy"
              width="24"
              height="24"
              style={{ bottom: '8px', right: '8px' }}
              alt="avatar flag"
            />
          </div>
          <div className="avatar-portugal yellow avatar" style={{ top: '10%', left: '10%' }}>
            <img
              src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-laura.jpg"
              className="avatar-img"
              loading="lazy"
              width="72"
              height="72"
              alt="avatar"

            />
            <img
              src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/portugal_png.png"
              className="flag"
              loading="lazy"
              width="24"
              height="24"
              style={{ bottom: '2px', right: '2px', marginLeft:'90px' }}
              alt="avatar flag"
            />
          </div>
          {/* <div className="avatar-italy orange avatar" style={{ top: '25%', left: '50%' }}>
  <img
    src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-michelle.jpg"
    className="avatar-img"
    loading="lazy"
    width="96"
    height="96"
    alt="avatar"
  />
  <img
    src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/italy_png.png"
    className="flag"
    loading="lazy"
    width="24"
    height="24"
    style={{ bottom: '4px', right: '4px' }}
    alt="avatar flag"
  />
</div> */}
<div className="avatar-china pink avatar" style={{ top: '10%', left: '80%' }}>
  {/* <img
    src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-nicole.jpg"
    className="avatar-img"
    loading="lazy"
    width="144"
    height="144"
    alt="avatar"
  /> */}
  <img
    src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/china_png.png"
    className="flag"
    loading="lazy"
    width="24"
    height="24"
    
    alt="avatar flag"
  />
</div>
<div className="avatar-france green avatar" style={{ top: '20%', left: '90%' }}>
  {/* <img
    src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-robin.jpg"
    className="avatar-img"
    loading="lazy"
    width="82"
    height="82"
    alt="avatar"
  /> */}
  <img
    src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/france_png.png"
    className="flag"
    loading="lazy"
    width="24"
    height="24"
   
    alt="avatar flag"
    
  />
</div>
<div className="avatar-korea aqua avatar" style={{ top: '30%', left: '10%' }}>
  {/* <img
    src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-ryu.jpg"
    className="avatar-img"
    loading="lazy"
    width="108"
    height="108"
    alt="avatar"
  /> */}
  {/* <img
    src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/korea_png.png"
    className="flag"
    loading="lazy"
    width="24"
    height="24"
    style={{ bottom: '4px', right: '4px' }}
    alt="avatar flag"
  /> */}
</div>
{/* <div className="avatar-spain pink avatar" style={{ top: '20%', left: '50%' }}>
  <img
    src="https://a.hwstatic.com/image/upload/f_auto,q_75,h_166/v1644506092/pwa/whosgoing/user-sandra.jpg"
    className="avatar-img"
    loading="lazy"
    width="96"
    height="96"
    alt="avatar"
  />
  <img
    src="https://a.hwstatic.com/image/upload/q_auto,f_auto,h_24/v1644506092/pwa/whosgoing/spain_png.png"
    className="flag"
    loading="lazy"
    width="24"
    height="24"
    style={{ bottom: '0px', right: '0px' }}
    alt="avatar flag"
  /> */}
{/* </div> */}
          
          </div>
          
      </div>
      <div className="text">
        <h2 className="text-header">
          ENJOY<span> YOUR </span> HOLIDAY!!
        </h2>
       
      </div>
    </section>
    </div>
  );
}

export default SWISSection;