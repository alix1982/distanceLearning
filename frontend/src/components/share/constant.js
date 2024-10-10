export const formQuestionnaireData = [
    {
        id: 1, text: 'Фамилия', 
        name: 'firstName', type: 'text', placeholder: 'Иванов', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 2, text: 'Имя',
        name: 'lastName', type: 'text', placeholder: 'Иван', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 3, text: 'Отчество',
        name: 'patronymic', type: 'text', placeholder: 'Иванович', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 4, text: 'Полное наименование организации (места работы)',
        name: 'workName', type: 'text', placeholder: 'ООО Ромашка', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 5, text: 'Номер рабочего телефона/факса, e-mail',
        name: 'email', type: 'email', placeholder: 'pochta@pochta.ru', pattern: '', title: 'error'
    },
    {
        id: 6, text: 'Контактный телефон',
        name: 'phone', type: 'text', placeholder: '+7 999 111 22 33', pattern: '', title: 'error',
        maxLength: 18, minLength:11, required: true
    },
    {
        id: 7, text: 'Занимаемая должность (согласно штатному расписанию)',
        name: 'postWork', type: 'text', placeholder: 'Начальник', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 8, text: 'Должность, занимаемая по ГО (РСЧС)',
        name: 'postGoAndChs', type: 'text', placeholder: 'Начальник отдела ГО', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 9, text: 'Год предыдущего повышения квалификации по ГО (РСЧС)',
        name: 'yearPreviousQualification', type: 'number', placeholder: '2020', pattern: '', title: 'error',
        max: 2050, min:2000, required: true
    },
    {
        id: 10, text: 'Образование (высшее, н/высшее, среднее проф.) с указанием наименования образовательной организации',
        name: 'education', type: 'text', placeholder: 'высшее', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
    {
        id: 11, text: 'СНИЛС',
        name: 'snils', type: 'text', placeholder: '11122233300', pattern: '', title: 'error',
        maxLength: 11, minLength:11, required: true
    },
    {
        id: 12, text: 'Гражданство',
        name: 'citizenship', type: 'text', placeholder: 'Россия', pattern: '', title: 'error',
        maxLength: 30, minLength:2, required: true
    },
];

export const formAdminQuestionnaireData = [
    {
        id: 1, text: 'Фамилия', name: 'firstName', type: 'text', placeholder: 'Иванов',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 2, text: 'Имя', name: 'lastName', type: 'text', placeholder: 'Иван',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 3, text: 'Отчество', name: 'patronymic', type: 'text', placeholder: 'Иванович',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 4, text: 'Организация', name: 'workName', type: 'text', placeholder: 'ООО Ромашка',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 5, text: 'E-mail', name: 'email', type: 'email', placeholder: 'pochta@pochta.ru',
        pattern: '', title: 'error'
    },
    {
        id: 6, text: 'Телефон', name: 'phone', type: 'tel', placeholder: '+7 999 111 22 33',
        pattern: '', title: 'error', maxLength: 18, minLength:11, required: true
    },
    {
        id: 7, text: 'Должность', name: 'postWork', type: 'text', placeholder: 'Начальник',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 8, text: 'Должность по ГО', name: 'postGoAndChs', type: 'text', placeholder: 'Начальник отдела ГО',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 9, text: 'Год повышения', name: 'yearPreviousQualification', type: 'number', placeholder: '2020',
        pattern: '', title: 'error', max: 2050, min:2000, required: true
    },
    {
        id: 10, text: 'Образование', name: 'education', type: 'text', placeholder: 'высшее',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 11, text: 'СНИЛС', name: 'snils', type: 'text', placeholder: '11122233300',
        pattern: '', title: 'error', maxLength: 11, minLength:11, required: true
    },
    {
        id: 12, text: 'Гражданство', name: 'citizenship', type: 'text', placeholder: 'Россия',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    // {
    //     id: 13, text: 'Модерация', name: 'isModeration', type: 'checkbox', placeholder: '',
    //     pattern: 'true', title: 'error'
    // },
];

export const formAdminUserData = [
    { id: 1, text: 'Логин', name: 'name', type: 'text', placeholder: '', pattern: '', title: 'error', disabled: true },
    { id: 2, text: 'Пароль', name: 'password', type: 'text', placeholder: '', pattern: '', title: 'error', disabled: true },
    { id: 3, text: 'Снилс', name: 'snils', type: 'text', placeholder: '', pattern: '', title: 'error', disabled: true },
];

export const formAdminProgrammData = [
    {
        id: 1, text: 'Название', name: 'nameProgramm', type: 'text', placeholder: 'Программа',
        pattern: '', title: 'error', maxLength: 30, minLength:2, disabled: false, required: true
    },
    {
        id: 2, text: 'Количество блоков', name: 'countBlocks', type: 'number', placeholder: '0',
        pattern: '', title: 'error', min:1, max: 10, disabled: false, required: true
    },
    {
        id: 3, text: 'Количество тем в блоках', name: 'countThemes', type: 'text', placeholder: '2, 3, 1',
        pattern: '', title: 'error', maxLength: 30, minLength: 1, disabled: false, required: true
    },
];

export const formAdminGroupData = [
    {
        id: 1, text: 'Название', name: 'nameGroup', type: 'text', placeholder: 'Группа',
        pattern: '', title: 'error', maxLength: 30, minLength:2, required: true
    },
    {
        id: 2, text: 'Дата начала', name: 'dateStart', type: 'date', placeholder: 'ЧЧ.ММ.ГГГГ',
        pattern: '', title: 'error', min:1, max: 10, required: true
    },
    {
        id: 3, text: 'Дата окончания', name: 'dateEnd', type: 'date', placeholder: 'ЧЧ.ММ.ГГГГ',
        pattern: '', title: 'error', maxLength: 30, minLength: 1, required: true
    },
    // {
    //     id: 3, text: 'Назначены', name: 'assigned', type: 'checkbox', placeholder: '',
    //     pattern: '', title: 'error', maxLength: 30, minLength: 1, disabled: true, required: true
    // },
];

//первод даты из UNIX в человеческую
export const calcDate = (dateUnix) => {
    const month = (new Date(dateUnix).getMonth()) < 9 ? ('0' + (new Date(dateUnix).getMonth() + 1)) : (new Date(dateUnix).getMonth() + 1);
    const day = (new Date(dateUnix).getDate()) < 10 ? ('0' + (new Date(dateUnix).getDate())) : (new Date(dateUnix).getDate());
    return (day + '.' + month + '.' + new Date(dateUnix).getFullYear())
}

//первод даты из UNIX в человеческую
export const calcDateForm = (dateUnix) => {
    const month = (new Date(dateUnix).getMonth()) < 9 ? ('0' + (new Date(dateUnix).getMonth() + 1)) : (new Date(dateUnix).getMonth() + 1);
    const day = (new Date(dateUnix).getDate()) < 10 ? ('0' + (new Date(dateUnix).getDate())) : (new Date(dateUnix).getDate());

    return ( new Date(dateUnix).getFullYear() + '-'+ month + '-' + day )
}
// export default documentsList;
