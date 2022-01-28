const PREDICTIONS = "PREDICTIONS";




const defaultState = {
    predictions : [
        "Есть опасность что коллеги Катить на вас будут телеги. Лучше не дразните лихо И сидите тихо-тихо!",
        "Сегодня вы среди друзей, Кричите вновь: «налей-налей», Чтобы завтра не было вам стыдно, Сегодня надо быть солидным!",
        "Исполнение желаний всех Ждет вас и большой успех, Главное не прозевать И свое зубами рвать!",
        "Сегодня сильно ты не пей, А то начнешь во всех влюбляться Ведь на работе, на твоей Нельзя ни с кем совокупляться!",
        "Вам такое предсказанье Храните чаще вы молчанье! А не то ваши коллеги Вас зароют в белом снеге!",
        "Вам небеса пророчат дружно С коллегами вам спать не нужно, Рабочий с*кс закрыт для вас Дадут расчет вам в тот же час!",
        "Если ты в своем кармане ни копейки не нашел, Загляни в карман к соседу, — очевидно, деньги там.",
        "Если по полю пойдёшь — В поле денежку найдёшь; Когда денежку найдёшь — Всю истратишь на кутёж.",
        "Если станешь целоваться Каждый день по полчаса, Все мечты начнут сбываться. Жизнь наполнят чудеса!",
        "Улыбайся всегда, улыбайся везде, Улыбайся на суше и на воде! Отплатит тебе за улыбки судьба Парой морщин и кучей бабла!",
        "От вредной привычки  Избавишься ты непременно. Но вот незадача: вместо одной Две новых придут на замену.",
        " Все важные события в офисе произойдут с вашим участием.",
        "В конце месяца тем, кто хорошо отдохнул, положена премия.",
        "Развивайтесь в новом направлении.",
        "Планы обязательно сбудутся.",
        "А может пора и отдохнуть?",
        "Мечта всей жизни спешит навстречу.",
        "Для реализации всех проектов понадобится время и усилия, но результат превзойдет все ожидания.",
        "Вам непременно повезет!",
        "Вы выбрали правильный путь!",
        "Смело идите к мечте.",
        "Пришло время сделать шаг вперед!",
        "Не раздумывайте, с какой ноги шагнуть.",
        "Новая область знаний принесет новые возможности в карьере.",
        "Не слушайте глупых советов – вы все делаете правильно!",
        "Перемены на работе принесут доход. Пришло время проявить свои лидерские качества.",
      ]
};

export const predictionsReduser = (state = defaultState, action) => {
    switch(action.type) {
        case "PREDICTIONS":
            return {...state, predictions:[...state.predictions, ...action.payload] }
           
            default:
        return state
    }
}

export const predictionsAction = (payload) => ({type:PREDICTIONS, payload})
