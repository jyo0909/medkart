function sendOTP() {
  const phone = document.getElementById('phone').value;
  if (phone.length === 10 && /^\d{10}$/.test(phone)) {
    alert("OTP sent to +91 " + phone);
    document.getElementById('otp-section').style.display = 'block';
  } else {
    alert("Please enter a valid 10-digit mobile number.");
  }
}

function verifyOTP() {
  const otp = document.getElementById('otp').value;
  if (otp === "123456") {
    alert("Login successful!");
    // redirect or show dashboard here
  } else {
    alert("Incorrect OTP");
  }
}
