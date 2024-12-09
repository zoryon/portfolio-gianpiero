export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPhoneNumber(phoneNumber: string): boolean {
    const phoneRegex = /^[+]?[\d\s\-()]{7,15}$/; // Permette numeri con prefisso internazionale
    return phoneRegex.test(phoneNumber);
}