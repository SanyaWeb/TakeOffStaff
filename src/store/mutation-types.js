/**tabItems.js*/
/** [SET_ACTIVE](state, item)
 *  устанавливает `active: true` у данного элемента, `active: false` у отстальных
 */
export const SET_ACTIVE = 'SET_ACTIVE';

/////////////////////////////////////////////////////////

/**contactList.js*/
/** [SET_CONTACTS](state, contacts)
 *  Обновляет state.items пришедшими в запросе контактами
 */
export const SET_CONTACTS = 'SET_CONTACTS';

/**contactList.js*/
/** [EMPTY_INSERT_FORM](state)
 *  Сбрасывает значения полей формы
 */
export const EMPTY_INSERT_FORM = 'EMPTY_INSERT_FORM';

/**contactList.js*/
/** [SHOW_SUCCESS_INSERT](state)
 *  Сообщение об успешном добавлении записи
 */
export const SHOW_SUCCESS_INSERT = 'SHOW_SUCCESS_INSERT';

/**contactList.js*/
/** [SHOW_ERROR_INSERT](state, text)
 *  Сообщение об ошибке добавления записи
 */
export const SHOW_ERROR_INSERT = 'SHOW_ERROR_INSERT';

/**contactList.js*/
/** [HIDE_INSERT_ALERT](state)
 *  Скрытие сообщения о добавления записи
 */
export const HIDE_INSERT_ALERT = 'HIDE_INSERT_ALERT';

/////////////////////////////////////////////////////

/**login.js*/
/** [SHOW_ERROR_AUTH](state, text)
 *  Вывод сообщения об ошибке авторизации
 */
export const SHOW_ERROR_AUTH = 'SHOW_ERROR_AUTH';

/**login.js*/
/** [HIDE_AUTH_ALERT](state)
 *  Скрытие сообщения об ошибке авторизации
 */
export const HIDE_AUTH_ALERT = 'HIDE_AUTH_ALERT';
