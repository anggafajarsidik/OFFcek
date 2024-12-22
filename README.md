
## **Installation**

### **Prerequisites:**

Ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (Node package manager)

### **Step-by-Step Installation:**

1. **Clone the repository:**

   First, clone the repository to your local machine using Git. In your terminal, run the following command:

   ```bash
   git clone https://github.com/anggafajarsidik/OFFcek.git
   cd OFFcek
   ```

2. **Install dependencies:**

   The script uses the `axios` library for making HTTP requests. Install the dependencies by running:

   ```bash
   npm install axios
   ```

---

## **Usage**

1. **Run the Script:**

   After installing the dependencies, you can run the script using the following command:

   ```bash
   node cekelignodepay.js
   ```

2. **Enter your API token:**
3. 
   When prompted, enter the **API token** you have been provided. The API token is required to fetch the eligibility data.

   ```plaintext
   🔐 Enter your API token: your_api_token_here
   ```
  📍How To Get Tokens?

1. Open Nodepay Dashboard
2. Open DevTools (Inspect Element)
3. Go to Application > Local Storage > https://app.nodepay.ai
4. Copy Value at token's Key (eyxxx)
