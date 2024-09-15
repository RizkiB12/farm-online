Here’s a README for your project:

---

# Farms Livestock Application

This is a simple web-based application developed for **Bagus Farms** that allows users to input and display livestock data. The project is built using **HTML**, **CSS**, **JavaScript**, and **Bootstrap 5**, focusing on ease of use and responsive design.

## Features

- **Add Livestock Data**: Users can input the animal's name, price, and picture.
- **Responsive Design**: The application is fully responsive, ensuring it works well on devices of various screen sizes.
- **Live Display**: After submitting the data, the animal information is displayed dynamically without refreshing the page.
- **Validation**: Basic form validation is implemented to ensure that all fields are filled out correctly before submission.

## Project Structure

```
/
│-- index.html          # Main HTML file for the application
│-- css/
│   └── styles.css      # Custom CSS (optional if separate)
│-- js/
│   └── script.js       # JavaScript for dynamic DOM manipulation
└── assets/             # Folder for images or other assets (optional)
```

## How It Works

1. **Input Form**: Users input the animal's name, price, and image URL (e.g., from Unsplash) via a form.
2. **Form Validation**: Before submission, the app validates that all fields are filled, and the price is a numeric value.
3. **Live Rendering**: Once validated, the submitted animal data is displayed dynamically on the same page using JavaScript DOM manipulation.
4. **Reset Form**: After submission, the form fields are reset for new inputs.

## Technologies Used

- **HTML5**: Structure and layout of the application.
- **CSS3**: Custom styles for better user experience, using Google Fonts and custom buttons.
- **Bootstrap 5**: For responsive design and pre-built components.
- **JavaScript**: For DOM manipulation, validation, and dynamic content rendering.

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/bagus-farms.git
   ```
2. Navigate to the project folder:
   ```bash
   cd bagus-farms
   ```
3. Open the `index.html` file in your preferred browser:
   ```bash
   open index.html
   ```

## Future Enhancements

- Add a database to store livestock data.
- Implement search functionality to find animals easily.
- Improve the UI/UX with more interactive features, such as animal categories.

## Credits

- **Bootstrap**: [Bootstrap 5](https://getbootstrap.com/)
- **Unsplash**: [Unsplash](https://unsplash.com/) for livestock images.

---

Feel free to adjust this README to suit your project’s specific requirements!
