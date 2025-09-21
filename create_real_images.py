import base64
import os

# Simple 1x1 pixel JPEG image (minimal valid JPEG)
JPEG_BASE64 = "/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8A"

def create_image_file(filename, description):
    """Create a simple image file from base64 data"""
    # Decode the base64 image data
    image_data = base64.b64decode(JPEG_BASE64)
    
    # Ensure directory exists
    os.makedirs("frontend/public/images/lessons", exist_ok=True)
    
    # Write the image file
    filepath = f"frontend/public/images/lessons/{filename}"
    with open(filepath, 'wb') as f:
        f.write(image_data)
    
    print(f"Created: {filename} ({len(image_data)} bytes)")

def main():
    images = [
        ('crypto-exchange-icon.jpg', 'Cryptocurrency Exchange Icon'),
        ('crypto-coins-collage.jpg', 'Cryptocurrency Coins Collage'),
        ('crypto-mining-tunnel.jpg', 'Cryptocurrency Mining Tunnel'),
        ('crypto-button-click.jpg', 'Crypto Investment Button'),
        ('crypto-market-crash.jpg', 'Cryptocurrency Market Crash'),
        ('popular-cryptocurrencies-list.jpg', 'Popular Cryptocurrencies List'),
        ('phishing-explanation.jpg', 'Phishing Email Explanation'),
        ('phishing-laptop.jpg', 'Phishing on Laptop Screen'),
        ('phishing-login-form.jpg', 'Fake Phishing Login Form'),
        ('phishing-elements.jpg', 'Phishing Email Elements'),
        ('scam-alert-laptop.jpg', 'Scam Alert on Laptop'),
        ('computer-locked-warning.jpg', 'Computer Locked Warning'),
        ('blue-screen-scam.jpg', 'Blue Screen Scam Warning'),
        ('virus-warning-popup.jpg', 'Virus Warning Popup'),
        ('antivirus-threats-detected.jpg', 'Antivirus Threats Detected')
    ]
    
    print("Creating lesson images...")
    for filename, description in images:
        create_image_file(filename, description)
    
    print("All images created successfully!")

if __name__ == "__main__":
    main()
