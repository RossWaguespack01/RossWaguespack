<script>
    document.addEventListener('DOMContentLoaded', function () {
      // Toggle nav menu (mobile)
      const menuToggle = document.getElementById('menu-toggle');
      const nav = document.getElementById('nav');

      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
      });

      // Ensure only one checkbox is checked per question
      window.onlyOne = function (clickedBox) {
        const checkboxes = document.getElementsByName(clickedBox.name);
        checkboxes.forEach((box) => {
          if (box !== clickedBox) box.checked = false;
        });
      };

      // Survey toggle
      const startSurveyBtn = document.getElementById('start-survey');
      const heroSection = document.getElementById('hero-section');
      const surveySection = document.getElementById('survey-section');

      if (startSurveyBtn && heroSection && surveySection) {
        startSurveyBtn.addEventListener('click', function (event) {
          event.preventDefault();
          console.log("Start Survey button clicked");
          heroSection.style.display = 'none';
          surveySection.style.display = 'block';
        });
      } else {
        console.error("Missing one or more elements for survey toggle.");
      }
    });
  </script>