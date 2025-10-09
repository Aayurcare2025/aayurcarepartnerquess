import "./App.css";

function PremiumPlan() {
  return (
    <div className="basicplan">
      <h1>Premium Plan Benefits</h1>

      <div className="basicplan-grid">
        {/* Doctor Consultation & Medical Services */}
        <div className="basicplan-box">
          <h2>Doctor Consultation & Medical Services</h2>
          <p>Free monthly teleconsultation with a General Physician</p>
          <p>Free consultation with Nutritionists and Physiotherapists</p>
          <p>5 consultations with Mental Health Experts</p>
          <p>Second opinion for any planned hospitalization</p>
          <p>Yoga Consultation and Therapy discounts upto 15-30%</p>
        </div>

        {/* Mental wellness workshops */}
        <div className="basicplan-box">
          <h2>Mental wellness workshops</h2>
          <p>Access to self-help diagnosis and tools</p>
          <p>24/7 emergency helpline</p>
          <p>Disease risk predictions and mitigation tools</p>
        </div>

        {/* Medicines & Pharmacy */}
        <div className="basicplan-box">
          <h2>Medicines & Pharmacy</h2>
          <p>10% discount on medicines</p>
          <p>Discounts on Ayurveda consultations & medicines</p>
        </div>

        {/* Diagnostics & Lab Services */}
        <div className="basicplan-box">
          <h2>Diagnostics & Lab Services</h2>
          <p>Radiology & Pathology services included</p>
          <p>Up to 15% discount on lab tests with the customized plan</p>
          <p>Health Checkups – discounts via Nura Health (Bangalore, Mumbai, Hyderabad, Gurgaon)</p>
          <p>Gut health test discounts</p>
        </div>

        {/* Dental & Eye Care */}
        <div className="basicplan-box">
          <h2>Dental & Eye Care</h2>
          <p>Complimentary basic dental check up</p>
          <p>10–40% discount on dental procedures at partner clinics (Clove Dental)</p>
          <p>Complimentary eye check up</p>
        </div>

        {/* Fitness & Wellness */}
        <div className="basicplan-box">
          <h2>Fitness & Wellness</h2>
          <p>Mental wellness workshops & webinars</p>
          <p>Discounts upto 15% on Yoga consultation</p>
        </div>

        {/* Education Loan Benefits */}
        <div className="basicplan-box">
          <h2>Education Loan Benefits</h2>
          <p>Loan amount: ₹50,000 – ₹20 Lakhs</p>
          <p>Interest rate from 0%-8.5%.</p>
          <p>Covers:</p>
          <p>School fees (up to 12th Class)</p>
          <p>Undergraduate & Postgraduate programs (India & Abroad)</p>
          <p>Vocational, Technical Training, ITI, Diploma Courses</p>
          <p>Certification & Professional Development Courses</p>
          <p>Online education from recognized institutions</p>
        </div>

        {/* Other Key Benefits */}
        <div className="basicplan-box">
          <h2>Other Key Benefits</h2>
          <p>Ambulance services Pan India – 10% discount</p>
          <p>Discounts on surgeries & procedures through Pristyn Care</p>
          <p>Women's health – discounts on consultations, vaccinations, Pap smears</p>
          <p>Men's health – 1 free consult + discounts</p>
          <p>Fertility support – free consults + discounts</p>
        </div>

        {/* Reimbursement Note */}
        <div className="basicplan-box">
          <h2>Reimbursement Note</h2>
          <p>Services including doctor consultations, Radiology, Pathology and Medicines are available via reimbursement model.</p>
        </div>

        {/* Travel Benefits */}
        <div className="basicplan-box">
          <h2>Travel Benefits</h2>
          <p>Up to 25% discount on train tickets</p>
          <p>Up to 15% discount on bus tickets</p>
        </div>
      </div>
    </div>
  );
}

export default PremiumPlan;
