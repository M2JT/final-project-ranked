import React from "react"
import { Link } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./css/TermsConditions.css"

const TermsCondtions = () => {
  return (
    <>
      <main className="TermsConditions">
        <div className="TermsConditions-wrapperDiv">
          <div className="TermsConditions-text">
            <h1>Terms & Conditions</h1>

            <h2>Introduction</h2>
            <p>These Website Standard Terms and Conditions written 
              on this webpage shall manage your use of our website, 
              Ranked accessible at http://192.241.144.198:3000/.
            </p>
            <p>These Terms will be applied fully and affect to your use of this Website. 
              By using this Website, you agreed to accept all terms and conditions written 
              in here. You must not use this Website if you disagree with any of these 
              Website Standard Terms and Conditions.
            </p>

            <h2>Intellectual Property Rights</h2>
            <p>Other than the content you own, under these Terms, all Ranked developers
              own all the intellectual property rights and materials 
              contained in this Website.
            </p>

            <h2>Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            * selling, sublicensing and/or otherwise commercializing any Website material <br></br>
            * using this Website in any way that is or may be damaging to this Website <br></br>
            * using this Website in any way that impacts user access to this Website <br></br>
            * using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity <br></br>
            * engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website <br></br>
            * using this Website to engage in any advertising or marketing <br></br>
            <br></br>
            <p>Certain areas of this Website are restricted from being access by you and Ranked 
              administrators may further restrict access by you to any areas of this Website, at any time, 
              in absolute discretion. Any user ID and password you may have for this Website are 
              confidential and you must maintain confidentiality as well.
            </p>

            <h2>Your Content</h2>
            <p>In these Website Standard Terms and Conditions, "Your Content" shall mean any images or other material you choose to display on this Website. 
              By displaying Your Content, you grant Ranked a non-exclusive, worldwide irrevocable, 
              sub licensable license to use, reproduce, adapt, publish, translate and distribute 
              it in any and all media.
            </p>
            <p>
            Your Content must be your own and must not be invading any third-party's rights. 
            Ranked reserves the right to remove any of Your Content from this Website at any time without notice.
            </p>

            <h2>No warranties</h2>
            <p>
            This Website is provided "as is," with all faults, and Ranked express no representations or warranties, 
            of any kind related to this Website or the materials contained on this Website. 
            Also, nothing contained on this Website shall be interpreted as advising you.
            </p>

            <h2>Limitation of liability</h2>
            <p>
            In no event shall Ranked, nor any of its developers and administrators, 
            shall be held liable for anything arising out of or in any way connected with 
            your use of this Website whether such liability is under contract. 
            Ranked, including its developers and administrators shall not be held liable 
            for any indirect, consequential or special liability arising out of or in any way 
            related to your use of this Website.
            </p>
            
            <h2>Indemnification</h2>
            <p>
            You hereby indemnify to the fullest extent Ranked from and against any and/or all liabilities, 
            costs, demands, causes of action, damages and expenses arising in any way related to your breach 
            of any of the provisions of these Terms.
            </p>

            <h2>Severability</h2>
            <p>
            If any provision of these Terms is found to be invalid under any applicable law, 
            such provisions shall be deleted without affecting the remaining provisions herein.
            </p>

            <h2>Variation of Terms</h2>
            <p>
            Ranked is permitted to revise these Terms at any time as it sees fit, 
            and by using this Website you are expected to review these Terms on a regular basis.
            </p>

            <h2>Assignment</h2>
            <p>
            Ranked is allowed to assign, transfer, and subcontract its rights and/or obligations 
            under these Terms without any notification. However, you are not allowed to assign, 
            transfer, or subcontract any of your rights and/or obligations under these Terms.
            </p>

            <h2>Entire Agreement</h2>
            <p>
            These Terms constitute the entire agreement between Ranked and you in relation to your use 
            of this Website, and supersede all prior agreements and understandings.
            </p>

            <h2>Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with 
              the laws of the State of us, and you submit to the non-exclusive jurisdiction 
              of the state and federal courts located in us for the resolution of any disputes.
            </p>
          </div>
          <div className="TermsConditions-footer">
            <Link to="/faq">FAQ</Link>
            <br></br>
            <Link to="/about">About Us</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default TermsCondtions