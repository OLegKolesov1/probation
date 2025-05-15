// Получаем доступ к форме
const form = document.getElementById('myForm');
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы

    const nameValue = document.getElementById("nameField").value.trim();
    const emailValue = document.getElementById("emailField").value.trim();
    const telephoneValue = document.getElementById("telephoneField").value.trim();

    if (!nameValue || !emailValue || !telephoneValue) {
      alert("Заполните все обязательные поля!");
      return false;
    }

    console.log(`Имя: ${nameValue}, Email: ${emailValue}, Телефон: ${telephoneValue}`);

  
    document.getElementById('messageBox').style.display = 'block';
  });

  const allowedHours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]; 

  flatpickr("#datetimePicker", {
    enableTime: true,
    allowInput: true,
    locale: "ru",
    time_24hr: true,
    dateFormat: "Y-m-d H:i",
    minuteIncrement: 30,
    enable: [
      function(date) {
        return (date.getDay() !== 0 && date.getDay() !== 6); // Исключаем субботу и воскресенье
      },
    ],
    filterHours: function(hour) {
      return allowedHours.includes(hour); // Проверяем принадлежность к списку разрешённых часов
    },
  });