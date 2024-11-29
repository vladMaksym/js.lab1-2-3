const exams = [
    { subject: "Програмування", date: "28.11.2024", room: "305" },
    { subject: "Математика", date: "29.11.2024", room: "101" },
    { subject: "Філософія", date: "30.11.2024", room: "" },
    { subject: "Фізика", date: "01.12.2024", room: "302" }
];

function calculateDaysDifference(dateText) {
    const currentDate = new Date();
    const parsedDate = new Date(dateText.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    currentDate.setHours(0, 0, 0, 0);
    parsedDate.setHours(0, 0, 0, 0);

    const timeDiff = Math.abs(currentDate.getTime() - parsedDate.getTime());
    const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysDiff;
}


function checkExams() {
    let resultHTML = "";

    exams.forEach(exam => {
        const daysDiff = calculateDaysDifference(exam.date);

        if (daysDiff === 0) {
            resultHTML += `<p>Сьогодні ${exam.room ? `іспит з предмету "${exam.subject}" Аудиторія ${exam.room}.` : `іспит з предмету "${exam.subject}". Невідоме місце проведення іспиту.`}</p>`;
        } else if (daysDiff === 1) {
            resultHTML += `<p>Сьогодні консультація по "${exam.subject}". ${exam.room ? `Аудиторія ${exam.room}` : 'Невідоме місце проведення консультації.'}</p>`;
        }
    });

    if (!resultHTML) {
        resultHTML = "<p>Немає подій на сьогодні чи завтра.</p>";
    }

    document.getElementById("result").innerHTML = resultHTML;
}