import { apiRequest } from './api';

// export const getMyProfileDoctor = async () => {
//     return await apiRequest.get(`/user/me/doctor`);
// };

// // Получение всех специализаций
// export const getSpecializations = async () => {
//     return await apiRequest.get(`/doctors/specializations`);
// };

// отправка анкеты, не зарегестрированный пользователь
export const postQuestionnaire = async (data) => {
    const result = await apiRequest.post(`/questionnaire`, {
        emailRequst: data.emailRequst,
        firstName: data.firstName,
        lastName: data.lastName,
        patronymic: data.patronymic,
        workName: data.workName,
        email: data.email,
        phone: data.phone,
        postWork: data.postWork,
        postGoAndChs: data.postGoAndChs,
        yearPreviousQualification: data.yearPreviousQualification,
        education: data.education,
        snils: data.snils,
        citizenship: data.citizenship,
    });
    return result.data;
};

// отправка анкеты, не зарегестрированный пользователь
export const postQuestion = async (data) => {
    const result = await apiRequest.post(`/question`, {
        emailRequst: data.emailRequst,
        name: data.nameInput,
        email: data.email,
        phone: data.phone,
        question: data.text,
    });
    return result.data;
};

// авторизация
export const login = async (data) => {
    let dataSending = {};
    if (data.snils === '') {
        dataSending = {name: data.name, password: data.password}
    } else {
        dataSending = {name: data.name, password: data.password, snils: data.snils}
    };
    const result = await apiRequest.post(`/signin`, dataSending);
    return result;
};

// создание анкеты пользователя админка
export const postQuestionnaireAdmin = async (data) => {
    const result = await apiRequest.post(`/questionnaire/admin`, {
        firstName: data.firstName,
        lastName: data.lastName,
        patronymic: data.patronymic,
        workName: data.workName,
        email: data.email,
        phone: data.phone,
        postWork: data.postWork,
        postGoAndChs: data.postGoAndChs,
        yearPreviousQualification: data.yearPreviousQualification,
        education: data.education,
        snils: data.snils,
        citizenship: data.citizenship,
    });
    return result.data;
};


// получение анкет пользователей
export const getQuestionnaire = async () => {
    const result = await apiRequest.get(`/questionnaire/admin`);
    return result;
};

// // создание анкеты пользователя
// export const postQuestionnaire = async (id) => {
//     const result = await apiRequest.delete(`/questionnaire/admin/${id}`);
//     return result;
// };

// модерирование анкеты
export const patchQuestionnaireAdminModeration = async (data) => {
    const result = await apiRequest.patch(`/questionnaire/admin/moderation/${data.id}`, {
        isModeration: data.isModeration,
    });
    return result.data;
};

// изменение анкеты админ
export const patchQuestionnaireAdmin = async (data) => {
    const result = await apiRequest.patch(`/questionnaire/admin/${data.id}`, {
        firstName: data.firstName,
        lastName: data.lastName,
        patronymic: data.patronymic,
        workName: data.workName,
        email: data.email,
        phone: data.phone,
        postWork: data.postWork,
        postGoAndChs: data.postGoAndChs,
        yearPreviousQualification: data.yearPreviousQualification,
        education: data.education,
        snils: data.snils,
        citizenship: data.citizenship,
    });
    return result.data;
};

// удаление анкеты пользователя
export const deleteQuestionnaire = async (id) => {
    const result = await apiRequest.delete(`/questionnaire/admin/${id}`);
    // console.log(result);
    return result.data;
};

// создание пользователя
export const postUserAdmin = async (data) => {
    console.log(data)
    const result = await apiRequest.post(`/user/admin`, { snils: data });
    return result;
};

// получение списка пользователей
export const getUserAdmin = async () => {
    const result = await apiRequest.get(`/user/admin`);
    return result;
};

// получение данных пользователя
export const getUserData = async () => {
    const result = await apiRequest.get(`/user/meData`);
    return result;
};

// удаление пользователя
export const deleteUserAdmin = async (id) => {
    const result = await apiRequest.delete(`/user/admin/${id}`);
    return result;
};

// изменение программ пользователя
export const patchUserAdminProgramm = async (data) => {
    const result = await apiRequest.patch(`/user/admin/${data.id}`, data.programm);
    return result;
};

// изменение программ пользователя
export const patchUserProgramm = async (data) => {
    const result = await apiRequest.patch(`/user/updateProgramm/${data.id}`, {programm:data.programm});
    return result;
};
// export const getConsultationsByID = async (id) => {
//     const result = await apiRequest.get(`/consultations/doctor/patient_consultations/${id}`);
//     return result;
// };