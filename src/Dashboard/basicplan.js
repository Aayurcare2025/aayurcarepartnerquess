import "../App.css";

function Basicplan() {
  return (
    //basic plan data
    <div className="basicplan">
      <h1>Plan Benefits Overview</h1>
    
      <div className="basicplan-grid">
        


          <div className="basicplan-box">
          <h2>Reimbursement</h2>
          <p>1.Doctor consultations</p>
          <p>2.Radiology</p>
          <p>3.Pathology</p>
          <p>4.Ambulance Service</p>
        </div>
        <div className="basicplan-box">
          <h2>Doctor Consultation & Medical Services</h2>
          <p>1.Free monthly teleconsultation with a General Physician</p>
          <p>2.Free consultation with Nutritionists and Physiotherapists</p>
          <p>3.consultations with Mental Health Experts</p>
          <p>4.Second opinion for any planned hospitalization</p>
          <p>5.Yoga Consultation and Therapy discounts up to 15-30%</p>
        </div>

        <div className="basicplan-box">
          <h2>Mental Wellness Workshops</h2>
          <p>1.Access to self-help diagnosis and tools</p>
          <p>24/7 emergency helpline</p>
          <p>3.Disease risk predictions and mitigation tools</p>
        </div>

        <div className="basicplan-box">
          <h2>Medicines & Pharmacy</h2>
          <p>1.10% discount on medicines</p>
          <p>2.Discounts on Ayurveda consultations & medicines</p>
        </div>

        <div className="basicplan-box">
          <h2>Diagnostics & Lab Services</h2>
          <p>1.Radiology & Pathology services included</p>
          <p>2.Up to 15% discount on lab tests with the customized plan</p>
          <p>3.Health Checkups – discounts via Nura Health (Bangalore, Mumbai, Hyderabad, Gurgaon)</p>
          <p>4.Gut health test discounts</p>
        </div>

        <div className="basicplan-box">
          <h2>Dental & Eye Care</h2>
          <p>1.Complimentary basic dental check-up</p>
          <p>2.10–40% discount on dental procedures at partner clinics (Clove Dental)</p>
          <p>3.Complimentary eye check-up</p>
        </div>

        <div className="basicplan-box">
          <h2>Fitness & Wellness</h2>
          <p>1.Mental wellness workshops & webinars</p>
          <p>2.Discounts up to 15% on Yoga consultation</p>
        </div>

        <div className="basicplan-box">
          <h2>Education Loan Benefits</h2>
          <p>1.Loan amount: ₹50,000 – ₹20 Lakhs</p>
          <p>2.Interest rate from 0%-8.5%.</p>
          <p>Covers:</p>
          <p>a.School fees (up to 12th Class)</p>
          <p>b.Undergraduate & Postgraduate programs (India & Abroad)</p>
          <p>c.Vocational, Technical Training, ITI, Diploma Courses</p>
          <p>d.Certification & Professional Development Courses</p>
          <p>e.Online education from recognized institutions</p>
        </div>

        <div className="basicplan-box">
          <h2>Other Key Benefits</h2>
          <p>1.Ambulance services Pan India – 10% discount</p>
          <p>2.Discounts on surgeries & procedures through Pristyn Care</p>
          <p>3.Women's health – discounts on consultations, vaccinations, Pap smears</p>
          <p>4.Men's health – 1 free consult + discounts</p>
          <p>5.Fertility support – free consults + discounts</p>
        </div>

  

        <div className="basicplan-box">
          <h2>Travel Benefits</h2>
          <p>1.Up to 25% discount on train tickets</p>
          <p>2.Up to 15% discount on bus tickets</p>
        </div>
      </div>

     <button  className="buynow">Buy Now</button>
    </div>
  );
}

export default Basicplan;
