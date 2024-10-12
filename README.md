# **Online Diary Platform: Cybersecurity Vulnerability and Defense Simulation**

## **Overview**

This project demonstrates the risks and defenses associated with cybersecurity on an online platform that stores sensitive personal information. Using a simulated online diary platform developed with **JavaScript** and **Django/Python**, this project showcases common vulnerabilities exploited in web applications, such as weak password management, lack of encryption, and social engineering tactics. In addition, it highlights best practices for improving security, emphasizing secure coding, encryption, and authentication techniques.

The project is educational in nature, providing both developers and users with practical insights into web security. It also includes real-world case studies and simulated attack scenarios to help users understand how cyber-attacks occur and how they can be mitigated.

---

## **Table of Contents**

1. [Project Structure](#project-structure)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Technology Stack](#technology-stack)
6. [Security Vulnerabilities Simulated](#security-vulnerabilities-simulated)
7. [How to Contribute](#how-to-contribute)

---

## **Project Structure**

```plaintext
/online_diary_project
├── /diary_app/                  # Django application directory
│   ├── models.py                # Data models for diary entries and user accounts
│   ├── views.py                 # Views handling logic for pages and functionalities
│   ├── urls.py                  # Routing for different app views
│   └── templates/               # HTML templates for web pages
│       ├── home.html
│       ├── login.html
│       └── entry.html
├── /static/                     # Static files (CSS, JS)
│   └── css/                     
│       └── styles.css
│   └── js/
│       └── scripts.js
├── manage.py                    # Django project management file
└── README.md                    # Project overview and documentation (this file)

```
---
## **Features**
1. Insecure Features for Demonstration
Weak password handling: Allows for short, non-complex passwords to demonstrate brute-force attacks.
Lack of encryption: Sensitive data (such as diary entries) stored without encryption, demonstrating risks of data breaches.
Unencrypted HTTP: Communication over HTTP rather than HTTPS to showcase potential for eavesdropping.
SQL injection vulnerability: Input fields are not sanitized, allowing for SQL injection attacks.
2. Secure Features
Strong password enforcement: Requires complex, strong passwords for user accounts.
Data encryption: Encryption of sensitive data, such as diary entries, both at rest and in transit.
Two-factor authentication (2FA): Adds a second layer of security for user login.
HTTPS enabled: Secure communication through SSL/TLS.
Sanitized inputs: Prevention of SQL injection by properly handling user inputs.
3. Social Engineering Scenarios
Phishing page: Demonstrates a common phishing attack by tricking users into entering sensitive information into a fake form.
Awareness module: Educates users on how to identify and avoid phishing and other social engineering attacks.
4. Case Studies
Analysis of 3-5 real-world cyber-attacks and how vulnerabilities were exploited in those cases.
---

## **Installation**
*Requirements*
- Python 3.9+
- Django 4.0+
- Node.js (for JavaScript runtime)
- pip (Python Installation manager)

1. clone the Git repo
```plaintext
git clone https://github.com/your-username/online-diary-platform.git
cd online-diary-platform
```
2. Create a virtual environment
```plaintext
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

```
3. Install the dependencies
```plaintext
pip install -r requirements.txt
```
4. Run Django migration
```plaintext
python manage.py migrate

```
5. Start the development server
```plaintext
python manage.py runserver

```
---
## **Usage**
1. Register for an account on the homepage.
2. Add diary entries, view them, and explore how security features (or lack thereof) affect the confidentiality of your information.
3. Simulate attacks like brute-force password guessing, SQL injection, or phishing, and observe how insecure features allow breaches.
4. Learn how the implementation of best security practices mitigates these attacks.
---
## **Technology Stack**
1. Backend: Django (Python)
2. Frontend: HTML5, CSS3, JavaScript
3. Database: SQLite (development)
4. Security Features: HTTPS, bcrypt for password hashing, SQL input sanitation, CSRF protection
---
## **Security Vulnerabilities Simulated**
- Brute-force password attacks: Weak password enforcement makes accounts vulnerable to password-guessing attacks.
- SQL injection: Poorly sanitized inputs allow attackers to access and modify data.
- Unencrypted data storage: Sensitive user data, like diary entries, is stored in plaintext, making it vulnerable to data breaches.
- Social engineering: Users can be tricked into submitting sensitive information through fake login forms (phishing).
---
## **How to Contribute**
1. Fork the repo
2. Create a new branch for your feature or bug fix.
3. Commit your changes and push them to your fork.
4. Submit a pull request describing your changes.
---
