let year = prompt("Введіть ваш рік народження:");
let city = prompt("В якому місті ви живете?");
let sport = prompt("Який ваш улюблений вид спорту?");


if (year && city && sport) {
    const currentYear = 2025;
    const age = currentYear - year;

    let capital;

    switch (city) {
        case 'Київ':
            capital = "Ти живеш у столиці України.";
            break;
        case 'Вашингтон':
            capital = "Ти живеш у столиці США.";
            break;
        case 'Лондон':
            capital = "Ти живеш у столиці Великобританії.";
            break;
        default:
            capital = `Ти живеш у місті ${city}.`;
    }

    let sportFav = `Твій улюблений вид спорту: ${sport}.`;

    alert(`Твій вік: ${age} років. ${capital} ${sportFav}`);

} else {
    alert("Ви ввели не всі дані");
}