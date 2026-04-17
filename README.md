# 🧾 Bill Generator (React)

A modern, responsive **Bill / Invoice Generator** built using React. This application allows users to quickly create professional invoices with customizable templates, dynamic calculations, and export-ready formatting — all within a clean UI.

---

## 🚀 Features

### 📌 Core Functionality
- Create invoices in real-time with instant preview  
- Add multiple items with quantity, price, and total calculation  
- Automatic **subtotal, tax, and grand total** computation  
- Dynamic invoice number generation  

### 💱 Currency Support
- Switch between:
  - INR (₹)
  - USD ($)

### 🧑‍💼 Customer & Shipping Details
- Capture:
  - Name
  - Phone number
  - Address  
- Option to **copy billing details into shipping details** (Same as Bill To)

### 🏢 Company Information
- Add your business details:
  - Company Name
  - Phone
  - Address  

### 🧾 Invoice Details
- Invoice number (editable or auto-generated)  
- Invoice date  
- Payment due date  

### 📦 Item Management
- Add/remove items dynamically  
- Each item includes:
  - Name  
  - Quantity  
  - Unit price  
  - Total price  

### 🧮 Tax Calculation
- Enter custom tax rate (%)  
- Automatic tax amount calculation  
- Real-time update of totals  

### 📝 Notes Section
- Add custom notes for the invoice (e.g., payment terms, thank you note)  

### 🎨 Template Gallery
- Multiple professional invoice templates  
- Live preview of selected template  
- Clean and minimal UI design  

### 🌙 UI/UX
- Dark theme interface  
- Responsive layout  
- Smooth user interaction and form handling  

### 📄 Export / Output (if implemented)
- Ready-to-print invoice format  
- (Optional) PDF generation support  

---

## 🛠️ Tech Stack

- **Frontend:** React.js  
- **Styling:** CSS / Tailwind / Styled Components (based on your setup)  
- **State Management:** React Hooks (useState, useEffect)  
- **UI Design:** Custom dark theme with modern layout  

---

## 📂 Project Structure

src/
│── components/
│ ├── InvoiceForm
│ ├── ItemList
│ ├── TemplateGallery
│ ├── Totals
│
│── pages/
│── utils/
│── App.js
│── index.js

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/bill-generator.git

# Navigate to project folder
cd bill-generator

# Install dependencies
npm install

# Start development server
npm start
