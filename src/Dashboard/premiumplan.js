import "../App.css";

function PremiumPlan() {

const handleBuyNow = async () => {
  try {
    const response = await fetch("https://api.partner-quess.aayurcare.com/payment/initiate", {
    // const response = await fetch("https://api.partner-quess.aayurcare.com/payment/initiate", {

      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({

        //from api we need to call firstname and gmail 
        // firstname: "Kirthana",             
        // email: "kirthana@gmail.com",  
        amount: "400",                    
        productinfo: "Basic Health Plan", 
      }),
    });
console.log("responses to display:", response);
    const data = await response.json();
    console.log("PayU Response:", data);

    // Auto-submit form to PayU
    const form = document.createElement("form");
    form.method = "POST";
    // form.action = data.payment_url; // returned from backend
 form.action = data.payuUrl;
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = data[key];
        form.appendChild(input);
      }
    }

    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error("Payment error:", error);
  }
};

  return (
    <div className="basicplan">
      <h1>Plan Benefits Overview</h1>

      <div className="basicplan-grid">
        {/* Doctor Consultation & Medical Services */}

          <div className="basicplan-box">
          <h2>Reimbursement</h2>
          <p>1.Doctor consultations</p>
          <p>2.Medical Prescription</p>
          <p>3.Radiology</p>
          <p>4.Pathology</p>
          <p>5.Ambulance Service</p>
        </div>
        <div className="basicplan-box">
          <h2>Doctor Consultation & Medical Services</h2>
          <p>1.Free monthly teleconsultation with a General Physician</p>
          <p>2.Free consultation with Nutritionists and Physiotherapists</p>
          <p>3.Five consultations with Mental Health Experts</p>
          <p>4.Second opinion for any planned hospitalization</p>
          <p>5.Yoga Consultation and Therapy discounts upto 15-30%</p>
        </div>

        {/* Mental wellness workshops */}
        <div className="basicplan-box">
          <h2>Mental wellness workshops</h2>
          <p>1.Access to self-help diagnosis and tools</p>
          <p>2.24/7 emergency helpline</p>
          <p>3.Disease risk predictions and mitigation tools</p>
        </div>

        {/* Medicines & Pharmacy */}
        <div className="basicplan-box">
          <h2>Medicines & Pharmacy</h2>
          <p>1.10% discount on medicines</p>
          <p>2.Discounts on Ayurveda consultations & medicines</p>
        </div>

        {/* Diagnostics & Lab Services */}
        <div className="basicplan-box">
          <h2>Diagnostics & Lab Services</h2>
          <p>1.Radiology & Pathology services included</p>
          <p>2.Up to 15% discount on lab tests with the customized plan</p>
          <p>3.Health Checkups – discounts via Nura Health (Bangalore, Mumbai, Hyderabad, Gurgaon)</p>
          <p>4.Gut health test discounts</p>
        </div>

        {/* Dental & Eye Care */}
        <div className="basicplan-box">
          <h2>Dental & Eye Care</h2>
          <p>1.Complimentary basic dental check up</p>
          <p>2.10–40% discount on dental procedures at partner clinics (Clove Dental)</p>
          <p>3.Complimentary eye check up</p>
        </div>

        {/* Fitness & Wellness */}
        <div className="basicplan-box">
          <h2>Fitness & Wellness</h2>
          <p>1.Mental wellness workshops & webinars</p>
          <p>2.Discounts upto 15% on Yoga consultation</p>
        </div>

        {/* Education Loan Benefits */}
        <div className="basicplan-box">
          <h2>Education Loan Benefits</h2>
          <p>1.Loan amount: ₹50,000 – ₹20 Lakhs</p>
          <p>2.Interest rate from 0%-8.5%.</p>
          <p>3.Covers:</p>
          <p>a.School fees (up to 12th Class)</p>
          <p>b.Undergraduate & Postgraduate programs (India & Abroad)</p>
          <p>c.Vocational, Technical Training, ITI, Diploma Courses</p>
          <p>d.Certification & Professional Development Courses</p>
          <p>e.Online education from recognized institutions</p>
        </div>

        {/* Other Key Benefits */}
        <div className="basicplan-box">
          <h2>Other Key Benefits</h2>
          <p>1.Ambulance services Pan India – 10% discount</p>
          <p>2.Discounts on surgeries & procedures through Pristyn Care</p>
          <p>3.Women's health – discounts on consultations, vaccinations, Pap smears</p>
          <p>4.Men's health – 1 free consult + discounts</p>
          <p>5.Fertility support – free consults + discounts</p>
        </div>

        {/* Reimbursement Note */}
        <div className="basicplan-box">
          <h2>Reimbursement Note</h2>
          <p>1.Services including doctor consultations, Radiology, Pathology and Medicines are available via reimbursement model.</p>
        </div>

        {/* Travel Benefits */}
        <div className="basicplan-box">
          <h2>Travel Benefits</h2>
          <p>1.Up to 25% discount on train tickets</p>
          <p>2.Up to 15% discount on bus tickets</p>
        </div>


      </div>
              <button className="buynow" onClick={handleBuyNow}>Buy Now</button>
    </div>

    
  );
}

export default PremiumPlan;
