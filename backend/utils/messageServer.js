module.exports = {
  // mesErrDeleteMovie403: 'Удаление не своей карточки',

  // общие ошибки сервера
  mesErr500: 'На сервере произошла ошибка',
  mesErrRouterErrors404: 'Не верный путь',

  //валидация роута анкет
  mesErrCelebratePhone400: 'Телефон не корректен',
  mesErrNoEmailSending400: 'Нет почты для отправки анкеты',
  mesErrConflictQuestionnaire409: 'Анкета с таким снилсом уже существует',
  mesErrValidationQuestionnaire400: 'Ошибка валидации модели анкеты',

  // валидация роута анкет админа
  mesErrIdQuestionnaire400: 'Некорректный id анкеты',
  mesErrNoQuestionnaire404: 'Анкета не найдена',
  mesFixQuestionnaire: 'Анкета изменена',
  mesModerationQuestionnaireCompleted: 'Модерация анкеты пройдена',
  mesModerationQuestionnaireCancelled: 'Модерация анкеты отменена',

  //валидация роута авторизации
  mesErrLogin401: 'Пользователь с таким логином и паролем не найден',
  mesErrLoginSnils401: 'Неправильный снилс',
  mesLoginUser: 'Всё верно!',
  mesLoginAdmin: 'That right!',

  //валидация авторизации
  mesErrAuth401: 'Необходима авторизация',

  //валидация роута пользователей админа
  mesErrConflictUser409: 'Пользователь с таким снилсом уже существует',
  mesErrValidationUser400: 'Ошибка валидации модели пользователя',
  mesErrNoUser404: 'Пользователь не найден',
  mesErrIdUser400: 'Некорректный id пользователя',

  //отправка письма с вопросом
  mesQuestion: 'Письмо отправлено',

};
