function calculatePayment() {
    // Get input values
    const debtAmount = parseFloat(document.getElementById('debtAmount').value);
    const annualAPR = parseFloat(document.getElementById('annualAPR').value) / 100;
    const loanTerm = parseInt(document.getElementById('loanTerm').value);

    if (isNaN(debtAmount) || isNaN(annualAPR) || isNaN(loanTerm) || loanTerm <= 0) {
        alert('Please enter valid numbers.');
        return;
    }

    // Monthly interest rate
    const monthlyInterestRate = annualAPR / 12;

    // Total number of payments
    const numberOfPayments = loanTerm * 12;

    // Calculate the monthly payment using the formula for an installment loan
    const monthlyPayment = debtAmount * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    // Display the monthly payment result
    document.getElementById('paymentResult').textContent = `$${monthlyPayment.toFixed(2)}`;
}

