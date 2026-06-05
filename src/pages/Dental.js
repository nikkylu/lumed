import image1 from "/Users/nikkylu/lumed/src/pages/components/dental.fld/image001.jpg";
import image2 from "/Users/nikkylu/lumed/src/pages/components/needle.fld/image013.jpg";
import "./Home.css"

const Dental = () => {
  return (
<div className="Home">
  <div>Dental Products & Kits</div>
  <div className="Home-con">
    <img src={image2} className="Home-sp"/>
    <div className="Home-s">
        <div>Single-Use Dental Needles, sterile, CE</div>
      </div>
  </div>

    <div className="Home-con">
    <img src={image1} className="Home-sp"/>
    
    <div className="Home-s">
        <div>Dental Implant Kit</div>
    

      <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRnCxSozEbVN7dAVgSMPElICWOpG1CarnA0aOM0SQgT0XtJa6zPDJsnZ_OL9vTwRtq6xTLPqJ5Aw-FJ/pubhtml?widget=true&amp;headers=false"></iframe>
      </div>
</div>

        </div>
   
  )
}

export default Dental;