$(document).ready(function () {
    // Заполняем поле "Отель" при открытии модального окна
    $(".open-modal").on("click", function () {
        const hotelName = $(this).data("hotel");
        $("#hotelName").val(hotelName);
    });

    // Обрабатываем форму
    $("#bookingForm").on("submit", function (event) {
        event.preventDefault();

        // Получаем данные с формы
        const hotelName = $("#hotelName").val();
        const checkInDate = $("#checkInDate").val();
        const nightsCount = parseInt($("#nightsCount").val());
        const guestsCount = parseInt($("#guestsCount").val());

        // Проверяем заполненность полей
        if (!checkInDate || nightsCount <= 0 || guestsCount <= 0) {
            alert("Пожалуйста, заполните все поля корректно!");
            return;
        }

        // Расчет стоимости
        const basePricePerNight = 5000; // Базовая стоимость за ночь
        const totalPrice = basePricePerNight * nightsCount * guestsCount;

        // Выводим результат
        alert(
            `Вы забронировали "${hotelName}" с заездом ${checkInDate} на ${nightsCount} ночей для ${guestsCount} гостей.\nОбщая стоимость: ${totalPrice} рублей.`
        );

        // Закрываем модальное окно
        $("#bookingModal").modal("hide");
    });
});
